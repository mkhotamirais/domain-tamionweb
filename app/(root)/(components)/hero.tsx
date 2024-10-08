"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-36">
      <div className="container space-y-12">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-semibold text-center">
            WELCOME TO <span className="text-blue-600 font-bold">TAMIONWEB</span>
          </h1>
          <p className="text-center">
            Reliable Website Development Services, Customized to Meet Your Specific Needs and Goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size={"lg"} className="w-32">
              <Link href="/projects">Our Projects</Link>
            </Button>
            <Button asChild size={"lg"} variant={"outline"} className="w-32">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
