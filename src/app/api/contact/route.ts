import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  const body = await req.json() as unknown;
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten() },
      { status: 400 }
    );
  }

  // TODO: integrate with Resend or SendGrid for production email delivery
  console.log("Contact form submission:", result.data);

  return NextResponse.json({ success: true });
}
