import { useState } from "react";
import Header from "../components/Header";
import SkillsCat from "../components/SkillsCat";
import HelloMe from "../ui/HelloMe";

// React Icons Imports
import { DiCss3, DiHtml5, DiNodejs, DiPython, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiTypescript,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiCloudinary,
  SiStripe,
  SiGooglegemini,
} from "react-icons/si";

const Skills = () => {
  const [hoveredTool, setHoveredTool] = useState(null);

  const toolBoxIcons = [
    { name: "React", icon: <DiReact size={75} /> },
    { name: "Next.js", icon: <TbBrandNextjs size={65} /> },
    { name: "JavaScript", icon: <RiJavascriptFill size={65} /> },
    { name: "TypeScript", icon: <SiTypescript size={48} /> },
    { name: "Python", icon: <DiPython size={65} /> },
    { name: "C++", icon: <SiCplusplus size={50} /> },
    { name: "C", icon: <SiC size={45} /> },
    { name: "CSS", icon: <DiCss3 size={60} /> },
    { name: "HTML", icon: <DiHtml5 size={58} /> },
    { name: "TailwindCSS", icon: <RiTailwindCssFill size={60} /> },
    { name: "Bootstrap", icon: <SiBootstrap size={60} /> },
    { name: "Node.js", icon: <DiNodejs size={100} /> },
    { name: "Express.js", icon: <SiExpress size={60} /> },
    { name: "Prisma ORM", icon: <SiPrisma size={56} /> },
    { name: "MongoDB", icon: <SiMongodb size={60} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={58} /> },
    { name: "Firebase", icon: <SiFirebase size={58} /> },
    { name: "GitHub", icon: <BsGithub size={55} /> },
    { name: "Vercel", icon: <SiVercel size={60} /> },
    { name: "Cloudinary", icon: <SiCloudinary size={60} /> },
    { name: "Stripe API", icon: <SiStripe size={45} /> },
    { name: "Figma", icon: <FiFigma size={54} /> },
    { name: "Gemini", icon: <SiGooglegemini size={58} /> },
  ];

  return (
    <section
      id="skills"
      className="mx-3 border-b border-gray-600 pb-5 sm:mx-auto sm:max-w-[85rem] sm:px-5"
    >
      {/* Grid Layout */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* HelloMe */}

        {/* My ToolBox */}
        <div className="rounded-2xl bg-gray-100 p-4">
          <h4 className="text-left text-5xl font-extrabold lg:text-7xl">
            My ToolBox
          </h4>
          <p className="w-60 pb-3 tracking-wide text-gray-600">
            Explore the tools and technologies I use to develop my projects
          </p>
          <div className="flex flex-wrap gap-4 relative">
            {toolBoxIcons.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center justify-center transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredTool(item.name)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                {/* Icon */}
                <span className="cursor-pointer">{item.icon}</span>

                {/* Tooltip */}
                {hoveredTool === item.name && (
                  <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-1 text-xs text-white shadow-md opacity-90 transition-opacity duration-300">
                    {item.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-gray-100 p-4">
          <HelloMe />
        </div>
      </div>
      <div className="grid gap-6 pt-5 md:grid-cols-2">
        {/* Left: SkillsCat */}
        <div className="rounded-2xl bg-gray-100 p-4">
          <SkillsCat />
        </div>

        {/* Right: Education */}
        <div className="relative rounded-2xl bg-blue-800 p-6 md:p-8 text-gray-100 transition-all duration-500 hover:scale-105">
          <div className="flex items-center justify-between pb-4">
            <h4 className="text-5xl font-extrabold lg:text-7xl">Education</h4>
            <p className="rounded-3xl bg-gray-900 px-4 py-1 text-gray-200">
              2022 - 2026
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl">
              Indian Institute of Information Technology Ranchi
            </p>
            <div className="flex gap-2 md:text-xl">
              <p>B.Tech in Data Science and Artificial Intelligence</p>
              <strong>(CGPA 9.43 / 10.00)</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: HelloMe & My ToolBox */}
    </section>
  );
};

export default Skills;
