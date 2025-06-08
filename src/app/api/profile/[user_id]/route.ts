import { NextRequest, NextResponse } from "next/server";
import type { RouteHandlerContext } from "next/dist/server/web/types";
import { BASE_URL } from "@/lib/constants";

interface Params {
context: RouteHandlerContext<{
    user_id: string;
  };
}

// GET user profile
export async function GET(req: NextRequest, Params
                         ) {
  const { user_id } = params;

  try {
    const response = await fetch(`${BASE_URL}/Profile/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

// PATCH user profile
export async function PATCH(req: NextRequest, { params }: Params) {
  const { user_id } = params;

  try {
    const body = await req.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { message: "Request body cannot be empty" },
        { status: 400 }
      );
    }

    const response = await fetch(`${BASE_URL}/Profile/${user_id}`, {
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
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
