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
  edyoda,
  tesla,
  shopify,
  carrent,
  threads,
  launcheazy,
  virtushop,
  jobit,
  tripguide,
  threejs,
  python,
  cpp,
  java
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
    title: "Full Stack Developer",
    icon: webnew,
  },
  {
    title: "React JS Developer",
    icon: reactLogo,
  },
  {
    title: "Data Structures & Algorithms",
    icon: dsa,
  },
  {
    title: "Machine Learning",
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
    title: "SDE Intern",
    company_name: "Edyoda",
    icon: edyoda,
    iconBg: "white",
    date: "August 2023 - Present",
    points: [
      "Implemented optimizations that significantly reduced API call latency, enhancing user experience.",
      "Designed and developed pages, features, and components from the ground up, playing a pivotal role in the successful launch of new products for the company.",
      "Introduced a range of innovative components and features, including tooltips, pagination, and UI enhancements for the job platform.",
    ],
  },
  {
    title: "Assciate Software Engineer",
    company_name: "Virtusa",
    icon: virtusa,
    iconBg: "#1a0c5f",
    date: "Jan 2023 - July 2023",
    points: [
      "Developed responsive and user-friendly interfaces using modern front-end frameworks such as ReactJS",
      "Designing and implementing RESTful APIs and integrating them with databases using technologies like Node.js, Express, and MongoDB.",
      "Enhanced user experience by resolving API call latency , fixed bugs. ",
    ],
  },
  {
    title: "Machine Learning Engineer",
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
  {
    title: "Skill Development Trainee",
    company_name: "Zensar",
    icon: zensar,
    iconBg: "white",
    date: "Aug 2022 - Mar 2023",
    points: [
      "Recieved training from industry professionals on technologies like Java , SQL & Soft Skills.",
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
    name: "VirtuShop",
    description:
      "E-commerce platform with user authentication , sign in/log in functionality and global state management",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "react-context-api",
        color: "pink-text-gradient",
      },
    ],
    image: virtushop,
    source_code_link: "https://github.com/Harsh7wardhan/VirtuShop",
  },
  {
    name: "BroadWay",
    description:
      "Shop for the latest & most popular E-mail templates. One stop solution for all your marketing needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: launcheazy,
    source_code_link: "https://github.com/Harsh7wardhan/LaunchEazy",
  },
  {
    name: "Threads",
    description:
      "Clone of the famous Threads app. A social media app with user authentication, posting & sign in / sign out functionalities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/Harsh7wardhan/Threads-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
