import { Title, Text, SimpleGrid, Image, Paper } from "@mantine/core";

const trustedPartners = [
  {
    name: "Global Corp",
    logo: "/images/global-corp-logo.png",
  },
  {
    name: "Africa Insights",
    logo: "/images/africa-insights-logo.png",
  },
  {
    name: "Eco Solutions",
    logo: "/images/eco-solutions-logo.png",
  },
  {
    name: "Tech Innovators",
    logo: "/images/tech-innovators-logo.png",
  },
];

export function TrustedBy() {
  return (
    <section className="bg-background py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <Title
          order={2}
          className="text-primary text-center mb-4 animate-fade-in-up"
        >
          Trusted By
        </Title>
        <Text className="text-secondary text-center mb-12 max-w-xl mx-auto">
          We’re proud to partner with leading organizations driving impact
          across Africa and beyond.
        </Text>
        <SimpleGrid
          cols={{ base: 2, sm: 4 }}
          spacing="lg"
          className="justify-items-center"
        >
          {trustedPartners.map((partner) => (
            <Paper
              key={partner.name}
              className="bg-surface border border-border shadow-card p-6 flex items-center justify-center"
              radius="md"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-[150px] h-auto opacity-80 hover:opacity-100 transition-opacity"
                fallbackSrc="/images/placeholder-logo.png"
              />
            </Paper>
          ))}
        </SimpleGrid>
      </div>
    </section>
  );
}
