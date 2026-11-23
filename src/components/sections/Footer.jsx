import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-6 mt-10 text-center text-gray-400">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-white font-medium">
            Satyam Patel
          </span>
          . All rights reserved.
        </p>

        {/* Connect Hub Link + Social Icons */}
        <div className="flex items-center space-x-4 text-lg">

          <Link
            to="/connect"
            className="text-sm text-gray-400 hover:text-blue-400 transition font-medium"
          >
            All Links
          </Link>

          <span className="text-gray-700" aria-hidden="true">|</span>

          <a
            href="https://github.com/mrsatyampatel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Satyam Patel's GitHub profile"
            className="hover:text-white transition"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/satyam-patel-221a69370"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Satyam Patel's LinkedIn profile"
            className="hover:text-white transition"
          >
            <FaLinkedin aria-hidden="true" />
          </a>

          <a
            href="mailto:patelsatyam1735@gmail.com"
            aria-label="Email Satyam Patel"
            className="hover:text-white transition"
          >
            <FaEnvelope aria-hidden="true" />
          </a>

        </div>
      </div>
    </footer>
  );
}

