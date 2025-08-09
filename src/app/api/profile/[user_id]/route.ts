import { NextResponse, NextRequest } from "next/server";
import { BASE_URL } from "@/lib/constants";

// This file handles requests for a single user profile using a dynamic ID.
// The file should be located at: app/api/profile/[user_id]/route.ts

export async function GET(
  req: NextRequest,
  { params }: { params: { user_id: string } }
) {
  // Extract the dynamic 'user_id' parameter from the URL.
  const { user_id } = params;

  if (!user_id) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  try {
    // Construct the URL for the external API to fetch the user profile.
    const response = await fetch(`${BASE_URL}/profiles/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Pass the Authorization header from the incoming request.
        Authorization: req.headers.get("authorization") || "",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || "User not found" },
        { status: response.status }
      );
    }

    const userData = await response.json();
    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  // Changed 'id' to 'user_id' to match the file path '[user_id]'.
  { params }: { params: { user_id: string } }
) {
  const { user_id } = params;

  if (!user_id) {
    return NextResponse.json(
      { message: "User ID is required for updating" },
      { status: 400 }
    );
  }

  try {
    const body = await req.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { message: "Request body cannot be empty" },
        { status: 400 }
      );
    }

    const response = await fetch(`${BASE_URL}/profiles/${user_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.get("authorization") || "",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || "Failed to update user" },
        { status: response.status }
      );
    }

    const updatedUserData = await response.json();
    return NextResponse.json(updatedUserData, { status: 200 });
  } catch (error) {
    console.error("Patch error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
