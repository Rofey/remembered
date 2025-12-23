import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { lovedOnes } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({ lovedOnes });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const newLovedOne = {
    id: randomUUID(),
    name: payload?.name ?? "New loved one",
    phone: payload?.phone ?? "Unknown",
    timezone: payload?.timezone ?? "America/Los_Angeles",
    nextCall: payload?.nextCall ?? "Thursday · 6:00 PM",
    lastStoryAt: "—"
  };

  return NextResponse.json({
    lovedOne: newLovedOne,
    message:
      "Mock add loved one. TODO: Persist to database and trigger Twilio scheduling."
  });
}

