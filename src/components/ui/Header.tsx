"use client";

import { Burger, Group, ActionIcon, Avatar } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/lib/theme";
import { NavLink } from "@/components/common/NavLink";
import { SharedButton } from "@/components/ui/SharedButton";
import { IconUserCircle } from "@tabler/icons-react";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useTheme();

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
    // Add other nav items similarly
  ];

  return (
    <header className="sticky top-5  z-50 bg-surface border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          EN<span className="text-primary-accent">sight</span>
        </Link>

        <nav className="hidden md:flex" aria-label="Main Navigation">
          <ul className="flex gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink href={item.href} submenu={item.submenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Group className="hidden md:flex items-center gap-2">
          <ActionIcon
            onClick={() => toggleColorScheme()}
            aria-label="Toggle Theme"
            className="text-primary cursor-pointer"
          >
            {colorScheme === "light" ? <IconMoon /> : <IconSun />}
          </ActionIcon>
          <IconUserCircle
            size={20}
            className="mx-3 text-primary cursor-pointer"
          />
          <SharedButton variant="outline" className="text-primary">
            Subscribe
          </SharedButton>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className="md:hidden"
          aria-label="Toggle Menu"
        />
      </div>

      {opened && (
        <div className="md:hidden bg-surface p-4">
          {/* Mobile menu items */}
        </div>
      )}
    </header>
  );
}
