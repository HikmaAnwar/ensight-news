import { Card, Title, Text, Image, Group } from "@mantine/core";
import Sidebar from "@/components/ui/Sidebar";
import { SocialShare } from "@/components/ui/SocialShare";
import { AuthorBio } from "@/components/ui/AuthorBio";
import { RelatedArticles } from "@/components/ui/RelatedArticles";
import { GraphPlaceholder } from "@/components/ui/GraphPlaceholder";
import { InlineCTA } from "@/components/ui/InlineCTA";
import { ReadingSettings } from "@/components/ui/ReadingSettings";

interface Article {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: JSX.Element;
}

interface ArticleDetailProps {
  article?: Article;
}

export function ArticleDetail({ article }: ArticleDetailProps) {
  const defaultArticle: Article = {
    title:
      "Ethiopia Explores New Financing Models for GERD Completion and Infrastructure Push",
    category: "Economy",
    author: "John Abebe",
    date: "May 15, 2025",
    readTime: "8 min read",
    image: "/images/gerd-placeholder.jpg",
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
        <Text className="mb-4 text-primary">
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
        <GraphPlaceholder />
        <InlineCTA />
      </>
    ),
  };

  const displayArticle = article || defaultArticle;

  return (
    <section className="w-full max-w-[1200px] mx-auto py-12">
      <div className="-mx-20 px-20">
        <div className="flex flex-col sm:flex-row justify-between items-start space-x-0 sm:space-x-8">
          <div className="w-full sm:w-[680px] min-w-0">
            <Card className="bg-background border border-border shadow-md rounded-2xl p-6 mb-8">
              <Title
                order={1}
                className="text-blueblack-white mb-4 text-5xl font-bold whitespace-normal tracking-wide leading-tight"
              >
                {displayArticle.title}
              </Title>
              <Group className="text-muted mb-6 inline-flex flex-row gap-4">
                <Text className="whitespace-nowrap text-red-600 bg-red-900 px-1 py-0 rounded">
                  {displayArticle.category}
                </Text>
                <Text className="whitespace-nowrap">
                  By {displayArticle.author}
                </Text>
                <Text className="whitespace-nowrap">{displayArticle.date}</Text>
                <Text className="whitespace-nowrap">
                  {displayArticle.readTime}
                </Text>
              </Group>
              <SocialShare />
              <Image
                src={displayArticle.image}
                alt="Grand Ethiopian Renaissance Dam"
                className="my-6"
              />
              {displayArticle.content}
            </Card>
            <AuthorBio
              name="About John Abebe"
              bio="John Abebe is Ensight's lead analyst covering the Horn of Africa. He specializes in macroeconomics, infrastructure finance, and the dynamics of regional economic integration."
              image="/images/author-placeholder.jpg"
            />
            <RelatedArticles />
            <ReadingSettings />
          </div>
          <div className="w-full sm:w-[480px] mt-8 sm:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
