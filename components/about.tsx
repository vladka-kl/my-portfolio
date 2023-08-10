"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-justify">
        Experienced researcher, educator, and translator with 1+ year as a
        Research Analyst at PKF Hospitality Group, and 1+ year as a Chinese
        Language Lecturer at Kyiv National Linguistic University and National
        Pedagogical Dragomanov University, I decided to take different career
        path and completed 5-month intensive Web development training at Wild
        Code School in Germany, Berlin. My core stack is React.js, with basic
        knowledge of Typescript. I'm proficient in Ukrainian, in English and
        Chinese languages. When I'm not coding, I enjoy reading, translating
        poems into Ukrainian, yoga and watching series.
      </p>
    </motion.section>
  );
}
