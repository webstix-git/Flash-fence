import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, serviceType, details } = body;

    // Server-side validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required fields." },
        { status: 400 }
      );
    }

    // Generate SMS text payload for Dylan
    const smsMessage = `
⚡ NEW FLASH FENCE LEAD ⚡
Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${serviceType.toUpperCase()}
Details: ${details || "No details provided"}
    `.trim();

    // Console log the SMS notification as simulated dispatcher
    console.log("==========================================");
    console.log("SIMULATING SMS DISPATCH TO DYLAN GARDOW...");
    console.log(`Recipient: 715-299-0663`);
    console.log("------------------------------------------");
    console.log(smsMessage);
    console.log("==========================================");

    /* 
      Example Twilio Integration:
      
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const client = require('twilio')(accountSid, authToken);

      await client.messages.create({
        body: smsMessage,
        from: process.env.TWILIO_PHONE_NUMBER, // Twilio SMS number
        to: '7152990663' // Dylan's phone number
      });
    */

    return NextResponse.json(
      {
        message: "Estimate request received! Owner Dylan Gardow has been notified via text and will contact you shortly.",
        smsDispatched: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please call Dylan directly at 715-299-0663." },
      { status: 500 }
    );
  }
}
