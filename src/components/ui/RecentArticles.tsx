import { IconBook } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { recentAnalysis } from "@/lib/data";

export default function RecentArticles() {
  return (
    <div className="w-full">
      <h3
        className="text-lg font-bold mb-4"
        style={{ color: "var(--color-blueblack-white)" }}
      >
        Recent Weekly Analysis
      </h3>
      <div className="space-y-4">
        {recentAnalysis.map((article) => (
          <div
            key={article.id}
            className="border bg-[var(--color-surface)] hover:bg-[var(--color-surface-alt)] transition rounded-md shadow-sm p-4"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="mb-3">
              <Image
                src={article.image}
                alt={article.title}
                width={80}
                height={40}
                className="rounded-md object-cover w-full h-auto"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              <span
                className="inline-flex items-center px-2 py-1 text-sm rounded-md"
                style={{
                  color: "var(--color-blueblack-white)",
                  backgroundColor: "var(--color-surface-emphasis)",
                }}
              >
                {article.category}
              </span>
              {article.isPremium && (
                <span
                  className="inline-flex items-center px-3 py-1 text-sm rounded-md"
                  style={{
                    color: "var(--color-light)",
                    backgroundColor: "var(--color-blue)",
                  }}
                >
                  <IconBook size={14} className="inline-block mr-1 -mt-0.5" />
                  Premium
                </span>
              )}
            </div>
            <Link href={article.href}>
              <p
                className="text-base font-semibold mb-1 hover:text-[var(--color-primary-accent)]"
                style={{ color: "var(--color-blueblack-white)" }}
              >
                {article.title}
              </p>
            </Link>
            <p
              className="text-sm mb-2"
              style={{ color: "var(--color-blueblack-white)" }}
            >
              {article.description}
            </p>
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--color-blueblack-white)" }}
            >
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
