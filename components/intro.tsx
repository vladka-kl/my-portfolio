"use client";
import React from "react";
import Image from "next/image";
import avatar from "../public/avatar.jpg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {" "}
            <Image
              src={avatar}
              alt="Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, I'm Vlada.</span> Full Stack Web
        Developer, I'm constantly building the skills to deliver
        <span className="font-bold"> high-quality</span> code, passionate about
        programming languages and new technologies. My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.p>
    </section>
  );
}
