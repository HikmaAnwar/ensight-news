import { NextResponse, NextRequest } from "next/server";
import { BASE_URL } from "@/lib/constants";

// This file is a catch-all route specifically for fetching articles.
// It must be located at: app/api/get-article/[...slug]/route.ts

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    // The catch-all route parameter is a string array named 'slug'
    params: { slug: string[] };
  }
) {
  // Destructure the slug array to get the three path segments
  const [category, subcategory, slug] = params.slug;

  // Validate that all three parts of the path are present
  if (!category || !subcategory || !slug) {
    return NextResponse.json(
      { message: "Category, subcategory, and slug are required" },
      { status: 400 }
    );
  }

  try {
    // Use the extracted parameters to construct the external API URL
    const response = await fetch(
      `${BASE_URL}/articles/${category}/${subcategory}/${slug}`,
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
        { message: error.message || "Failed to fetch article" },
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
