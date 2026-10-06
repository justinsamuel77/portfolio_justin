import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiFirebase,
  SiOpenapiinitiative,
  SiTestinglibrary,
  SiCypress,
  SiPostman,
  SiSocketdotio,
  SiWebrtc,
  SiStripe,
  SiPaypal,
  SiRazorpay,
  SiContactlesspayment,
  SiGooglepay,
  SiFlutter,
  SiAlipay,
  SiGit,
  SiGithub,
  SiChatbot,
  SiGithubactions,
  SiProbot,
  SiPuppeteer,
  SiFigma,
} from "react-icons/si";

export const Bio = {
  name: "Justin Samuel S",
  roles: [
    "Full Stack Developer"
  ],
  description:
    "Full Stack Developer with 3.5+ years of experience developing scalable web applications using React.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript, and REST APIs. Experienced in building CRM, HRMS, customer support, food ordering, taxi booking, and rental marketplace applications with real-time features, payment gateway integrations, third-party APIs, and test automation using Playwright.",
  github: "https://github.com/MohamadhuAshik",
  resume:
    "https://drive.google.com/file/d/1VG4hNYKPDe2VGEgzNtUCfYHJIBXQ4y7o/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/justin-samuel-113151229",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiFastapi },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Authentication & Integration",
    skills: [
      { name: "JWT Authentication", icon: SiJsonwebtokens },
      { name: "Firebase", icon: SiFirebase },
      { name: "Third-Party API Integration", icon: SiOpenapiinitiative },
    ],
  },
  {
    title: "Testing & Automation",
    skills: [
      { name: "Playwright", icon: SiTestinglibrary },
      { name: "E2E Testing", icon: SiCypress },
      { name: "API Testing", icon: SiPostman },
    ],
  },
  {
    title: "Real-Time Development",
    skills: [
      { name: "WebSockets", icon: SiSocketdotio },
      { name: "Real-Time Applications", icon: SiWebrtc },
    ],
  },
  {
    title: "Payment Gateways",
    skills: [
      { name: "Stripe", icon: SiStripe },
      { name: "PayPal", icon: SiPaypal },
      { name: "Razorpay", icon: SiRazorpay },
      { name: "FlowPay", icon: SiContactlesspayment },
      { name: "Rapyd Pay", icon: SiGooglepay },
      { name: "Flutterwave", icon: SiFlutter },
      { name: "Airwallex", icon: SiAlipay },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "AI-Assisted Development",
    skills: [
      { name: "Claude", icon: SiChatbot },
      { name: "GitHub Copilot", icon: SiGithubactions },
      { name: "MCP", icon: SiProbot },
      { name: "Playwright MCP", icon: SiPuppeteer },
      { name: "Figma MCP", icon: SiFigma },
      { name: "GitHub MCP", icon: SiGithub },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: require("../images/radicalstart_logo.jpg"),
    role: "Full Stack developer",
    company: "RadicalStart InfoLab",
    date: "Jan 2023 - Nov 2024",
    desc: "Developing platforms akin to Airbnb, Ola/Uber, rental product platforms, and UberEats. Contributed to multiple projects focusing on API development and payment gateway integrations.",
  },
  {
    id: 1,
    img: require("../images/wizinoa_logo.png"),
    role: "Mern Stack Developer",
    company: "WizInoa",
    date: "Jan 2025 - Aug 2025",
    desc: `Specializing in platforms such as HRMS, CRM systems, and client service management solutions. Contributed to multiple 
projects with a strong emphasis on API development and payment gateway integrations. Developed web applications featuring Google Maps integration and subscription-based service models, enhancing user 
interaction and operational efficiency for location-aware client platforms.`,
  },
  {
    id: 2,
    img: require("../images/warely_logo.png"),
    role: "Full Stack Developer",
    company: "Warely Technology",
    date: "Sep 2025 - Present",
    desc: "Singapore-based product company providing POS and digital ordering solutions including POS systems, KDS, ODS, kiosks, sound bar devices, and online food ordering platforms.",
  },
];

export const education = [
  {
    id: 0,
    img: require("../images/american_college_logo.jpg"),
    school: "The American College",
    date: "Jun 2017 - Apr 2020",
    desc: `Focused on foundational concepts, equipping students with analytical and problem-solving skills essential for various professional fields.`,
    degree: "Bachelor of Science",
  },
];

export const projects = [
  {
    id: 9,
    title: "RentALL",
    description: `The platform allows hosts to post property details with images, pricing, and availability, while guests can search, filter, and reserve stays. Integrated user authentication, booking system, payment gateway, and Google Maps for location-based listings.`,
    image: require("../images/rentall_image.png"),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Google Maps"],
    category: "web app",
    webapp: "https://demo.rentallscript.com/",
    github: "",
  },
  {
    id: 0,
    title: "Wooberly",
    description: `The platform features live location tracking, ride requests, fare estimation, and trip history. Implemented user and driver authentication, booking logic, and Google Maps integration for route and distance calculations.`,
    image: require("../images/wooberly_image.png"),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Google Maps"],
    category: "web app",
    webapp: "https://demo.wooberly.com/",
    github: "",
  },
  {
    id: 5,
    title: "LokalNav",
    description: `Vendors can register and add their shop details, including active hours, which are dynamically displayed on the user side via Google Maps. The system supports subscription plans with automated recurring payments, allowing vendors to manage visibility and service tiers.`,
    image: require("../images/lokalnav_image.png"),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Google Maps"],
    category: "web app",
    webapp: "https://lokalnav.com/",
    github: "",
  },
  {
    id: 11,
    title: "Digital Ordering",
    description: `Built a restaurant digital ordering application for dine-in and takeaway through QR code-based ordering, supporting restaurant/outlet ordering, counter payments, and Rapyd Pay integration.`,
    image: require("../images/do_image.jpeg"),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Rapyd Pay", "QR Code"],
    category: "web app",
    webapp: "https://demo.rentallscript.com/",
    github: "",
  },
  {
    id: 12,
    title: "Millennia Miles",
    description: `Built a taxi booking application supporting automatic and admin-based driver assignment, distance-based fare calculation, trip management, passenger-based vehicle selection, and driver availability scheduling.`,
    image: require("../images/m-miles.png"),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps", "WebSockets"],
    category: "web app",
    webapp: "https://demo.wooberly.com/",
    github: "",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
