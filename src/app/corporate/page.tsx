"use client";

import { useState, useEffect } from "react";
import { Card, Title, Text, Paper, Button, Loader, Box } from "@mantine/core";
import {
  IconMapPin,
  IconTarget,
  IconCalendar,
  IconCheck,
  IconBulb,
  IconAlertCircle,
} from "@tabler/icons-react";
import Image from "next/image";
import { Article } from "@/lib/types";

const Corporate = () => {
  const [article, setArticle] = useState({} as Article);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //eslint-disable-next-line
  const [authorProfile, setAuthorProfile] = useState<any>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/article/corporate", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        const data = await response.json();
        if (data.length > 0) {
          setArticle(data[0]);
          setLoading(false);
        } else {
          setError("No articles found");
          setLoading(false);
        }
        //eslint-disable-next-line
      } catch (err: any) {
        console.error("Error fetching article:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, []);

  useEffect(() => {
    const fetchAuthorProfile = async (authorId: string) => {
      const url = `/api/profile/${authorId}`;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        });

        if (!response.ok) {
          console.error(`Failed to fetch author profile: ${response.status}`);
          return null;
        }

        return await response.json();
      } catch (err) {
        console.error("Error fetching author profile:", err);
        return null;
      }
    };

    if (article && article.author) {
      const authorId = article.author;
      fetchAuthorProfile(authorId);
    }
  }, [article]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Text size="xl" c="red">
          <IconAlertCircle className="inline mr-2" />
          {error}
        </Text>
      </div>
    );
  }

  if (!article) {
    return (
      <Box className="flex items-center justify-center h-screen">
        <Text size="xl" c="dimmed">
          No article available at the moment.
        </Text>
      </Box>
    );
  }

  return (
    <Card radius="none" className="px-0 py-6 rounded-lg shadow-lg">
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src={article?.image || "/images/new-red-logo.png"}
          alt={article?.title || "Corporate Article Image"}
          className="object-cover w-full h-full rounded-md"
          width={1200}
          height={500}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/85 to-transparent">
          <Title order={1} className="text-4xl font-bold text-shadow-md">
            {article.title}
          </Title>
          <Text className="mt-2 text-lg font-secondary opacity-90">
            A Special Feature by{" "}
            <span className="font-bold text-primary-accent">Ensight News</span>{" "}
            | {article.category}{" "}
          </Text>
        </div>
      </div>

      <div className="flex flex-col min-h-full gap-6 p-6 lg:flex-row">
        <div className="pr-16 space-y-6 lg:w-3/4">
          <p className="pl-4 my-6 text-lg italic leading-relaxed border-l-4 border-blue text-secondary">
            {article.description}
          </p>

          <Paper shadow="sm" radius="md" className="mb-8 overflow-hidden">
            <Image
              src={article.image}
              width={800}
              height={600}
              alt="Article Image"
              className="object-cover w-full h-auto rounded-lg"
            />
            <Text className="p-4 text-sm italic text-center text-secondary bg-surface">
              {authorProfile
                ? authorProfile?.firstName + " " + authorProfile?.lastName
                : "person Name"}
            </Text>
          </Paper>

          <p className="my-6 text-base leading-relaxed text-secondary">
            {article.content || "No content available for this article."}
          </p>

          <Paper
            shadow="sm"
            radius="md"
            className="p-6 my-8 border-l-4 border-blue-light bg-surface-alt"
          >
            <Text className="relative pl-10 text-lg italic leading-relaxed text-secondary">
              <span className="absolute left-0 text-6xl top-[-10] text-blue-light">
                “
              </span>
              <span className="absolute left-10 top-1">
                {article.quote ||
                  "This is a placeholder quote for the article."}
              </span>
            </Text>
            <Text className="mt-4 text-sm text-right text-secondary">
              —{" "}
              {authorProfile
                ? authorProfile?.firstName + " " + authorProfile?.lastName
                : "person Name"}
            </Text>
          </Paper>

          <Text className="mb-6 text-base leading-relaxed text-secondary">
            {article.description}
          </Text>
        </div>

        <div className="flex flex-col space-y-6 lg:w-1/4">
          <Paper
            shadow="sm"
            radius="lg"
            className="flex-grow p-6 border bg-surface border-border"
          >
            <Image
              src={authorProfile?.avatar || "/images/new-red-logo.png"}
              alt="Author Image"
              width={150}
              height={150}
              className="w-32 h-32 mx-auto mb-5 rounded-full"
            />
            <Title
              order={3}
              className="pb-2 text-lg border-b-2 text-blue border-blue"
            >
              {authorProfile
                ? authorProfile?.firstName + " " + authorProfile?.lastName
                : "person Name"}
            </Title>
            <Text className="mb-4 text-sm text-secondary">
              {authorProfile?.bio || "No biography available for this person."}
            </Text>
            <ul className="space-y-2 list-none">
              <li className="flex items-start">
                <IconMapPin className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Born:</strong> Placeholder
                </div>
              </li>

              <li className="flex items-start">
                <IconTarget className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Mission:</strong> Placeholder
                </div>
              </li>
            </ul>

            <Paper
              shadow="sm"
              radius="md"
              className="p-5 mt-6 text-center border rounded-lg border-primary-accent"
            >
              <Text className="mb-2 text-sm text-secondary">
                Key Technology Partner:
              </Text>
              <Text className="mb-2 font-bold text-blue">
                Global Insight Systems
              </Text>
              <Button
                component="a"
                className="p-3 mt-5 text-sm text-white rounded-md cursor-pointer bg-primary-accent hover:bg-red-600"
              >
                Unlock Agricultural Intelligence
              </Button>
            </Paper>

            <Title
              order={3}
              className="pb-2 mt-6 text-lg border-b-2 text-blue border-blue"
            >
              Company Milestones
            </Title>
            <ul className="space-y-2 list-none">
              <li className="flex items-start mt-4">
                <IconCalendar className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Founded:</strong> Placeholder
                </div>
              </li>
              <li className="flex items-start">
                <IconCheck className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Specialties:</strong> Placeholder
                </div>
              </li>
              <li className="flex items-start">
                <IconCheck className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Certifications:</strong> Placeholder
                </div>
              </li>
              <li className="flex items-start">
                <IconBulb className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Motto:</strong> Placeholder
                </div>
              </li>
            </ul>
          </Paper>
        </div>
      </div>
    </Card>
  );
};

export default Corporate;
