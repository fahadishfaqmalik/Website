"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { SiGmail } from "react-icons/si";
import "./css/icons-animation.css"
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=mralihassan02@gmail.com";

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline text-blue-600 hover:text-blue-800 transition"
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          mralihassan02@gmail.com
        </a>
      </p>

      {/* Gmail Icon */}
      <div className="mt-6 flex justify-center">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mralihassan02@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 social-icon rotating-border bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          title="Email me via Gmail"
        >
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
            alt="Gmail Icon"
            className="w-14 h-14"
          />
        </a>
      </div>
    </motion.section>
  );
}
