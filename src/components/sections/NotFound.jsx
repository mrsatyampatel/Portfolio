import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Home, Link2 } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Satyam Patel</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-screen w-full flex items-center justify-center bg-black text-white px-4 relative overflow-hidden">
        {/* Background subtle glow */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(239,68,68,0.5) 0%, transparent 70%)",
            }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            404
          </motion.h1>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="group flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <Home size={18} aria-hidden="true" />
              Go Home
            </Link>
            <Link
              to="/connect"
              className="group flex items-center gap-2 px-7 py-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
            >
              <Link2 size={18} aria-hidden="true" />
              Connect Hub
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
