export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building mobile applications",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

//use this site for finding icon:www.svgrepo.com/vectors/
export const projects = [
  {
    id: 1,
    title: "eLearnify360",
    des: "A fully functional business website developed using JavaScript, HTML, and CSS",
    img: "/p1.png",
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg"],
    link: "https://elearnify360.com/",
  },
  {
    id: 2,
    title: "EduHub",
    des: "A web app for selling online courses, built with JavaScript, CSS, and HTML.",
    img: "/p2.png",
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg", "/firebase.svg"],
    link: "https://masuma-eduhub.netlify.app/",
  },
  {
    id: 3,
    title: "AnalytiX",
    des: "A landing page for an analytics app, built with React, TypeScript, and Tailwind CSS.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://masuma-analytix.netlify.app/",
  },
  {
    id: 4,
    title: "React Jobs",
    des: "A job search app built with React, TypeScript, and Tailwind CSS.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/masuma131/react-job-app",
  },
  {
    id: 5,
    title: "Gesture Pong",
    des: "A pong game controlled using hand gestures, built with Python and OpenCV library.",
    img: "/p5.png",
    iconLists: ["/python.svg", "/opencv.svg"],
    link: "https://github.com/masuma131/GesturePong",
  },
  {
    id: 6,
    title: "Flappy Bird Game",
    des: "An advanced flappy bird game built with C++ and SDL library.",
    img: "/p6.png",
    iconLists: ["/c-plus.svg"],
    link: "https://github.com/masuma131/Flappy-Bird-Game",
  },
  {
    id: 7,
    title: "Imaginary Maze Game",
    des: "A microcontroller-based virtual maze game built with C and Assembly",
    img: "/p7.png",
    iconLists: ["/c-1.svg", "/nxp.svg"],
    link: "https://github.com/masuma131/Imaginary-Maze-Game",
  },
  {
    id: 8,
    title: "AC Circuit Simulator",
    des: "An analog circuit simulator built with C++ and OpenGL library.",
    img: "/p8.png",
    iconLists: ["/c-plus.svg", "/opengl.svg"],
    link: "https://github.com/masuma131/Analog-Circuit-Simulator",
  },
];

export const testimonials = [
  {
    quote:
      "Masuma is the consummate professional. She grasped my concept quickly and expertly to give me just what I wanted. I am already making plans to work with her again on another project. If you are looking for professionalism and attention to the details of your project, Masuma is who you want to partner with.",
    name: "Lonnie Jenkins",
    title: " ",
  },
  {
    quote:
      "Really great working with Masuma, she is very polite, great attention to detail and went above and beyond to meet my expectations and requirements. We will be working with her again, and are looking forward to welcoming her to our freelancing network.",
    name: "Sophie Nicolay",
    title: " ",
  },
  {
    quote:
      "Masuma was amazing!! She was super responsive and good at asking questions when needed. Her communication was excellent and the project came out wonderful!! Super happy! Will be working with her again.",
    name: "Nev Khalil",
    title: " ",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer - eLearnify360",
    desc: "Developed and maintained a website with JavaScript, CSS and HTML, ensuring optimal performance and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Web Developer - Fiverr",
    desc: "Designed and developed websites for clients, delivering tailored web solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Coding Lab Assistant - Seneca Polytechnic",
    desc: "Guided first-year C programming students by troubleshooting code, debugging, analyzing errors, fixing bugs, and enhancing skills.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },

  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  {
    id: 4,
    title: "Full-Stack Developer - Seneca Engineering Students' Association",
    desc: "Develop and maintain the Seneca Engineering Student's Society website using Angular and back-end technologies",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/masuma131",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "https://github.com/masuma131",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/masuma131/",
  },
];
