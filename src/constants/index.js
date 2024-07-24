import {
  p1,
  p2,
  p3,
  p4,
  p5,
  insomnia,
  redux,
  canva,
  chakra,
  postman,
  astudio,
  idea,
  express,
  jquery,
  mysql,
  mongo,
  html,
  css,
  js,
  bootstrap,
  react,
  gsap,
  kotlin,
  python,
  java,
  node,
  vs,
} from "../assets/index";

export const SkillsData = [redux, astudio, idea, jquery, gsap, kotlin, java];

export const ProjectCardData = [
  {
    img: p1,
    title: "InsightBlaze",
    git: "https://github.com/Shasatya/Insight-Blaze",
    site: "",
    used: ["MongoDB", "Express.js", "React", "Node.js"],
    id: 1,
  },
  {
    img: p2,
    title: "CoinQuake",
    git: "https://github.com/Shasatya/CoinQuake",
    site: "https://coin-quake.vercel.app/",
    used: ["React", "Chakra UI", "Coingecko-Api"],
    id: 2,
  },
  {
    img: p3,
    title: "Quickfix",
    git: "https://github.com/Shasatya/Quickfix",
    site: "https://quickfix-ochre.vercel.app/",
    used: ["React", "Saas"],
    id: 3,
  },
  {
    img: p4,
    title: "Complify",
    git: "https://github.com/Shasatya/complify",
    site: "https://complify.vercel.app/",
    used: ["HTML", "CSS", "JavaScript"],
    id: 4,
  },
  {
    img: p5,
    title: "FeastFinderz",
    git: "https://github.com/Shasatya/feast-finderz",
    site: "https://feast-finderz.vercel.app/",
    used: ["HTML", "CSS", "JavaScript"],
    id: 5,
  },
];

export const NavListData = [
  {
    id: 1,
    label: "Home",
    href: "home",
  },
  {
    id: 2,
    label: "Stack",
    href: "stack",
  },
  {
    id: 3,
    label: "Projects",
    href: "projects",
  },
  {
    id: 4,
    label: "Contact",
    href: "contact",
  },
];

export const StackData = [
  {
    key: 1,
    title: "Programming Languages",
    icons: [js, python],
  },
  {
    key: 2,
    title: "Front-End",
    icons: [html, css, react, chakra, bootstrap],
  },
  {
    key: 3,
    title: "Back-End",
    icons: [node, express],
  },
  {
    key: 4,
    title: "Database Management",
    icons: [mongo, mysql],
  },
  {
    key: 5,
    title: "Tools",
    icons: [vs, idea, insomnia, postman, canva],
  },
];
