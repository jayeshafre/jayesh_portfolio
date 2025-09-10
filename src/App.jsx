import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;