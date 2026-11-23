import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiFlutter, SiSupabase, SiGithub } from 'react-icons/si';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight, ArrowRight, Award, MessageSquare } from 'lucide-react';
import HomeProjects from './HomeProjects';
import GitHubWall from './GitHubWall';

/* ─── Stats data ────────────────────────────────────────────── */
const initialStats = [
    { value: "4+", label: "Featured Projects" },
    { value: "8+", label: "Certifications & Hackathons" },
    { value: "SRMU", label: "B.Tech CSE (AI/ML)" },
    { value: "...", label: "Total Contributions" },
];

/* ─── Top certificates for teaser ─────────────────────────── */
const topCertificates = [
    { title: "VIVEKA 5.0 (Hack-A-Thon)", img: "/certificates/Viveka_5_Hackathon_Certificate.jpg", alt: "Viveka 5.0 Techfest Hack-A-Thon Participation Certificate - Satyam Patel" },
    { title: "International Conference (ML in Algorithmic Trading)", img: "/certificates/International-Conference-ML-Trading.jpg", alt: "International Conference on Sustainable Innovation 2.0 Presentation - Satyam Patel" },
    { title: "Smart India Hackathon 2026 (Coordinator)", img: "/certificates/SIH-2026-Coordinator.jpg", alt: "Smart India Hackathon 2026 Coordinator Certificate - Satyam Patel" },
    { title: "Smart India Hackathon 2026 (Participant)", img: "/certificates/SIH-2026-Participation.jpg", alt: "Smart India Hackathon 2026 Participation Certificate - Satyam Patel" },
    { title: "Smart India Hackathon 2025 (Participant)", img: "/certificates/SIH-2025-SRMU.png", alt: "Smart India Hackathon 2025 Participation Certificate - Satyam Patel" },
    { title: "Hackfest Lucknow 2026", img: "/certificates/certificate-hackfest-srmcem.jpg", alt: "Hackfest Lucknow Participation Certificate - GDGoC SRMCEM x MLH - Satyam Patel" },
    { title: "Hackfest 2026 (Craftora & OSEN)", img: "/certificates/certificate-hackfest-craftora.jpg", alt: "Hackfest 2026 Participation Certificate - Craftora & OSEN - Satyam Patel" },
    { title: "Viveka 5.0 (Boat Race)", img: "/certificates/Viveka_5_Boat_Race_Certificate.pdf", alt: "Viveka 5.0 Techfest Participation Certificate - Satyam Patel" },
    { title: "Harmony'26 Technical Events", img: "/certificates/Harmony_26_Volunteer_Certificate.pdf", alt: "Harmony'26 Technical Events Volunteer Certificate - Satyam Patel" },
];

export default function Home() {
    const [stats, setStats] = React.useState(initialStats);
    const scrollRef = React.useRef(null);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                // Check if we reached the end
                if (scrollLeft + clientWidth >= scrollWidth - 20) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    const firstChild = scrollRef.current.children[0];
                    if (firstChild) {
                        // gap-8 is 32px
                        scrollRef.current.scrollBy({ left: firstChild.offsetWidth + 32, behavior: 'smooth' });
                    }
                }
            }
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    React.useEffect(() => {
        // 1. Live Public Repositories count from GitHub API
        fetch('https://api.github.com/users/mrsatyampatel')
            .then(res => res.json())
            .then(userData => {
                if (userData && userData.public_repos !== undefined) {
                    setStats(prev => {
                        const newStats = [...prev];
                        newStats[0] = { value: `${userData.public_repos}+`, label: "Featured Projects" };
                        newStats[1] = { value: `${topCertificates.length}+`, label: "Certifications & Hackathons" };
                        return newStats;
                    });
                }
            })
            .catch(() => {
                setStats(prev => {
                    const newStats = [...prev];
                    newStats[1] = { value: `${topCertificates.length}+`, label: "Certifications & Hackathons" };
                    return newStats;
                });
            });

        // 2. Live Total Contributions from GitHub
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
                    newStats[3] = { value: `${sum}+`, label: "Total Contributions" };
                    return newStats;
                });
            })
            .catch(err => {
                console.error("Failed to fetch GitHub contributions:", err);
                setStats(prev => {
                    const newStats = [...prev];
                    newStats[3] = { value: "1061+", label: "Total Contributions" };
                    return newStats;
                });
            });
    }, []);

    return (
        <>
            {/* ── Homepage Helmet SEO ──────────────────────────────── */}
            <Helmet>
                <title>Satyam Patel | Frontend Developer | Portfolio</title>
                <meta name="description" content="Satyam Patel - Frontend Developer and MERN Stack Enthusiast based in Lucknow. Modern web portfolio showcasing projects and skills." />
                <link rel="canonical" href="/" />
                <meta property="og:title" content="Satyam Patel | Frontend Developer Portfolio" />
                <meta property="og:description" content="Satyam Patel - Frontend Developer and MERN Stack Enthusiast based in Lucknow." />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section
                id="home"
                className="relative min-h-screen w-full flex items-center justify-center bg-black text-white px-4 overflow-hidden"
            >
                {/* ── Background gradient orbs ──────────────────────── */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div
                        className="animate-orb-1 absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
                        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)" }}
                    />
                    <div
                        className="animate-orb-2 absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
                        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)" }}
                    />
                    <div
                        className="animate-orb-3 absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full opacity-10"
                        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)" }}
                    />
                </div>

                {/* ── Main Content ──────────────────────────────────── */}
                <div className="relative z-10 max-w-5xl w-full mx-auto text-center">

                    {/* ── Profile Photo with Glow Ring ──────────────── */}
                    <motion.div
                        className="flex justify-center mb-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow" />
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-500/80 animate-glow-pulse shadow-2xl">
                                <img
                                    src="/certificates/satyam-pfp-dark.jpg"
                                    alt="Satyam Patel - Frontend Developer Portrait"
                                    className="w-full h-full object-cover object-top scale-[1.2] translate-y-2"
                                />
                            </div>
                            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black animate-pulse-dot" />
                        </div>
                    </motion.div>

                    {/* ── Available badge ───────────────────────────── */}
                    <motion.div
                        className="flex justify-center mb-5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-dot" />
                            Available for Projects & Opportunities
                        </span>
                    </motion.div>

                    {/* ── Name ──────────────────────────────────────── */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Hi, I'm{" "}
                        <span className="text-gradient-blue">
                            Satyam Patel
                        </span>
                    </motion.h1>

                    {/* ── Typewriter ────────────────────────────────── */}
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 font-mono h-7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Typewriter
                            words={[
                                'Frontend Developer',
                                'MERN Stack Enthusiast',
                                'Interested in Machine Learning',
                                'Based in Lucknow, India',
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </motion.p>

                    {/* ── CTA Buttons ───────────────────────────────── */}
                    <motion.div
                        className="flex justify-center items-center flex-wrap gap-4 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <button
                            type="button"
                            onClick={() => alert("Resume will be uploaded soon!")}
                            className="group px-7 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] cursor-pointer"
                            title="Resume coming soon"
                        >
                            View Resume
                        </button>

                        <Link
                            to="/connect"
                            className="group px-7 py-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 hover:border-white backdrop-blur-sm"
                        >
                            Connect
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
                        </Link>
                    </motion.div>

                    {/* ── Stats Row (GitHub Link) ───────────────────── */}
                    <motion.div
                        className="flex justify-center mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.7 }}
                    >
                        <a
                            href="https://github.com/mrsatyampatel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group overflow-hidden flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-6 sm:px-10 py-5 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-blue-500/20 transition-all duration-500 backdrop-blur-sm"
                            aria-label="View Satyam's GitHub Profile"
                        >
                            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
                                <SiGithub className="text-[18rem] text-white animate-spin-super-slow" aria-hidden="true" />
                            </div>

                            {stats.map((stat, i) => (
                                <React.Fragment key={stat.label}>
                                    {i > 0 && (
                                        <div className="w-px h-10 bg-white/10 relative z-10" />
                                    )}
                                    <div className="text-center relative z-10 group-hover:-translate-y-0.5 transition-transform duration-300">
                                        <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{stat.value}</p>
                                        <p className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </a>
                    </motion.div>
                </div>

                {/* ── Scroll Down Indicator ─────────────────────────── */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                >
                    <div className="flex flex-col items-center gap-2 text-gray-500 animate-scroll-bounce">
                        <span className="text-xs uppercase tracking-widest">SCROLL</span>
                        <ChevronDown size={20} aria-hidden="true" />
                    </div>
                </motion.div>

                {/* ── Decorative grid lines (subtle) ────────────────── */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </section>

            {/* ═══════════════ ABOUT TEASER ═══════════════ */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-5xl w-full mx-auto px-4 flex flex-col items-center text-center">
                    <motion.div
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mb-6 mx-auto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/certificates/satyam-pfp-dark.jpg"
                            alt="Satyam Patel - B.Tech CSE (AI/ML) Student at SRMU Lucknow"
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
                    <motion.p
                        className="text-gray-300 max-w-2xl mx-auto text-lg mb-8 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        I'm a Second-Year <strong className="text-white">B.Tech CSE (AI/ML)</strong> Student at <strong className="text-white">Shri Ramswaroop Memorial University (SRMU)</strong>, Lucknow.
                        Learning DSA, Machine Learning fundamentals, and building responsive, modern web applications.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Link
                            to="/about"
                            className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                        >
                            Read More
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ GITHUB WALL ═══════════════ */}
            <GitHubWall />

            {/* ═══════════════ PROJECTS TEASER ═══════════════ */}
            <HomeProjects />

            {/* ═══════════════ CERTIFICATES TEASER ═══════════════ */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
                <div className="max-w-7xl w-full mx-auto px-6 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Award size={28} className="inline mr-2 text-blue-500" aria-hidden="true" />
                        My Certificates
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 mb-10 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        A collection of my professional achievements and certifications.
                    </motion.p>

                    <div className="relative w-full overflow-hidden mb-12 py-4">
                        {/* Gradient masks for smooth fading at edges */}
                        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
                        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

                        <div
                            ref={scrollRef}
                            className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-6"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style dangerouslySetInnerHTML={{
                                __html: `
                                div::-webkit-scrollbar { display: none; }
                            `}} />
                            {topCertificates.map((cert, i) => (
                                <div
                                    key={`${cert.title}-${i}`}
                                    className="snap-center shrink-0 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.33rem)] group relative rounded-2xl overflow-hidden shadow-lg bg-gray-800 transition transform hover:-translate-y-2 cursor-pointer"
                                >
                                    {cert.img.endsWith(".pdf") ? (
                                        <div className="w-full h-56 md:h-64 bg-gradient-to-br from-blue-950 via-gray-900 to-black flex flex-col items-center justify-center p-6 text-center border-b border-white/5">
                                            <Award className="w-12 h-12 text-blue-400 mb-2 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                            <span className="text-[11px] uppercase tracking-wider text-blue-400 font-semibold mb-1">Official Certificate</span>
                                            <h4 className="text-white font-bold text-sm line-clamp-2">{cert.title}</h4>
                                            <span className="mt-2 text-[10px] text-gray-400 bg-white/10 px-2.5 py-0.5 rounded-full font-mono">View Document</span>
                                        </div>
                                    ) : (
                                        <img
                                            src={cert.img}
                                            alt={cert.alt}
                                            className="w-full h-56 md:h-64 object-cover"
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                        <p className="text-white font-semibold px-4 whitespace-normal text-center">{cert.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <Link
                            to="/certificates"
                            className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                        >
                            Certificates
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ CONTACT CTA ═══════════════ */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-8 py-14 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Want to work together?{" "}
                            <span className="text-blue-500">Let's talk</span>
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 mb-8 text-lg max-w-xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Whether it's a freelance project, collaboration, or just a hello - I'd love to hear from you.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                            >
                                <MessageSquare size={18} aria-hidden="true" />
                                Get In Touch
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
