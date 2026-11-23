import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Code2, Flame, Trophy, CheckCircle2, Zap, ArrowUpRight } from "lucide-react";
import SubmissionHeatmap from "./SubmissionHeatmap";

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

        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 relative z-10">
          
          {/* ── Page Header ────────────────────────────────────── */}
          <div className="text-center mb-14">
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
              Tracking my daily problem-solving journey in Data Structures & Algorithms across LeetCode, GeeksforGeeks, and live submission activity.
            </motion.p>
          </div>

          {/* ── Platform Profiles: Stacked Vertically (Upar - Niche) ── */}
          <div className="flex flex-col gap-8 mb-12">
            
            {/* 1. LEETCODE CARD (UPAR) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl p-7 sm:p-8 bg-white/[0.02] border border-amber-500/25 hover:border-amber-500/50 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FFA116] p-2.5">
                    <SiLeetcode size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">LeetCode Profile</h3>
                    <p className="text-sm text-gray-400 font-mono">@heyypatel</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    <Flame size={14} className="text-amber-400 animate-pulse" />
                    Active Problem Solver
                  </span>
                  
                  <a
                    href="https://leetcode.com/u/heyypatel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 px-4 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-black font-semibold text-xs transition-all duration-200 border border-amber-500/30 hover:border-transparent"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Stat Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-center">
                  <p className="text-xs text-gray-400 mb-1">Easy Problems</p>
                  <p className="text-xl font-bold text-emerald-400">{lcStats.easySolved !== "--" ? lcStats.easySolved : "Solved"}</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-center">
                  <p className="text-xs text-gray-400 mb-1">Medium Problems</p>
                  <p className="text-xl font-bold text-amber-400">{lcStats.mediumSolved !== "--" ? lcStats.mediumSolved : "Practicing"}</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-center">
                  <p className="text-xs text-gray-400 mb-1">Hard Problems</p>
                  <p className="text-xl font-bold text-rose-400">{lcStats.hardSolved !== "--" ? lcStats.hardSolved : "Targeting"}</p>
                </div>
              </div>

              {/* Focus points */}
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Pattern-based problem solving</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Top Interview 150 Roadmap</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Python, Java & C Implementations</span>
                </li>
              </ul>
            </motion.div>

            {/* 2. GEEKSFORGEEKS CARD (NICHE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group relative rounded-3xl p-7 sm:p-8 bg-white/[0.02] border border-emerald-500/25 hover:border-emerald-500/50 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.05)] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#2F8D46] p-2.5">
                    <SiGeeksforgeeks size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">GeeksforGeeks Profile</h3>
                    <p className="text-sm text-gray-400 font-mono">@heyypatel</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    <Trophy size={14} className="text-emerald-400" />
                    SRMU Leaderboard
                  </span>
                  
                  <a
                    href="https://www.geeksforgeeks.org/profile/heyypatel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 px-4 rounded-full bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-black font-semibold text-xs transition-all duration-200 border border-emerald-500/30 hover:border-transparent"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Institution Box */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-0.5">Campus Practice</p>
                  <p className="text-base font-bold text-white">Shri Ramswaroop Memorial University (SRMU)</p>
                </div>
                <span className="text-xs text-gray-400 font-mono">Department of Computer Science & Engineering</span>
              </div>

              {/* Focus points */}
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Core Data Structures practice</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Company-specific interview sets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>POTD & Algorithmic Articles</span>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* ── Submission Activity Heatmap (GFG & LeetCode) ─────── */}
          <SubmissionHeatmap />

          {/* ── Consistency Callout Box ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-black border border-white/10 text-center max-w-3xl mx-auto backdrop-blur-sm mt-10"
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
