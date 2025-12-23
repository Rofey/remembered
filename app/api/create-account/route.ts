import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const email = payload?.email ?? "guest@example.com";

  return NextResponse.json({
    accountId: randomUUID(),
    email,
    message: "Mock account created. TODO: Replace with real onboarding + email verification."
  });
}

