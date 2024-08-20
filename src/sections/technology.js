// @flow strict

// import { skillsData } from "@/utils/data/skills";
// import { skillsImage } from "@/utils/skill-image";

import SectionHeader from "components/section-header";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillsData } from "utils/data/skills";
import { skillsImage } from "utils/skill-image";

function Technology() {
  return (
    <div
      id="skills"
      className="relative z-50 px-1 lg:px-20"
    >
       <SectionHeader
          slogan="Whats technology we use"
          title="Technology"
        />

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-48 min-w-fit h-fit  flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-violet-500   shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  {/* <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div> */}
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className=" text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Technology;