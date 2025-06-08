"use client";

import { Card, Title, Text, Image, Paper, Button } from "@mantine/core";
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
    <Card radius="none" className="p-0 pt-4 rounded-lg mb-6 shadow-lg">
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src="https://picsum.photos/seed/ethiopiaLushFarm/1200/500"
          alt="Lush Ethiopian coffee plantation"
          className="object-cover rounded-md w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/85 to-transparent">
          <Title order={1} className="text-4xl font-bold text-shadow-md">
            From Local Fields to Global Tables: GreenPath Organics Ethiopian
            Agri-Revolution
          </Title>
          <Text className="mt-2 text-lg font-secondary opacity-90">
            A Special Feature by{" "}
            <span className="font-bold text-primary-accent">
              Global Impact Chronicle
            </span>{" "}
            | Addis Ababa, Ethiopia
          </Text>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row p-6 gap-6 min-h-full">
        <div className="lg:w-3/4 pr-16 space-y-6">
          <Text className="mb-6 text-lg italic border-l-4 border-blue pl-4 text-secondary leading-relaxed">
            In the heart of Ethiopia’s fertile highlands, a quiet revolution is
            blossoming. GreenPath Organics, founded by visionary entrepreneur
            Liya Mekonnen, is not just farming; it’s cultivating a future where
            traditional agriculture meets cutting-edge intelligence,
            transforming livelihoods and placing Ethiopian specialty produce on
            the world’s most discerning tables.
          </Text>

          <Text className="mb-6 text-base text-secondary leading-relaxed">
            Just five years ago, Liya, an agricultural economist with deep roots
            in her community, recognized the immense, yet largely untapped,
            potential of the region’s unique terroir and heirloom crop
            varieties. The path, however, was fraught with challenges:
            inconsistent yields, fragmented market access, and the formidable
            task of navigating complex international organic certification
            standards.
          </Text>

          <Paper shadow="sm" radius="md" className="mb-8 overflow-hidden">
            <Image
              src="https://picsum.photos/seed/liyaWorkingField/800/450"
              alt="Liya Mekonnen working in a vibrant field with local farmers"
              className="object-cover w-full h-auto rounded-lg"
            />
            <Text className="p-4 text-sm italic text-center text-secondary bg-surface">
              Liya Mekonnen (center) collaborating with local farmers, a core
              principle of GreenPath Organics.
            </Text>
          </Paper>

          <Text className="mb-6 text-base text-secondary leading-relaxed">
            “We knew we possessed something truly special – our aromatic Sidamo
            coffee, the nutrient-rich heirloom teff,” Liya recounts, her voice
            filled with passion. “But translating that inherent quality into
            sustainable growth and premium market access felt like an
            insurmountable peak. We were operating on intuition, needing a
            compass of precision.”
          </Text>

          <Paper
            shadow="sm"
            radius="md"
            className="my-8 p-6 border-l-4 border-blue-light bg-surface-alt"
          >
            <Text className="relative pl-10 text-lg italic text-secondary leading-relaxed">
              <span className="absolute text-6xl left-5 top-1 text-blue-light">
                “
              </span>
              The paradigm shift occurred when we embraced data as our most
              valuable crop. Understanding our soil’s narrative, the climate’s
              rhythm, and the global consumer’s desires with pinpoint accuracy
              illuminated our path forward.
            </Text>
            <Text className="mt-4 text-sm text-right text-secondary">
              — Liya Mekonnen, Founder & CEO, GreenPath Organics
            </Text>
          </Paper>

          <Text className="mb-6 text-base text-secondary leading-relaxed">
            The metamorphosis of GreenPath Organics began with the strategic
            integration of an advanced agricultural intelligence platform. This
            wasn’t merely about new software; it was about a new mindset. The
            system enabled meticulous tracking of crop lifecycles, optimization
            of precious water and nutrient resources, and forecasting harvest
            yields with unprecedented accuracy. Critically, it unlocked a
            real-time view into global market dynamics, demand surges, and
            pricing corridors for organic specialty goods.
          </Text>

          <Text className="mb-6 text-base text-secondary leading-relaxed">
            “Suddenly, our farming transcended traditional boundaries; we were
            practicing precision agriculture,” Liya explains with a confident
            smile. “For instance, the{" "}
            <span className="italic font-medium text-blue">
              Agri-Optimize Suite
            </span>{" "}
            from Global Insight Systems was instrumental. Its predictive
            analytics highlighted a burgeoning European demand for organic white
            honey. We pivoted our apiary expansion strategy, and today, it’s a
            star export. This foresight, this ability to anticipate and adapt,
            was transformative.”
          </Text>

          <Text className="mb-6 text-base text-secondary leading-relaxed">
            Today, GreenPath Organics is a beacon of success, exporting its
            premium produce to over 15 countries, fostering a 300% increase in
            local employment, and championing fair-trade principles that empower
            the entire community. Their journey is a powerful testament to
            visionary leadership synergized with the transformative power of
            data-driven decision-making, charting a new, prosperous course for
            Ethiopian agriculture on the global stage.
          </Text>
        </div>

        <div className="lg:w-1/4 space-y-6 flex flex-col">
          <Paper
            shadow="sm"
            radius="lg"
            className="p-6 border bg-surface border-border flex-grow"
          >
            <Image
              src="https://picsum.photos/seed/liyaPortrait/140/140"
              alt="Liya Mekonnen"
              className="w-32 h-32 mx-auto mb-5 rounded-full"
            />
            <Title
              order={3}
              className="pb-2 text-lg border-b-2 text-blue border-blue"
            >
              Liya Mekonnen
            </Title>
            <Text className="mb-4 text-sm text-secondary">
              Founder & CEO, GreenPath Organics
            </Text>
            <ul className="space-y-2 list-none">
              <li className="flex items-start">
                <IconMapPin className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Born:</strong> Addis Ababa, Ethiopia
                </div>
              </li>
              <li className="flex items-start">
                <IconBriefcase className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Education:</strong> MSc. Agricultural Economics,
                  Wageningen University
                </div>
              </li>
              <li className="flex items-start">
                <IconTarget className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Mission:</strong> To elevate Ethiopian agriculture
                  through sustainable innovation and global market connectivity.
                </div>
              </li>
              <li className="flex items-start">
                <IconTrendingUp className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Impact:</strong> Empowerment of 500+ smallholder
                  farmers, 70% avg. income increase.
                </div>
              </li>
            </ul>

            <Paper
              shadow="sm"
              radius="md"
              className="p-5 mt-6 text-center border border-primary-accent rounded-lg"
            >
              <Text className="mb-2 text-sm text-secondary">
                Key Technology Partner:
              </Text>
              <Text className="mb-2 font-bold text-blue">
                Agri-Optimize Suite
              </Text>
              <Text className="mb-7 text-xs text-secondary">
                by Global Insight Systems
              </Text>
              <Button
                component="a"
                className="p-3 text-sm cursor-pointer text-white bg-primary-accent hover:bg-red-600 rounded-md"
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
                  <strong>Founded:</strong> 2018
                </div>
              </li>
              <li className="flex items-start">
                <IconCheck className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Specialties:</strong> Organic Teff, Sidamo Coffee,
                  White Honey, Specialty Pulses, Avocados
                </div>
              </li>
              <li className="flex items-start">
                <IconCheck className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Certifications:</strong> EU Organic, USDA Organic,
                  Fair Trade USA, GlobalG.A.P.
                </div>
              </li>
              <li className="flex items-start">
                <IconBulb className="w-5 h-5 mt-1 mr-2 text-blue" />
                <div className="text-blueblack-white">
                  <strong>Motto:</strong> “Growing Sustainably, Connecting
                  Globally.”
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
