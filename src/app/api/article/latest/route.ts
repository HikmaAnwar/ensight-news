import { NextResponse, NextRequest } from "next/server";
import { BASE_URL } from "@/lib/constants";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${BASE_URL}/articles/latest`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization") || "",
      },
    });

    if (!response.ok) {
      const errorData = await response.json(); // Use a different variable name to avoid confusion
      console.error(
        `External API Error - Status: ${response.status}, Message: ${
          errorData.message || "No message provided from external API"
        }`
      );
      return NextResponse.json(
        {
          message:
            errorData.message || "Failed to fetch articles from external API",
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
    //eslint-disable-next-line
  } catch (error: any) {
    console.error("Next.js API Route Fetch Error:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error in Next.js API route",
        error: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}
