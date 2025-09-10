import React, { useState } from 'react';
import { Github, ExternalLink, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from './Data';

const ImageCarousel = ({ images, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-blue-600/80 to-purple-600/80 flex items-center justify-center">
        <Code className="w-16 h-16 text-white" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-48">
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className="w-full h-full bg-gradient-to-br from-blue-600/80 to-purple-600/80 flex items-center justify-center" 
          style={{display: 'none'}}
        >
          <Code className="w-16 h-16 text-white" />
        </div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-400' : 'bg-gray-500 hover:bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Caption */}
      {images[currentIndex].caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p className="text-white text-sm text-center">{images[currentIndex].caption}</p>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            API integration, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card p-8 hover:transform hover:scale-105 transition-all duration-300 group ${
                index % 2 === 0 ? 'animate-slide-up' : 'animate-fade-in'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Images Carousel */}
              <div className="relative mb-6">
                <ImageCarousel 
                  images={project.images} 
                  projectTitle={project.title} 
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-medium">{project.subtitle}</p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to see more projects? Check out my GitHub profile for additional work and contributions.
          </p>
          <a
            href="https://github.com/jayeshafre"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;