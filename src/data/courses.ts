
export type CourseCategory = 'Tech' | 'Safety';
export type CourseType = 'Private' | 'Govt';

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: CourseCategory;
  type: CourseType;
  image: string;
  features: string[];
}

const courses: Course[] = [
  {
    id: "web-dev-mern",
    title: "Web Development (MERN Stack)",
    description: "Comprehensive MERN Stack development course covering MongoDB, Express.js, React, and Node.js. Learn to build full-stack web applications.",
    duration: "6 months",
    category: "Tech",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "Frontend development with React",
      "Backend development with Node.js and Express",
      "Database management with MongoDB",
      "Authentication and Authorization",
      "Deployment and hosting"
    ]
  },
  {
    id: "mobile-app-dev",
    title: "Mobile App Development (MERN)",
    description: "Learn to build cross-platform mobile applications using React Native with MongoDB, Express.js, and Node.js backend.",
    duration: "6 months",
    category: "Tech",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "React Native fundamentals",
      "Mobile UI development",
      "API integration",
      "State management",
      "App deployment to stores"
    ]
  },
  {
    id: "graphics-motion",
    title: "Graphics Designing (Motion Media)",
    description: "Learn motion graphics design and animation techniques for digital media including video intros, animations, and visual effects.",
    duration: "3 months",
    category: "Tech",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "After Effects mastery",
      "Motion principles",
      "Visual effects creation",
      "Character animation",
      "Portfolio development"
    ]
  },
  {
    id: "graphics-print",
    title: "Graphics Designing (Print Media)",
    description: "Master the art of print media design including brochures, posters, business cards, and other print materials.",
    duration: "3 months",
    category: "Tech",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "Adobe Illustrator & Photoshop",
      "Layout design principles",
      "Typography fundamentals",
      "Print preparation",
      "Brand identity design"
    ]
  },
  {
    id: "web-dev-basics",
    title: "Web Development (Basics)",
    description: "Introduction to web development focusing on HTML, CSS, and JavaScript basics for beginners.",
    duration: "6 months",
    category: "Tech",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "HTML5 structure",
      "CSS3 styling and layouts",
      "JavaScript fundamentals",
      "Responsive design",
      "Basic web interactivity"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing course covering SEO, social media, content marketing, and online advertising strategies.",
    duration: "3 months",
    category: "Tech",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "SEO optimization",
      "Social media marketing",
      "Content strategy",
      "Google Ads",
      "Analytics and reporting"
    ]
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant (Amazon)",
    description: "Learn to become an effective virtual assistant specializing in Amazon marketplace and e-commerce operations.",
    duration: "3 months",
    category: "Tech",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "Amazon marketplace operations",
      "Product listing optimization",
      "Customer service management",
      "Inventory tracking",
      "Order fulfillment processes"
    ]
  },
  {
    id: "computer-apps-short",
    title: "Computer Applications (Short)",
    description: "Essential computer applications training including MS Office, email management, and basic computing skills.",
    duration: "3 months",
    category: "Tech",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "MS Word, Excel, PowerPoint",
      "Email management",
      "Basic data management",
      "File organization",
      "Digital communication tools"
    ]
  },
  {
    id: "computer-apps-long",
    title: "Computer Applications (Extended)",
    description: "Comprehensive computer applications training with advanced features and productivity tools.",
    duration: "6 months",
    category: "Tech",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "Advanced MS Office",
      "Database basics",
      "Cloud services",
      "Productivity software",
      "Technical troubleshooting"
    ]
  },
  {
    id: "safety-inspector",
    title: "Safety Inspector",
    description: "Training program for safety inspection procedures, regulations, and best practices across various industries.",
    duration: "3 months",
    category: "Safety",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "Safety regulations",
      "Hazard identification",
      "Risk assessment",
      "Inspection procedures",
      "Incident investigation"
    ]
  },
  {
    id: "safety-officer",
    title: "Safety Officer",
    description: "Comprehensive training for safety officers covering management systems, auditing, and safety program development.",
    duration: "3 months",
    category: "Safety",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "Safety management systems",
      "Regulatory compliance",
      "Emergency response planning",
      "Training program development",
      "Safety auditing"
    ]
  },
  {
    id: "nebosh-prep",
    title: "NEBOSH Preparation",
    description: "Preparatory course for NEBOSH (National Examination Board in Occupational Safety and Health) certification.",
    duration: "1 month",
    category: "Safety",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "NEBOSH examination overview",
      "Health and safety management",
      "Risk control strategies",
      "Hazardous substances management",
      "Exam preparation and practice"
    ]
  },
  {
    id: "iosh-prep",
    title: "IOSH Preparation",
    description: "Preparation course for IOSH (Institution of Occupational Safety and Health) certification exams.",
    duration: "1 month",
    category: "Safety",
    type: "Private",
    image: "/placeholder.svg",
    features: [
      "IOSH certification overview",
      "Working safely principles",
      "Managing safely concepts",
      "Risk assessment techniques",
      "Practical assessment preparation"
    ]
  },
  {
    id: "govt-graphics-motion",
    title: "Graphics Designing (Motion Media)",
    description: "Government-certified course in motion graphics design and animation techniques.",
    duration: "3 months",
    category: "Tech",
    type: "Govt",
    image: "/placeholder.svg",
    features: [
      "After Effects fundamentals",
      "Animation principles",
      "Motion graphics design",
      "Video editing basics",
      "Government certification"
    ]
  },
  {
    id: "govt-graphics-print",
    title: "Graphics Designing (Print Media)",
    description: "Government-certified print media design course with official certification upon completion.",
    duration: "3 months",
    category: "Tech",
    type: "Govt",
    image: "/placeholder.svg",
    features: [
      "Design software mastery",
      "Print production standards",
      "Layout design principles",
      "Commercial printing processes",
      "Government certification"
    ]
  },
  {
    id: "govt-web-basics",
    title: "Web Development (Basics)",
    description: "Government-certified basic web development course suitable for beginners with no prior experience.",
    duration: "6 months",
    category: "Tech",
    type: "Govt",
    image: "/placeholder.svg",
    features: [
      "HTML and CSS fundamentals",
      "Basic JavaScript",
      "Web design principles",
      "Responsive layouts",
      "Government certification"
    ]
  },
  {
    id: "govt-virtual-assistant",
    title: "Virtual Assistant (Amazon)",
    description: "Government-certified training program for virtual assistants specializing in e-commerce operations.",
    duration: "3 months",
    category: "Tech",
    type: "Govt",
    image: "/placeholder.svg",
    features: [
      "E-commerce fundamentals",
      "Amazon marketplace operations",
      "Customer relationship management",
      "Digital communication skills",
      "Government certification"
    ]
  },
  {
    id: "govt-computer-apps",
    title: "Computer Applications",
    description: "Government-certified computer applications training program with official certification.",
    duration: "3 months",
    category: "Tech",
    type: "Govt",
    image: "/placeholder.svg",
    features: [
      "Office software suite",
      "Basic computer operations",
      "Data management",
      "Digital literacy",
      "Government certification"
    ]
  },
  {
    id: "govt-safety-inspector",
    title: "Safety Inspector",
    description: "Government-certified safety inspector training program with official recognition.",
    duration: "3 months",
    category: "Safety",
    type: "Govt",
    image: "/placeholder.svg",
    features: [
      "National safety standards",
      "Regulatory inspection procedures",
      "Documentation and reporting",
      "Safety auditing",
      "Government certification"
    ]
  }
];

export default courses;
