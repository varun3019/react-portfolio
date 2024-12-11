import nike from "../assets/projects/nike.png";
import tomato from "../assets/projects/tomato.png";

export const HERO_CONTENT = `I am a passionate full stack developer with expertise in MongoDB, Express.js, React, and Node.js (MERN Stack). With hands-on experience in WordPress and Shopify, I focus on building robust and scalable web applications. My mission is to leverage my technical skills and creativity to enhance user experiences and drive digital innovation.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js). Over the years, I have worked on various web technologies, including WordPress, Shopify, and API integrations, gaining a diverse skill set. I am always eager to explore new technologies and thrive in collaborative environments. When I'm not coding, I enjoy learning about emerging trends in tech, contributing to innovative projects, and staying engaged in the web development community.`;

export const EXPERIENCES = [
  {
    year: "06/24 - 9/24",
    role: "WordPress Developer",
    company: "The United Social, Bangalore",
    description: `Specializing in WordPress plugin integration and Shopify solutions for a digital marketing agency. Contributed to sustainable growth strategies by delivering tailored digital solutions.`,
    technologies: ["WordPress", "Shopify", "HTML", "CSS", "JavaScript"],
  },
  {
    year: "04/22 - 01/23",
    role: "Junior Salesforce Developer",
    company: "Sumeru Global Private Limited, Bangalore",
    description: `Designed and implemented Salesforce and Hubspot CRM solutions, integrated email marketing strategies, and developed web applications. Collaborated with teams to deliver cost-effective solutions on time.`,
    technologies: ["Salesforce", "HubSpot", "API", "Postman", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Tomato Food Delivery App",
    image: tomato,
    description:
      "A food ordering application built with the MERN stack. Features include user and admin panels, JWT authentication, password hashing, Stripe payment integration, and order management.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
    link: "https://tomato-food-del-frontend-4kct.onrender.com/",
  },
  {
    title: "Nike Web App",
    image: nike,
    description:
      "A responsive web app for Nike using Vite + React. Styled with Tailwind CSS and Daisy UI for a sleek and modern design.",
    technologies: ["Vite", "React", "Tailwind CSS", "Daisy UI"],
    link: "https://varun-shoe-store.netlify.app/",
  },
];

export const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+91 9380754551",
  email: "varunrao1000@example.com",
};
