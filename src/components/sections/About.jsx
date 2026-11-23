import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaReact, FaGithub, FaJsSquare, FaPython, FaJava, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNumpy, SiPandas, SiC } from 'react-icons/si';
import { ArrowRight, Brain, Cpu, Database, GraduationCap, BookOpen, Calendar, School, Medal, Sparkles, Trophy, Target, Award } from 'lucide-react';

export default function About() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "About Satyam Patel",
    "description": "Learn about Satyam Patel, Second-Year AI & ML Student at SRMU Lucknow, Frontend Developer, and MERN Stack Enthusiast.",
  };

  return (
    <>
      <Helmet>
        <title>About | Satyam Patel</title>
        <meta name="description" content="Learn about Satyam Patel, a Second-Year AI & ML Student at SRMU Lucknow, Frontend Developer, and MERN Stack Enthusiast." />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="About | Satyam Patel" />
        <meta property="og:description" content="Second-Year AI & ML Student at SRMU Lucknow. Frontend developer passionate about web dev, DSA, and Machine Learning." />
      </Helmet>

      <section id="About" className="py-20 bg-black text-white">
        <div className="max-w-5xl w-full mx-auto px-4 flex flex-col items-center text-center">

          <motion.div
            className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mb-6 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/certificates/satyam-pfp-dark.jpg"
              alt="Satyam Patel - Second-Year AI & ML Student at SRMU"
              className="w-full h-full object-cover object-top scale-[1.2] translate-y-2"
            />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-blue-500">Me</span>
          </motion.h2>

          <motion.div
            className="text-gray-300 max-w-2xl mx-auto text-lg mb-10 leading-relaxed space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-blue-400 font-medium tracking-wide">
              Learning. Building. Improving.
            </p>
            <p>
              I am a Second-Year <strong className="text-white">B.Tech CSE (AI/ML)</strong> Student at <strong className="text-white">Shri Ramswaroop Memorial University (SRMU)</strong>, Lucknow.
            </p>
            <p>
              Currently learning <span className="text-white font-medium">Data Structures & Algorithms (DSA)</span> and the fundamentals of <span className="text-white font-medium">Machine Learning</span>. Actively involved in web development projects, and always eager to learn, explore, and grow in the field of ML and technology.
            </p>
          </motion.div>

          {/* ── Education & Academics Container (3 Cards) ──────── */}
          <div className="w-full max-w-6xl mx-auto mb-16 text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Higher Education (B.Tech) */}
            <motion.div
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-gray-300 border border-white/10">
                    <Calendar size={13} className="text-blue-400" />
                    2025 – 2029
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white flex items-center gap-2 flex-wrap mb-1">
                  <span>B.Tech in CSE</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 font-semibold">
                    AI & ML
                  </span>
                </h3>

                <p className="text-xs text-gray-400 mb-5">
                  Shri Ramswaroop Memorial University (SRMU), Lucknow
                </p>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookOpen size={14} className="text-blue-400" />
                    Key Coursework:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Data Structures & Algorithms",
                      "OOPs (Java, C)",
                      "Python",
                      "ML Fundamentals",
                      "DBMS",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.03] text-gray-300 border border-white/10 hover:border-blue-500/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Schooling Foundations (JNV Basti) */}
            <motion.div
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-sm shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <School size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-gray-300 border border-white/10">
                    <Calendar size={13} className="text-amber-400" />
                    Class X & XII
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2 flex-wrap">
                  <span>Jawahar Navodaya Vidyalaya (JNV)</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold font-mono">
                    CBSE
                  </span>
                </h3>

                <p className="text-xs text-gray-400 mb-5">
                  Basti, Uttar Pradesh • Central Board of Secondary Education (CBSE)
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2.5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Medal size={14} className="text-amber-400" />
                    Academic Records (CBSE Board):
                  </p>
                  
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-gray-300 font-medium">Matriculation (Class X) - 2022 • CBSE</span>
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      92%
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-gray-300 font-medium">Intermediate (Class XII - PCM) - 2024 • CBSE</span>
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      84%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Competitive Exams & Olympiads */}
            <motion.div
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Trophy size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    <Award size={12} className="text-emerald-400" />
                    National & Int'l
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  Competitive & Olympiads
                </h3>

                <p className="text-xs text-gray-400 mb-5">
                  National Engineering Entrances & Mathematics Recognition
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2.5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Target size={14} className="text-emerald-400" />
                    Key Milestones:
                  </p>

                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-gray-200 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      JEE Mains
                    </span>
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                      Qualified
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-gray-200 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      IMU-CET
                    </span>
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/30 shrink-0">
                      Qualified
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs text-gray-200 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        IMO (Maths Olympiad)
                      </span>
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0 flex items-center gap-1.5">
                        <span className="text-xs">🥉</span>
                        <span className="flex flex-col text-left leading-tight">
                          <span>Bronze</span>
                          <span>Medal</span>
                        </span>
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 pl-3.5">
                      International Mathematics Olympiad by SOF
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tech <span className="text-blue-500">Stack & Skills</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center w-full max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <FaPython className="text-4xl text-yellow-400 mb-2" aria-hidden="true" /><p className="text-sm font-medium">Python</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <FaJava className="text-4xl text-red-500 mb-2" aria-hidden="true" /><p className="text-sm font-medium">Java</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <SiC className="text-4xl text-blue-400 mb-2" aria-hidden="true" /><p className="text-sm font-medium">C</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <FaJsSquare className="text-4xl text-yellow-300 mb-2" aria-hidden="true" /><p className="text-sm font-medium">JavaScript</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <FaReact className="text-4xl text-cyan-400 mb-2" aria-hidden="true" /><p className="text-sm font-medium">React</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <FaHtml5 className="text-4xl text-orange-500 mb-2" aria-hidden="true" /><p className="text-sm font-medium">HTML5</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <FaCss3Alt className="text-4xl text-blue-500 mb-2" aria-hidden="true" /><p className="text-sm font-medium">CSS3</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <SiTailwindcss className="text-4xl text-cyan-400 mb-2" aria-hidden="true" /><p className="text-sm font-medium">Tailwind</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <SiMongodb className="text-4xl text-green-500 mb-2" aria-hidden="true" /><p className="text-sm font-medium">MongoDB</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <SiNumpy className="text-4xl text-blue-400 mb-2" aria-hidden="true" /><p className="text-sm font-medium">NumPy</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <SiPandas className="text-4xl text-indigo-400 mb-2" aria-hidden="true" /><p className="text-sm font-medium">Pandas</p>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5 w-28 hover:border-blue-500/40 transition">
              <FaGitAlt className="text-4xl text-orange-600 mb-2" aria-hidden="true" /><p className="text-sm font-medium">Git / GitHub</p>
            </div>
          </motion.div>

          {/* Internal Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/projects" className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-sm font-medium">
              View My Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
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
