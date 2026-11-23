import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, Sparkles, Award, ArrowUpRight, ArrowRight, Calendar, BookmarkCheck, CheckCircle2 } from "lucide-react";
import achievements from "../../data/achievementsData";

const badgeStyles = {
  blue: {
    tag: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    glow: "group-hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    accent: "text-blue-400",
  },
  purple: {
    tag: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    glow: "group-hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    accent: "text-purple-400",
  },
  amber: {
    tag: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    glow: "group-hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    accent: "text-amber-300",
  },
  emerald: {
    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    glow: "group-hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    accent: "text-emerald-300",
  },
};

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

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => {
            const theme = badgeStyles[item.badgeTheme] || badgeStyles.blue;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative rounded-2xl p-6 sm:p-7 bg-white/[0.02] border border-white/10 ${theme.glow} hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-sm flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar: Category & Date */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${theme.tag}`}>
                      <Sparkles size={12} />
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

                  <p className={`text-sm font-semibold mb-2 ${theme.accent}`}>
                    {item.role}
                  </p>

                  <p className="text-xs text-gray-400 font-medium mb-3">
                    {item.organization}
                  </p>

                  {/* Prominent Eye-Catching Highlight Badges */}
                  {item.keyPoints && item.keyPoints.length > 0 && (
                    <div className="my-4 space-y-2">
                      {item.keyPoints.map((kp, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md transition-transform duration-200 group-hover:scale-[1.01] ${kp.badgeClass}`}
                        >
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                          </span>
                          <span>{kp.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer link to certificate */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
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
            );
          })}
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
