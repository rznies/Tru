"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create motion values that will animate based on scroll
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.6], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.6], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.6], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.6], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.65], [0, 1.2]);

  return (
    <div 
      ref={ref} 
      className="h-[240vh] w-full bg-black relative overflow-hidden"
    >
      <GoogleGeminiEffect 
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]} 
        title="Sales School at ₹0 Cost" 
        description="Scroll down to see the Gemini animation in action"
      />
    </div>
  );
}
