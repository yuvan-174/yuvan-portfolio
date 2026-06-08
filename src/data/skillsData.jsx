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
    description: "Responsive UIs and performant client-side application state.",
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
    description: "Secure application server logic and robust API endpoint configurations.",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Flask", icon: BiLogoFlask, color: "#E0E0E0" },
    ],
  },

  {
    title: "Database",
    icon: FaDatabase,
    description: "Structured information architectures and optimized query processing workflows.",
    technologies: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },

  {
    title: "Tools",
    icon: FaTools,
    description: "Version control systems, code environments, and build utilities.",
    technologies: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },
];

export default skillsData;