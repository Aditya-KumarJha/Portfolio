import * as SiIcons from "react-icons/si";
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 8, suffix: "+", label: "Personal & Academic Projects" },
  { value: 5, suffix: "+", label: "Hackathons Finalist" },
  { value: 20, suffix: "+", label: "Technologies Learned" },
  { value: 150, suffix: "+", label: "GitHub Contributions 2025" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & GitHub Specialist",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const skillList = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "MS SQL",
  "Python",
  "Java",
  "C",
  "C++",
  "Git",
  "VS Code",
  "Flask",
  "Vercel",
  "Render",
  "Netlify",
];

const skillIconMap = {
  HTML: SiIcons.SiHtml5,
  CSS: SiIcons.SiCss3,
  SCSS: SiIcons.SiSass,
  JavaScript: SiIcons.SiJavascript,
  React: SiIcons.SiReact,
  TypeScript: SiIcons.SiTypescript,
  "Next.js": SiIcons.SiNextdotjs,
  "Tailwind CSS": SiIcons.SiTailwindcss,
  Bootstrap: SiIcons.SiBootstrap,
  "Node.js": SiIcons.SiNodedotjs,
  "Express.js": SiIcons.SiExpress,
  MongoDB: SiIcons.SiMongodb,
  PostgreSQL: SiIcons.SiPostgresql,
  "MS SQL": SiIcons.SiMicrosoftsqlserver,
  Python: SiIcons.SiPython,
  Java: SiIcons.SiJava,
  C: SiIcons.SiC,
  "C++": SiIcons.SiCplusplus,
  Git: SiIcons.SiGit,
  "VS Code": SiIcons.SiVisualstudiocode,
  Flask: SiIcons.SiFlask,
  Vercel: SiIcons.SiVercel,
  Render: SiIcons.SiRender,
  Netlify: SiIcons.SiNetlify,
};

const expCards = [
  {
    review: "Built multiple web projects during college, focusing on clean UI and responsive designs. Gained hands-on experience with modern frontend technologies.",
    imgPath: "/images/logo.png",
    logoPath: "/images/logo.png",
    title: "Frontend Projects",
    date: "2023 - Present",
    responsibilities: [
      "Developed responsive websites using React, Tailwind CSS, and JavaScript.",
      "Implemented dynamic features and interactive components for better UX.",
      "Deployed projects using Vercel and Netlify for live demonstrations.",
    ],
  },
  {
    review: "Actively participated in hackathons, solving real-world problems and building working prototypes under tight deadlines.",
    imgPath: "/images/hackathon.png",
    logoPath: "/images/hackathon.png",
    title: "Hackathon & Coding Experience",
    date: "2024 - Present",
    responsibilities: [
      "Competed in national and inter-college hackathons with innovative solutions.",
      "Worked in teams to design, develop, and present functional prototypes.",
      "Enhanced problem-solving, collaboration, and project presentation skills.",
    ],
  },
  {
    review: "Created several personal projects that demonstrate full-stack development skills and practical application of concepts learned in college.",
    imgPath: "/images/mern.png",
    logoPath: "/images/mern.png",
    title: "Personal Projects",
    date: "2025 - Present",
    responsibilities: [
      "Developed and hosted projects using MERN stack and REST APIs.",
      "Implemented authentication, CRUD operations, and responsive UIs.",
      "Explored new tools and libraries to improve project performance.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Project Mentor",
    review:
      "Quickly grasped complex requirements and turned them into working prototypes. Demonstrated initiative, clean code practices, and a strong ability to iterate based on feedback.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Hackathon Teammate",
    review:
      "Collaborating on a tight deadline, they kept the team focused, contributed core features, and adapted to changing scope without losing quality. Their problem-solving under pressure stood out.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Course Instructor",
    review:
      "Consistently submitted thoughtful, well-engineered projects. Showed growth in full-stack concepts, version control workflows, and an eagerness to help peers understand difficult topics.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Open Source Maintainer",
    review:
      "Provided valuable contributions with clear pull requests, good documentation, and respectful communication. Helped improve project stability and showed a solid grasp of collaboration on public repos.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Peer Collaborator",
    review:
      "Great communicator and reliable teammate. Took ownership of frontend features, ensured responsive design, and helped debug tricky integration issues, making the whole project smoother.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Project Reviewer",
    review:
     "Built impressive personal projects demonstrating clean UI, responsive design, and smooth functionality. Shows a clear interest in practical development.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/heyadityajha?igsh=bzVuNXllN2hscW9s", 
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/1E7hVUxAif/",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    url: "https://x.com/aditya_jha_12",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/aditya-kumar-jha-b73555299",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Aditya-KumarJha",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  skillList,
  skillIconMap,
  navLinks,
};
