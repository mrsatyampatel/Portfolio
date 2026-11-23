import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from "react-icons/si";
import { Code2, Flame, Trophy, ExternalLink, CheckCircle2, Zap, ArrowUpRight, BookOpen, Layers } from "lucide-react";

export default function Coding() {
  const [lcStats, setLcStats] = useState({
    totalSolved: "Active",
    easySolved: "--",
    mediumSolved: "--",
    hardSolved: "--",
    ranking: "Top Candidate",
    acceptanceRate: "70%+",
    loading: true,
  });

  useEffect(() => {
    // Attempt to fetch live LeetCode stats from public API
    fetch("https://leetcode-stats-api.herokuapp.com/heyypatel")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status === "success") {
          setLcStats({
            totalSolved: data.totalSolved ?? "Active",
            easySolved: data.easySolved ?? "0",
            mediumSolved: data.mediumSolved ?? "0",
            hardSolved: data.hardSolved ?? "0",
            ranking: data.ranking ? `#${data.ranking.toLocaleString()}` : "Active Solver",
            acceptanceRate: data.acceptanceRate ? `${data.acceptanceRate}%` : "70%+",
            loading: false,
          });
        } else {
          setLcStats((prev) => ({ ...prev, loading: false }));
        }
      })
      .catch(() => {
        setLcStats((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  const dsaTopics = [
    { name: "Arrays & Strings", level: "Proficient", problems: "Two Pointers & Sliding Window" },
    { name: "Hashing & HashMaps", level: "Proficient", problems: "Frequency counting & Lookups" },
    { name: "Linked Lists", level: "Practicing", problems: "Reversals, Slow-Fast Pointers" },
    { name: "Stacks & Queues", level: "Proficient", problems: "Monotonic Stacks & Validations" },
    { name: "Recursion & Backtracking", level: "Practicing", problems: "Subsets & Permutations" },
    { name: "Trees & Binary Search", level: "Practicing", problems: "Traversals, Depth & Balances" },
    { name: "Graphs & BFS/DFS", level: "Learning", problems: "Cycle detection & Paths" },
    { name: "Dynamic Programming", level: "Learning", problems: "Memoization & Tabulation" },
  ];

  return (
    <>
      <Helmet>
        <title>Coding & DSA Profiles | Satyam Patel</title>
        <meta
          name="description"
          content="Explore Satyam Patel's Data Structures & Algorithms (DSA) journey, LeetCode stats, and GeeksforGeeks profile."
        />
        <link rel="canonical" href="/coding" />
      </Helmet>

      <section className="py-24 bg-black text-white min-h-screen relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 relative z-10">
          
          {/* ── Page Header ────────────────────────────────────── */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
            >
              <Code2 size={14} className="text-blue-400" />
              DSA & Competitive Programming
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Coding <span className="text-blue-500">Profiles & Stats</span>
            </motion.h1>

            <motion.p
              className="text-gray-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Tracking my daily problem-solving journey in Data Structures & Algorithms across LeetCode, GeeksforGeeks, and GitHub.
            </motion.p>
          </div>

          {/* ── Platform Profiles Grid ─────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* ── LEETCODE CARD ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl p-7 bg-white/[0.02] border border-amber-500/20 hover:border-amber-500/50 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-md flex flex-col justify-between shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FFA116]">
                      <SiLeetcode size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">LeetCode</h3>
                      <p className="text-xs text-gray-400 font-mono">@heyypatel</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    <Flame size={13} className="text-amber-400 animate-pulse" />
                    Active Solver
                  </span>
                </div>

                {/* Stat Highlights */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 text-center">
                    <p className="text-xs text-gray-400 mb-1">Easy</p>
                    <p className="text-lg font-bold text-emerald-400">{lcStats.easySolved !== "--" ? lcStats.easySolved : "Solved"}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 text-center">
                    <p className="text-xs text-gray-400 mb-1">Medium</p>
                    <p className="text-lg font-bold text-amber-400">{lcStats.mediumSolved !== "--" ? lcStats.mediumSolved : "Practicing"}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 text-center">
                    <p className="text-xs text-gray-400 mb-1">Hard</p>
                    <p className="text-lg font-bold text-rose-400">{lcStats.hardSolved !== "--" ? lcStats.hardSolved : "Target"}</p>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Daily problem solving & pattern practice in Python / Java / C</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Focusing on Top Interview 150 & NeetCode 150 roadmaps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Building optimized time & space complexity solutions</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="https://leetcode.com/u/heyypatel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-black font-semibold text-sm transition-all duration-300 border border-amber-500/30 hover:border-transparent group/btn"
              >
                <span>Open LeetCode Profile</span>
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* ── GEEKSFORGEEKS CARD ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group relative rounded-3xl p-7 bg-white/[0.02] border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-md flex flex-col justify-between shadow-[0_0_20px_rgba(16,185,129,0.05)] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#2F8D46]">
                      <SiGeeksforgeeks size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">GeeksforGeeks</h3>
                      <p className="text-xs text-gray-400 font-mono">@heyypatel</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    <Trophy size={13} className="text-emerald-400" />
                    SRMU Leaderboard
                  </span>
                </div>

                {/* Institution & Domain */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-6">
                  <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">Campus Practice</p>
                  <p className="text-sm font-bold text-white">Shri Ramswaroop Memorial University (SRMU)</p>
                  <p className="text-xs text-gray-400 mt-1">Practicing DSA problems, articles & university POTD</p>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Regular problem solving on Core Data Structures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Practicing company-specific questions (TCS, Infosys, FAANG)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Exploring in-depth CS fundamentals & algorithmic articles</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="https://www.geeksforgeeks.org/profile/heyypatel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-black font-semibold text-sm transition-all duration-300 border border-emerald-500/30 hover:border-transparent group/btn"
              >
                <span>Open GeeksforGeeks Profile</span>
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

          </div>

          {/* ── DSA Roadmap / Focus Topics ──────────────────────── */}
          <div className="mt-8 mb-16">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30 mb-2">
                <Layers size={13} />
                Learning & Mastering
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">Key DSA Competencies</h2>
              <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
                Systematic breakdown of data structures and algorithmic patterns actively practiced.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dsaTopics.map((topic, i) => (
                <div
                  key={topic.name}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-gray-500">0{i + 1}</span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        topic.level === "Proficient"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : topic.level === "Practicing"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                          : "bg-purple-500/10 text-purple-400 border border-purple-500/30"
                      }`}
                    >
                      {topic.level}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{topic.name}</h4>
                  <p className="text-xs text-gray-400">{topic.problems}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Philosophy / Callout Box ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-black border border-white/10 text-center max-w-3xl mx-auto backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 mx-auto flex items-center justify-center text-blue-400 mb-4">
              <Zap size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Consistency Over Intensity</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto">
              "Solving DSA problems daily isn't just about question counts—it's about developing algorithmic intuition, writing clean, maintainable code, and optimizing computational efficiency."
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}
