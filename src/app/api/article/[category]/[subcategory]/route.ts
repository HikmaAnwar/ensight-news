import { NextRequest, NextResponse } from "next/server";
import type { RouteHandlerContext } from "next/dist/server/web/types"; // <- Fix here
import { BASE_URL } from "@/lib/constants";

export async function GET(
  req: NextRequest,
  context: RouteHandlerContext<{ category: string; subcategory: string }>
) {
  const { category, subcategory } = context.params;

  try {
    const response = await fetch(`${BASE_URL}/article/${category}/${subcategory}`, {
      headers: {
        // Authorization: req.headers.get("authorization") || "",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { message: error.message || "Failed to fetch articles" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
    //eslint-disable-next-line
  } catch (error: any) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}
