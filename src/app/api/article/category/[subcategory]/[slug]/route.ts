import { NextResponse, NextRequest } from "next/server";
import { BASE_URL } from "@/lib/constants";

// This API route handles requests for a specific article using dynamic parameters in the path.
// The file should be located at: app/api/article/[category]/[subcategory]/[slug]/route.ts

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: { category: string; subcategory: string; slug: string };
  }
) {
  // Extract the dynamic parameters from the URL path provided by Next.js
  const { category, subcategory, slug } = params;

  // Check if all required parameters are present.
  if (!category || !subcategory || !slug) {
    return NextResponse.json(
      { message: "Category, subcategory, and slug are required" },
      { status: 400 }
    );
  }

  try {
    // Construct the URL for the external API using the extracted path parameters
    const response = await fetch(
      `${BASE_URL}/articles/${category}/${subcategory}/${slug}`,
      {
        headers: {
          "Content-Type": "application/json",
          // Pass the Authorization header from the incoming request to the external API
          Authorization: req.headers.get("authorization") || "",
        },
      }
    );

    // If the external API responds with an error, handle it gracefully
    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { message: error.message || "Failed to fetch article" },
        { status: response.status }
      );
    }

    // If the response is successful, parse the JSON data and return it
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
