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
        A highly motivated{" "}
        <span className="font-bold dark:text-white/70">
          Business (Marketing & Sales) graduate
        </span>{" "}
        from{" "}
        <span className="font-bold dark:text-white/70">
          Forman Christian College
        </span>{" "}
        with a{" "}
        <span className="font-bold dark:text-white/70">CGPA of 3.52/4.0</span>.
        Skilled in{" "}
        <span className="font-bold dark:text-white/70">
          Amazon FBA (Private Label & Wholesale)
        </span>
        ,{" "}
        <span className="font-bold dark:text-white/70">
          Airbnb business operations
        </span>
        ,{" "}
        <span className="font-bold dark:text-white/70">digital marketing</span>,
        and{" "}
        <span className="font-bold dark:text-white/70">
          property management
        </span>
        .
      </p>

      <p className="dark:text-white/70">
        I specialize in{" "}
        <span className="font-bold dark:text-white/70">
          market research, product sourcing, listing optimization, PPC
          campaigns, and client relationship management
        </span>
        . Experienced in{" "}
        <span className="font-bold dark:text-white/70">
          building businesses from scratch
        </span>
        , handling{" "}
        <span className="font-bold dark:text-white/70">customer service</span>,
        and driving growth through{" "}
        <span className="font-bold dark:text-white/70">
          data-driven strategies
        </span>
        .
      </p>
    </motion.section>
  );
}
