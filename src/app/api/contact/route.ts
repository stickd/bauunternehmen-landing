import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { name, email, message } = result.data;

    await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
Name: ${name}
E-Mail: ${email}

Nachricht:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Email could not be sent" },
      { status: 500 },
    );
  }
}
