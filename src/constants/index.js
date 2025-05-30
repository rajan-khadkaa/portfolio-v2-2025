const words = [
  { text: "Mobile App", imgPath: "/images/designs.svg" },
  { text: "Web App", imgPath: "/images/code.svg" },
  { text: "UI/UX Flow", imgPath: "/images/concepts.svg" },
  { text: "Mobile App", imgPath: "/images/designs.svg" },
  { text: "Web App", imgPath: "/images/code.svg" },
  { text: "UI/UX Flow", imgPath: "/images/concepts.svg" },
];

const heroWords = ["Web Apps", "Interfaces", "Platforms", "Web Apps"];

const counterItems = [
  // { label: "Mobile App Projects", tool: "React Native", domain: "mobile" },
  { label: "Development", tool: "MERN & Next.js", domain: "web" },
  {
    label: "Design",
    tool: "Figma, Photoshop & Ilustrator",
    domain: "design",
  },
];

export const workProcess = [
  {
    title: "Design",
    logoPath: "/images/logo1.png",
    techLogo: [
      {
        path: "/images/tech-logo/original/figma.svg",
        name: "Figma",
        color: "#F24E1E",
      },
      {
        path: "/images/tech-logo/original/illustrator.svg",
        name: "Illustrator",
        color: "#FF9A00",
      },
      {
        path: "/images/tech-logo/original/photoshop.svg",
        name: "Photoshop",
        color: "#31A8FF",
      },
    ],
    processWork: [
      "Focus on building clean and user-friendly layouts with structure.",
      "Apply UX principles to design user journeys and wireframes.",
      "Maintain visual consistency while keeping designs accessible.",
    ],
  },

  {
    title: "Frontend",
    logoPath: "/images/logo2.png",
    techLogo: [
      {
        path: "/images/tech-logo/original/react.svg",
        name: "React",
        color: "#61DAFB",
      },
      {
        path: "/images/tech-logo/original/nextjs.svg",
        name: "Next.js",
        color: "#FFFFFF",
      },
      {
        path: "/images/tech-logo/original/tailwind.svg",
        name: "TailwindCSS",
        color: "#61DAFB",
      },
    ],
    processWork: [
      "Create responsive components using modern frontend tools.",
      "Use Tailwind CSS utility-first classes and reusable components.",
      "Experiment with frameworks like Next.js to enhance frontend workflow",
    ],
  },
  {
    title: "Backend",
    logoPath: "/images/logo3.png",
    techLogo: [
      {
        path: "/images/tech-logo/original/nodejs.svg",
        name: "Node.js",
        color: "#339933",
      },
      {
        path: "/images/tech-logo/original/mongodb.svg",
        name: "MongoDB",
        color: "#28C76F",
      },
      {
        path: "/images/tech-logo/original/nextjs.svg",
        name: "Next.js",
        color: "#FFFFFF",
      },
    ],
    processWork: [
      "Build basic backend logic and APIs to manage data and user requests.",
      "Use databases to organize, retrieve, and store structured information.",
      "Connect backend with frontend interfaces to support dynamic features.",
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

//Circle social media links
// const socialImgs = [
//   {
//     name: "Github",
//     imgPath: "/images/media-logo/circle/github.svg",
//     url: "https://www.facebook.com",
//   },
//   {
//     name: "linkedin",
//     imgPath: "/images/media-logo/circle/linkedin.svg",
//     url: "https://www.linkedin.com",
//   },
//   {
//     name: "Whatsapp",
//     imgPath: "/images/media-logo/circle/whatsapp.svg",
//     url: "https://www.whatsapp.com",
//   },
//   {
//     name: "Telegram",
//     imgPath: "/images/media-logo/circle/telegram.svg",
//     url: "https://www.telegram.com",
//   },
// ];

const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/media-logo/rounded/github.svg",
    url: "https://github.com/rajan-khadkaa",
  },
  {
    name: "linkedin",
    imgPath: "/images/media-logo/rounded/linkedin.svg",
    url: "https://www.linkedin.com/in/rajan-khadka-106868268/",
  },
  {
    name: "Whatsapp",
    imgPath: "/images/media-logo/rounded/whatsapp.svg",
    url: "https://wa.me/+9779814364007?text=Hello%20Rajan,%20Let%27s%20work%20together.",
  },
  {
    name: "Telegram",
    imgPath: "/images/media-logo/rounded/telegram.svg",
    url: "https://t.me/rajankhadkaa?text=Hello%20Rajan,%20Let%27s%20work%20together.",
  },
];

const skillListTop = [
  { name: "React", path: "/images/tech-logo/plain/react.svg" },
  { name: "Node.js", path: "/images/tech-logo/plain/nodejs.svg" },
  { name: "Next.js", path: "/images/tech-logo/plain/nextjs.svg" },
  { name: "Three.js", path: "/images/tech-logo/plain/threejs.svg" },
];
const skillListBottom = [
  { name: "MongoDB", path: "/images/tech-logo/plain/mongodb.svg" },
  { name: "Tailwind CSS", path: "/images/tech-logo/plain/tailwind.svg" },
  { name: "GSAP", path: "/images/tech-logo/plain/gsap.svg" },
  { name: "Git", path: "/images/tech-logo/plain/git.svg" },
  { name: "Figma", path: "/images/tech-logo/plain/figma.svg" },
];

const highlightColors = [
  "#1a2a3a", // React Native
  "#2a3a2a", // Node.js
  "#3a3a3a", // Next.js
  "#3a3a3a", // Three.js
  "#1a3a2a", // MongoDB
  "#183c58", // Tailwind CSS
  "#2a3a2a", // GSAP
  "#3a1a0a", // Git & Github
  "#3a2a1a", // Figma
];

const webProjects = [
  {
    glink: true,
    project1: {
      title: "Plan-it",
      description:
        "Plan-It is a productivity app to capture ideas, set future goals, and track personal progress. Revisit your saved goals and check off what you’ve accomplished over time.",
      projectIcons: [
        {
          name: "React",
          image: "/images/tech-logo/original/react.svg",
        },
        {
          name: "Tailwind",
          image: "/images/tech-logo/original/tailwind.svg",
        },
        {
          name: "Node.js",
          image: "/images/tech-logo/original/nodejs.svg",
        },
        {
          name: "MongoDB",
          image: "/images/tech-logo/original/mongodb.svg",
        },
        {
          name: "Firebase",
          image: "/images/tech-logo/original/firebase.svg",
        },
        {
          name: "Cloudinary",
          image: "/images/tech-logo/original/cloudinary.svg",
        },
      ],
      thumbnail: "/images/bg-thumbnails/planit.png",
      link: {
        githubLink: "https://github.com/rajan-khadkaa/plan-it",
        demoLink: "https://plan-it-mern-app.vercel.app/",
      },
    },

    project2: {
      title: "Spendly",
      description:
        "Spendly is a simple financial tracker to manage income and expenses with category filters. Easily review your transactions, and recover deleted records from the bin.",
      projectIcons: [
        {
          name: "React",
          image: "/images/tech-logo/original/react.svg",
        },
        {
          name: "Tailwind",
          image: "/images/tech-logo/original/tailwind.svg",
        },
        {
          name: "Node.js",
          image: "/images/tech-logo/original/nodejs.svg",
        },
        {
          name: "MongoDB",
          image: "/images/tech-logo/original/mongodb.svg",
        },
        {
          name: "JWT",
          image: "/images/tech-logo/original/jwt.svg",
        },
      ],
      thumbnail: "/images/bg-thumbnails/spendly.png",
      link: {
        githubLink: "https://github.com/rajan-khadkaa/income-expense-tracker",
        demoLink: "https://income-expense-mern-app.vercel.app/",
      },
    },

    project3: {
      title: "AuthNext",
      description:
        "AuthNext is a secure login system built with JWT and MongoDB. It manages user sessions and restricts access to public or private routes based on login status.",
      projectIcons: [
        {
          name: "Next.js",
          image: "/images/tech-logo/original/nextjs.svg",
        },
        {
          name: "Tailwind",
          image: "/images/tech-logo/original/tailwind.svg",
        },
      ],
      thumbnail: "/images/bg-thumbnails/authnext.png",
      link: {
        githubLink:
          "https://github.com/rajan-khadkaa/nextjs-authentication-fullstack",
        demoLink: "https://nextjs-authentication-fullstack.vercel.app/login",
      },
    },
  },
];
const mobProjects = [
  {
    glink: true,
    project1: {
      title: "Paydrift",
      description:
        "Paydrift is a bill-splitting app for group trips and hangouts. It calculates individual dues, displays payment statuses, and makes expense sharing effortless.",
      projectIcons: [
        {
          name: "React Native",
          image: "/images/tech-logo/original/react-native.svg",
        },
        {
          name: "Tailwind",
          image: "/images/tech-logo/original/tailwind.svg",
        },
        {
          name: "Node.js",
          image: "/images/tech-logo/original/nodejs.svg",
        },
        {
          name: "MongoDB",
          image: "/images/tech-logo/original/mongodb.svg",
        },
        {
          name: "Firebase",
          image: "/images/tech-logo/original/firebase.svg",
        },
        {
          name: "Cloudinary",
          image: "/images/tech-logo/original/cloudinary.svg",
        },
      ],
      thumbnail: "/images/thumbnails/paydrift.png",
      link: {
        githubLink: "https://github.com/rajan-khadkaa/plan-it",
        demoLink: "https://github.com/rajan-khadkaa/plan-it",
      },
    },

    project2: {
      title: "Medsync",
      description:
        "Medsync is a medication reminder app that tracks daily dosages. Users set their schedules and check off doses to stay on top of their health routine.",
      projectIcons: [
        {
          name: "React Native",
          image: "/images/tech-logo/original/react-native.svg",
        },
        {
          name: "Tailwind",
          image: "/images/tech-logo/original/tailwind.svg",
        },
        {
          name: "Node.js",
          image: "/images/tech-logo/original/nodejs.svg",
        },
        {
          name: "MongoDB",
          image: "/images/tech-logo/original/mongodb.svg",
        },
        {
          name: "JWT",
          image: "/images/tech-logo/original/jwt.svg",
        },
      ],
      tthumbnail: "/images/thumbnails/medsync.png",
      link: {
        githubLink: "https://github.com/rajan-khadkaa/plan-it",
        demoLink: "https://github.com/rajan-khadkaa/plan-it",
      },
    },

    project3: {
      title: "Genflick",
      description:
        "Genflick is an AI-powered app that turns user prompts into creative short videos. Enter an idea and watch it become a visual story instantly.",
      projectIcons: [
        {
          name: "React Native",
          image: "/images/tech-logo/original/react-native.svg",
        },
        {
          name: "Tailwind",
          image: "/images/tech-logo/original/tailwind.svg",
        },
      ],
      thumbnail: "/images/thumbnails/genflick.png",
      link: {
        githubLink: "https://github.com/rajan-khadkaa/plan-it",
        demoLink: "https://github.com/rajan-khadkaa/plan-it",
      },
    },
  },
];
const designProjects = [
  {
    glink: false,
    project1: {
      title: "SafeTrack",
      description:
        "SafeTrack is a parenting app designed to monitor children's locations, school routines, and important events. It helps parents stay informed and organized every day.",
      projectIcons: [
        {
          name: "Figma",
          image: "/images/tech-logo/original/figma.svg",
        },
        {
          name: "Illustrator",
          image: "/images/tech-logo/original/illustrator.svg",
        },
        {
          name: "Photoshop",
          image: "/images/tech-logo/original/photoshop.svg",
        },
      ],
      thumbnail: "/images/bg-thumbnails/safetrack.png",
      link: {
        demoLink:
          "https://rajankhadka.notion.site/SafeTrack-Child-Monitoring-App-2221fb7474b14dc4854f7a0840207f35",
      },
    },

    project2: {
      title: "HRMS",
      description:
        "HRMS is an HR management system designed to streamline hiring, employee tracking, and payroll. It focuses on intuitive UX and practical design problem-solving.",
      projectIcons: [
        {
          name: "Figma",
          image: "/images/tech-logo/original/figma.svg",
        },
        {
          name: "Illustrator",
          image: "/images/tech-logo/original/illustrator.svg",
        },
        {
          name: "Photoshop",
          image: "/images/tech-logo/original/photoshop.svg",
        },
      ],
      thumbnail: "/images/bg-thumbnails/hrms.png",
      link: {
        demoLink:
          "https://rajankhadka.notion.site/HRMS-Human-Resource-Management-79e46b9f123248069996c822633b6893",
      },
    },

    project3: {
      title: "Donate Red",
      description:
        "DonateRed is a blood donation platform connecting donors with verified organizations. It serves as a bridge to make donation simple, secure, and accessible.",
      projectIcons: [
        {
          name: "Figma",
          image: "/images/tech-logo/original/figma.svg",
        },
        {
          name: "Illustrator",
          image: "/images/tech-logo/original/illustrator.svg",
        },
        {
          name: "Photoshop",
          image: "/images/tech-logo/original/photoshop.svg",
        },
      ],
      thumbnail: "/images/bg-thumbnails/donatered.png",
      link: {
        demoLink:
          "https://rajankhadka.notion.site/DonateRed-Blood-Donation-6caf81b95a9e4c6a8b926a64837433a1",
      },
    },
  },
];

export {
  words,
  heroWords,
  counterItems,
  socialImgs,
  skillListTop,
  skillListBottom,
  highlightColors,
  mobProjects,
  webProjects,
  designProjects,
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
