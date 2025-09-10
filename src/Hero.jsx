import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Terminal, Code } from 'lucide-react';
import { personalInfo, skills, education, achievements } from './Data';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const titles = [
    '> Full-Stack Developer_',
    '> MCA Student_', 
    '> React Enthusiast_', 
    '> Django Developer_',
    '> Code Architect_'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [terminalLines, setTerminalLines] = useState([]);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeoutId;

    if (isTyping) {
      if (typedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeoutId = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isTyping, currentTitleIndex, titles]);

  // Terminal startup effect
  useEffect(() => {
    const lines = [
      'Initializing portfolio.exe...',
      'Loading personal data... ✓',
      'Compiling skills matrix... ✓',
      'Connecting to GitHub... ✓',
      'System ready. Welcome!',
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, index * 800);
    });
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Function to get syntax color based on skill category
  const getSyntaxColor = (category, skill) => {
    const colorMap = {
      frontend: 'text-blue-400 bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20',
      backend: 'text-orange-400 bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20',
      databases: 'text-green-400 bg-green-500/10 border-green-500/30 hover:bg-green-500/20',
      devops: 'text-purple-400 bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20',
      additional: 'text-pink-400 bg-pink-500/10 border-pink-500/30 hover:bg-pink-500/20'
    };
    return colorMap[category] || 'text-gray-400 bg-gray-500/10 border-gray-500/30';
  };

  return (
    <div id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Terminal Interface */}
          <div className="space-y-8" style={{ animation: 'slideInLeft 1s ease-out' }}>
            {/* Profile Header */}
            <div className="text-center lg:text-left">
              {/* Larger Profile Image with Soft Gradient Ring */}
              <div className="w-56 h-56 mx-auto mb-6 rounded-full relative group">
                {/* Soft Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover filter brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback - shows "JA" if image fails to load */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-4xl font-bold text-white font-mono rounded-full" style={{display: 'none'}}>
                      console.log("Jayesh Afre")
                    </div>
                  </div>
                </div>
                {/* Soft Glow Effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       boxShadow: '0 0 40px rgba(34, 211, 238, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)'
                     }}>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-green-500 mb-2 font-mono">
                  <span className="text-amber-400">const</span> developer = &#123;
                </div>
                {/* Better Balanced Typography */}
                <h1 className="text-3xl lg:text-5xl font-bold mb-4 font-mono">
                  <span className="text-green-400">name:</span> <span className="text-white matrix-text">"{personalInfo.name}"</span>
                </h1>
                <div className="text-sm text-green-500 mb-4 font-mono">&#125;;</div>
              </div>
              
              <div className="text-xl lg:text-2xl text-green-300 mb-4 h-8 font-mono">
                {typedText}
                <span className={`text-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-amber-400 mb-6 font-mono">
                <MapPin size={16} className="text-green-400" />
                <span className="text-green-300">{personalInfo.location}</span>
              </div>
              
              <div className="bg-gray-900 border border-green-500/30 p-4 rounded-lg mb-6">
                <div className="text-green-500 text-sm font-mono mb-2">
                  <span className="text-amber-400">/* About */</span>
                </div>
                <p className="text-green-300 font-mono text-sm leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
            </div>

            {/* Social Links - Terminal Style */}
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, link: personalInfo.github, label: 'github' },
                { icon: Linkedin, link: personalInfo.linkedin, label: 'linkedin' },
                { icon: Mail, link: `mailto:${personalInfo.email}`, label: 'email' },
                { icon: ExternalLink, link: personalInfo.portfolio, label: 'portfolio' }
              ].map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-12 h-12 bg-gray-900 border border-green-500/30 rounded-lg flex items-center justify-center hover:border-green-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20">
                    <Icon className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {label}
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Buttons - Terminal Style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="btn-primary text-center font-mono">
                <Terminal className="inline w-4 h-4 mr-2" />
                ./view_projects.sh
              </a>
              <a href="#contact" className="btn-secondary text-center font-mono">
                <Mail className="inline w-4 h-4 mr-2" />
                ./contact.sh
              </a>
            </div>

            {/* Strengths Terminal */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-green-400 text-xs ml-4">strengths.js</span>
              </div>
              <div className="terminal-content">
                <div className="text-green-500 text-sm mb-4 font-mono">
                  <span className="text-amber-400">const</span> <span className="text-white">strengths</span> = [
                </div>
                <div className="ml-4 space-y-2">
                  {[
                    "Problem-solving & analytical thinking",
                    "Quick learner & adaptable",
                    "Effective team player",
                    "Detail-oriented & clean coding practices",
                    "Strong debugging & troubleshooting",
                    "Time management & meeting deadlines",
                    "Continuous learner"
                  ].map((strength, index, array) => (
                    <div key={index} className="flex items-start gap-2 font-mono">
                      <span className="text-green-400">▸</span>
                      <span className="text-cyan-300 text-sm">
                        "{strength}"{index < array.length - 1 ? ',' : ''}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-white font-mono text-sm mt-2">];</div>
              </div>
            </div>

            {/* Languages Terminal */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-green-400 text-xs ml-4">languages.json</span>
              </div>
              <div className="terminal-content">
                <div className="text-green-500 text-sm mb-4 font-mono">
                  <span className="text-amber-400">const</span> <span className="text-white">languages_known</span> = &#123;
                </div>
                <div className="ml-4 space-y-2">
                  {[
                    { lang: 'english', level: 'Professional Proficiency' },
                    { lang: 'hindi', level: 'Fluent' },
                    { lang: 'marathi', level: 'Fluent' }
                  ].map(({ lang, level }, index, array) => (
                    <div key={lang} className="font-mono">
                      <span className="text-green-400">"{lang}"</span>
                      <span className="text-white">: </span>
                      <span className="text-amber-300">"{level}"</span>
                      {index < array.length - 1 ? <span className="text-white">,</span> : ''}
                    </div>
                  ))}
                </div>
                <div className="text-white font-mono text-sm mt-2">&#125;;</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Matrix & Data */}
          <div id="about" className="space-y-6" style={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>
            {/* Skills Matrix with Syntax Coloring */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-green-400 text-xs ml-4">skills.json</span>
              </div>
              <div className="terminal-content">
                <div className="text-green-500 text-sm mb-4 font-mono">
                  <span className="text-amber-400">const</span> <span className="text-white">skills</span> = &#123;
                </div>
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="ml-4 mb-4">
                    <div className="text-green-400 font-mono text-sm mb-2">
                      "<span className="text-cyan-300">{category.replace('_', '_')}</span>"<span className="text-white">:</span> [
                    </div>
                    <div className="ml-4 flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span 
                          key={skill} 
                          className={`group relative px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 cursor-default ${getSyntaxColor(category, skill)}`}
                        >
                          "{skill}"{index < skillList.length - 1 ? ',' : ''}
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {skill}
                          </span>
                        </span>
                      ))}
                    </div>
                    <div className="text-white font-mono text-sm mt-2">]{Object.keys(skills).indexOf(category) < Object.keys(skills).length - 1 ? ',' : ''}</div>
                  </div>
                ))}
                <div className="text-white font-mono text-sm">&#125;;</div>
              </div>
            </div>

            {/* Education Terminal */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-green-400 text-xs ml-4">education.log</span>
              </div>
              <div className="terminal-content">
                {education.map((edu, index) => (
                  <div key={index} className="mb-4 border-l-2 border-green-500 pl-4 font-mono">
                    <div className="text-green-400 font-semibold">[{edu.duration}]</div>
                    <div className="text-white font-bold">{edu.degree}</div>
                    <div className="text-green-300 text-sm">{edu.institution}</div>
                    <div className="text-amber-400 text-sm font-bold">{edu.gpa}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-green-400 text-xs ml-4">achievements.txt</span>
              </div>
              <div className="terminal-content">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2 mb-2 font-mono">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-green-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;