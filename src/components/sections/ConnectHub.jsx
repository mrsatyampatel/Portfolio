import React, { useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ExternalLink, FileText, Globe, User } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  SiGithub,
  SiLinkedin,
  SiGeeksforgeeks,
  SiGoogle,
  SiLeetcode,
  SiHackerrank,
  SiCodechef,
  SiHackerearth,
  SiDevdotto,
  SiHashnode,
  SiProducthunt,
  SiResearchgate,
  SiAcademia,
  SiBehance,
  SiGravatar,
  SiLinktree,
  SiYcombinator,
  SiIndiehackers,
} from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

import connectLinks, { categoryOrder } from "../../data/connectLinks";

/* ─── Icon + color map ─────────────────────────────────────────── */
const ICON_MAP = {
  portfolio: { Icon: Globe, color: "#3B82F6" },
  github: { Icon: SiGithub, color: "#ffffff" },
  linkedin: { Icon: SiLinkedin, color: "#0A66C2" },
  email: { Icon: FaEnvelope, color: "#EA4335" },
  resume: { Icon: FileText, color: "#10B981" },
  geeksforgeeks: { Icon: SiGeeksforgeeks, color: "#2F8D46" },
  google: { Icon: SiGoogle, color: "#4285F4" },
  leetcode: { Icon: SiLeetcode, color: "#FFA116" },
  hackerrank: { Icon: SiHackerrank, color: "#00EA64" },
  codechef: { Icon: SiCodechef, color: "#5B4638" },
  hackerearth: { Icon: SiHackerearth, color: "#2C3454" },
  devto: { Icon: SiDevdotto, color: "#ffffff" },
  hashnode: { Icon: SiHashnode, color: "#2962FF" },
  producthunt: { Icon: SiProducthunt, color: "#DA552F" },
  peerlist: { Icon: Globe, color: "#00AA45" },
  indiehackers: { Icon: SiIndiehackers, color: "#0E6CFF" },
  hackernews: { Icon: SiYcombinator, color: "#FF6600" },
  researchgate: { Icon: SiResearchgate, color: "#00CCBB" },
  academia: { Icon: SiAcademia, color: "#41454A" },
  behance: { Icon: SiBehance, color: "#1769FF" },
  aboutme: { Icon: User, color: "#00A98F" },
  gravatar: { Icon: SiGravatar, color: "#1E8CBE" },
  linktree: { Icon: SiLinktree, color: "#43E660" },
  carrd: { Icon: Globe, color: "#7C5CFC" },
  wellfound: { Icon: Globe, color: "#FF5733" },
};

/* ─── Stagger animation variants ────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

/* ─── JSON-LD Schema ────────────────────────────────────────────── */
function buildJsonLd(links) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Connect with Satyam Patel - All Links",
    description:
      "All official links of Satyam Patel - GitHub, LinkedIn, LeetCode, and more.",
    url: "/connect",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: links.length,
      itemListElement: links.map((link, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: link.name,
        url: link.url,
      })),
    },
  };
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function ConnectHub() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Group links by category
  const grouped = useMemo(() => {
    const map = {};
    for (const link of connectLinks) {
      if (!map[link.category]) map[link.category] = [];
      map[link.category].push(link);
    }
    return map;
  }, []);

  const jsonLd = useMemo(() => buildJsonLd(connectLinks), []);

  return (
    <>
      {/* ── Page-specific SEO meta ───────────────────────────────── */}
      <Helmet>
        <title>Connect | Satyam Patel</title>
        <meta
          name="description"
          content="All official links of Satyam Patel - GitHub, LinkedIn, LeetCode, and more. One verified hub for every platform."
        />
        <link rel="canonical" href="/connect" />
        <meta property="og:title" content="Connect | Satyam Patel" />
        <meta
          property="og:description"
          content="All official links of Satyam Patel. One verified hub for every platform."
        />
        <meta property="og:url" content="/connect" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="relative min-h-screen w-full bg-black text-white pt-24 pb-16 px-4 overflow-hidden">
        {/* ── Particles background (subtle, lighter than Home) ──── */}
        <Particles
          id="connectParticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false, zIndex: 0 },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" } },
              modes: { grab: { distance: 140, links: { opacity: 0.25 } } },
            },
            particles: {
              color: { value: "#3b82f6" },
              links: {
                enable: true,
                color: "#3b82f6",
                distance: 120,
                opacity: 0.08,
              },
              move: {
                enable: true,
                speed: 0.3,
                random: true,
                outModes: "out",
              },
              number: { value: 50, density: { enable: true, area: 1000 } },
              opacity: { value: 0.35, random: { enable: true, minimumValue: 0.15 } },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 max-w-4xl w-full mx-auto">
          {/* ── Profile header ─────────────────────────────────── */}
          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.35)] mb-5">
              <img
                src="/certificates/satyam-pfp-dark.jpg"
                alt="Satyam Patel"
                className="w-full h-full object-cover object-top scale-[1.2] translate-y-2"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
              Satyam{" "}
              <span className="text-blue-500">Patel</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg font-mono text-center">
              Frontend Developer · MERN Stack Enthusiast · Interested in Machine Learning
            </p>
          </motion.div>

          {/* ── Link sections grouped by category ──────────────── */}
          {categoryOrder.map((category) => {
            const links = grouped[category];
            if (!links || links.length === 0) return null;

            return (
              <div key={category} className="mb-10">
                <motion.h2
                  className="text-lg sm:text-xl font-semibold text-blue-400 mb-4 tracking-wide uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  {category}
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {links.map((link) => {
                    const mapped = ICON_MAP[link.iconKey] || {
                      Icon: ExternalLink,
                      color: "#9CA3AF",
                    };
                    const { Icon, color } = mapped;

                    return (
                      <motion.a
                        key={link.url}
                        href={link.url}
                        target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                        rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        variants={cardVariants}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-4 p-4 rounded-xl
                          bg-white/[0.04] border border-white/10
                          hover:border-blue-500/50 hover:bg-white/[0.07]
                          hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]
                          transition-all duration-300 ease-out
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      >
                        <span
                          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.06] group-hover:bg-white/[0.12] transition-colors duration-300"
                          aria-hidden="true"
                        >
                          <Icon
                            size={22}
                            className="transition-transform duration-300 group-hover:scale-110"
                            style={{ color }}
                          />
                        </span>
                        <span className="text-gray-200 font-medium text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                          {link.name}
                        </span>
                        <ExternalLink
                          size={14}
                          className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors duration-300 flex-shrink-0"
                          aria-hidden="true"
                        />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}

          {/* ── Bottom tagline ─────────────────────────────────── */}
          <motion.p
            className="text-center text-gray-600 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            All links verified and maintained by Satyam Patel.
          </motion.p>
        </div>
      </section>
    </>
  );
}
