"use client";

import { Card, Title, Text, Image, Grid, Paper, Button } from "@mantine/core";
import {
  IconMapPin,
  IconBriefcase,
  IconTarget,
  IconTrendingUp,
  IconCalendar,
  IconCheck,
  IconBulb,
} from "@tabler/icons-react";

const Corporate = () => {
  return (
    <Card shadow="lg" radius="lg" className="p-0 bg-white">
      <div className="relative h-[500px] rounded-t-lg overflow-hidden">
        <Image
          src="https://picsum.photos/seed/ethiopiaLushFarm/1200/500"
          alt="Lush Ethiopian coffee plantation"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 p-10 text-white bg-gradient-to-t from-black/85 to-transparent">
          <Title order={1} className="text-4xl font-bold text-shadow-md">
            From Local Fields to Global Tables: GreenPath Organics Ethiopian
            Agri-Revolution
          </Title>
          <Text className="mt-2 text-lg font-secondary opacity-90">
            A Special Feature by{" "}
            <span className="font-bold text-ensight-gold-accent">
              Global Impact Chronicle
            </span>{" "}
            | Addis Ababa, Ethiopia
          </Text>
        </div>
      </div>
      <Grid gutter="xl" className="p-10">
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Text className="pl-5 mb-8 text-xl italic border-l-4 border-ensight-green-accent text-ensight-dark-gray-text">
            In the heart of Ethiopias fertile highlands, a quiet revolution is
            blossoming. GreenPath Organics, founded by visionary entrepreneur
            Liya Mekonnen, is not just farming; its cultivating a future where
            traditional agriculture meets cutting-edge intelligence,
            transforming livelihoods and placing Ethiopian specialty produce on
            the worlds most discerning tables.
          </Text>
          <Text className="mb-6 text-base text-ensight-medium-gray-text">
            Just five years ago, Liya, an agricultural economist with deep roots
            in her community, recognized the immense, yet largely untapped,
            potential of the regions unique terroir and heirloom crop varieties.
            The path, however, was fraught with challenges: inconsistent yields,
            fragmented market access, and the formidable task of navigating
            complex international organic certification standards.
          </Text>
          <Paper shadow="md" radius="lg" className="mb-8 overflow-hidden">
            <Image
              src="https://picsum.photos/seed/liyaWorkingField/800/450"
              alt="Liya Mekonnen working in a vibrant field with local farmers"
              className="object-cover w-full h-auto"
            />
            <Text className="p-4 text-sm italic text-center border-t text-ensight-medium-gray-text bg-gray-50 border-ensight-border-color">
              Liya Mekonnen (center) collaborating with local farmers, a core
              principle of GreenPath Organics.
            </Text>
          </Paper>
          <Text className="mb-6 text-base text-ensight-medium-gray-text">
            We knew we possessed something truly special – our aromatic Sidamo
            coffee, the nutrient-rich heirloom teff, Liya recounts, her voice
            filled with passion. But translating that inherent quality into
            sustainable growth and premium market access felt like an
            insurmountable peak. We were operating on intuition, needing a
            compass of precision.
          </Text>
          <Paper
            shadow="sm"
            radius="md"
            className="my-8 p-6 border-l-4 border-ensight-gold-accent bg-[#FFFBEF]"
          >
            <Text className="relative pl-10 text-lg italic font-secondary text-ensight-dark-gray-text">
              <span className="absolute text-6xl left-5 top-1 text-ensight-gold-accent">
                “
              </span>
              The paradigm shift occurred when we embraced data as our most
              valuable crop. Understanding our soils narrative, the climates
              rhythm, and the global consumers desires with pinpoint accuracy
              illuminated our path forward.
            </Text>
            <Text className="mt-4 text-sm text-right text-ensight-medium-gray-text font-primary">
              — Liya Mekonnen, Founder & CEO, GreenPath Organics
            </Text>
          </Paper>
          <Text className="mb-6 text-base text-ensight-medium-gray-text">
            The metamorphosis of GreenPath Organics began with the strategic
            integration of an advanced agricultural intelligence platform. This
            wasnt merely about new software; it was about a new mindset. The
            system enabled meticulous tracking of crop lifecycles, optimization
            of precious water and nutrient resources, and forecasting harvest
            yields with unprecedented accuracy. Critically, it unlocked a
            real-time view into global market dynamics, demand surges, and
            pricing corridors for organic specialty goods.
          </Text>
          <Text className="mb-6 text-base text-ensight-medium-gray-text">
            Suddenly, our farming transcended traditional boundaries; we were
            practicing precision agriculture Liya explains with a confident
            smile. For instance, the{" "}
            <span className="italic font-medium text-ensight-dark-blue">
              Agri-Optimize Suite
            </span>{" "}
            from Global Insight Systems was instrumental. Its predictive
            analytics highlighted a burgeoning European demand for organic white
            honey. We pivoted our apiary expansion strategy, and today, its a
            star export. This foresight, this ability to anticipate and adapt,
            was transformative.
          </Text>
          <Text className="mb-6 text-base text-ensight-medium-gray-text">
            Today, GreenPath Organics is a beacon of success, exporting its
            premium produce to over 15 countries, fostering a 300% increase in
            local employment, and championing fair-trade principles that empower
            the entire community. Their journey is a powerful testament to
            visionary leadership synergized with the transformative power of
            data-driven decision-making, charting a new, prosperous course for
            Ethiopian agriculture on the global stage.
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Paper
            shadow="md"
            radius="lg"
            className="p-6 border bg-ensight-light-blue-accent border-ensight-border-color"
          >
            <Image
              src="https://picsum.photos/seed/liyaPortrait/140/140"
              alt="Liya Mekonnen"
              className="w-32 h-32 mx-auto mb-5 border-4 border-white rounded-full shadow-md"
            />
            <Title
              order={3}
              className="pb-2 text-lg border-b-2 text-ensight-dark-blue border-ensight-green-accent"
            >
              Liya Mekonnen
            </Title>
            <Text className="mb-4 text-sm text-ensight-medium-gray-text">
              Founder & CEO, GreenPath Organics
            </Text>
            <ul className="space-y-2 list-none">
              <li className="flex items-start">
                <IconMapPin className="w-5 h-5 mt-1 mr-2 text-ensight-dark-blue" />
                <div>
                  <strong className="text-ensight-dark-gray-text">Born:</strong>{" "}
                  Addis Ababa, Ethiopia
                </div>
              </li>
              <li className="flex items-start">
                <IconBriefcase className="w-5 h-5 mt-1 mr-2 text-ensight-dark-blue" />
                <div>
                  <strong className="text-ensight-dark-gray-text">
                    Education:
                  </strong>{" "}
                  MSc. Agricultural Economics, Wageningen University
                </div>
              </li>
              <li className="flex items-start">
                <IconTarget className="w-5 h-5 mt-1 mr-2 text-ensight-dark-blue" />
                <div>
                  <strong className="text-ensight-dark-gray-text">
                    Mission:
                  </strong>{" "}
                  To elevate Ethiopian agriculture through sustainable
                  innovation and global market connectivity.
                </div>
              </li>
              <li className="flex items-start">
                <IconTrendingUp className="w-5 h-5 mt-1 mr-2 text-ensight-dark-blue" />
                <div>
                  <strong className="text-ensight-dark-gray-text">
                    Impact:
                  </strong>{" "}
                  Empowerment of 500+ smallholder farmers, 70% avg. income
                  increase.
                </div>
              </li>
            </ul>
            <Paper
              shadow="sm"
              radius="md"
              className="p-5 mt-6 text-center transition-all bg-white border border-primary-accent hover:shadow-md hover:-translate-y-1"
            >
              <Text className="mb-1 text-sm text-ensight-medium-gray-text">
                Key Technology Partner:
              </Text>
              <Text className="font-bold text-primary-accent">
                Agri-Optimize Suite
              </Text>
              <Text className="mb-3 text-xs">by Global Insight Systems</Text>
              <Button
                component="a"
                className="p-3 text-white cursor-pointer bg-primary-accent hover:bg-primary-accent rounded-2xl"
              >
                Unlock Agricultural Intelligence
              </Button>
            </Paper>
            <Title
              order={3}
              className="pb-2 mt-6 text-lg border-b-2 text-ensight-dark-blue border-ensight-green-accent"
            >
              Company Milestones
            </Title>
            <ul className="space-y-2 list-none">
              <li className="flex items-start">
                <IconCalendar className="w-5 h-5 mt-1 mr-2 text-ensight-dark-blue" />
                <div>
                  <strong className="text-ensight-dark-gray-text">
                    Founded:
                  </strong>{" "}
                  2018
                </div>
              </li>
              <li className="flex items-start">
                <IconCheck className="w-5 h-5 mt-1 mr-2 text-ensight-dark-blue" />
                <div>
                  <strong className="text-ensight-dark-gray-text">
                    Specialties:
                  </strong>{" "}
                  Organic Teff, Sidamo Coffee, White Honey, Specialty Pulses,
                  Avocados
                </div>
              </li>
              <li className="flex items-start">
                <IconCheck className="w-5 h-5 mt-1 mr-2 text-ensight-dark-blue" />
                <div>
                  <strong className="text-ensight-dark-gray-text">
                    Certifications:
                  </strong>{" "}
                  EU Organic, USDA Organic, Fair Trade USA, GlobalG.A.P.
                </div>
              </li>
              <li className="flex items-start">
                <IconBulb className="w-5 h-5 mt-1 mr-2 text-ensight-dark-blue" />
                <div>
                  <strong className="text-ensight-dark-gray-text">
                    Motto:
                  </strong>{" "}
                  Growing Sustainably, Connecting Globally.
                </div>
              </li>
            </ul>
          </Paper>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default Corporate;
