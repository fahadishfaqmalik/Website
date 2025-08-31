"use client";
import { useRef, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import ProjectDemo from "./projectDemo";
import "./css/icons-animation.css";
import "./css/button-animation.css";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  linkedInUrl,
  videoUrls,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const linkedInRef = useRef<HTMLAnchorElement>(null);
  const githubRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Clear focus when page regains visibility (user returns from external link)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        linkedInRef.current?.blur();
        githubRef.current?.blur();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* ✅ Project Image on top, no overlap */}
        <div className="relative w-full h-[14rem] rounded-t-lg overflow-hidden shadow-2xl">
          {/* Blurred background */}
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover blur-md scale-110"
          />

          {/* Actual image */}
          <Image
            src={imageUrl}
            alt="Project I worked on"
            fill
            className="object-contain relative z-10"
          />
        </div>

        {/* Project Details */}
        <div className="pt-4 pb-7 px-5 sm:px-10 flex flex-col">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* ✅ Social + Demo Icons (stay below text) */}
          <div className="flex gap-4 mt-6">
            <a
              ref={linkedInRef}
              className="social-icon rotating-border bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              onBlur={(e) =>
                e.currentTarget.classList.remove("force-normal-scale")
              }
            >
              <BsLinkedin />
            </a>

            <ProjectDemo videoUrls={videoUrls} />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
