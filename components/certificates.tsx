"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { certificatesData } from "@/lib/data";
import Image from "next/image";
export default function Certificates() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="certificates"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      {/* Section Heading */}
      <div className="text-center mb-10">
        <SectionHeading>My Awards</SectionHeading>
        <div className="flex justify-center mt-2">
          <span className="w-24 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </div>
      </div>

      {/* Masonry Style Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="
            grid gap-4 
            grid-cols-1 
            sm:grid-cols-2
            auto-rows-[200px] 
            sm:auto-rows-[250px] 
            lg:auto-rows-[300px]
          "
        >
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl shadow-md group
                ${theme === "light" ? "bg-white" : "bg-white/5"}
                ${cert.layout === "wide" ? "sm:col-span-2 sm:row-span-2" : ""}
              `}
            >
              <Image
                src={cert.image}
                alt="Certificate"
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                {}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
