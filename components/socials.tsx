"use client";

import { FaEnvelope } from "react-icons/fa6";
import { SiGithub, SiLinkedin } from "react-icons/si";
const socialsMenu = [
  { href: "https://github.com/mkhotamirais", icon: SiGithub },
  { href: "https://www.linkedin.com/in/mkhotami-rais", icon: SiLinkedin },
  { href: "mailto:tami01.job@gmail.com", icon: FaEnvelope },
];

export const Socials = () => {
  return (
    <div className="flex gap-4 sm:gap-5 items-center justify-center">
      {socialsMenu.map((item, i) => (
        <a key={i} title={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
          <item.icon className="size-5 text-primary" />
        </a>
      ))}
    </div>
  );
};
