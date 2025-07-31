const config = {
  title: "Rishikesh Akkalwar | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Rishikesh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, Code Room, Weather App(Timepass), and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Rishikesh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Rishikesh",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "CodeRoom",
    "Weather App",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Rishikesh Akkalwar",
  email: "rushikeshakkalwar@gmail.com",
  site: "https://rishikeshakkalwar.vercel.app/",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/00rishh",
    linkedin: "https://www.linkedin.com/in/rishi-a-30a3a0260/",
    instagram: "https://www.instagram.com/00rishh/",
    facebook: "https://www.facebook.com/00rishh",
    github: "https://github.com/iostream4YOU",
  },
};
export { config };
