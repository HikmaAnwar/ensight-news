// components/ui/Header.tsx
"use client";

import { useState } from "react";
import { Burger, Group, Button, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/lib/theme";
import { NavLink } from "@/components/common/NavLink";
import { Submenu } from "@/components/common/Submenu";

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
    <header className="sticky top-0 z-50 bg-surface border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-text-primary">
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
          >
            {colorScheme === "light" ? <IconMoon /> : <IconSun />}
          </ActionIcon>
          <Button variant="outline">Profile</Button>
          <Button color="primary-accent">Subscribe</Button>
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
