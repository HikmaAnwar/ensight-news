import { Title, Text, Image, Group } from "@mantine/core";
import Sidebar from "@/components/ui/Sidebar";
import { SocialShare } from "@/components/ui/SocialShare";
import { RelatedArticles } from "@/components/ui/RelatedArticles";
import { Article } from "@/lib/types";

interface ArticleDetailProps {
  article?: Article;
}

export function ArticleDetail({ article }: ArticleDetailProps) {
  const defaultArticle: Article = {
    title:
      "Ethiopia Explores New Financing Models for GERD Completion and Infrastructure Push",
    category: "Economy",
    author: "John Abebe",
    description: "",
    date: "May 15, 2025",
    readTime: "8 min read",
    image: "/images/Frehiwot.jpg",
    content: (
      <>
        <Text className="mb-4 text-primary">
          <strong>
            ADDIS ABABA – With the Grand Ethiopian Renaissance Dam (GERD)
            entering its final operational phases and a continued national drive
            for major infrastructure upgrades—spanning transport networks,
            energy grids, and industrial parks Ethiopias government is actively
            investigating alternative financing mechanisms. The goal is to
            sustainably manage debt levels while attracting diverse capital
            inflows essential for growth.
          </strong>
        </Text>
        <br />
        <Text className="mb-4 text-primary font-serif">
          The colossal scale of projects like the GERD, combined with critical
          investments needed in roads, rail, and digital infrastructure to
          bolster the Homegrown Economic Reform Agenda, necessitates a strategic
          shift beyond traditional concessional loans and bilateral financing
          arrangements. While these sources remain important pillars, mounting
          concerns about national debt sustainability and a desire for greater
          fiscal autonomy are prompting officials to seriously consider options
          like robust public-private partnerships (PPPs), specialized domestic
          and international infrastructure bonds, and potentially tapping into
          climate-linked finance mechanisms such as green bonds for eligible
          renewable energy or sustainable transport projects.
        </Text>
      </>
    ),
  };

  const displayArticle = article || defaultArticle;

  return (
    <section id="article-detail" className="w-full py-12">
      <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-8">
        <div className="w-full sm:flex-1 sm:max-w-[680px] min-w-0">
          <Title
            order={1}
            className="text-blueblack-white font-serif mb-4 text-4xl font-bold whitespace-normal tracking-wide leading-tight"
          >
            {displayArticle.title}
          </Title>

          <Group className="text-muted font-serif mb-6 inline-flex flex-row gap-4">
            <Text className="whitespace-nowrap text-red-600 bg-red-900 px-1 py-0 rounded">
              {displayArticle.category}
            </Text>
            <Text className="whitespace-nowrap">
              By {displayArticle.author}
            </Text>
            <Text className="whitespace-nowrap">{displayArticle.date}</Text>
            <Text className="whitespace-nowrap">{displayArticle.readTime}</Text>
          </Group>

          <SocialShare />

          <div className="relative my-6">
            <Image
              src={displayArticle.image}
              alt="Grand Ethiopian Renaissance Dam"
              className="rounded-lg"
              height="400"
              width="680"
            />
            <div className="absolute top-7 left-7">
              <Image
                src="/images/logo-red.png"
                alt="Ensight Logo"
                className="h-8"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 w-full h-1/3"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
              }}
            />
            <div className="absolute bottom-4 left-4">
              <Text
                className="text-white font-serif text-[28px] font-extrabold"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                {displayArticle.title}
              </Text>
            </div>
          </div>

          <div className="prose prose-lg prose-invert font-serif text-primary max-w-none">
            {displayArticle.content}
          </div>
        </div>

        <div className="w-full sm:w-[480px] mt-8 sm:mt-0 sm:ml-auto">
          <Sidebar />
          <RelatedArticles />
        </div>
      </div>
    </section>
  );
}
