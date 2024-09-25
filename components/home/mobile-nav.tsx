import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { navMenu } from "@/lib/navbar-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

export default function MobileNav() {
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
