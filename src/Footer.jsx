import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';
import { personalInfo } from './Data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900/50 border-t border-white/10">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400">Get In Touch</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Let's connect and discuss how we can work together!
            </p>
            
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>{personalInfo.email}</span>
              </a>
              
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>{personalInfo.phone}</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400">Quick Links</h3>
            <div className="space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: personalInfo.resumePdf, label: 'Resume', external: true },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external && { 
                    target: '_blank', 
                    rel: 'noopener noreferrer',
                    download: 'Jayesh_Afre_Resume.pdf' 
                  })}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <span>{link.label}</span>
                  {link.external && <ExternalLink className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Professional Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 card hover:bg-white/20 transition-all duration-200 group"
              >
                <Github className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
              </a>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 card hover:bg-white/20 transition-all duration-200 group"
              >
                <Linkedin className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
              
              <a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 card hover:bg-white/20 transition-all duration-200 group"
              >
                <ExternalLink className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Portfolio</span>
              </a>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex flex-col items-center p-4 card hover:bg-white/20 transition-all duration-200 group"
              >
                <Mail className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-bounce-gentle" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              <span>Full-Stack Developer • MCA Student • Open to Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;