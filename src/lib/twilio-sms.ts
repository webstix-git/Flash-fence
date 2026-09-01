import twilio from "twilio";
import type Twilio from "twilio";

type QuoteLead = {
  name: string;
  phone: string;
  email?: string;
  serviceType?: string;
  details?: string;
};

function normalizePhone(value: string | undefined): string {
  return (value || "").replace(/\s/g, "").trim();
}

/** Normalize to E.164. Supports US (+1) and international numbers already prefixed with +. */
function formatPhoneToE164(phone: string): string {
  const normalized = normalizePhone(phone);
  if (!normalized) {
    throw new Error("Phone number is required.");
  }

  if (normalized.startsWith("+")) {
    return normalized;
  }

  const digits = normalized.replace(/\D/g, "");

  // US/Canada: 10 digits or leading 1
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  // India: 10-digit mobile without country code
  if (digits.length === 10 && /^[6-9]/.test(digits)) {
    return `+91${digits}`;
  }

  throw new Error(`Invalid phone number format: ${phone}`);
}

export function buildQuoteSmsMessage(lead: QuoteLead): string {
  return `
⚡ NEW FLASH FENCE LEAD ⚡
Name: ${lead.name}
Phone: ${lead.phone}
Email: ${lead.email || "Not provided"}
Service: ${(lead.serviceType || "general").toUpperCase()}
Details: ${lead.details || "No details provided"}
  `.trim();
}

function createTwilioClient(): Twilio.Twilio | null {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const apiKeySid = process.env.TWILIO_API_KEY_SID;
  const apiKeySecret = process.env.TWILIO_API_KEY_SECRET;

  if (!accountSid) {
    return null;
  }

  // Auth Token matches what the Twilio Console uses (preferred for server-side SMS)
  if (authToken) {
    return twilio(accountSid, authToken);
  }

  if (apiKeySid?.startsWith("SK") && apiKeySecret) {
    return twilio(apiKeySid, apiKeySecret, { accountSid });
  }

  return null;
}

/** Trial accounts must use Twilio template IDs instead of custom message text. */
const TRIAL_SMS_TEMPLATES = [
  "sms_internal_alerts",
  "sms_account_alerts",
  "sms_customer_support",
  "sms_appointment_reminders",
] as const;

function resolveSmsBody(message: string): string {
  const trialMode = process.env.TWILIO_TRIAL_MODE === "true";

  if (!trialMode) {
    return message;
  }

  const template = process.env.TWILIO_SMS_TEMPLATE?.trim();
  const chosen =
    template && TRIAL_SMS_TEMPLATES.includes(template as (typeof TRIAL_SMS_TEMPLATES)[number])
      ? template
      : "sms_appointment_reminders";

  console.log(`Twilio trial SMS (${chosen}). Upgrade account for custom lead text.`);
  console.log(message);
  return chosen;
}

function mapTwilioError(error: unknown): string {
  if (typeof error !== "object" || error === null) {
    return "Unknown Twilio error";
  }

  const twilioError = error as { code?: number; message?: string };
  const code = twilioError.code;
  const message = twilioError.message || "Unknown Twilio error";

  switch (code) {
    case 572006:
      return "Trial account: custom SMS text is not allowed. Set TWILIO_TRIAL_MODE=true in .env.local.";
    case 70051:
    case 20003:
      return "Twilio auth failed. Use Account SID + Auth Token from Console → Workbench → Overview, or create a Standard (not Restricted) API key.";
    case 21408:
      return "Trial account cannot send SMS to this country. US trials only support verified US numbers (+1), not +91 India.";
    case 21610:
      return "This phone number is not verified. Add it under Twilio Console → Verified Caller IDs.";
    case 21211:
    case 21212:
      return "Invalid phone number format. Use E.164 format (e.g. +17152990663 or +918807470614).";
    case 21606:
      return "TWILIO_PHONE_NUMBER must be a valid Twilio SMS-capable number on your account.";
    case 572003:
    case 21607:
      return "Wrong TWILIO_PHONE_NUMBER. On trial, use the From number from your successful Twilio test (check Messaging → Logs).";
    default:
      return message;
  }
}

export type SmsSendResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "send_failed"; detail?: string };

export async function sendQuoteSms(message: string): Promise<SmsSendResult> {
  const fromNumber = normalizePhone(process.env.TWILIO_PHONE_NUMBER);
  const toNumber = normalizePhone(process.env.TWILIO_NOTIFY_PHONE_NUMBER);
  const client = createTwilioClient();

  if (!client || !fromNumber || !toNumber) {
    console.log("==========================================");
    console.log("TWILIO NOT CONFIGURED — SIMULATING SMS");
    console.log(`Recipient: ${toNumber || "715-299-0663"}`);
    console.log("------------------------------------------");
    console.log(message);
    console.log("==========================================");
    return { ok: false, reason: "not_configured" };
  }

  try {
    const from = formatPhoneToE164(fromNumber);
    const to = formatPhoneToE164(toNumber);

    const result = await client.messages.create({
      body: resolveSmsBody(message),
      from,
      to,
    });

    console.log(`Twilio SMS sent: ${result.sid} → ${to}`);
    return { ok: true };
  } catch (error) {
    const detail = mapTwilioError(error);
    console.error("Twilio SMS failed:", detail, error);
    return { ok: false, reason: "send_failed", detail };
  }
}
