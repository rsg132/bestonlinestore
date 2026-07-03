import { NextResponse } from "next/server";

const LARAVEL_BACKEND_URL = process.env.LARAVEL_BACKEND_URL || "http://127.0.0.1:8000";

export async function POST(request: Request) {
  const data = await request.json();

  const response = await fetch(`${LARAVEL_BACKEND_URL}/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const payload = await response.text();
  const contentType = response.headers.get("content-type") ?? "application/json";

  return new NextResponse(payload, {
    status: response.status,
    headers: {
      "Content-Type": contentType,
    },
  });
}
