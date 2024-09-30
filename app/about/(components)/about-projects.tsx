"use client";

import { MouseEvent, useState } from "react";
import { projectsList } from "@/lib/project-list";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function AboutProjects() {
  const [cari, setCari] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<string[]>([]);
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const pathname = usePathname();
  const path1 = pathname.split("/")[1];

  //   const badges = [...new Set(projectsList.flatMap((project) => project.tools))];
  const badges = Array.from(new Set(projectsList.flatMap((project) => project.tools)));

  const filteredProjectsList =
    pathname === "/projects"
      ? projectsList
          .filter((item) => item.title.toLowerCase().includes(cari.toLowerCase()))
          .filter((item) => selectedBadge.every((badge) => item.tools.includes(badge)))
          .sort((a, b) => (a.isPrimary === b.isPrimary ? 0 : a.isPrimary ? -1 : 1))
      : projectsList
          .filter((item) => item.isPrimary)
          .sort((a, b) => (a.isPrimary === b.isPrimary ? 0 : a.isPrimary ? -1 : 1));

  const onBadge = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const badge: string = target?.innerText;
    if (selectedBadge.includes(badge)) {
      setSelectedBadge((prev) => prev.filter((p) => p !== badge));
    } else setSelectedBadge((prev) => [...prev, badge]);
  };

  return (
    <div
      id="projects"
      className="scroll-mt-16 py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/0 to-primary/5"
    >
      <div className="container">
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold text-center mb-12 text-primary">Projects</h1>

          {/* search input */}
          {pathname === "/projects" && (
            <Input
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              placeholder="Search project.."
              className="bg-cyan-100/15 mb-4"
            />
          )}

          {/* skills badges */}
          {pathname === "/projects" && (
            <div className="flex gap-1 flex-wrap my-4 justify-center">
              {badges.map((item, i) => (
                <Badge
                  variant={selectedBadge.includes(item) ? "secondary" : "default"}
                  key={i}
                  className="cursor-pointer"
                  onClick={onBadge}
                >
                  {item}
                </Badge>
              ))}
            </div>
          )}

          {/* content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-8">
            {filteredProjectsList.map((item, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-lg shadow-md shadow-primary/50`}>
                <div>
                  <Image
                    src={item.imagePath ?? "https://placehold.co/600x400/png"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="p-3 text-center">
                  <Link href={item?.href ?? "#"}>
                    <h3 className="font-semibold text-lg text-primary group-hover:underline">{item.title}</h3>
                  </Link>
                </div>

                {/* view and visit */}
                <div className="z-10 absolute top-0 right-0 p-2 scale-0 group-hover:scale-100 transition flex gap-2">
                  <Button size={"sm"} onClick={() => setShowDetail((prev) => (prev === null ? i : null))}>
                    {showDetail === i ? "Hide" : "Show"} Detail
                  </Button>
                  <Button asChild size={"sm"}>
                    <Link href={item.href ?? "#"}>
                      Visit
                      <sup>
                        <ExternalLink className="size-3 ml-1" />
                      </sup>
                    </Link>
                  </Button>
                </div>

                {/* detail */}
                <div
                  className={`absolute ${
                    showDetail === i ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  } inset-0 bg-black/80 text-white flex items-center justify-center transition p-4`}
                >
                  <div className="flex flex-col space-y-4 justify-center items-center text-center">
                    <h3 className="text-primary text-lg font-semibold">{item.title}</h3>
                    <p className="grow font-lora text-sm">{item.description}</p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {item.tools.map((itm, idx) => (
                        <Badge key={idx}>{itm}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* reset */}
          {pathname === "/projects" && filteredProjectsList.length === 0 && (
            <div className="flex justify-center items-center flex-col gap-2 italic text-xl mt-12">
              <div>No Result</div>
              <Button
                onClick={() => {
                  setCari("");
                  setSelectedBadge([]);
                }}
                type="button"
                className=""
              >
                Reset
              </Button>
            </div>
          )}
          {path1 !== "projects" && (
            <div className="flex justify-center">
              <Button asChild className="" size={"lg"}>
                <Link href="/projects">All Projects</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
