import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCss3Alt,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoFlask } from "react-icons/bi";

const skillsData = [
  {
    title: "Frontend",
    icon: FaLaptopCode,
    description: "Building clean, interactive user interfaces and managing how the application feels in the browser.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },

  {
    title: "Backend",
    icon: FaServer,
    description: "Writing the core logic, handling databases, and building the APIs that bridge the front-end to the heavy lifting behind the scenes.",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Flask", icon: BiLogoFlask, color: "#E0E0E0" },
    ],
  },

  {
    title: "Database",
    icon: FaDatabase,
    description: "Designing the data foundations and schemas that keep applications running smoothly.",
    technologies: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },

  {
    title: "Tools",
    icon: FaTools,
    description: "The daily essentials I use to track my code, catch bugs, and ship projects.",
    technologies: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },
];

export default skillsData;