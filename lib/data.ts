import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import adopts from "@/public/adopts.png";
import lazyautumn from "@/public/lazyautumn.png";
import travelmemory from "@/public/travelmemory.png";
import swibble from "@/public/swibble.png";

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
    title: "Graduated bootcamp",
    location: "Berlin, Germany",
    description: "I graduated after 5 months of studying",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Research Assistant",
    location: "Kyiv, Ukraine",
    description:
      "I worked as a research assistant for almost 2 years, improved research skills",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Lazy Autumn Recipes",
    description:
      "My first project as a student in Wild Code School. It is a recipe website  where users can filter recipes by choosing an ingredient. It was created in team of four and uses JS, HTML and CSS",
    tags: ["JS", "HTML", "CSS"],
    imageUrl: lazyautumn,
  },
  {
    title: "Adopts",
    description:
      "Adopt Don`t Shop use The Dog API to provide with information about different breeds and display dogs' photos. The initial goal of the project is to promote adoption over buying, help with choice of the dog and the most important - brigthen up the mood of a user.",
    tags: ["React", "CSS", "HTML5", "JavaScript", "Axios"],
    imageUrl: adopts,
  },
  {
    title: "Travel Memory Game",
    description:
      "Travel Memory Game is a React application built in 24 hours for a school hackathon project at the Wild Code School in Berlin",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: travelmemory,
  },
  {
    title: "Swibble",
    description:
      "Swibble is a Next.js customer management application built as a third team project",
    tags: ["Next.js", "Gitlab", "ExpressJS", "Tailwind", "MySQL"],
    imageUrl: swibble,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Express",
  "Python",
] as const;
