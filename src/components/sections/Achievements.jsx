import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, Sparkles, Award, ArrowUpRight, ArrowRight, Calendar, BookmarkCheck } from "lucide-react";
import achievements from "../../data/achievementsData";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-black text-white relative">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Trophy size={14} className="text-blue-400" />
            Milestones & Recognition
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Key <span className="text-blue-500">Achievements</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-3 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            National hackathons, research conference presentation, and technical leadership.
          </motion.p>
        </div>

        {/* Achievements Grid: Minimalist, Unified Dark Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl p-6 sm:p-7 bg-white/[0.02] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.035] transition-all duration-300 backdrop-blur-sm flex flex-col justify-between shadow-lg hover:shadow-blue-500/5"
            >
              <div>
                {/* Top Bar: Minimal Badge & Date */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/[0.03] text-gray-300">
                    <Sparkles size={12} className="text-blue-400" />
                    {item.highlight}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-mono">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-blue-400 mb-1">
                  {item.role}
                </p>

                <p className="text-xs text-gray-400 font-medium mb-4">
                  {item.organization}
                </p>

                {/* Sleek Amber / Golden Highlight Callouts */}
                {item.keyPoints && item.keyPoints.length > 0 && (
                  <div className="mt-4 mb-2 space-y-2.5">
                    {item.keyPoints.map((kp, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/15 hover:border-amber-500/50 transition-all text-xs sm:text-sm font-semibold text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.08)]"
                      >
                        <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                        <span>{kp.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer: Category & Verify Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
                <span className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                  <BookmarkCheck size={14} className="text-blue-400" />
                  {item.category}
                </span>

                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors group-hover:underline"
                  >
                    <Award size={14} />
                    Verify Certificate
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to view all certificates */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/certificates"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full border border-blue-500/40 bg-blue-500/10 hover:bg-blue-600 hover:text-white text-blue-400 font-semibold transition-all duration-300 shadow-md hover:shadow-blue-500/25"
          >
            Explore All 8+ Certificates & Accreditations
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
