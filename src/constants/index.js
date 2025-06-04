import {
  c,
  python,
  java,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  pva,
  git,
  ecdotLogo,
  bcc,
  legendsSchool,
  westbank,
  shcoolarapp,
  helpdesk,
  powerbi,
  BookingSysytem,
  htmlportf,
  viteportf,
  powerapps,
  powerautomate,
  mysql,
  flutter,
  securityssl,
  googlefirebase,
  php,
  azure,
  php1,
  powerapps1,
  powerautomate1
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

export const services = [
  { title: "Java", icon: java },
  { title: "PhP", icon: php },
  { title: "Python", icon: python },
  { title: "MySQL", icon: mysql },
  { title: "Powerapps", icon: powerapps },
  { title: "Power Auto", icon: powerautomate }
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Azure", icon: azure },
  { name: "Power Automate", icon: powerautomate1 },
  { name: "Power Apps", icon: powerapps1 },
  { name: "Power Virtual Agent", icon: pva },
  { name: "PHP", icon: php1 },
  { name: "git", icon: git },
  { name: "Firebase", icon: googlefirebase},
  { name: "Flutter", icon: flutter},
  { name: "Information Sec", icon: securityssl }
];

export const educations = [
  {
    title: 'Matric Certificate',
    school: 'West Bank Senior Secondary School',
    icon: westbank,
    iconBg: "#161329",
    date: 'Dec 2015'
  },{
    title: 'Certificate of Sound Engineer',
    school: 'Legends School of Contemporary Music',
    icon: legendsSchool,
    iconBg: "#161329",
    date: 'Jan 2016 - Jan 2017'
  },{
    title: 'Diploma in System Development',
    school: 'Boston City College and Business Campus',
    icon: bcc,
    iconBg: "#161329",
    date: 'Feb 2017 - Jan 2021'
  },
]

export const experiences = [
  {
    title: "Information Management System and User Technician Internship",
    company_name: "Eastern Cape Deparment of Transport",
    icon: ecdotLogo,
    iconBg: "#161329",
    date: "Jul 2022 - Jul 2024",
    points: [
		" I bring hands-on experience in database management systems such as SQL and MySQL, having developed and maintained an E-Leave System where employee leave records were securely stored and managed. My background includes data analysis and interpretation using Excel and Tableau, alongside creating a Power BI dashboard to monitor and report on IT Technician support calls—improving visibility and response efficiency.",

    "I have also worked extensively with SharePoint for information management and security, where I was responsible for assigning user access levels, maintaining content integrity, and integrating e-signature solutions using SigniFlow. My work ensured that only authorized personnel had access to sensitive information, in line with best practices. In addition, I have a strong understanding of information security principles and cloud-based administration. Ive managed license assignments via Microsoft 365 Admin Center, Azure Portal, and PowerShell, while leveraging Azure Active Directory and other Azure resources for user management and system access control. This experience has helped me ensure both compliance and operational efficiency in IT environments.",

    "I have hands-on experience working with Microsoft Windows operating systems from versions 7 through 11. My responsibilities included joining devices to domains, installing printers, and configuring Office 365 to enable users to manage documents, communicate via email, and handle spreadsheets efficiently. I possess strong troubleshooting and problem-solving skills, allowing me to resolve both hardware and software issues quickly and effectively. My technical support background includes assisting endusers with system-related problems, delivering responsive customer service, and communicating solutions in a clear, user-friendly manner. I’m well-versed in ITIL best practices and service desk operations, and I’ve gained experience with tools like SCCM, Windows Remote Assistant, Microsoft Teams, and various ticket management systems.",

    "I also have a solid grasp of networking and server fundamentals, including the configuration of DHCP, network switches, routers, hubs, and the setup and repair of RJ45 connections and network points. Additionally, I’ve supported transversal systems such as PERSAL, LOGIS, and BAS, managing configuration and installations to ensure smooth operation across departments. This combination of technical proficiency, systems knowledge, and user-focused support enables me to deliver reliable, efficient IT services in fast-paced environments."
    ],
  },
];

export const projects = [
  {
    name: "Learner Transport System",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Microsoft Powerapps", color: "blue-text-gradient" },
      { name: "Microsoft Dataverse", color: "green-text-gradient" },
      { name: "Microsoft SQL Server", color: "pink-text-gradient" },
      { name: "Bing Map API", color: "yellow-text-gradient" },
    ],
    image: shcoolarapp,
    source_code_link: "",
  },
  {
    name: "HelpDesk Power Bi Report",
    description:
      "Developed a Power BI report to track and manage all Service Request Tickets and ensure customer satisfaction through proactive issue tracking and performance insights.",
    tags: [
      { name: "Microsoft Powerapps", color: "blue-text-gradient" },
      { name: "SharePoint Online", color: "green-text-gradient" },
      { name: "Microsoft Power Bi", color: "pink-text-gradient" },
    ],
    image: powerbi,
    source_code_link: "",
  },
  {
    name: "ECDOT Help Desk App",
    description:
      "Developed the ECDOT Help Desk Canvas App, enabling technicians to log service calls manually, which led to a 30% increase in ticket volume. Designed and implemented an automated ticket workflow system that reduced resolution ",
    tags: [
      { name: "Microsoft Powerapps", color: "blue-text-gradient" },
      { name: "SharePoint Online", color: "green-text-gradient" },
    ],
    image: helpdesk,
    source_code_link: "",
  },
  {
    name: "ECDOT Boardroom Booking System",
    description:
      "Developed the ECDOT Help Desk Canvas App, enabling technicians to log service calls manually, which led to a 30% increase in ticket volume. Designed and implemented an automated ticket workflow system that reduced resolution ",
    tags: [
      { name: "Microsoft Powerapps", color: "blue-text-gradient" },
      { name: "SharePoint Online", color: "green-text-gradient" },
	  { name: "Microsoft Power Automate", color: "pink-text-gradient" },
    ],
    image: BookingSysytem,
    source_code_link: "",
  },
  {
    name: "HTML Portfolio",
    description:
      "Developed an HTML Portfolio",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
	  { name: "CSS", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "Github Pages", color: "yellow-text-gradient" },
    ],
    image: htmlportf,
    source_code_link: "https://github.com/Lonwabo-ITSolutions/Portfolio_html",
  },
  {
    name: "React Vite Portfolio",
    description:
      "Vite React Portfolio with framer motion and Geometry",
    tags: [
      { name: "React Vite", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "Tailwindcss", color: "pink-text-gradient" },
	  { name: "Framer Motion", color: "green-text-gradient" },
      { name: "Geometry", color: "pink-text-gradient" },
      { name: "Github Pages", color: "yellow-text-gradient" },
    ],
    image: viteportf,
    source_code_link: "",
  }
];
