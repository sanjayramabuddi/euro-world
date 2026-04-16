"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavLink } from "./types";

type MobileMenuProps = {
  links: NavLink[];
};

export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button onClick={() => setOpen(true)}>
        <Menu className="text-white" size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-black text-white z-50 
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 mt-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg border-b border-gray-700 pb-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
