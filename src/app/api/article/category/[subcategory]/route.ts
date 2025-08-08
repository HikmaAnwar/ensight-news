import { NextResponse, NextRequest } from "next/server";
import { BASE_URL } from "@/lib/constants";

export async function GET(req: NextRequest) {
  // Read category and subcategory from query parameters
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  if (!category || !subcategory) {
    return NextResponse.json(
      { message: "Category and subcategory are required" },
      { status: 400 }
    );
  }

  try {
    // Construct the URL with query parameters for the external API
    const response = await fetch(
      `${BASE_URL}/articles?category=${category}&subcategory=${subcategory}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: req.headers.get("authorization") || "",
        },
      }
    );

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
