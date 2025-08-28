"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 dark:text-white/70">
        A <span className="font-bold dark:text-white/70">Gold Medalist</span> recognized
        on the{" "}
        <span className="font-bold dark:text-white/70">
          Rector's and Dean's List of Honour
        </span>{" "}
        from <span className="font-bold dark:text-white/70">FAST NUCES</span>, I'm a
        passionate{" "}
        <span className="font-bold dark:text-white/70">
          Full-Stack Software Engineer
        </span>{" "}
        specializing in{" "}
        <span className="font-bold dark:text-white/70">
          Next.js, React, Node.js, and MongoDB
        </span>
        . I focus on building{" "}
        <span className="font-bold dark:text-white/70">user-friendly</span> and{" "}
        <span className="font-bold dark:text-white/70">secure web applications</span>,
        and I'm driven by a strong commitment to{" "}
        <span className="font-bold dark:text-white/70">collaborative development</span>.
      </p>
    </motion.section>
  );
}
