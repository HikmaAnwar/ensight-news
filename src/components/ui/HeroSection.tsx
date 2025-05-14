"use client";

import { Title, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { SharedButton } from "@/components/ui/SharedButton";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function HeroSection() {
  const handleScroll = () => {
    const detailSection = document.getElementById("article-detail");
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex items-center h-screen  text-left border-b bg-surface border-border">
      <div className="container grid items-center grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2">
        <div>
          <span className="inline-block px-5 py-2 mb-6 font-serif text-sm font-bold rounded-full bg-primary-accent text-light">
            Ethiopia Focus
          </span>
          <Title
            order={1}
            className="max-w-3xl mb-6 font-serif text-5xl font-bold text-blueblack-white"
          >
            Infrastructure Push & GERD Financing: Ethiopia Explores New Models
          </Title>
          <Text className="max-w-2xl pb-12 mb-8 font-serif text-primary">
            As the Grand Ethiopian Renaissance Dam nears completion and national
            infrastructure ambitions grow, Addis Ababa seeks innovative
            financing solutions beyond traditional debt, crucial for sustained
            economic momentum.
          </Text>
          <SharedButton
            variant="filled"
            className="mb-4 font-serif bg-primary-accent text-light md:mb-0"
            rounded={true}
            onClick={handleScroll}
          >
            Read More ↓
          </SharedButton>
        </div>

        <div className="w-full h-full">
          <Carousel
            withIndicators
            loop
            height={400}
            plugins={[Autoplay({ delay: 2000 })]}
          >
            {["/images/Frehiwot.jpg", "/images/news.jpg"].map((src, index) => (
              <Carousel.Slide key={index}>
                <Image
                  src={src}
                  alt={`GERD slide ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full rounded-xl"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
