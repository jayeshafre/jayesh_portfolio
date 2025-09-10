export const personalInfo = {
  name: "Jayesh Afre",
  title: "Full-Stack Developer & MCA Student",
  location: "Pune, Maharashtra, India",
  email: "jayeshafre1@gmail.com",
  phone: "+91 96653 11057",
  linkedin: "https://linkedin.com/in/jayesh-afre",
  github: "https://github.com/jayeshafre",
  portfolio: "https://jayeshafre.dev",
  avatar: "/avatar.jpg",
  resumePdf: "/resume.pdf",
  bio: "Pursuing 2nd year of MCA with hands-on full-stack development experience. Built 3+ scalable applications focusing on responsive design, clean code architecture, RESTful APIs, and cloud-ready deployment."
};

export const skills = {
  frontend: [
    "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", 
    "Axios", "Responsive Design"
  ],
  backend: [
    "Django REST Framework", "FastAPI", "Python", "REST APIs", 
    "JWT/OAuth2 Authentication"
  ],
  databases: [
    "PostgreSQL", "MySQL", "MongoDB"
  ],
  devops: [
    "Docker", "Git/GitHub", "Postman", "CI/CD", "Linux"
  ],
  additional: [
    "Data Structures & Algorithms", "Cloud Deployment (Vercel, Render)", 
    "Unit Testing (TDD, PyTest)"
  ]
};

export const projects = [
  {
    id: 1,
    title: "CodementorX",
    subtitle: "AI Coding Mentor Chatbot",
    description: "Built a chatbot integrating DeepSeek API with JWT + Redis caching (100+ sessions, 30% faster response). Deployed via Dockerized CI/CD (Vercel + Render), tested 15+ API endpoints with Postman for reliability.",
    technologies: ["React.js", "Django REST Framework", "FastAPI", "PostgreSQL", "Redis", "Tailwind CSS"],
    github: "https://github.com/jayeshafre/CodementorX",
    live: null,
    // Multiple images with descriptions
    images: [
      {
        src: "/projects/codementorx/homepage.png",
        alt: "CodementorX Homepage",
        caption: "Clean and intuitive homepage design"
      },
      {
        src: "/projects/codementorx/chat-interface.png",
        alt: "Chat Interface",
        caption: "AI-powered chat interface with syntax highlighting"
      },
      {
        src: "/projects/codementorx/profile-page.png",
        alt: "profile-page",
        caption: "User dashboard with session history and analytics"
      },
      {
        src: "/projects/codementorx/login-page.png",
        alt: "Login page",
        caption: "Login page of CodementorX"
      }
    ],
    // Keep the main image for backward compatibility
    image: "/projects/codementorx/homepage.png"
  },
  {
    id: 2,
    title: "Weather App",
    subtitle: "Real-Time Weather Forecast",
    description: "Built a responsive weather dashboard with JS, HTML, CSS, and OpenWeather API for 50+ cities. Developed Python backend for API requests, error handling, and JSON parsing.",
    technologies: ["Python", "JavaScript", "HTML5", "CSS3", "OpenWeather API"],
    github: "https://github.com/jayeshafre/weather-forecast-app",
    live: "https://weather-forecast.vercel.app",
    // Multiple images for weather app
    images: [
      {
        src: "/projects/weather/homepage.png",
        alt: "Weather Dashboard",
        caption: "Auto location detection"
      },
      {
        src: "/projects/weather/search-cities.png",
        alt: "City Search Feature",
        caption: "Search and add multiple cities"
      },
      {
        src: "/projects/weather/history-view.png",
        alt: "3-Day History",
        caption: "Detailed 3-day weather history"
      },
      {
        src: "/projects/weather/location-fetch.png",
        alt: "Homepage",
        caption: "Homepage after location detection"
      }
    ],
    // Keep the main image for backward compatibility
    image: "/projects/weather/location-fetch.png"
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Abhinav Education Society's Institute of Management, Pune",
    duration: "Expected 2026",
    gpa: "SGPA: 8.23/10"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KCE's Institute of Management, Jalgaon",
    duration: "2021–2024",
    gpa: "GPA: 9.83/10"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "K. Narkhede Junior College, Bhusaval",
    duration: "2019–2021",
    gpa: "Percentage: 85.67%"
  }
];

export const achievements = [
  "Infosys Certified – Soft Skills & Professional Communication",
  "College Topper – BCA for 3 consecutive years",
  "NSE Visit - Learn about trading algorithm",
  "Ideal Student - X standard "
];