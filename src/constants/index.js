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
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Mobile Apps", imgPath: "/images/code.svg" },
  { text: "Web Apps", imgPath: "/images/concepts.svg" },
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Mobile Apps", imgPath: "/images/code.svg" },
  { text: "Web Apps", imgPath: "/images/concepts.svg" },
  // { text: "Design", imgPath: "/images/designs.svg" },
  // { text: "Mobile Apps", imgPath: "/images/code.svg" },
  // { text: "Web Apps", imgPath: "/images/concepts.svg" },
  //   { text: "Ideas", imgPath: "/images/ideas.svg" },
  //   { text: "Concepts", imgPath: "/images/concepts.svg" },
  //   { text: "Designs", imgPath: "/images/designs.svg" },
  //   { text: "Code", imgPath: "/images/code.svg" },
  //   { text: "Ideas", imgPath: "/images/ideas.svg" },
  //   { text: "Concepts", imgPath: "/images/concepts.svg" },
  //   { text: "Designs", imgPath: "/images/designs.svg" },
  //   { text: "Code", imgPath: "/images/code.svg" },
];

// const counterItems = [
//   { label: "Show me Mobile App Projects", tool: "React Native" },
//   { label: "Show me Web App Projects", tool: "MERN & Next.js" },
//   {
//     label: "Show me Designs & Case Studies",
//     tool: "Figma, Photoshop & Ilustrator",
//   },
// ];
const counterItems = [
  { label: "Mobile App Projects", tool: "React Native", domain: "mobile" },
  { label: "Web App Projects", tool: "MERN & Next.js", domain: "web" },
  {
    label: "UI/UX Projects",
    tool: "Figma, Photoshop & Ilustrator",
    domain: "design",
  },
];
// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];

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

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
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
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const workProcess = [
  {
    title: "Design",
    logoPath: "/images/logo1.png",
    techLogo: [
      { path: "/images/logos/figma.svg", name: "Figma", color: "#F24E1E" },
      {
        path: "/images/logos/photoshop.svg",
        name: "Photoshop",
        color: "#31A8FF",
      },
      {
        path: "/images/logos/illustrator.svg",
        name: "Illustrator",
        color: "#FF9A00",
      },
    ],
    processWork: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    title: "Backend",
    logoPath: "/images/logo3.png",
    techLogo: [
      {
        path: "/images/logos/node.png",
        name: "Node.js",
        color: "#61DAFB",
      },
      { path: "/images/logos/mern.svg", name: "MongoDB", color: "#28C76F" },
      {
        path: "/images/logos/nextjs.svg",
        name: "Next.js",
        color: "#FFFFFF",
      },
    ],
    processWork: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    title: "Frontend",
    logoPath: "/images/logo2.png",
    techLogo: [
      {
        path: "/images/logos/react.svg",
        name: "React Native",
        color: "#61DAFB",
      },
      { path: "/images/logos/nextjs.svg", name: "Next.js", color: "#FFFFFF" },
      {
        path: "/images/logos/react.svg",
        name: "React.js",
        color: "#61DAFB",
      },
    ],
    processWork: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  // {
  //   // title: "",
  //   title: "Deploy",
  //   logoPath: "/images/logo3.png",
  //   techLogo: [],
  //   processWork: [],
  //   gap: true,
  // },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const skillListTop = [
  { name: "React Native", path: "/images/logos/react.svg" },
  { name: "Node.js", path: "/images/logos/node.png" },
  { name: "Next.js", path: "/images/logos/nextjs.svg" },
];
const skillListBottom = [
  { name: "MongoDB", path: "/images/logos/mern.svg" },
  { name: "Tailwind CSS", path: "/images/logos/three.png" },
  { name: "React.js", path: "/images/logos/react.svg" },
  { name: "Git & Github", path: "/images/logos/git.svg" },
  { name: "Figma", path: "/images/logos/figma.svg" },
];

const highlightColors = [
  "#1a2a3a", // React Native
  "#2a3a2a", // Node.js
  "#3a3a3a", // Next.js
  "#1a3a2a", // MongoDB
  "#183c58", // Tailwind CSS
  "#1a2a3a", // React.js
  "#3a1a0a", // Git & Github
  "#3a2a1a", // Figma
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
  techStackImgs,
  navLinks,
  skillListTop,
  skillListBottom,
  highlightColors,
};

// "#e24e1B", // React Native
// "#4381c1", // Node.js
// "#f79824", // Next.js
// "#04a777", // React.js
// "#2176ff", // MongoDB
// "#5b8c5a", // Tailwind CSS
// "#818d92", // Git & Github
// "#22aaa1", // Figma
// "#3a1a0a", // React Native: Dark brown-orange
