"use client";

import { useState, useEffect } from "react";
import { Container, Grid, Loader } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";
import { use } from "react";

type Props = {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
};

export default function SubcategoryPage({ params }: Props) {
  const { category, subcategory } = use(params);
  //eslint-disable-next-line
  const [user, setUser] = useState<null | any>(null);
  const [checkedUser, setCheckedUser] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
    setCheckedUser(true);
  }, []);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: capitalize(category), href: `` },
    { label: capitalize(subcategory), href: `/${category}/${subcategory}` },
  ];

  if (!checkedUser) {
    return (
      <Container
        size="lg"
        className="py-8 flex items-center justify-center min-h-[400px]"
      >
        <Loader size="xl" color="blue" />
      </Container>
    );
  }

  return (
    <Container size="xl" className="py-3">
      {/* {user ? ( */}
      <Grid gutter="md">
        <Grid.Col span={12}>
          <ArticleSection
            category={capitalize(category)}
            subcategory={capitalize(subcategory)}
            breadcrumbItems={breadcrumbItems}
          />
        </Grid.Col>
      </Grid>
      {/* ) : (
        <div className="flex flex-col items-center justify-center md:h-[400] py-20 bg-background space-y-4 shadow-lg rounded-2xl">
          <h1 className="text-2xl font-bold text-blueblack-white">
            Access Denied
          </h1>
          <p className="text-lg text-muted">
            You must be logged in to view this content.
          </p>
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in here
          </Link>
        </div>
      )} */}
    </Container>
  );
}
