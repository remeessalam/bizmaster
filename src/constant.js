// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Service from "./pages/Service";
//award images
import excellence from "./assets/image/awards/excellence.jpg";
import innovator from "./assets/image/awards/innovator.jpg";
import emerging from "./assets/image/awards/emerging.jpg";
import innovation from "./assets/image/awards/innovation.jpg";

// services image
import rpa from "./assets/image/services/rpa.jpg";
import custome from "./assets/image/services/custome.jpg";
import ai from "./assets/image/services/ai.jpg";
import web from "./assets/image/services/web.jpg";
import app from "./assets/image/services/app.jpg";
import chat from "./assets/image/services/chat.jpg";
import ml from "./assets/image/services/ml.jpg";
export const routes = [
  {
    name: "Home",
    path: "/",
    // component: <Home />,
  },
  {
    name: "Services",
    path: "/service",
    // component: <Service />,
  },
  {
    name: "About Us",
    path: "/about",
    // component: <About />,
  },
  {
    name: "Contact Us",
    path: "/contact",
    // component: <Contact />,
  },
  {
    name: "Blog",
    // path: "/blog",
    // component: <Contact />,
  },
];

export const companyDetails = {
  name: "COGNITECH SOLUTIONS",
  email: "contact@cognitechsolutions.com",
  phone: "+91-7530003599",
  whatsapp: "7530003599",
  address: "Villa 58, Aditya Royal Palm, Shaikpet, Hyderabad , India . 500008",
};

export const services = [
  {
    id: 1,
    img: rpa,
    title: "Robotic Process Automation (RPA)",
    description:
      "Simplify your operations and reduce errors with our RPA solutions. We help businesses automate repetitive tasks, optimize workflows, and boost productivity, so you can focus on strategic growth.",
  },
  {
    id: 2,
    img: custome,
    title: "Custom Software Development",
    description:
      "We build software designed specifically for your business needs. Our solutions ensure seamless functionality, scalability, and outstanding performance, helping your organization stay ahead of the curve.",
  },
  {
    id: 3,
    img: ai,
    title: "Artificial Intelligence Development",
    description:
      "Leverage the power of AI to solve complex challenges, enhance decision-making, and unlock new opportunities. Our AI solutions are designed to integrate effortlessly into your processes, delivering measurable results.",
  },
  {
    id: 4,
    img: web,
    title: "Web Development",
    description:
      "Your website is more than just a digital presence—it’s a gateway to growth. We create dynamic, responsive, and user-friendly websites that leave a lasting impression on your audience.",
  },
  {
    id: 5,
    img: app,
    title: "Mobile App Development",
    description:
      "Connect with your customers wherever they are. Our mobile app development team builds high-performing, intuitive applications that deliver seamless user experiences across all devices.",
  },
  {
    id: 6,
    img: chat,
    title: "Chatbot Development",
    description:
      "Enhance customer interactions and streamline support with intelligent chatbot solutions. From answering queries to driving engagement, our chatbots provide instant, personalized responses tailored to your business needs.",
  },
  {
    id: 7,
    img: ml,
    title: "Machine Learning Solutions",
    description:
      "Transform your data into actionable insights with our machine learning expertise. We develop models that enable smarter decisions, improve operations, and uncover hidden opportunities in your data.",
  },
];

export const whychooseus = [
  {
    id: 1,
    imgSrc: "assets/img/blog/blog_s5_1.png",
    altText: "COGNITECH SOLUTIONS",
    title: "Tailored Approach",
    desc: "We believe in creating solutions that align perfectly with your goals and challenges.",
    date: "October 19, 2022",
    author: "Admin",
    comments: "Comment",
  },
  {
    id: 2,
    imgSrc: "assets/img/blog/blog_s5_2.png",
    altText: "COGNITECH SOLUTIONS",
    title: "Expertise You Can Trust",
    desc: "Our team has a proven track record of delivering results across various industries.",
    date: "October 19, 2022",
    author: "Admin",
    comments: "Comment",
  },
  {
    id: 3,
    imgSrc: "assets/img/blog/blog_s5_3.png",
    altText: "COGNITECH SOLUTIONS",
    title: "Innovation-Driven",
    desc: "We incorporate the latest technologies to keep your business ahead of the competition.",
    date: "October 19, 2022",
    author: "Admin",
    comments: "Comment",
  },
  {
    id: 4,
    imgSrc: "assets/img/blog/blog_s5_2.png",
    altText: "COGNITECH SOLUTIONS",
    title: "Collaborative Process",
    desc: "From planning to execution, we work closely with you to ensure transparency and success.",
    date: "October 19, 2022",
    author: "Admin",
    comments: "Comment",
  },
];

export const testimonials = [
  {
    id: 1,
    service: "Robotic Process Automation (RPA)",
    quote: `"Partnering with Cognitech Solutions for RPA was a game-changer. Their solution automated our data entry processes, saving us over 100 hours a month and eliminating errors entirely. Our team can now focus on high-value tasks."`,
    author: "James P.",
    position: "Operations Manager",
    company: "TechSphere Inc.",
  },
  {
    id: 2,
    service: "Custom Software Development",
    quote: `"Cognitech Solutions delivered a custom software platform that transformed how we manage projects. The seamless design and powerful functionality have significantly boosted our team’s productivity and collaboration."`,
    author: "Rachel W.",
    position: "Project Lead",
    company: "InnovateWorks",
  },
  {
    id: 3,
    service: "Artificial Intelligence Development",
    quote: `"The AI solution developed by Cognitech Solutions revolutionized our decision-making process. With predictive insights and automated workflows, we’ve achieved remarkable efficiency in our operations."`,
    author: "Liam H.",
    position: "Director of Analytics",
    company: "DataVision Corp.",
  },
  {
    id: 4,
    service: "Web Development",
    quote: `"Our website redesign with Cognitech Solutions was a huge success! The new site is fast, user-friendly, and has received incredible feedback from our customers. It’s helped us double our online inquiries."`,
    author: "Sophia K.",
    position: "Marketing Head",
    company: "BrightPath Co.",
  },
  {
    id: 5,
    service: "Mobile App Development",
    quote: `"Cognitech Solutions built an exceptional mobile app for our business that has completely transformed how we interact with customers. The sleek design and flawless performance have set us apart from our competitors."`,
    author: "Ethan T.",
    position: "CEO",
    company: "GoMobile Solutions",
  },
  {
    id: 6,
    service: "Chatbot Development",
    quote: `"The chatbot developed by Cognitech Solutions has been a fantastic addition to our customer service. It handles over 80% of queries instantly, improving response times and reducing the load on our support team."`,
    author: "Olivia M.",
    position: "Customer Success Manager",
    company: "ChatEase Inc.",
  },
  {
    id: 7,
    service: "Machine Learning Solutions",
    quote: `"Cognitech Solutions delivered a machine learning model that helped us identify key trends in our data. The insights have been instrumental in optimizing our marketing strategy and increasing ROI by 25%."`,
    author: "Noah L.",
    position: "Head of Marketing",
    company: "Insightly AI",
  },
  {
    id: 8,
    service: "Document Automation",
    quote: `"With Cognitech's document automation solution, we’ve eliminated manual errors and drastically reduced processing time. Generating, reviewing, and sharing documents is now seamless and effortless. A true productivity booster!"`,
    author: "Teja Reddy",
    position: "Director of Operations",
    company: "Pioneer Enviro Pvt Ltd",
  },
];

export const awards = [
  {
    id: 1,
    img: excellence,
    title: "2023 AI Excellence Award",
    description:
      "For groundbreaking AI-powered predictive analytics solutions.",
  },
  {
    id: 2,
    img: innovator,
    title: "Top RPA Innovator 2024",
    description: "Recognized for delivering cutting-edge automation tools.",
  },
  {
    id: 3,
    img: emerging,
    title: "Best Emerging Tech Company",
    description: "Celebrated at the Global Tech Summit 2023.",
  },
  {
    id: 4,
    img: innovation,
    title: "Innovation in Workflow Automation",
    description: "Awarded by the Digital Transformation Council.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What services does Cognitech Solutions offer?",
    answer:
      "Cognitech Solutions specializes in a range of technology services, including Robotic Process Automation (RPA), custom software development, artificial intelligence development, web and mobile app development, chatbot solutions, and machine learning expertise.",
  },
  {
    id: 2,
    question: "Why should I choose Cognitech Solutions?",
    answer:
      "Cognitech Solutions provides a tailored approach, proven expertise across industries, innovative solutions, and a collaborative process to ensure transparency and success in delivering impactful technology solutions.",
  },
  {
    id: 3,
    question: "What notable achievements has Cognitech Solutions received?",
    answer:
      "Cognitech Solutions has been recognized globally with awards like the 2023 AI Excellence Award, Top RPA Innovator 2024, Best Emerging Tech Company at the Global Tech Summit 2023, and the Innovation in Workflow Automation award from the Digital Transformation Council.",
  },
  {
    id: 4,
    question: "What are some key milestones Cognitech Solutions has achieved?",
    answer:
      "Cognitech Solutions has successfully completed over 500 AI and RPA projects, achieved a 98% client satisfaction rate, and delivered over 30,000 hours of workflow automation across industries such as finance, healthcare, retail, and logistics.",
  },
  {
    id: 5,
    question:
      "How does Cognitech Solutions ensure the success of its projects?",
    answer:
      "Cognitech Solutions emphasizes a collaborative process, working closely with clients from planning to execution. This ensures that all solutions are tailored to specific business needs and deliver measurable results.",
  },
  {
    id: 6,
    question: "Can Cognitech Solutions assist with digital transformation?",
    answer:
      "Yes, Cognitech Solutions specializes in helping businesses embrace digital transformation through cutting-edge technologies such as AI, RPA, and workflow automation, ensuring efficiency and scalability.",
  },
  // {
  //   id: 7,
  //   question: "Does Cognitech Solutions provide post-project support?",
  //   answer:
  //     "Absolutely. Cognitech Solutions offers comprehensive post-project support and maintenance to ensure smooth implementation and long-term success for all solutions delivered.",
  // },
  // {
  //   id: 8,
  //   question: "What industries does Cognitech Solutions serve?",
  //   answer:
  //     "Cognitech Solutions serves a diverse range of industries, including finance, healthcare, retail, logistics, and more. Our expertise allows us to address industry-specific challenges effectively.",
  // },
];
