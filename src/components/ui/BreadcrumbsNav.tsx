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
      separator={<IconChevronRight size={16} className="text-[#6B7280]" />}
      className="flex flex-row items-center gap-2"
    >
      {items.map((item, index) => (
        <Anchor
          key={item.href}
          href={item.href}
          className={
            index === items.length - 1
              ? "text-[#D93A3A] font-medium"
              : "text-[#1E40AF] hover:text-[#D93A3A] transition-colors"
          }
        >
          {item.label}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}
