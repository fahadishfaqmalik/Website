import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import netflix from "@/public/netflix.png";
import brain from "@/public/profile.jpg";
import mentormesh from "@/public/profile.jpg";
import netflix from "@/public/profile.jpg";

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
    organization: "Airbnb",
    title: "Host",
    location: "Lahore (Hybrid) / Pakistan",
    description:
      "Furnished and managed a short-term rental business from scratch, handling listings, marketing, and guest services.Responded customer queries | resolved issues | ensuring smooth stays and repeat bookings | Positive guest reviewsManage operations, Maintenance, Executed marketing campaigns, increase occupancy and retained loyal clients",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2024 – Aug 2025",
  },
  {
    organization: "Amazon Virtual Assistant",
    title: "Freelancer / VA",
    location: "Lahore (Hybrid) / Pakistan",
    description:
      "Managed Amazon private label and wholesale | Product sourcing from China, Branding | Keyword optimization,Listing creation | Competitor analysis. Increased client sales by improving listing visibility and pricing strategies.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 – Dec 2024",
  },
  {
    organization: "Ittifaq Steel Mills",
    title: "Internship",
    location: "Lahore (onsite) / Pakistan",
    description:
      "Corporate communications and client site visits. Gained practical exposure to lead generation and deal closures.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 – Sep 2022",
  },
] as const;


export const projectsData = [
  {
    title: "Lean Opertions",
    description:
      "Front end (Customer focused Items) and back end (7+1 Wastes (8W’s) and 7S’es)",
    tags: ["Eliminate Waste", "MongRemove Variability", "improve throughput"],
    imageUrl: netflix,
    linkedInUrl: "https://www.linkedin.com/in/mralihassan02/details/projects/",

    videoUrls: [
      "https://youtu.be/2oxWYaVgAlw",
      "https://youtu.be/a_m9dGsqKr4",
      "https://youtu.be/pvdZnQqgISM",
      "https://youtu.be/ZGUmc6w9xxo",
      "https://youtu.be/iayiWhdgPZg",
    ],
  },
  {
    title: "Sufi Oil Marketing Plan",
    description:
      "Objective, issue and executive summary | 4P's and geographical graph | Current Marketing situation, Product and competitive review | Market research, Swot analysis",
    tags: ["Marketing and sale campaign"],
    imageUrl: brain,
    linkedInUrl: "https://www.linkedin.com/in/mralihassan02/details/projects/",

    videoUrls: ["https://youtu.be/n4cRFxpJ6Mc"],
  },
  {
    title: "Sansify",
    description:
      "Branding | 4Ps | Build a online brand, Sell around 200+ Bottles in Business bazar | Sale Force Management",
    tags: [
      "Perfume brand" , "Business banazar 23"
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
]; ;


export const skillsData = [
  // E-commerce & Business
  "Amazon Private Label & Wholesale",
  "Airbnb Hosting",
  "Property Management",
  "4Ps",
  "Market Research",
  "Listing Optimization",
  "PPC Management",
  "Client Communication",
  "Negotiation",
  "Sales Force Management",

  // Digital Tools & Marketing
  "Meta Ads",
  "Canva",
  "Microsoft Word",
  "Excel",
  "PowerPoint",
  "Google Docs & Slides",

  // Business Analytics & Strategy
  "Lean Six Sigma (DMAIC)",
  "Lean Operations (TIMWOOD)",
  "Project Management",
] as const;
