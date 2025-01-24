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

// ai services image
import inbound from "./assets/image/landingpage/inbound.jpg";
import outbound from "./assets/image/landingpage/outbound.jpg";

//rpa service image
import automation from "./assets/image/landingpage/automation.jpg";
import data from "./assets/image/landingpage/data.jpg";
import invoice from "./assets/image/landingpage/invoice.jpg";
import customer from "./assets/image/landingpage/cutomer.jpg";
import compliance from "./assets/image/landingpage/compliance.jpg";
export const routes = [
  {
    name: "Home",
    path: "/",
    // component: <Home />,
    landingpath: "home",
  },
  {
    name: "Services",
    path: "/service",
    landingpath: "service",

    // component: <Service />,
  },
  {
    name: "About Us",
    path: "/about",
    landingpath: "about",

    // component: <About />,
  },
  {
    name: "Contact Us",
    path: "/contact",
    landingpath: "contact",

    // component: <Contact />,
  },
  {
    name: "Blog",
    // path: "/blog",
    // component: <Contact />,
  },
];

export const companyDetails = {
  name: "Cognitek",
  email: "cogniteknologies@gmail.com",
  phone: "+91-7530003599",
  whatsapp: "7530003599",
  address:
    "Plot No. 197, Z Elite, 2nd Floor, A, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081",
};

export const services = [
  {
    id: 1,
    img: rpa,
    title: "Robotic Process Automation (RPA)",
    description:
      "Streamline operations and eliminate errors with our smart RPA solutions. Let us handle the repetitive tasks while you focus on driving growth and innovation.",
  },
  {
    id: 2,
    img: custome,
    title: "AI Calling Agency",
    description:
      "Effortlessly manage inbound and outbound calls with AI-powered solutions for better conversions and efficiency.From booking appointments to qualifying leads, our intelligent agents handle it all.",
  },
  {
    id: 3,
    img: ai,
    title: "Artificial Intelligence Development",
    description:
      "Harness AI to solve challenges, improve decisions and unlock opportunities with seamless results-driven solutions.",
  },
  {
    id: 4,
    img: web,
    title: "Web Development",
    description:
      "Build dynamic, responsive websites that captivate your audience and drive growth effortlessly.",
  },
  {
    id: 5,
    img: app,
    title: "Mobile App Development",
    description:
      "Reach your customers anywhere with powerful, intuitive apps designed to deliver outstanding performance and user satisfaction.",
  },
  {
    id: 6,
    img: chat,
    title: "Chatbot Development",
    description:
      "Drive engagement and boost conversions with intelligent chatbots delivering instant, personalized responses tailored to your business.",
  },
  {
    id: 7,
    img: ml,
    title: "Machine Learning Solutions",
    description:
      "Boost decision-making and uncover opportunities with machine learning models that transform your data into actionable insights.",
  },
];

export const whychooseus = [
  {
    id: 1,
    imgSrc: "assets/img/blog/blog_s5_1.png",
    altText: "Cognitek",
    title: "Tailored Approach",
    desc: "We believe in creating solutions that align perfectly with your goals and challenges.",
    date: "October 19, 2022",
    author: "Admin",
    comments: "Comment",
  },
  {
    id: 2,
    imgSrc: "assets/img/blog/blog_s5_2.png",
    altText: "Cognitek",
    title: "Expertise You Can Trust",
    desc: "Our team has a proven track record of delivering results across various industries.",
    date: "October 19, 2022",
    author: "Admin",
    comments: "Comment",
  },
  {
    id: 3,
    imgSrc: "assets/img/blog/blog_s5_3.png",
    altText: "Cognitek",
    title: "Innovation-Driven",
    desc: "We incorporate the latest technologies to keep your business ahead of the competition.",
    date: "October 19, 2022",
    author: "Admin",
    comments: "Comment",
  },
  {
    id: 4,
    imgSrc: "assets/img/blog/blog_s5_2.png",
    altText: "Cognitek",
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
    quote:
      "With Cognitek's document automation solution, we’ve eliminated manual errors and drastically reduced processing time. Generating, reviewing, and sharing documents is now seamless and effortless. A true productivity booster!",
    author: "Teja Reddy",
    position: "Director of Operations",
    company: "Pioneer Enviro Pvt Ltd",
  },
  {
    id: 2,
    quote:
      "Cognitek has transformed our communication at Premier Properties Realty. Their AI agents handle all our inbound inquiries and appointment bookings flawlessly, saving us time and increasing client satisfaction. It’s a true game-changer for our business!",
    author: "Sarah L.",
    position: "Managing Director",
    company: "Premier Properties Realty",
  },
  {
    id: 3,
    quote:
      "Cognitek RPA expertise streamlined our invoicing and payroll processes at BrightPath Logistics. The automation saved us over 20 hours per week and completely eliminated errors. Our operations have never been smoother.",
    author: "Alan B.",
    position: "Operations Lead",
    company: "BrightPath Logistics",
  },
  {
    id: 4,
    quote:
      "The custom AI model developed by Cognitek has transformed our inventory management system at RetailPro Solutions. We’ve reduced overstock issues by 25% and streamlined our supply chain like never before.",
    author: "Martin K.",
    position: "Supply Chain Manager",
    company: "RetailPro Solutions",
  },
  {
    id: 5,
    quote:
      "Our chatbot by Cognitek has revolutionized customer service at GreenLeaf Grocers. It handles 85% of inquiries instantly, and our support team can now focus on resolving complex issues.",
    author: "Ethan S.",
    position: "Customer Support Lead",
    company: "GreenLeaf Grocers",
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
    question: "What services does Cognitek offer?",
    answer:
      "Cognitek specializes in a range of technology services, including Robotic Process Automation (RPA), custom software development, artificial intelligence development, web and mobile app development, chatbot solutions, and machine learning expertise.",
  },
  {
    id: 2,
    question: "Why should I choose Cognitek?",
    answer:
      "Cognitek provides a tailored approach, proven expertise across industries, innovative solutions, and a collaborative process to ensure transparency and success in delivering impactful technology solutions.",
  },
  {
    id: 3,
    question: "What notable achievements has Cognitek received?",
    answer:
      "Cognitek has been recognized globally with awards like the 2023 AI Excellence Award, Top RPA Innovator 2024, Best Emerging Tech Company at the Global Tech Summit 2023, and the Innovation in Workflow Automation award from the Digital Transformation Council.",
  },
  {
    id: 4,
    question: "What are some key milestones Cognitek has achieved?",
    answer:
      "Cognitek has successfully completed over 500 AI and RPA projects, achieved a 98% client satisfaction rate, and delivered over 30,000 hours of workflow automation across industries such as finance, healthcare, retail, and logistics.",
  },
  {
    id: 5,
    question: "How does Cognitek ensure the success of its projects?",
    answer:
      "Cognitek emphasizes a collaborative process, working closely with clients from planning to execution. This ensures that all solutions are tailored to specific business needs and deliver measurable results.",
  },
  {
    id: 6,
    question: "Can Cognitek assist with digital transformation?",
    answer:
      "Yes, Cognitek specializes in helping businesses embrace digital transformation through cutting-edge technologies such as AI, RPA, and workflow automation, ensuring efficiency and scalability.",
  },
  // {
  //   id: 7,
  //   question: "Does Cognitek provide post-project support?",
  //   answer:
  //     "Absolutely. Cognitek offers comprehensive post-project support and maintenance to ensure smooth implementation and long-term success for all solutions delivered.",
  // },
  // {
  //   id: 8,
  //   question: "What industries does Cognitek serve?",
  //   answer:
  //     "Cognitek serves a diverse range of industries, including finance, healthcare, retail, logistics, and more. Our expertise allows us to address industry-specific challenges effectively.",
  // },
];

export const rpaservices = [
  {
    id: 1,
    img: automation,
    title: "Process Automation",
    description:
      "Optimize workflows by automating repetitive tasks, boosting speed and consistency.",
  },
  {
    id: 2,
    img: data,
    title: "Data Management",
    description:
      "Simplify data entry, validation, and integration across systems to improve operational efficiency.",
  },
  {
    id: 3,
    img: invoice,
    title: "Invoice Automation",
    description:
      "Streamline billing processes for faster, error-free invoicing and better cash flow management.",
  },
  {
    id: 4,
    img: customer,
    title: "Customer Interaction Automation",
    description:
      "Deploy bots to handle routine inquiries, freeing up your team for more complex customer needs.",
  },
  {
    id: 5,
    img: compliance,
    title: "Compliance and Reporting Automation",
    description:
      "Ensure regulatory compliance and generate accurate reports effortlessly with automated solutions.",
  },
];
export const aiCalling = [
  {
    id: 1,
    img: inbound,
    title: "Inbound Calling Support",
    description:
      "Let our AI agents manage your inbound calls with accuracy and professionalism. From answering customer questions to booking appointments, we ensure every interaction reflects your brand’s excellence while giving your team more time to focus on growth.",
  },
  {
    id: 2,
    img: outbound,
    title: "Outbound Calling Services",
    description:
      "Our outbound AI agents are skilled at cold calling potential leads, qualifying prospects, and scheduling appointments. We eliminate the manual effort and guesswork, so your sales team can concentrate on what they do best—closing deals.",
  },
];

export const whyChooseAI = [
  {
    id: 1,
    title: "Always Available",
    description:
      "Our outbound AI agents are skilled at cold calling potential leads, qualifying prospects, and scheduling appointments. We eliminate the manual effort and guesswork, so your sales team can concentrate on what they do best—closing deals.",
  },
  {
    id: 2,
    title: "Cost Savings",
    description:
      "Reduce overhead by automating repetitive calling tasks while maintaining exceptional service quality.",
  },
  {
    id: 3,
    title: "Higher Close Rates",
    description:
      " We qualify leads intelligently, ensuring your team works only with high-potential prospects.",
  },
  {
    id: 4,
    title: "Personalized Experience",
    description:
      "Customize scripts and workflows to align perfectly with your brand’s voice.",
  },
];

export const whyChooseRPA = [
  {
    id: 1,
    title: "Expertise You Can Rely On",
    description:
      "Our experienced team delivers robust, scalable automation solutions.",
  },
  {
    id: 2,
    title: "Customized for Your Business",
    description: "Every solution is tailored to your specific requirements.",
  },
  {
    id: 3,
    title: "Dedicated Support",
    description:
      "From planning to implementation and beyond, we’re with you every step of the way.",
  },
];
export const rpaTestimonials = [
  {
    id: 1,
    quote:
      "Cognitek transformed the way we handle our workflows. What used to take hours is now done in minutes, with zero errors. Their RPA solution has truly elevated our operational efficiency.",
    author: "Mark L.",
    position: "Operations Manager",
    company: "Streamline Corp.",
  },
  {
    id: 2,
    quote:
      "Thanks to Cognitek, we automated our invoicing system, cutting processing time by 70% and improving accuracy across the board. It’s been a game-changer for our finance team!",
    author: "Emily R.",
    position: "CFO",
    company: "NovaFinTech",
  },
  {
    id: 3,
    quote:
      "The RPA tools from Cognitek have simplified our data entry and integration tasks. We’ve seen a dramatic improvement in consistency and saved countless hours of manual work.",
    author: "Sophia T.",
    position: "Data Manager",
    company: "DigiFlow",
  },
  {
    id: 4,
    quote:
      "Our customer service has improved significantly since implementing Cognitek RPA solution. Routine inquiries are handled instantly, allowing our team to focus on resolving complex issues. Customer satisfaction is at an all-time high!",
    author: "Jason M.",
    position: "Customer Experience Lead",
    company: "BrightLine Support",
  },
  {
    id: 5,
    quote:
      "Working with Cognitek was seamless. Their team identified inefficiencies in our processes and implemented automation that increased our productivity by 40%. We couldn’t be happier with the results!",
    author: "Linda K.",
    position: "CEO",
    company: "OptiWork Enterprises",
  },
];
export const aiTestimonials = [
  {
    id: 1,
    industry: "Real Estate",
    quote:
      "Since we started using Cognitek at UrbanNest Realty, managing inquiries has become effortless. Their AI books property viewings efficiently, and our team can now focus on closing deals rather than chasing leads. We’ve seen a 30% increase in successful showings!",
    author: "Sarah M.",
    position: "Lead Agent",
    company: "UrbanNest Realty",
  },
  {
    id: 2,
    industry: "Healthcare",
    quote:
      "At Healthy Horizons Clinic, handling patient calls used to be chaotic. Cognitek streamlined our appointment system, ensuring every patient is attended to promptly. Our staff is happier, and patient satisfaction is at an all-time high!",
    author: "Dr. Emily T.",
    position: "Clinic Manager",
    company: "Healthy Horizons ",
  },
  {
    id: 3,
    industry: "Retail",
    quote:
      "Cognitek has been a huge asset to ShopSmart Electronics. Their AI calling service manages customer support and post-purchase feedback with such ease. It’s like having an extra team that never sleeps. Highly recommend!",
    author: "John L.",
    position: "Owner",
    company: "ShopSmart Electronics",
  },
  {
    id: 4,
    industry: "Hospitality",
    quote:
      "At Royal Palm Resort, guest satisfaction is our priority. Cognitek’s AI agents handle reservations and inquiries flawlessly, leaving our team more time to focus on creating memorable experiences for our guests. We’ve seen a 20% boost in positive reviews!",
    author: "Raj P.",
    position: "Manager",
    company: "Royal Palm Resort",
  },
  {
    id: 5,
    industry: "Beauty and Wellness",
    quote:
      "Cognitek completely transformed scheduling for Bliss Haven Spa. Clients love the automated reminders, and our no-shows have dropped significantly. Their AI calling service keeps our calendar running smoothly, letting us focus on pampering our clients.",
    author: "Lila R.",
    position: "Owner",
    company: "Bliss Haven Spa",
  },
  {
    id: 6,
    industry: "Technology",
    quote:
      "Partnering with Cognitek at CodeTech Innovations was the best decision we made this year. Their outbound AI agents qualify leads with incredible precision and have boosted our demo bookings by 40%. It’s a game-changer for SaaS companies.",
    author: "Alex W.",
    position: "Sales Manager",
    company: "CodeTech Innovations",
  },
];
