import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const birthdaySchema = z.object({
  parentName: z.string().min(2),
  childName: z.string().min(2),
  childAge: z.number().int().min(1).max(18),
  email: z.string().email(),
  phone: z.string().min(8),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
  guestCount: z.number().int().min(8).max(200),
  packageId: z.enum(["mini", "latin", "premium"]),
  specialRequests: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json() as unknown;
  const result = birthdaySchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten() },
      { status: 400 }
    );
  }

  // TODO: integrate with Resend or WhatsApp Business API for production
  console.log("Birthday inquiry submission:", result.data);

  return NextResponse.json({ success: true });
}
