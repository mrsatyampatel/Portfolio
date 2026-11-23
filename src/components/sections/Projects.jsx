import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import projects from '../../data/projectsData';

export default function Projects() {
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects | Satyam Patel",
    description: "Portfolio of projects, web applications, and Machine Learning systems by Satyam Patel.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((proj, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: proj.title,
        url: proj.live || proj.github || "/projects",
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | Satyam Patel</title>
        <meta name="description" content="Explore projects and web applications built by Satyam Patel. View code and details for SIH 2025, IoT, and ML projects." />
        <link rel="canonical" href="/projects" />
        <meta property="og:title" content="Projects | Satyam Patel" />
        <meta property="og:description" content="Portfolio of projects and systems by Satyam Patel." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(projectsJsonLd)}</script>
      </Helmet>

      <section id="AllProjects" className="py-20 bg-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <br /> <span className="text-blue-500">
              All </span>Projects
          </motion.h2>

          <motion.p
            className="text-gray-400 text-center mb-12 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of all my projects - from full-stack apps to system design concepts.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 border border-white/5 hover:border-blue-500/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-white/10 rounded-full text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center gap-1 text-sm"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline flex items-center gap-1 text-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project count */}
          <motion.p
            className="text-center text-gray-500 text-sm mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Showing {projects.length} projects • More coming soon 🚀
          </motion.p>

          {/* Internal Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="/about" className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-sm font-medium">
              About Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link to="/connect" className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:bg-white/5 transition-all duration-300 text-sm font-medium">
              Connect with Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
