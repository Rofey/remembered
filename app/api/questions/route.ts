import { NextResponse } from "next/server";
import { questions } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({ questions });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const question = payload?.text ?? "What memory do you want to share this week?";

  return NextResponse.json({
    question,
    message: "Mock question saved. TODO: Persist and attach to next scheduled call."
  });
}

