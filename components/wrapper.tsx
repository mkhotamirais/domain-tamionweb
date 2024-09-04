"use client";

import { useHome } from "@/hooks/use-home";
import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-6xl mx-auto h-full">{children}</div>;
};

export const MainClient = ({ children }: { children: React.ReactNode }) => {
  const { nav, closeNav } = useHome();
  const onClick = () => {
    if (nav) closeNav();
  };
  return (
    <main onClick={onClick} className="grow">
      {children}
    </main>
  );
};
