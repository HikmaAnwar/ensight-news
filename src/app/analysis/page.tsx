"use client";
import { useState } from "react";
import { recentAnalysis } from "@/lib/data";
import { Article } from "@/lib/types";
import AnalysisArticleContent from "@/components/ui/AnalysisArticleContent";
import RecentArticles from "@/components/ui/RecentArticles";
import {
  IconBookmark,
  IconShare,
  IconClock,
  IconUsers,
  IconBook,
  IconCalendar,
} from "@tabler/icons-react";

const getLatestArticle = () => recentAnalysis[0] || {};

export default function WeeklyAnalysis() {
  const [selectedArticle, setSelectedArticle] = useState(getLatestArticle());

  const badges = [
    { label: selectedArticle.category || "ANALYSIS | WEEKLY SESSIONS" },
    { label: selectedArticle.isPremium ? "PREMIUM" : "FREE" },
    {
      label: selectedArticle.date || "MAY 10, 2025",
      icon: <IconCalendar size={14} className="inline-block mr-2 -mt-1" />,
    },
    {
      label: selectedArticle.readTime || "5 min read",
      icon: <IconClock size={14} className="inline-block mr-2 -mt-1" />,
    },
    {
      label: "1.2K readers",
      icon: <IconUsers size={14} className="inline-block mr-2 -mt-1" />,
    },
    {
      label: selectedArticle.isPremium ? "Premium" : "Free",
      icon: <IconBook size={14} className="inline-block mr-2 -mt-1" />,
    },
  ];

  const buttons = [
    {
      label: "Save",
      icon: <IconBookmark size={16} className="inline-block mr-2 -mt-1" />,
    },
    {
      label: "Share",
      icon: <IconShare size={16} className="inline-block mr-2 -mt-1" />,
    },
  ];

  const handleArticleSelect = (article: Article) => {
    setSelectedArticle(article);
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="px-2 sm:px-3 lg:px-4 py-6 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <AnalysisArticleContent
            selectedArticle={selectedArticle}
            badges={badges}
            buttons={buttons}
          />
        </div>
        <div className="lg:w-1/4">
          <RecentArticles onArticleSelect={handleArticleSelect} />
        </div>
      </div>
    </div>
  );
}
