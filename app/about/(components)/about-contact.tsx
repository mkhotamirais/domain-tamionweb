"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutContact() {
  const toMyEmail = () => {
    window.location.href = "mailto:tami01.job@gmail.com";
  };

  return (
    <div
      id="contact"
      className="scroll-mt-16 py-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/0 to-primary/10"
    >
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[min(100%,38rem)] mx-auto px-3"
      >
        <h1 className="text-3xl font-bold text-center mb-12 text-primary">Contact</h1>
        <p className="text-center -mt-3">
          You may reach me directly via email at{" "}
          <a href="mailto:tami01.job@gmail.com" className="underline text-primary">
            tami01.job@gmail.com
          </a>{" "}
          or through the contact form provided below.
        </p>
        <form className="mt-10 flex flex-col">
          <input
            onFocus={toMyEmail}
            id="sender"
            name="sender"
            type="email"
            required
            maxLength={500}
            placeholder="example@gmail.com"
            className="h-14 rounded-lg bg-inherit border border-black/10 dark:border-white/50 p-4"
          />
          <textarea
            onFocus={toMyEmail}
            id="message"
            name="message"
            required
            maxLength={2000}
            placeholder="your message"
            className="h-52 my-3 bg-inherit rounded-lg border border-black/10 dark:border-white/50 p-4"
          />
        </form>
        <Button onClick={toMyEmail} size={"lg"} className="">
          Send
        </Button>
      </motion.section>
    </div>
  );
}
