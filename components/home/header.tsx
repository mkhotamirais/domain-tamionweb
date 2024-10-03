"use client";

import { ModeToggle } from "../theme/mode-toggle";
import TheoryBtn from "../theory-btn";
import DesktopNav from "./desktop-nav";
import { Logo } from "./logo";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="z-50 backdrop-blur bg-white/50 dark:bg-black/50 fixed left-0 right-0 border-b">
      <div className="container">
        <div className="h-16 flex justify-between items-center">
          <Logo />
          <div className="flex gap-4 items-center">
            <DesktopNav />
            <TheoryBtn />
            <ModeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
