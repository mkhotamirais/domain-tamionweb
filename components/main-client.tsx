"use client";

import { useHome } from "@/hooks/use-home";
import React from "react";

export const MainClient = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { nav, closeNav } = useHome();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  const onClick = () => {
    if (nav) closeNav();
  };

  return (
    <main onClick={onClick} className="grow mt-16 relative">
      {children}
    </main>
  );
};
