import { NextResponse } from "next/server";
import { buildQuoteSmsMessage, sendQuoteSms } from "@/lib/twilio-sms";
import { getRequestIp, verifyTurnstileToken } from "@/lib/turnstile";

async function parseQuoteRequest(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    return {
      name: body.name as string | undefined,
      phone: body.phone as string | undefined,
      email: body.email as string | undefined,
      serviceType: body.serviceType as string | undefined,
      details: body.details as string | undefined,
      turnstileToken: (body.turnstileToken || body["cf-turnstile-response"]) as string | undefined,
    };
  }

  const formData = await request.formData();
  return {
    name: formData.get("name")?.toString(),
    phone: formData.get("phone")?.toString(),
    email: formData.get("email")?.toString(),
    serviceType: formData.get("serviceType")?.toString(),
    details: formData.get("details")?.toString(),
    turnstileToken:
      formData.get("turnstileToken")?.toString() ||
      formData.get("cf-turnstile-response")?.toString(),
  };
}

export async function POST(request: Request) {
  try {
    const { name, phone, email, serviceType, details, turnstileToken } =
      await parseQuoteRequest(request);

    const captchaOk = await verifyTurnstileToken(turnstileToken, getRequestIp(request));
    if (!captchaOk) {
      return NextResponse.json(
        { error: "Captcha verification failed. Please try again." },
        { status: 400 }
      );
    }

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required fields." },
        { status: 400 }
      );
    }

    const smsMessage = buildQuoteSmsMessage({
      name,
      phone,
      email,
      serviceType,
      details,
    });

    const smsResult = await sendQuoteSms(smsMessage);

    return NextResponse.json(
      {
        message: smsResult.ok
          ? "Estimate request received! I've been notified via text and will contact you shortly."
          : "Estimate request received! We will contact you shortly.",
        smsDispatched: smsResult.ok,
        ...(process.env.NODE_ENV === "development" && !smsResult.ok && smsResult.detail
          ? { smsError: smsResult.detail }
          : {}),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please call us directly at 715-299-0663." },
      { status: 500 }
    );
  }
}
