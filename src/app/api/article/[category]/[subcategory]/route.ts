import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/constants";

export async function GET({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const resolvedParams = await params;
  const { category, subcategory } = resolvedParams;

  // const token = req.headers.get("authorization");
  try {
    const response = await fetch(
      `${BASE_URL}/article/${category}/${subcategory}`,
      {
        headers: {
          // Authorization: token || "",
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
