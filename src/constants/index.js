import { s } from "maath/dist/misc-19a3ec46.esm";
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
    kgroup,
    AmericanCenter,
    DSU,
    AIjournal,
    tweetClone,
    BApi,
    nextjs,
    tensorflow,
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
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "AI Automation",
      icon: web,
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
      name: "Next.js",
      icon: nextjs,
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
      name: "docker",
      icon: docker,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    

  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Kinship Group",
      icon: kgroup,
      iconBg: "#383E56",
      date: "Jan 2023 - Sep 2023",
      points: [
        "Developing and maintaining web applications using React.js, Next.js, Stripe, Next.auth , firebase and a lot more.",
        "MVC, DAO, and AOP components of the Spring Framework were used to create scalable and maintainable software solutions.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developing JUnit test cases with Mockito and leveraging SOAP UI to test web services, software quality	was ensured while adhering to agile approaches",
      ],
    },
    {
      title: "Lead Research Assistant",
      company_name: "Dakota State University",
      icon: DSU,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Designed and executed cutting-edge machine learning models to address complex real-world challenges, showcasing problem-solving skills and driving actionable insights.",
        "Used OpenCV, MediaPipe, and TensorFlow to develop an image classification model that classifies weed plants with a 92% accuracy.",
        "Deployed machine learning models within a web application using TensorFlow Lite, with Next.js powering the backend.",
        "React, Node.js, and MongoDB were used to develop and manage responsive online applications.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "American Center",
      icon: AmericanCenter,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developed a web application that enabled students to easily enroll in classes. Gathered requirements from stakeholders and used wireframes to design a user-friendly interface. Developed the application using React.js, Bootstrap, and Materialize for the front end. Used Node.js and MongoDB for the backend.",
        "Updated and refactored the existing code to improve performance and user experience. Reviewed and analyzed the code, identified bottlenecks, and implemented modern design patterns and best practices. Replaced outdated libraries with newer, more efficient alternatives. Software improved performance and received positive feedback from users",
        "Worked closely with various teams including design, QA, and product management. Gained a comprehensive understanding of the software development process. Ensured the final product met the highest quality standards. Actively participated in sprint planning, daily stand-ups, and code review sessions, which helped me improve my skills, adapt to changes, and deliver high-quality work consistently.",
        "Participating in code reviews",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Kidus consistently demonstrates top-tier expertise in software development. His solutions are innovative, efficient, and always delivered on time. A true asset to any tech team!",
      name: "Tewodros Kidanne",
      designation: "CEO",
      company: "Kinship Group",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Kidus problem solving skills always tend to surprise me.",
      name: "Alemayeheu",
      designation: "Senior Developer",
      company: "Salesforce",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      testimonial:
        "Kidus possesses an exceptional ability to tackle complex challenges with innovative solutions. His problem-solving skills are unparalleled, making him an invaluable asset to our tech team. Every project he undertakes is approached with a fresh perspective and a can-do attitude.",
      name: "Austin O'brien",
      designation: "Proffesor of Computer Science",
      company: "DSU",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI journal app",
      description:
        "The AI Journaling App revolutionizes personal reflection by seamlessly integrating advanced language models. Users input thoughts or prompts, and the app intuitively crafts structured journal entries, catering to both guided prompts and freeform expressions, ensuring a personalized and interactive journaling experience.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Next.auth",
          color: "green-text-gradient",
        },
      ],
      image: AIjournal,
      source_code_link: "https://github.com/kido321/Ai-Journal-next.js",
    },
    {
      name: "Twitter Clone",
      description:
        "Dynamic Twitter clone, harnessing the capabilities of React.js paired with Materialize for a vibrant and user-friendly front-end. Beyond its compelling design, the platform integrates Firebase for robust back-end support, ensuring seamless real-time data interactions and secure storage.",
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
          name: "Materialize",
          color: "pink-text-gradient",
        },
      ],
      image: tweetClone,
      source_code_link: "https://github.com/kido321/twitterclone",
    },
    {
      name: "Restfull Api For Breakfast Ordering App",
      description:
        "CRUD REST API from scratch using .NET 6. As you would expect, the backend system supports Creating, Reading, Updating, and Deleting breakfasts",
      tags: [
        {
          name: " C#",
          color: "blue-text-gradient",
        },
        {
          name: ".NET 6",
          color: "pink-text-gradient",
        },
      ],
      image: BApi,
      source_code_link: "https://github.com/kido321/BreakFast-ASP.net-Api",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };