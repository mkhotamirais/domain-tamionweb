import Link from "next/link";
import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`${className} flex items-center gap-1 origin-left max-w-min`}>
      <LogoSvg />
      <div className="flex items-center text-lg font-bold">
        <span>TAMI</span>
        <span>
          <LogoSvg size="18" />
        </span>
        <span>NWEB</span>
      </div>
    </Link>
  );
}

export function LogoSvg({ size = "32" }: { size?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="50" fill="#007BFF" />

      <path
        d="M60 20 L60 100 M20 60 L100 60 M60 60 L80 40 M60 60 L40 80"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle cx="60" cy="20" r="4" fill="#FFFFFF" />
      <circle cx="60" cy="100" r="4" fill="#FFFFFF" />
      <circle cx="20" cy="60" r="4" fill="#FFFFFF" />
      <circle cx="100" cy="60" r="4" fill="#FFFFFF" />
    </svg>
  );
}
