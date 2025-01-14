import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  yhd,
  shobha,
  maxin,
  python,
  django,
  postgresql,
  mysql,
  sqlite,
  nextjs,
  postman,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Sobha Engineers",
    icon: shobha,
    iconBg: "#383E56",
    date: "Nov 2023 - Nov 2023",
    points: [
      "Developed and maintained responsive websites using HTML, CSS, and JavaScript.",
      "Enhanced the website's functionality and design to align with the company's branding and user needs.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Maxin Hydro Dynamic",
    icon: maxin,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Created user-friendly web pages and ensured cross-browser compatibility.",
      "Improved website performance and optimized code for better loading speeds.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Yash Home Decors",
    icon: yhd,
    iconBg: "#383E56",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Designed and built a custom web application for managing business logic and inventory.",
      "Implemented features for order tracking, stock management, and reporting to improve operational efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Prabeen delivered an exceptional website for our company, transforming our vision into a digital reality. His attention to detail, technical expertise, and ability to meet deadlines made the entire process smooth and stress-free. Highly recommended for anyone looking for a dependable web developer!",
    name: "Shobha Engieers",
    designation: "CEO",
    company: "Shobha Engieers",
    image: shobha,
  },
  {
    testimonial:
      "Working with Prabeen was an absolute pleasure. He not only created a visually stunning website but also implemented innovative solutions to improve our online functionality. His understanding of business needs and creativity truly set him apart from the rest.",
    name: "Maxin",
    designation: "Co-Founder",
    company: "Maxin Hydro Dynamic",
    image: maxin,
  },
  {
    testimonial:
      "Prabeen's expertise in web development has been a game-changer for our digital presence. From design to implementation, he showcased professionalism and deep technical knowledge, ensuring our website met the highest standards. We couldn't be happier with the results!",
    name: "Yash",
    designation: "CEO",
    company: "Yash Home Decors",
    image: yhd,
  },
];

const projects = [
  {
    name: "Record Keeper",
    description:
      "A python file to handle MySql database with good CLI. It can be used to store and retrieve data from a database.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/prabeenragupathi/RecordKeeper",
  },
  {
    name: "CV Template",
    description:
      "This is my cv project. This project is build with html, css and javascript. In this projects I use some animations look good. This webpage is responsive to all devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/prabeenragupathi/cv",
  },
  {
    name: "musix",
    description: "A spotify clone using react js and spotify api.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Spotify API",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/prabeenragupathi/musix",
  },
];

export { services, technologies, experiences, testimonials, projects };
