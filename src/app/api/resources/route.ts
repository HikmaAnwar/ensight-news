// src/app/api/resources/route.ts
import { NextResponse, NextRequest } from "next/server";
import { BASE_URL } from "@/lib/constants";

export async function GET(request: NextRequest) {
  try {
    console.log("API route called: GET /api/resources");
    console.log("BASE_URL:", BASE_URL);
    console.log("Authorization header:", request.headers.get("Authorization"));
    const response = await fetch(`${BASE_URL}/resources`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization") || "",
      },
    });
    console.log(
      "Backend response status:",
      response.status,
      response.statusText
    );
    if (!response.ok) {
      const error = await response.json();
      console.error("Backend error response:", error);
      return NextResponse.json(
        { message: error.message || "Failed to fetch resources" },
        { status: response.status }
      );
    }
    const data = await response.json();
    console.log("Backend response data:", data);
    return NextResponse.json(data, { status: 200 });
    // eslint-disable-next-line
  } catch (error: any) {
    console.error("Fetch error in API route:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}
