const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export type TurnstileVerifyResult = {
  ok: boolean;
  error: string;
};

function getTurnstileSecret() {
  return (
    process.env.TURNSTILE_SECRET_KEY?.trim() ||
    process.env.TURNSTILE_SECRET?.trim() ||
    ""
  );
}

function messageForErrorCodes(codes: string[] | undefined) {
  if (!codes?.length) {
    return "Captcha verification failed. Please try again.";
  }

  if (codes.includes("missing-input-secret") || codes.includes("invalid-input-secret")) {
    return "Captcha is not configured correctly on the server. Add TURNSTILE_SECRET_KEY in Vercel Production and redeploy.";
  }

  if (codes.includes("timeout-or-duplicate") || codes.includes("invalid-input-response")) {
    return "Captcha expired. Please complete it again and resubmit.";
  }

  return "Captcha verification failed. Please try again.";
}

export async function verifyTurnstileToken(token: string | undefined): Promise<TurnstileVerifyResult> {
  const secret = getTurnstileSecret();

  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not set.");
    return {
      ok: false,
      error:
        "Captcha is not configured on the server. Add TURNSTILE_SECRET_KEY in Vercel Production and redeploy.",
    };
  }

  if (!token?.trim()) {
    return {
      ok: false,
      error: "Please complete the captcha before sending your request.",
    };
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token.trim(),
      }),
    });

    const result = (await response.json()) as TurnstileVerifyResponse;

    if (!result.success) {
      console.error("Turnstile verification failed:", result["error-codes"]);
      return {
        ok: false,
        error: messageForErrorCodes(result["error-codes"]),
      };
    }

    return { ok: true, error: "" };
  } catch (error) {
    console.error("Turnstile verify request failed:", error);
    return {
      ok: false,
      error: "Captcha verification failed. Please try again.",
    };
  }
}
