import { NextResponse } from "next/server";
import { schedules } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({ schedules });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  return NextResponse.json({
    schedule: {
      day: payload?.day ?? "Thursday",
      time: payload?.time ?? "6:00 PM",
      timezone: payload?.timezone ?? "America/Los_Angeles"
    },
    message: "Mock schedule saved. TODO: Connect to scheduler + telephony service."
  });
}

