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

export const SkillsData = [
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
];

export const NavListData = [
  {
    id: 1,
    label: "Home",
    href: "home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Stack",
    href: "stack",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Projects",
    href: "projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M0 448c0 35.3 28.7 64 64 64H224V384c0-17.7 14.3-32 32-32H384V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448zM171.3 75.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm96 32l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM384 384H256V512L384 384z" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Contact",
    href: "contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
      </svg>
    ),
  },
];
