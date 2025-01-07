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
  github,
  nic,
  aitm,
  kibo,
  gui,
  noodle,
  threejs,
 
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
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Frontend React",
    icon: mobile,
  },
  {
    title: "Backend Django",
    icon: backend,
  },
  {
    title: "Machine learning and AI",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
 
  {
    title: "Researcher on IoT Developement for Sustainable and Cloud-Based Systems",
    company_name: "AITM",
    icon: aitm,
    iconBg: "#E6DEDD",
    date: "August 2022 – December 2022 | Python and C++",
    points: [
      "Project: UN sustainable goal Innovation Project (Smart Irrigation System)",
      "Worked on developing an app for the project using an open-source Netty-based Java server.",
      "Engineered communication between Arduino, NodeMCU, and Raspberry Pi. Developed an algorithm to identify moisture and ultrasonic sensor values.",
    ],
  },

  {
    title: "Full-Stack Software and Embedded Systems Developer",
    company_name: "Rocketry at NIC (National Innovation Centre) ",
    icon: nic,
    iconBg: "#383E56",
    date: "Feb 2023 – May 2023 | Python and Javascript",
    points: [
      "Architected and Implemented a comprehensive Graphical User Interface (GUI) for the ground station using Python, using frameworks such as PyQt or Tkinter to ensure a responsive and user-friendly experience.", 
      "Implemented Real-Time Data Visualization features, enabling operators to monitor live telemetry and system statuses through dynamic charts and dashboards using Javascript",
      "Developed and Refined the ground station's visuals using 3js (Javascript library)",
    ],
  },
  
  { 
    title: "Kibo Robot Programming Challenge Leader",
    company_name: "Japan Aerospace Exploration Agency (JAXA)",
    icon: kibo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023 | Python ",
    points: [
      "Founder and team leader for the international spaceship programming challenge where smart and highly motivated coders compete to solve a space station related issue",
      "Gained Proficiency in Robotics Programming where Python-based control algorithms was implemented for Astrobee, a free-flying robot designed for use aboard the International Space Station (ISS)",
      "Design attemps at solutions for controlling robot motion in a 3D simulated environment.",
    ],
  },
  {
    title: "Full stack Development for Honors Project",
    company_name: "AITM",
    icon: aitm,
    iconBg: "#E6DEDD",
    date: "April 2024 - December 2024 |  Django Rest framework and React",
    points: [
      "Built an entire learning management system using the Django Rest framework for the back-end and React.js for the front-end",
      "Developed RESTful APIs and used authentication and authorization mechanisms using JWT (JSON Web Tokens) to ensure secure access and data protection.",
      "Implemented Convolutional Neural Networks (CNNs) and YOLOv5 using TensorFlow and PyTorch for accurate facial and object recognition",
    ],
  },
  {
    title: "Personal Achievements",
    company_name: "-",
    icon: github,
    iconBg: "#E6DEDD",
    date: "April 2024 - December 2024 |  Agile principles",
    points: [
      "Have Worked effectively under a several supervised teams, coordinating development under agile principles to ensure a successful delivery.",
      "Has consistently facilitated clear communication and meticulous collaboration logs through the use of tools like GitHub, Slack and Asana with every past peers",
      "Has been able to showcase and build a clear confidence in operating Github for version control while following good developer ethics",
    ],
  },
];



const projects = [
  {
    name: "NIC rocketry GUI system / GPS specialized",
    description:
      "Python tkinter, PyQT based gui system that integrated 3js to beautifully visualize data received from a projectile launched acrossed the sky",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "3js",
        color: "orange-text-gradient",
      },
    ],
    image: gui,
    source_code_link: "https://github.com/SagolGurung/New-ground-control-offline",
  },
  {
    name: "Secure Online Exam and Learning Assist Using Computer Vision",
    description:
      " an integrated learning management system using computer vision has been developed to prevent online exam cheating.The system also delivered itself in terms of usability and security using Django and React, so the learning experience was enhanced.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django-restframework",
        color: "green-text-gradient",
      },
    ],
    image: noodle,
    source_code_link: "https://github.com/SagolGurung/Noddle.org/tree/presenation_main",
  },
];

export { services, technologies, experiences, projects };
