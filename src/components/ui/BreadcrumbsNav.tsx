// src/components/ui/BreadcrumbsNav.tsx
import { Breadcrumbs, Anchor } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbsNav({ items }: BreadcrumbsNavProps) {
  return (
    <Breadcrumbs
      separator={<IconChevronRight size={16} className="text-text-secondary" />}
    >
      {items.map((item, index) => (
        <Anchor
          key={item.href}
          href={item.href}
          className={
            index === items.length - 1
              ? "text-primary-accent"
              : "text-text-secondary hover:text-primary-accent"
          }
        >
          {item.label}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}
