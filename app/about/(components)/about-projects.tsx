"use client";

import { MouseEvent, useState } from "react";
import { projectsList } from "@/lib/project-list";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AboutProjects() {
  const [cari, setCari] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<string[]>([]);
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
      className="scroll-mt-16 py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/0 to-primary/15"
    >
      <div className="container">
        <div className="min-h-screen px-3">
          <h1 className="text-3xl font-bold text-center mb-12 text-primary">Projects</h1>
          {pathname === "/projects" && (
            <Input
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              placeholder="Search project.."
              className="bg-cyan-100/15 mb-4"
            />
          )}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
            {filteredProjectsList.map((item, i) => (
              <Card key={i} className="group relative bg-primary/5 flex flex-col overflow-hidden">
                <div className="translate-y-full scale-x-0 group-hover:translate-y-0 group-hover:scale-x-100 transition absolute inset-0 top-3/4 z-10 flex items-center justify-center">
                  <Button asChild className="px-8 backdrop-blur bg-black/15">
                    <Link href={item.href || "#"} replace>
                      Visit
                    </Link>
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="grow font-lora">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-1">
                  {item.tools.map((itm, idx) => (
                    <Badge key={idx}>{itm}</Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
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
