import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${menuOpen
        ? "h-screen opacity-100 pointer-events-auto"
        : "h-0 opacity-0 pointer-events-none"
      }`}>
      
      <button
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
      >
        <X size={28} aria-hidden="true" />
      </button>

      <div className="flex flex-col items-center space-y-6 text-white text-xl mt-12">
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/certificates" onClick={() => setMenuOpen(false)}>Certificates</Link>
        <Link to="/connect" onClick={() => setMenuOpen(false)}>Connect</Link>
      </div>
    </div>
  );
}
