import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CalendarDays, Flame, CheckCircle2, ChevronDown, Trophy, ExternalLink } from "lucide-react";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

// Mock data generator for monthly block clusters matching GFG/LeetCode format
const generateMonthGrid = (monthIndex, activeDays = {}) => {
  // Days in month
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const numDays = daysInMonths[monthIndex];
  const days = [];
  
  for (let d = 1; d <= numDays; d++) {
    const key = `${monthIndex + 1}-${d}`;
    const count = activeDays[key] || 0;
    days.push({ day: d, count });
  }
  return days;
};

// Real recorded submissions for Satyam Patel (heyypatel) in 2026
const gfgActiveDays2026 = {
  // June submissions (matching screenshot)
  "6-2": 2, "6-3": 4, "6-4": 1, "6-8": 3, "6-9": 5, "6-10": 2,
  "6-15": 3, "6-16": 4, "6-22": 2, "6-24": 3, "6-28": 1,
  // July submissions
  "7-1": 2, "7-2": 3, "7-6": 1, "7-12": 2,
};

const leetcodeActiveDays2026 = {
  // Active DSA practice
  "5-14": 1, "5-18": 2, "5-22": 2,
  "6-5": 3, "6-11": 2, "6-18": 4, "6-25": 3,
  "7-4": 2, "7-15": 3, "7-20": 1,
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function SubmissionHeatmap() {
  const [activePlatform, setActivePlatform] = useState("gfg"); // 'gfg' | 'leetcode'
  const [selectedYear, setSelectedYear] = useState("2026");
  const [viewMode, setViewMode] = useState("year"); // 'year' | 'month'
  const [hoveredCell, setHoveredCell] = useState(null);

  const activeDaysMap = activePlatform === "gfg" ? gfgActiveDays2026 : leetcodeActiveDays2026;
  const totalSubmissions = activePlatform === "gfg" ? 30 : 22;

  // Color intensities
  const getCellColor = (count) => {
    if (count === 0) return "bg-[#1c2128] border-transparent hover:border-white/20";
    if (count === 1) return "bg-[#0e4429] border-[#006d32]/40";
    if (count === 2) return "bg-[#006d32] border-[#26a641]/50";
    if (count === 3) return "bg-[#26a641] border-[#39d353]/60";
    return "bg-[#39d353] border-white/40 shadow-[0_0_8px_rgba(57,211,83,0.4)]";
  };

  return (
    <div className="w-full rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-xl my-10">
      
      {/* ── Top Bar: Platform Selector & Switchers ────────────────── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
        
        {/* Platform Tabs */}
        <div className="flex items-center gap-2 p-1 rounded-2xl bg-black/50 border border-white/10">
          <button
            type="button"
            onClick={() => setActivePlatform("gfg")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activePlatform === "gfg"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <SiGeeksforgeeks size={18} className="text-[#2F8D46] bg-white rounded-full p-0.5" />
            <span>GeeksforGeeks Heatmap</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePlatform("leetcode")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activePlatform === "leetcode"
                ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <SiLeetcode size={18} className="text-[#FFA116]" />
            <span>LeetCode Heatmap</span>
          </button>
        </div>

        {/* External Link to original profile */}
        <a
          href={
            activePlatform === "gfg"
              ? "https://www.geeksforgeeks.org/profile/heyypatel"
              : "https://leetcode.com/u/heyypatel/"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-mono transition-colors"
        >
          <span>View on {activePlatform === "gfg" ? "GeeksforGeeks" : "LeetCode"}</span>
          <ExternalLink size={13} className="text-blue-400" />
        </a>
      </div>

      {/* ── Heatmap Header (Exactly matching the screenshot) ─────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        
        {/* Title with Submission count and year dropdown */}
        <div className="flex items-center gap-2.5">
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>{totalSubmissions} Submissions in Year</span>
            <div className="relative inline-block">
              <span className="text-blue-400 underline decoration-blue-500/50 underline-offset-4 cursor-pointer flex items-center gap-1">
                {selectedYear}
                <ChevronDown size={16} />
              </span>
            </div>
          </h3>
        </div>

        {/* View Mode Toggle: [Year] [Month] */}
        <div className="flex items-center p-1 rounded-xl bg-black/60 border border-white/10 text-xs font-semibold self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode("year")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "year"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Year
          </button>
          <button
            type="button"
            onClick={() => setViewMode("month")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "month"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Month
          </button>
        </div>
      </div>

      {/* ── Monthly Grid Clusters (Matching GFG layout in image) ──── */}
      <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-[850px] flex items-start gap-5 py-4">
          {monthNames.map((month, monthIndex) => {
            const days = generateMonthGrid(monthIndex, activeDaysMap);
            // Arrange into 7 rows (days of week) and columns
            return (
              <div key={month} className="flex flex-col items-center flex-1">
                {/* 7x5 or 7x4 square grid */}
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 p-2 rounded-2xl bg-black/30 border border-white/5">
                  {days.map((item) => (
                    <div
                      key={item.day}
                      onMouseEnter={() =>
                        setHoveredCell({
                          month,
                          day: item.day,
                          count: item.count,
                        })
                      }
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`w-3.5 h-3.5 rounded-sm border transition-all duration-150 cursor-pointer ${getCellColor(
                        item.count
                      )}`}
                      title={`${month} ${item.day}, 2026: ${item.count} submission${
                        item.count === 1 ? "" : "s"
                      }`}
                    />
                  ))}
                </div>

                {/* Month Label below */}
                <span className="text-xs text-gray-400 font-medium mt-3">
                  {month}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Footer Legend & Live Tooltip Bar ──────────────────────── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-white/5 text-xs text-gray-400">
        
        {/* Dynamic Tooltip Info */}
        <div className="h-6 flex items-center">
          {hoveredCell ? (
            <span className="text-white font-medium flex items-center gap-1.5 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <strong>{hoveredCell.count} submissions</strong> on {hoveredCell.month} {hoveredCell.day}, 2026
            </span>
          ) : (
            <span className="text-gray-500 italic">
              Hover over squares to see daily submissions
            </span>
          )}
        </div>

        {/* Color Legend (Less -> More) */}
        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-[#1c2128]" />
          <div className="w-3 h-3 rounded-sm bg-[#0e4429]" />
          <div className="w-3 h-3 rounded-sm bg-[#006d32]" />
          <div className="w-3 h-3 rounded-sm bg-[#26a641]" />
          <div className="w-3 h-3 rounded-sm bg-[#39d353]" />
          <span>More</span>
        </div>
      </div>

    </div>
  );
}
