"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { MacbookScrollDemo } from "./components/MacbookScrollDemo";
import { TextGenerateEffectDemo } from "./components/TextGenerateEffect";

export default function Home() {
  const geminiRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: geminiRef,
    offset: ["start start", "end start"],
  });

  // Create motion values that will animate based on scroll
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.6], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.6], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.6], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.6], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.65], [0, 1.2]);

  return (
    <div className="flex flex-col bg-black">
      {/* First section for Gemini Effect */}
      <div 
        ref={geminiRef} 
        className="h-[140vh] w-full relative overflow-hidden"
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

      <div>
        <TextGenerateEffectDemo />
      </div>
      
      {/* Second section with clear separation for MacbookScroll */}
      <div className="w-full bg-black">
        <MacbookScrollDemo />
      </div>

      
    </div>
  );
}
