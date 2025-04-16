"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Burger, Group, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSun,
  IconMoon,
  IconUserCircle,
  IconChevronDown,
} from "@tabler/icons-react";
import { useTheme } from "@/lib/theme";
import { SharedButton } from "@/components/ui/SharedButton";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useTheme();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hoverTimeoutRef = useRef<any>(null);

  const navItems = [
    {
      label: "Business",
      href: "/business",
      submenu: [
        { label: "Startups", href: "/business/startups" },
        { label: "Markets", href: "/business/markets" },
        { label: "Policy & Regulation", href: "/business/policy-regulation" },
      ],
    },
    {
      label: "Finance",
      href: "/finance",
      submenu: [
        { label: "Banking", href: "/finance/banking" },
        { label: "Investment", href: "/finance/investment" },
        { label: "Fintech", href: "/finance/fintech" },
        { label: "Capital Markets", href: "/finance/capital-markets" },
      ],
    },
    {
      label: "Economy",
      href: "/economy",
      submenu: [],
    },
    {
      label: "Technology",
      href: "/technology",
      submenu: [],
    },
    {
      label: "Corporate",
      href: "/corporate",
      submenu: [],
    },
    {
      label: "Analysis",
      href: "/analysis",
      submenu: [],
      badge: "WEEKLY",
    },
    {
      label: "Resources",
      href: "/resources",
      submenu: [],
    },
  ];

  const handleMouseEnter = (label: string) => {
    clearTimeout(hoverTimeoutRef.current);
    setHoveredMenu(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200); // slight delay to allow clicks
  };

  return (
    <header className="sticky top-0 z-50 md:px-20 bg-[#1E3A5F] shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          EN<span className="text-red-500">sight</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 relative">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center space-x-1 text-white font-medium hover:text-red-400 relative px-2 py-1 cursor-pointer">
                <Link href={item.href}>{item.label}</Link>
                {item.submenu?.length > 0 && <IconChevronDown size={16} />}
                {item.badge && (
                  <span className="ml-1 text-xs bg-red-500 text-white rounded px-1 py-0.5">
                    {item.badge}
                  </span>
                )}
              </div>

              {item.submenu &&
                item.submenu.length > 0 &&
                hoveredMenu === item.label && (
                  <div className="absolute left-0 top-full mt-2 w-52 bg-surface shadow-md rounded z-50 border border-gray-200">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-primary hover:bg-primary-accent transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* Right Icons */}
        <Group className="hidden md:flex items-center gap-2">
          <ActionIcon
            onClick={() => toggleColorScheme()}
            aria-label="Toggle Theme"
            className="text-white"
          >
            {colorScheme === "light" ? <IconMoon /> : <IconSun />}
          </ActionIcon>
          <IconUserCircle
            size={20}
            className="mx-3 text-white cursor-pointer"
          />
          <SharedButton variant="filled" className="bg-red-500 text-white">
            Subscribe
          </SharedButton>
        </Group>

        {/* Mobile Nav Toggle */}
        <Burger
          opened={opened}
          onClick={toggle}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        />
      </div>

      {/* Mobile Nav Dropdown */}
      {opened && (
        <div className="md:hidden bg-[#1E3A5F] px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className="block text-white py-1">
                {item.label}
              </Link>
              {item.submenu?.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="block text-sm text-gray-300 ml-4 py-1"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
