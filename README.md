# Jayesh Afre - Full-Stack Developer Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing my skills, projects, and experience as a full-stack developer and MCA student.

## 🚀 Live Demo

- **GitHub Pages**: [View Live Demo](https://jayeshafre.github.io/jayesh-portfolio/)
- **Portfolio Website**: [jayeshafre.dev](https://jayeshafre.dev)

## ✨ Features

- **Modern Design**: Clean, professional UI with glassmorphism effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth animations and hover effects
- **Typing Animation**: Dynamic title animation in hero section
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Skills Display**: Organized technical skills by category
- **Contact Integration**: Direct email and social media links
- **Resume Download**: One-click resume download functionality
- **Accessible**: Semantic HTML and keyboard navigation support
- **Fast Performance**: Optimized with Vite for lightning-fast loading

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS3 Transitions & Keyframes
- **Build Tool**: Vite
- **Deployment**: GitHub Pages / Vercel / Netlify

## 📁 Project Structure

```
jayesh-portfolio/
├── public/
│   ├── resume.pdf              # Resume PDF file
│   ├── avatar.png              # Profile picture
│   └── project-weather.png     # Project screenshots
├── src/
│   ├── App.jsx                 # Main app component
│   ├── Navbar.jsx              # Navigation component
│   ├── Hero.jsx                # Hero/About section
│   ├── Projects.jsx            # Projects showcase
│   ├── Footer.jsx              # Footer/Contact section
│   ├── data.js                 # Centralized data store
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jayeshafre/jayesh-portfolio.git
   cd jayesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your assets**
   - Replace `/public/avatar.png` with your profile picture
   - Replace `/public/resume.pdf` with your resume
   - Add project screenshots to `/public/` folder

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The site will auto-reload when you make changes

## 🎨 Customization

### Personal Information

Edit `src/data.js` to update your personal information:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};
```

### Projects

Add your projects in `src/data.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/repo",
    live: "https://your-demo.vercel.app",
    image: "/project-image.png"
  },
  // ... more projects
];
```

### Skills & Education

Update the `skills` and `education` objects in `src/data.js` with your information.

### Styling

- **Colors**: Modify Tailwind classes in components
- **Animations**: Customize animations in `tailwind.config.js`
- **Layout**: Adjust spacing and layout in individual components

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates a `dist/` folder with optimized production files.

### Deploy to GitHub Pages

1. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   });
   ```

2. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

### Deploy to Vercel

1. **Connect your GitHub repo to Vercel**
2. **Set build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy automatically on push**

### Deploy to Netlify

1. **Connect your GitHub repo to Netlify**
2. **Set build settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. **Deploy automatically on push**

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Performance Optimizations

- **Code Splitting**: Vendor and icon chunks separated
- **Image Optimization**: Fallback avatars for missing images
- **Lazy Loading**: Components load as needed
- **Minification**: CSS and JS minified in production
- **Caching**: Static assets cached for better performance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help customizing the portfolio:

- **Email**: [jayeshafre1@gmail.com](mailto:jayeshafre1@gmail.com)
- **LinkedIn**: [linkedin.com/in/jayesh-afre](https://linkedin.com/in/jayesh-afre)
- **GitHub**: [github.com/jayeshafre](https://github.com/jayeshafre)

## ⭐ Show Your Support

If this portfolio template helped you, please give it a ⭐ star on GitHub!

---

**Built with ❤️ by [Jayesh Afre](https://github.com/jayeshafre)**