"use client";

import { ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function WorkshopsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/workshops")) return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6">
      {ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/workshops${item.href}`,
          level: 0,
          isSheet,
        };
        if (item.heading === "Workshops") {
          return <SubLink key={index} {...modifiedItems} />;
        }
      })}
    </div>
  );
}
