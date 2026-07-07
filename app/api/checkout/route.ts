import { NextResponse } from "next/server";

const LARAVEL_BACKEND_URL = process.env.LARAVEL_BACKEND_URL || "http://127.0.0.1:8000";

export async function POST(request: Request) {
  const data = await request.json();

  let response;
  try {
    response = await fetch(`${LARAVEL_BACKEND_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Unable to reach Laravel backend. Please verify the backend is running on localhost:8000.",
      },
      { status: 502 }
    );
  }

  const responseText = await response.text();

console.log("Laravel Status:", response.status);
console.log("Laravel Response:", responseText);
  let payload;
  try {
    payload = JSON.parse(responseText);
  } catch {
    payload = {
      status: response.ok ? "success" : "error",
      message: responseText || "Checkout backend returned an unexpected response.",
    };
  }

  return NextResponse.json(payload, { status: response.status });
}
