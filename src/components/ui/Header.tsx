"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Burger, Group, ActionIcon, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSun,
  IconMoon,
  IconUserCircle,
  IconChevronDown,
} from "@tabler/icons-react";
import { useTheme } from "@/lib/theme";
import { SharedButton } from "@/components/ui/SharedButton";
import Image from "next/image";
import { navItems } from "@/lib/data";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useTheme();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  // eslint-disable-next-line
  const hoverTimeoutRef = useRef<any>(null);

  const handleMouseEnter = (label: string) => {
    clearTimeout(hoverTimeoutRef.current);
    setHoveredMenu(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 md:px-20 bg-[#1E3A5F] shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          <Image
            src="/images/new-red-logo.png"
            alt="Ensight Logo"
            className="h-12"
            width={150}
            height={55}
          />
        </Link>

        <nav className="hidden md:flex space-x-6 relative">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center space-x-1 text-white font-medium hover:text-[#D93A3A] relative px-2 py-1 cursor-pointer transition-colors">
                <Text>{item.label}</Text>
                {item.submenu?.length > 0 && (
                  <IconChevronDown
                    size={16}
                    className="text-white group-hover:text-[#D93A3A]"
                  />
                )}
                {item.badge && (
                  <span className="ml-1 text-xs bg-[#D93A3A] text-white rounded px-1 py-0.5">
                    {item.badge}
                  </span>
                )}
              </div>

              {item.submenu &&
                item.submenu.length > 0 &&
                hoveredMenu === item.label && (
                  <div className="absolute left-0 top-full mt-2 w-52 bg-[#20406A] shadow-md rounded z-50 border border-[#2D5A92]">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-[#D93A3A] hover:text-white transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>

        <Group className="hidden md:flex items-center gap-2">
          <ActionIcon
            onClick={() => toggleColorScheme()}
            aria-label="Toggle Theme"
            className="text-white hover:text-[#D93A3A] transition-colors"
          >
            {colorScheme === "light" ? (
              <IconMoon size={20} />
            ) : (
              <IconSun size={20} />
            )}
          </ActionIcon>
          <IconUserCircle
            size={20}
            className="mx-3 text-white hover:text-[#D93A3A] cursor-pointer transition-colors"
          />
          <Link href="/subscribe">
            <SharedButton
              variant="filled"
              className="bg-[#D93A3A] text-white hover:bg-[#B32F2F] transition-colors rounded-2xl"
            >
              Subscribe
            </SharedButton>
          </Link>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        />
      </div>

      {opened && (
        <div className="md:hidden bg-[#1E3A5F] px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.label}>
              <Text className="block text-white py-1 hover:text-[#D93A3A] transition-colors">
                {item.label}
                {item.badge && (
                  <span className="ml-2 text-xs bg-[#D93A3A] text-white rounded px-1 py-0.5">
                    {item.badge}
                  </span>
                )}
              </Text>
              {item.submenu?.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="block text-sm text-gray-300 ml-4 py-1 hover:text-[#D93A3A] transition-colors"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-2">
            <ActionIcon
              onClick={() => toggleColorScheme()}
              aria-label="Toggle Theme"
              className="text-white hover:text-[#D93A3A] transition-colors mb-2"
            >
              {colorScheme === "light" ? (
                <IconMoon size={20} />
              ) : (
                <IconSun size={20} />
              )}
            </ActionIcon>
            <Link href="/subscribe">
              <SharedButton
                variant="filled"
                className="w-full bg-[#D93A3A] text-white hover:bg-[#B32F2F] transition-colors"
              >
                Subscribe
              </SharedButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
