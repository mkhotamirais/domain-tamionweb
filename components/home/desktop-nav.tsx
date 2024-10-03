"use client";

import { navMenu } from "@/lib/navbar-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";

export default function DesktopNav() {
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [activeClick, setActiveClick] = useState<string | null>(null);

  const pathname = usePathname();
  const path1 = pathname.split("/")[1];

  useEffect(() => {
    setActiveClick(path1);
  }, [path1]);

  return (
    <div className="hidden md:block">
      <nav className="flex items-center gap-6">
        <div className="flex items-center text-sm">
          {navMenu.map((item, i) => (
            <div
              onMouseEnter={() => setActiveHover(item.label)}
              onMouseLeave={() => setActiveHover(null)}
              key={i}
              className="relative group"
            >
              <Link
                onClick={() => setActiveClick(item.href.split("/")[1])}
                href={item.href}
                className="z-50 px-4 py-2 block"
              >
                {item.label}
              </Link>
              {activeClick === item.href.split("/")[1] && (
                <motion.div layoutId="activeClick" className="h-0.5 w-full bottom-0.5 absolute bg-primary" />
              )}
              <AnimatePresence>
                {activeHover === item.label && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    layoutId="activeHover"
                    className="-z-10 absolute bg-primary/25 inset-0 inset-y-1 rounded-md"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <Button asChild variant={"outline"}>
          <Link href="/about#contact">Contact Us</Link>
        </Button>
      </nav>
    </div>
  );
}
