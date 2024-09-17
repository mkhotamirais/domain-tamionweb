"use client";

import { Logo } from "./logo";
import DesktopNav, { MobileNav } from "./navbar";

export default function Header() {
  return (
    <header className="z-50 backdrop-blur bg-white/50 dark:bg-black/50 fixed left-0 right-0 border-b">
      <div className="container">
        <div className="h-16 flex justify-between items-center">
          <Logo />
          <MobileNav />
          <DesktopNav />
        </div>
      </div>
    </header>
  );
}
