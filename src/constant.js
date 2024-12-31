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
    title: "AI Calling Agency",
    description:
      "Transform how your business connects with customers. Our AI calling solutions handle inbound and outbound calls seamlessly, from booking appointments to qualifying leads. Save time, reduce costs, and increase close rates with our cutting-edge AI agents.",
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
      "Our AI agents work 24/7, ensuring you never miss a lead or opportunity.",
  },
  {
    id: 2,
    title: "Cost Savings",
    description:
      "Automate repetitive calling tasks to reduce overhead while maintaining high service quality.",
  },
  {
    id: 3,
    title: "Higher Close Rates",
    description:
      "AI intelligently qualifies leads, ensuring your team engages with high-potential prospects.",
  },
  {
    id: 4,
    title: "Personalized Experience",
    description:
      "Customize workflows and scripts to reflect your brand's voice and cater to individual customer needs.",
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
    company: "Healthy Horizons Clinic",
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
