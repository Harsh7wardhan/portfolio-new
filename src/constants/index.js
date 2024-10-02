import {
  mobile,
  reactLogo,
  ml,
  webnew,
  backend,
  creator,
  data,
  dsa,
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
  zensar,
  starbucks,
  teknogeeks,
  virtusa,
  omind,
  edyoda,
  tesla,
  shopify,
  carrent,
  threads,
  launcheazy,
  launcheazylogo,
  virtushop,
  jobit,
  tripguide,
  threejs,
  python,
  cpp,
  java,
  cx,
  bot,
  assist,
} from "../assets";

export const navLinks = [
  {
    id: "resume",
    title: "Resume",
  },
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
    title: "Back End Development",
    icon: webnew,
  },
  {
    title: "Front End Development",
    icon: reactLogo,
  },
  {
    title: "SaaS & Customer Experience Products",
    icon: dsa,
  },
  {
    title: "AI & Machine Learning",
    icon: ml,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "SDE-1",
    company_name: "Omind",
    icon: omind,
    iconBg: "white",
    date: "Feb 2024 - current",
    points: [
      "Designed the architecture of an AI-powered SaaS platform for customer experience enhancement, featuring a ReactJS frontend with monorepos, a Node.js/Express backend with microservices, and OLAP and SQL databases",
      "Developed and implemented multi-channel campaign features (SMS, email, WhatsApp) successfully converting captured leads into customers for numerous clients",
      "Developed automation tools such as segmentation and journeys to streamline targeted workflows, alongside developing diverse products like chatbots, email bots, and an omni-channel smart inbox"
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Launcheazy",
    icon: launcheazylogo,
    iconBg: "white",
    date: "Nov 2023 - Feb 2024",
    points: [
      "Engineered a comprehensive end to end drag-and-drop GrapesJS MJML editor using NextJS , React, GenAI, Redux integral to product success and internal workflows",
      "Led the development of key features such as user sequences, campaigns, authentication features , and contact management, significantly enhancing lead capture and conversion for clients",
      "Developed an in-house Design System by crafting numerous reusable components from scratch using TypeScript and React, integral to the entire project."
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Edyoda",
    icon: edyoda,
    iconBg: "white",
    date: "Aug 2023 - Nov 2023",
    points: [
      "Created a comprehensive, REST API-integrated instructor dashboard with tailored interfaces for diverse user roles featuring responsive design and intuitive functionality",
      "Developed pages, features, and components from the ground up, playing a pivotal role in the successful launch of new products for the company.",
      "Developed a range of innovative components and features, including tooltips, pagination, and UI enhancements",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Virtusa",
    icon: virtusa,
    iconBg: "#1a0c5f",
    date: "Jan 2023 - July 2023",
    points: [
      "Developed responsive and user-friendly interfaces using modern front-end frameworks such as ReactJS",
      "Designing and implementing RESTful APIs and integrating them with databases using technologies like Node.js, Express, and MongoDB.",
    ],
  },
  {
    title: "ML Intern",
    company_name: "TeknoGeeks",
    icon: teknogeeks,
    iconBg: "black",
    date: "Apr 2022 - July 2023",
    points: [
      "Developed and implemented state-of-the-art neural networks, BERT models, and NLP techniques, resulting in a 15% increase in accuracy for sentiment analysis.",
      "Leveraged TensorFlow and Keras to build robust and efficient models ,significantly reducing training time by 20%",
      "Collaborated with a team of data scientists to tackle complex problems, resulting in the successful development of a chatbot with 90% customer satisfaction rating.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Solved over 550+ problems using C++. Ranked 51,000 globally",
    name: "LeetCode",
    designation: "Coding Profile",
    externalLink: "https://leetcode.com/harsh07natu/",
    image: "https://cdn.iconscout.com/icon/free/png-512/free-leetcode-3521542-2944960.png?f=webp&w=256",
  },
  {
    testimonial:
      "3 * Coder on Codechef. Also rated 1660+ on the platform",
    name: "Codechef",
    designation: "Coding Profile",
    externalLink: "https://www.codechef.com/users/hars07h",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvALITimjx9NtcxD8LT1y-KyFZUFPGQvUNidmxEcmDjw&s",
  },
  {
    testimonial:
      "Created impressive projects using cutting edge tech!",
    name: "Github",
    designation: "Open Source & Projects",
    externalLink: "https://github.com/Harsh7wardhan",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  // {
  //   testimonial:
  //     "Let's connect .Join my network & lets talk about tech !",
  //   name: "Linkedin",
  //   designation: "Lets Connect  ",
  //   externalLink: "https://www.linkedin.com/in/harshwardhan-natu-55474a203/",
  //   image: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
  // },
];

const projects = [
  {
    name: "Composable CX",
    description:
      "Platform for marketers to convert leads into customers using whatsapp ,email & sms campaigns. Along with features like segmentation, configuration , automated workflows & journeys.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "kafka",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: cx,
    // source_code_link: "https://github.com/Harsh7wardhan/VirtuShop",
  },
  {
    name: "Chat Widget",
    description:
      "Developed a dynamic end-to-end chatbot that clients can embed on their websites with a script, enabling two-way conversations with visitors for real-time engagement using Socket.io",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "loopback",
        color: "pink-text-gradient",
      },
    ],
    image: bot,
    // source_code_link: "https://github.com/Harsh7wardhan/LaunchEazy",
  },
  {
    name: "Omni Channel Inbox",
    description:
      "Developed a omni-channel inbox, allowing agents to engage with leads from all channels in one unified view. This SaaS solution helps agents to communicate with leads from various channels .",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: assist,
    // source_code_link: "https://github.com/Harsh7wardhan/Threads-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
