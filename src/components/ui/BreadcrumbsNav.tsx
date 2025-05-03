import { Breadcrumbs, Anchor } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbsNav({ items, className }: BreadcrumbsNavProps) {
  return (
    <Breadcrumbs
      separator={<IconChevronRight size={16} className="text-[#6B7280]" />}
      className={`flex flex-row items-center gap-2 ${className || ""}`}
    >
      {items.map((item, index) => (
        <Anchor
          key={item.href}
          component={Link}
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
