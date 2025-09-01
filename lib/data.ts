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
    title: "Lean Opertions and Deming Wheel",
    description:
      "Front end (Customer focused Items) and back end (7+1 Wastes (8W’s) and 7S’es)",
    tags: ["Eliminate Waste", "MongRemove Variability", "improve throughput"],
    imageUrl:
      "https://drive.google.com/uc?export=view&id=19nzhnIukUOStUphm0ZnJaHufXh9d_K4g",

    linkedInUrl: "https://www.linkedin.com/in/fahad-ishfaq-malik/",

    videoUrls: [
      "https://drive.google.com/uc?export=view&id=19lczcfTY23avauu6KSyBt87eGHdih_O4",
      "https://drive.google.com/uc?export=view&id=19mHJ-NuOEbrscnqycpJJUqYmV943J2lt",
      "https://drive.google.com/uc?export=view&id=19sI9WTeyIajClDqb5rS8VJ6wslCm_lTM",
      "https://drive.google.com/uc?export=view&id=19o4EavckTrLz8tVgCCr6ixm-2Q02K9Mn",
      "https://drive.google.com/uc?export=view&id=19nzhnIukUOStUphm0ZnJaHufXh9d_K4g",
      "https://drive.google.com/uc?export=view&id=1A3py9oafKhdlVyfGLp7rxPp8kK28zSgS",
    ],
  },
  {
    title: "Sufi Oil Marketing Plan",
    description:
      "Objective, issue and executive summary | 4P's and geographical graph | Current Marketing situation, Product and competitive review | Market research, Swot analysis",
    tags: ["Marketing and sale campaign"],
    imageUrl:
      "https://drive.google.com/uc?export=view&id=19y33pzR5uLgxOef_d0QNJndSk5NyqeD-",
    linkedInUrl: "https://www.linkedin.com/in/fahad-ishfaq-malik/",

    videoUrls: [
      "https://drive.google.com/uc?export=view&id=1Qb2xkzDs3ZruaHZNNkyddZ8cDytoiMJt",
      "https://drive.google.com/uc?export=view&id=1g1Y0tjzkVwWNoprLZNLiHe3KeatdII6c",
      "https://drive.google.com/uc?export=view&id=1FLxX7mmM7ymEEsElNAjTGqfFPpvVJttY",
      "https://drive.google.com/uc?export=view&id=19whYYEQOId0FWbWJFs0a_anfMRAMg7uc",
      "https://drive.google.com/uc?export=view&id=1A-Rp8uw_3AZBtg0FfHCfU-gj2Mk1ViSv",
      "https://drive.google.com/uc?export=view&id=1ADRi1H89FLLKMklp0_itWhxgHiazB7vA",
    ],
  },
  {
    title: "Sansify",
    description:
      "Branding | 4Ps | Build a online brand, Sell around 200+ Bottles in Business bazar | Sale Force Management",
    tags: ["Perfume brand", "Business banazar 23"],
    imageUrl:
      "https://drive.google.com/uc?export=view&id=18ecJRaxCWdRovnQB5XqulXWAcUhRN2dZ",
    linkedInUrl: "https://www.linkedin.com/in/fahad-ishfaq-malik/",

    videoUrls: [
      "https://drive.google.com/uc?export=view&id=18TAJOtArGQ3fsJWSzI5VqAd_JuJHUtbP",
      "https://drive.google.com/uc?export=view&id=18aF_Yj98NsBxBjbqLii8PiNoTcdbkhjc",
      "https://drive.google.com/uc?export=view&id=18SDXsIpJ00C6TRhWOHEE9ypFOECC3znc",
      "https://www.youtube.com/watch?v=N_UzIh7VnGg",
    ],
  },
];

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
  "Lean Six Sigma (DMAIC)",
  "Lean Operations (TIMWOOD)",
  "Project Management",
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
] as const;

export const certificatesData = [
  {
    image:
      "https://drive.google.com/uc?export=view&id=17e-lrlHYm1S7Znjqd57LGpwlDbvpc9vn",
    layout: "wide",
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=161Ur7nzIFwlSsW6eFGzO0V0hSt5WBhVt",
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=17TlcxcTQ9OXAseNFmaWwWToyE9uquJ0s",
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=16dGLA2_944D07pO-RFsodywRbFdKjoCD",
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=15kl1YQwgrEzEZMKZudCJA9bnnuDqlb96",
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=161Ur7nzIFwlSsW6eFGzO0V0hSt5WBhVt",
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=16T6NHvkDrXyXWBMb_cD8Pqy8KYnlot6t",
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=165zR9MFLLA-xEyJJh3sZR3LEP0lM5rh4",
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=16JnkiSjiiS0gARKcBjftaxwB6fwkmc6G",
    // layout: "tall",
  },
];
