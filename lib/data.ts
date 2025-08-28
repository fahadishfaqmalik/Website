import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netflix from "@/public/netflix.png";
import brain from "@/public/brain.jpg";
import mentormesh from "@/public/mentor-mesh-v1.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    organization: "Systems Limited",
    title: "Internee",
    location: "Lahore / Pakistan",
    description:
      "Built a full-stack e-commerce website using the MERN stack with separate panels for users and admins. Users could securely browse, add to cart, and checkout. Admins could manage the store with full CRUD functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 – Aug 2024",
  },
  {
    organization : "FAST NUCES" , 
    title: "Teaching Assistant",
    location: "Lahore / Pakistan",
    description:
      "Assisted over 150+ students by evaluating quizzes and assignments and providing guidance in Data Structures (Spring 2024), Design and Analysis of Algorithms (Spring 2024), and Artificial Intelligence (Fall 2024).",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 – Dec 2024",
  }
] as const;


export const projectsData = [
  {
    title: "Movie Streaming Platform",
    description:
      "I built a Netflix-style movie platform with Next.js. It includes browsing, search, ratings, and a real-time admin panel.",
    tags: [
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Node.js",
      "Express.js",
      "Material UI",
    ],
    imageUrl: netflix,
    linkedInUrl: "https://www.linkedin.com/in/mralihassan02/details/projects/",
    githubUrl: "https://github.com/Ali-Hassan02/Movie-Streaming-Website",
    videoUrls: [
      "https://youtu.be/2oxWYaVgAlw",
      "https://youtu.be/a_m9dGsqKr4",
      "https://youtu.be/pvdZnQqgISM",
      "https://youtu.be/ZGUmc6w9xxo",
      "https://youtu.be/iayiWhdgPZg",
    ],
  },
  {
    title: "🧠 AI-Powered Brain Ischemic Stroke Segmentation",
    description:
      "AI-powered stroke segmentation app using Federated Learning with Next.js and Flask — secure, decentralized, and privacy-preserving.",
    tags: ["Next.js", "Flask", "Tailwind", "Material UI"],
    imageUrl: brain,
    linkedInUrl: "https://www.linkedin.com/in/mralihassan02/details/projects/",
    githubUrl:
      "https://github.com/Ali-Hassan02/AI-Powered-Web-for-Brain-Stroke-Segmentation",

    videoUrls: ["https://youtu.be/n4cRFxpJ6Mc"],
  },
  {
    title: "Mentor Mesh",
    description:
      "Mentor Mesh connects students and teachers within an organization to simplify Final Year Project (FYP) selection. Teachers post project ideas, and students explore teacher profiles to find the right mentor.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "Chakra UI",
    ],
    imageUrl: mentormesh,
    linkedInUrl: "https://www.linkedin.com/in/mralihassan02/details/projects/",
    githubUrl: "https://github.com/RidaZaidi05/Mentor-Mesh",
    videoUrls: [
      "https://youtu.be/2YnwgYh8mu4",
      "https://youtu.be/bAXbcPbSWco",
      "https://youtu.be/2YnwgYh8mu4",
    ],
  },
] ;


export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "Tailwind",
  "MongoDB",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask"
] as const;
