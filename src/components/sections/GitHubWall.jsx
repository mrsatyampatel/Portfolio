import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiPython, SiReact, SiMongodb } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { GitPullRequest, GitCommit, CircleDot, Star, Rocket, Zap, Trophy, CalendarDays, Book, ExternalLink, Cpu } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import 'react-activity-calendar/tooltips.css';

/* ─── GitHub Stats Data ─────────────────────────────────────── */
const initialStats = [
    { label: "Public Repositories", value: "4+", icon: Book, color: "text-amber-400", link: "https://github.com/mrsatyampatel?tab=repositories" },
    { label: "Active Commits", value: "...", icon: GitCommit, color: "text-emerald-400", link: "https://github.com/mrsatyampatel" },
    { label: "Hackathons", value: "3+", icon: Trophy, color: "text-blue-400", link: "/certificates" },
    { label: "Featured Projects", value: "4", icon: Rocket, color: "text-purple-400", link: "/projects" },
];

/* ─── Featured Repositories ─────────────────────────────────── */
const orgs = [
    { 
        name: "Developer Portfolio", 
        repo: "mrsatyampatel/Portfolio", 
        desc: "React & Tailwind Portfolio", 
        title: "Modern responsive portfolio with live GitHub wall, certificates showcase & dark mode", 
        icon: SiReact, 
        color: "#61DAFB", 
        actionIcon: Rocket, 
        actionColor: "text-blue-400", 
        link: "https://github.com/mrsatyampatel/Portfolio", 
        badge: "Portfolio" 
    },
    { 
        name: "Alumni Connect SIH '25", 
        repo: "mrsatyampatel/alumniconnectsih25-satyam", 
        desc: "Smart India Hackathon", 
        title: "SIH 2025 platform connecting university alumni, students & faculty for mentorship", 
        icon: SiReact, 
        color: "#61DAFB", 
        actionIcon: GitPullRequest, 
        actionColor: "text-emerald-400", 
        link: "https://github.com/mrsatyampatel/alumniconnectsih25-satyam", 
        badge: "SIH 2025" 
    },
    { 
        name: "Gas Alert Integration", 
        repo: "mrsatyampatel/GAS_ALERT_INTEGRATION", 
        desc: "IoT & Smart Alert System", 
        title: "Automated real-time hazardous gas detection and safety notification system", 
        icon: Cpu, 
        color: "#FCC624", 
        actionIcon: GitCommit, 
        actionColor: "text-amber-400", 
        link: "https://github.com/mrsatyampatel/GAS_ALERT_INTEGRATION", 
        badge: "IoT System" 
    },
    { 
        name: "Mangifera Shield", 
        repo: "mrsatyampatel/Mangifera-Shield-Satyam", 
        desc: "AgriTech & AI/ML", 
        title: "Crop health monitoring & mango disease diagnostics using Machine Learning", 
        icon: SiPython, 
        color: "#4B8BBE", 
        actionIcon: Rocket, 
        actionColor: "text-purple-400", 
        link: "https://github.com/mrsatyampatel/Mangifera-Shield-Satyam", 
        badge: "AI/ML" 
    },
];

/* ─── Top Languages ─────────────────────────────────────────── */
const languages = [
    { name: "Python", percent: "45.0%", color: "bg-[#3776AB]" },
    { name: "JavaScript", percent: "30.0%", color: "bg-[#F7DF1E]" },
    { name: "Java", percent: "15.0%", color: "bg-[#E76F00]" },
    { name: "C / C++", percent: "10.0%", color: "bg-[#00599C]" },
];

/* ─── GitHub Achievements ───────────────────────────────────── */
const achievements = [
    { name: "Starstruck", image: "https://github.githubassets.com/assets/starstruck-default-b6610abad518.png" },
    { name: "Pair Extraordinaire", image: "https://github.githubassets.com/assets/pair-extraordinaire-default-579438a20e01.png", multiplier: "x2" },
    { name: "Pull Shark", image: "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png", multiplier: "x2" },
    { name: "YOLO", image: "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png" },
    { name: "Quickdraw", image: "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png" },
];

export default function GitHubWall() {
    const [stats, setStats] = React.useState(initialStats);

    React.useEffect(() => {
        // Fetch public repositories count
        fetch('https://api.github.com/users/mrsatyampatel')
            .then(res => res.json())
            .then(userData => {
                if (userData && userData.public_repos !== undefined) {
                    setStats(prev => {
                        const newStats = [...prev];
                        newStats[0] = { ...newStats[0], value: `${userData.public_repos}+` };
                        newStats[3] = { ...newStats[3], value: `${userData.public_repos}` };
                        return newStats;
                    });
                }
            })
            .catch(() => {});

        // Fetch total contributions
        fetch('https://github-contributions-api.jogruber.de/v4/mrsatyampatel')
            .then(res => res.json())
            .then(data => {
                let sum = 0;
                for (const key in data.total) {
                    if (!isNaN(key)) {
                        sum += data.total[key];
                    }
                }
                setStats(prev => {
                    const newStats = [...prev];
                    newStats[1] = { ...newStats[1], value: `${sum}+` }; // Update "Total Commits"
                    return newStats;
                });
            })
            .catch(err => {
                console.error("Failed to fetch GitHub contributions:", err);
            });
    }, []);

    return (
        <section id="github-wall" className="py-20 relative bg-black border-t border-white/5 overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Trophy size={16} className="text-yellow-500" aria-hidden="true" />
                        <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Open Source</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Wall of Honor</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my contributions, top-tier open-source organizations, and developer achievements.
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* Left Column: Stats & Languages */}
                    <div className="lg:col-span-1 flex flex-col gap-6">

                        {/* Stats Card */}
                        <motion.div
                            className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <GitCommit className="text-blue-400" aria-hidden="true" /> Overview
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, i) => (
                                    <a
                                        key={i}
                                        href={stat.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                        aria-label={`View my ${stat.label} on GitHub`}
                                    >
                                        <stat.icon className={`${stat.color} mb-3`} size={24} aria-hidden="true" />
                                        <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                                        <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Languages Card */}
                        <motion.div
                            className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-5">Top Languages</h3>

                            {/* Progress Bar */}
                            <div className="flex w-full h-3 rounded-full overflow-hidden mb-6 bg-white/10">
                                {languages.map((lang, i) => (
                                    <div key={i} className={`h-full ${lang.color}`} style={{ width: lang.percent }} />
                                ))}
                            </div>

                            {/* Legend */}
                            <div className="space-y-3">
                                {languages.map((lang, i) => (
                                    <div key={i} className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-3 h-3 rounded-full ${lang.color}`} />
                                            <span className="text-gray-300">{lang.name}</span>
                                        </div>
                                        <span className="text-gray-500 font-mono">{lang.percent}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Highlights Card */}
                        <motion.div
                            className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">Highlights</h3>
                            <div className="flex items-center gap-3">
                                <Cpu className="text-gray-400" size={20} aria-hidden="true" />
                                <span className="text-sm text-gray-200 font-medium">Developer Program Member</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Organizations & Achievements */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        {/* Organizations Contributed To */}
                        <motion.div
                            className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 backdrop-blur-md relative overflow-hidden"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {/* Subtle background decoration */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

                            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
                                <Rocket className="text-emerald-400" aria-hidden="true" /> Featured Repositories
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {orgs.map((org, i) => (
                                    <a
                                        key={i}
                                        href={org.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group flex flex-col justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${i === 0 ? "sm:col-span-2" : ""}`}
                                        aria-label={`View my contribution to ${org.name}`}
                                    >
                                        <div className="flex items-start justify-between w-full mb-2">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                                                    <org.icon size={18} style={{ color: org.color }} className="drop-shadow-sm" aria-hidden="true" />
                                                </div>
                                                <div className="flex flex-col text-left">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-semibold text-gray-200">{org.name}</span>
                                                        {org.badge && (
                                                            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-white/10 text-gray-300 border border-white/5">
                                                                {org.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-gray-500 font-mono">{org.repo}</span>
                                                </div>
                                            </div>
                                            <ExternalLink size={16} className="text-gray-600 group-hover:text-blue-400 transition-colors shrink-0" aria-hidden="true" />
                                        </div>

                                        <div className="w-full flex items-center justify-start gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 overflow-hidden">
                                            <org.actionIcon size={14} className={`shrink-0 ${org.actionColor}`} aria-hidden="true" />
                                            <span className="text-xs font-medium text-gray-300 shrink-0">{org.desc}</span>
                                            <span className="text-[11px] text-gray-500 truncate ml-1 font-mono">{org.title}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                            className="p-5 md:p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                    <Trophy className="text-yellow-400" aria-hidden="true" /> Earned Achievements
                                </h3>
                                <a
                                    href="https://github.com/mrsatyampatel?tab=achievements"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                    aria-label="View all achievements on GitHub"
                                >
                                    <ExternalLink size={16} aria-hidden="true" />
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                                {achievements.map((badge, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 relative group cursor-default">
                                        {/* Multiplier Badge */}
                                        {badge.multiplier && (
                                            <span className="absolute -top-1.5 -right-1.5 z-10 bg-[#2d3139] border border-white/10 text-[#c9d1d9] text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                                                {badge.multiplier}
                                            </span>
                                        )}

                                        {/* Achievement Image */}
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={badge.image}
                                                alt={badge.name}
                                                className="w-full h-full object-contain drop-shadow-md"
                                                loading="lazy"
                                            />
                                        </div>

                                        <span className="text-xs sm:text-sm font-semibold text-gray-200 text-center whitespace-nowrap">{badge.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    {/* Full Width Bottom: Contribution Graph */}
                    <div className="lg:col-span-3">
                        <motion.div
                            className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
                                <CalendarDays className="text-blue-400" aria-hidden="true" /> Contribution Graph
                            </h3>
                            <div className="w-full flex justify-center overflow-x-auto pb-4 custom-scrollbar">
                                <div className="min-w-max">
                                    <GitHubCalendar
                                        username="mrsatyampatel"
                                        colorScheme="dark"
                                        blockSize={14}
                                        blockMargin={5}
                                        fontSize={14}
                                        theme={{
                                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
