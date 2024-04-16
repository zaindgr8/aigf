/* eslint-disable */

import React from "react";
import { Sparkles } from "lucide-react";

import { SKILLS_LIST } from "@/lib/constants";
import { slideInFromBottom } from "@/lib/animations";
import { Badge } from "@/components/ui";
import { MotionDiv } from "@/components/utils/Motion";
import SVG from "@/components/utils/SVG";

function Skills() {
  return (
    <section
      id="skills"
      className="w-screen min-h-screen side-padding flex flex-col items-center justify-center gap-4 relative text-center"
    >
      {/* Text */}
      <Badge variant="outline">
        <Sparkles className="py-1 text-[#e59cffde]" />
        Why not consider an AI Girlfriend instead of a human one?
      </Badge>
      <h1 className="head-title pt-4">Create Ai Fantasy Girlfriend Today</h1>
      <p className="text-gray-400 max-w-md text-center">
        Say hello to your new AI mate: a bewdy sheila ready to cater to your
        every whim, any time of day or night. She's your loyal cobber, keen as a
        bean to dive deep into your deepest desires, even the most private and
        cheeky ones. Where your wildest fantasies aren't just fair dinkum but
        bloody bonza.
      </p>

      {/* Logos */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {SKILLS_LIST.map((skill, i) => (
          <MotionDiv key={skill} {...slideInFromBottom(i / 10)}>
            <SVG
              className="w-28 h-28 relative [&_svg]:absolute [&_svg]:h-20 [&_svg]:w-20 [&_svg]:left-1/2 [&_svg]:top-1/2 [&_svg]:-translate-x-1/2 [&_svg]:-translate-y-1/2 hover:-translate-y-4 transition-transform duration-300"
              src={`/static/images/logos/${skill}.svg`}
            />
          </MotionDiv>
        ))}
      </div>

      {/* Background video */}
      <video
        className="w-full h-full absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-50 object-cover"
        autoPlay
        playsInline
        loop
        muted
      >
        <source src="/static/video/wormhole.webm" />
      </video>
    </section>
  );
}

export default Skills;

/* eslint-enable */
