// src/lib/utils.ts

/**
 * Converts a title string into a URL-friendly slug
 * E.g. "Ethiopia's Coffee Market" → "ethiopias-coffee-market"
 */
export const createUrlFriendlyTitle = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};

/**
 * Parses a category string like "ECONOMY | POLICIES" into an object
 */
export const parseCategory = (
  category: string
): { mainCategory: string; subcategory: string } => {
  const [mainCategory, subcategory] = category
    .split(" | ")
    .map((part) => part.trim());
  return {
    mainCategory: mainCategory.toLowerCase(),
    subcategory: subcategory.toLowerCase(),
  };
};
