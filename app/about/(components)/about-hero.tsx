"use client";

import { ChevronDown, FileDown } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutHero() {
  const { scrollY } = useScroll();
  const yOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="py-20">
      <div className="container">
        <motion.div style={{ opacity: yOpacity }} className="flex items-center justify-center">
          <div className="flex flex-col space-y-4 items-center text-center justify-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }}>
              <Avatar className="shadow-xl size-20 bg-primary/30">
                <AvatarImage src="/images/me.png" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="font-montserrat text-xl lg:text-2xl font-bold"
            >
              I am Tami | Web Developer | ReactJs/NextJs
            </motion.h1>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground"
            >
              I Built dynamic, responsive web applications and created seamless user experiences with efficient code.
            </motion.p>

            <br />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-2 justify-center"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  title="cv mkhotami"
                  href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/preview"
                  // href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-44">
                    <FileDown className="mr-1" />
                    <div>Download CV</div>
                  </Button>
                </Link>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-44" variant={"outline"}>
                        About Me
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>About Me</DialogTitle>
                        <DialogDescription>
                          I Built dynamic, responsive web applications and created seamless user experiences with
                          efficient code.
                        </DialogDescription>
                        <DialogDescription>
                          Graduated from UIN Jakarta in 2022 then worked at a photocopy shop while learning web
                          programming from scratch including HTML, CSS, Javascript. Joined Eduwork ReactJS/NodeJS
                          bootcamp, focusing on the MERN Stack including libraries and frameworks like Next.js,
                          Tailwind, Redux, ect. and Have built fullstack MERN projects, REST APIs, Todo List, Fetch
                          Public API. Skilled in MS Office, especially Word and Excel since high school. Committed to
                          advancing my web programming career and continuously exploring new technologies.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                className="*:rounded-full space-x-1"
              >
                <Button asChild size="icon" variant={"link"} className="">
                  <Link href="#contact">
                    <FaEnvelope className="size-5" />
                  </Link>
                </Button>
                <Button asChild size="icon" variant={"link"}>
                  <Link href="https://linkedin.com/in/mkhotami-rais">
                    <SiLinkedin className="size-5" />
                  </Link>
                </Button>
                <Button asChild size="icon" variant={"link"}>
                  <Link href="https://github.com/mkhotamirais">
                    <SiGithub className="size-5" />
                  </Link>
                </Button>
              </motion.div>
              <Link href="#projects" className="text-primary gap-2 text-sm flex flex-col justify-center items-center">
                <div>projects</div>
                <ChevronDown className="size-4 animate-bounce" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
