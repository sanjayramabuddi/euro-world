"use client";

import Link from "next/link";
import { NAV_LINKS } from "./constants";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-10 text-[#3b2b99]">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`border-b-2 transition ${
              isActive
                ? "border-[#3b2b99] text-[#0092cc]"
                : "border-transparent hover:border-[#0092cc]"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
