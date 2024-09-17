"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { Logo } from "./logo";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navMenu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function DesktopNav() {
  const pathname = usePathname();
  const path1 = pathname.split("/")[1];
  return (
    <div className="hidden md:block">
      <nav className="flex items-center gap-6">
        <div className="flex items-center gap-6 text-sm">
          {navMenu.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`${path1 === item.href.split("/")[1] ? "text-blue-600" : ""} hover:text-blue-500`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button variant={"outline"}>
          <Link href="/about#contact">Contact Us</Link>
        </Button>
        <ModeToggle />
      </nav>
    </div>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const path1 = pathname.split("/")[1];

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="border-none backdrop-blur bg-secondary/50">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="hidden">
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </SheetDescription>
          <div className="flex flex-col gap-6 text-sm pt-8">
            {navMenu.map((item, i) => (
              <SheetClose asChild key={i}>
                <Link
                  key={i}
                  href={item.href}
                  className={`${path1 === item.href.split("/")[1] ? "text-blue-600" : ""} hover:text-blue-500`}
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetHeader>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
          <SheetClose asChild>
            <Button asChild variant={"outline"}>
              <Link href="/about#contact">Contact Us</Link>
            </Button>
          </SheetClose>
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
