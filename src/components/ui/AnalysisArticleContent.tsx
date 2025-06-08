import { Article } from "@/lib/types";
import { Title, Text, Badge, Group, Button } from "@mantine/core";
import Image from "next/image";
import { JSX } from "react";

interface AnalysisArticleContentProps {
  selectedArticle: Article;
  badges: {
    label: string;
    icon?: JSX.Element | "";
  }[];
  buttons: {
    label: string;
    icon?: JSX.Element | "";
  }[];
}

export default function AnalysisArticleContent({
  selectedArticle,
  badges,
  buttons,
}: AnalysisArticleContentProps) {
  return (
    <div className="flex gap-8 lg:gap-12">
      <div className="w-3/4 pl-0">
        <Group gap="xs" className="mb-2 flex flex-wrap">
          {badges.slice(0, 2).map((badge, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "light" : "filled"}
              size="sm"
              radius="md"
              className={`text-sm rounded-xl ${
                badge.label === "PREMIUM"
                  ? "text-[var(--color-light)] bg-[var(--color-blue)] px-3 ml-3"
                  : "text-[var(--color-blueblack-white)]"
              }`}
            >
              {badge.label}
            </Badge>
          ))}
        </Group>

        <Title
          order={1}
          className="text-3xl font-bold mb-2 leading-tight"
          style={{ color: "var(--color-primary-accent)" }}
        >
          Weekly Economic Briefing:{" "}
          <span>
            {selectedArticle.title || "Inflation Trends and Monetary Policy"}
          </span>
        </Title>

        <Text
          className="text-base mb-4"
          style={{ color: "var(--color-muted)" }}
        >
          {selectedArticle.description ||
            "Expert analysis of the latest inflation data and its implications for Ethiopian businesses."}
        </Text>

        <Group className="flex items-start my-7">
          <Image
            src={selectedArticle.image || "/images/Frehiwot.jpg"}
            alt="Author"
            width={48}
            height={48}
            className="rounded-full object-cover my-auto"
          />
          <div className="flex flex-col ml-4">
            <h1
              className="text-sm font-semibold mb-1"
              style={{ color: "var(--color-blueblack-white)" }}
            >
              {selectedArticle.author || "Dr. Abebe Worku"}
            </h1>
            <div
              className="flex items-center gap-3 text-sm"
              style={{ color: "var(--color-blueblack-white)" }}
            >
              <span>{selectedArticle.date || "April 15, 2025"}</span>
              <span>• {selectedArticle.readTime || "15 min read"}</span>
            </div>
          </div>
        </Group>

        <Group gap="xs" className="my-10 flex flex-wrap">
          {badges.slice(2).map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`border text-[var(--color-blueblack-white)] hover:bg-[var(--color-surface-alt)] cursor-pointer rounded-xl mr-2 px-3 ${
                badge.label === "Premium"
                  ? "border-[var(--color-primary-accent)] text-[var(--color-primary-accent)]"
                  : "border-[var(--color-border)]"
              }`}
            >
              {badge.icon && badge.icon}
              {badge.label}
            </Badge>
          ))}
        </Group>

        <Group gap="xs" className="mb-6 flex flex-wrap">
          {buttons.map((button, index) => (
            <Button
              key={index}
              leftSection={button.icon}
              variant="outline"
              className="border text-[var(--color-blueblack-white)] hover:bg-[var(--color-surface-alt)] cursor-pointer rounded-sm mr-2 px-3 py-1"
              style={{ borderColor: "var(--color-border)" }}
            >
              {button.label}
            </Button>
          ))}
        </Group>

        <div className="relative rounded-lg overflow-hidden mb-4">
          <Image
            src={selectedArticle.image || "/images/Frehiwot.jpg"}
            alt="Featured Image"
            width={400}
            height={150}
            className="w-full h-100 rounded-lg object-cover"
          />
        </div>
        <Text
          className="text-sm italic mb-6"
          style={{ color: "var(--color-blueblack-white)" }}
        >
          {selectedArticle.caption ||
            "Featured image: Economic trends in Ethiopia, showcasing recent developments."}
        </Text>

        <div className="prose max-w-none w-full mb-10">
          {Array.isArray(selectedArticle.content) ? (
            selectedArticle.content.map((section, index) => (
              <div key={index}>
                <Title
                  order={2}
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-primary-accent)" }}
                >
                  {section.title}
                </Title>
                <Text
                  className="text-base mb-4 leading-relaxed"
                  style={{ color: "var(--color-blueblack-white)" }}
                >
                  {section.text}
                </Text>
              </div>
            ))
          ) : (
            <>
              <Title
                order={2}
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-primary-accent)" }}
              >
                Introduction
              </Title>
              <Text
                className="text-base mb-4 leading-relaxed"
                style={{ color: "var(--color-blueblack-white)" }}
              >
                Ethiopia has been experiencing significant economic growth over
                the past decade, emerging as one of Africa’s fastest-growing
                economies. The government’s ambitious economic reforms have
                played a crucial role in driving this growth, focusing on
                liberalizing key sectors and attracting foreign investment.
              </Text>

              <Title
                order={2}
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-primary-accent)" }}
              >
                Key Inflation Metrics
              </Title>
              <Text
                className="text-base mb-4 leading-relaxed"
                style={{ color: "var(--color-blueblack-white)" }}
              >
                The latest inflation data indicates a year-on-year rise of 24.5%
                in consumer prices. Food inflation remains a major contributor,
                driven by supply chain disruptions and fluctuating global
                commodity prices. Non-food inflation has also seen an uptick,
                particularly in housing and utilities.
              </Text>

              <Title
                order={2}
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-primary-accent)" }}
              >
                Policy Implications
              </Title>
              <Text
                className="text-base mb-4 leading-relaxed"
                style={{ color: "var(--color-blueblack-white)" }}
              >
                In response to rising inflation, the National Bank of Ethiopia
                is expected to tighten monetary policy. Potential measures
                include increasing the benchmark interest rate and implementing
                stricter credit controls to curb excess liquidity in the market.
              </Text>

              <Title
                order={2}
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-primary-accent)" }}
              >
                Business Impact
              </Title>
              <Text
                className="text-base mb-4 leading-relaxed"
                style={{ color: "var(--color-blueblack-white)" }}
              >
                Higher inflation and borrowing costs could affect businesses’
                operating expenses and consumer demand. Companies are advised to
                review their pricing strategies and cost structures to remain
                competitive in the changing economic environment.
              </Text>

              <Title
                order={2}
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-primary-accent)" }}
              >
                Conclusion
              </Title>
              <Text
                className="text-base mb-4 leading-relaxed"
                style={{ color: "var(--color-blueblack-white)" }}
              >
                Ethiopia’s economic outlook remains positive, but businesses
                must stay agile in navigating inflationary pressures and policy
                shifts. Staying informed and proactively adjusting business
                strategies will be key to resilience and growth.
              </Text>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
