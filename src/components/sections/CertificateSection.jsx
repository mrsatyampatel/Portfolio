import React, { useState, useMemo, useEffect, useRef } from "react";
import { X, Download, ChevronLeft, ChevronRight, ArrowRight, Award, MapPin, Calendar, Building2, Sparkles, CheckCircle2 } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const certificates = [
  {
    id: 1,
    title: "International Conference (ML in Algorithmic Trading)",
    organization: "Shri Ramswaroop Memorial University (SRMU) & IFBEC",
    location: "SRMU Campus, Lucknow-Deva Road, Barabanki, U.P.",
    date: "9th – 11th April, 2026",
    highlight: "Research Presentation",
    img: "/certificates/International-Conference-ML-Trading.jpg",
    alt: "International Conference on Sustainable Innovation 2.0 Presentation - Satyam Patel",
    description: "Certificate of Participation for delivering an Offline Oral presentation on 'The Impact of Machine Learning on Algorithmic Trading: Strategies, Market Dynamics, and Regulatory Challenges' at the International Conference on Sustainable Innovation 2.0 (Bridging Research & Industry for a Resilient Future).",
  },
  {
    id: 2,
    title: "Smart India Hackathon 2026 (Coordinator)",
    organization: "Tech Fusion Club, SRMU | MoE's Innovation Cell & AICTE",
    location: "SRMU Campus, Lucknow-Deva Road, Barabanki, U.P.",
    date: "7th – 8th September, 2026",
    highlight: "Official Event Coordinator",
    img: "/certificates/SIH-2026-Coordinator.jpg",
    alt: "Smart India Hackathon 2026 Coordinator Certificate of Appreciation - Satyam Patel",
    description: "Certificate of Appreciation for serving as an Event Coordinator for the Internal Round of Smart India Hackathon (SIH) 2026, leading management, logistics, and participant mentoring across rounds.",
  },
  {
    id: 3,
    title: "Smart India Hackathon 2026 (Participant)",
    organization: "Ministry of Education (MoE), AICTE & SRMU",
    location: "SRMU Campus, Lucknow-Deva Road, Barabanki, U.P.",
    date: "September 2026",
    highlight: "Cleared Internal Round with Innovative Idea",
    isSIHParticipant: true,
    img: "/certificates/SIH-2026-Participation.jpg",
    alt: "Smart India Hackathon 2026 Participation Certificate - Satyam Patel",
    description: "Participated as a B.Tech CSE (AI/ML) student in the internal round of Smart India Hackathon 2026. Successfully qualified and cleared the rigorous university internal round with our innovative idea and technical solution.",
  },
  {
    id: 4,
    title: "Smart India Hackathon 2025 (Participant)",
    organization: "Ministry of Education (MoE), AICTE & SRMU",
    location: "SRMU Campus, Lucknow-Deva Road, Barabanki, U.P.",
    date: "September 2025",
    highlight: "Cleared Internal Round with Innovative Idea",
    isSIHParticipant: true,
    img: "/certificates/SIH-2025-SRMU.png",
    alt: "Smart India Hackathon 2025 Participation Certificate - Satyam Patel",
    description: "Participated in the internal round of Smart India Hackathon 2025 as a B.Tech CSE (AI/ML) student. Successfully cleared the internal evaluation round by presenting an innovative, impactful problem-solving idea.",
  },
  {
    id: 5,
    title: "VIVEKA 5.0 (Hack-A-Thon)",
    organization: "Tech Fusion Club & IQAC, SRMU",
    location: "SRMU Campus, Lucknow-Deva Road, Barabanki, U.P.",
    date: "18th – 20th February, 2026",
    highlight: "Techfest 2k26 Hack-A-Thon",
    img: "/certificates/Viveka_5_Hackathon_Certificate.jpg",
    alt: "Viveka 5.0 Techfest Hack-A-Thon Participation Certificate - Satyam Patel",
    description: "Certificate of Participation in the Hack-A-Thon event at VIVEKA: The Intelligence 5.0 (Techfest 2k26) organized by Tech Fusion Club, SRMU. Built and presented software prototypes under tight deadlines.",
  },
  {
    id: 6,
    title: "Hackfest Lucknow 2026",
    organization: "GDGoC SRMCEM x Major League Hacking (MLH)",
    location: "SRMCEM Campus, Lucknow, U.P.",
    date: "February 2026",
    highlight: "MLH Hackathon - Team Latent",
    img: "/certificates/certificate-hackfest-srmcem.jpg",
    alt: "Hackfest Lucknow Participation Certificate - GDGoC SRMCEM x MLH - Satyam Patel",
    description: "Certificate of Participation proudly presented to Satyam Patel with Team Latent for building and pitching modern technology solutions at Hackfest Lucknow, organized by GDGoC SRMCEM in partnership with Major League Hacking (MLH).",
  },
  {
    id: 7,
    title: "Hackfest 2026 (Craftora & OSEN)",
    organization: "Craftora & OSEN (Powered by GDG, Render, ElevenLabs)",
    location: "Lucknow / Virtual",
    date: "2026",
    highlight: "Developer Community Hackathon",
    img: "/certificates/certificate-hackfest-craftora.jpg",
    alt: "Hackfest 2026 Participation Certificate - Craftora & OSEN - Satyam Patel",
    description: "Awarded Certificate of Participation in Hackfest 2026 in recognition of dedication, creative teamwork, and technical contributions utilizing modern cloud & AI developer tools.",
  },

  {
    id: 9,
    title: "Harmony'26 Technical Events",
    organization: "Tech Fusion Club, SRMU",
    location: "SRMU Campus, Lucknow-Deva Road, Barabanki, U.P.",
    date: "9th October, 2026",
    highlight: "Event Management Volunteer",
    img: "/certificates/Harmony_26_Volunteer.jpg",
    pdfUrl: "/certificates/Harmony_26_Volunteer_Certificate.pdf",
    alt: "Harmony'26 Event Volunteer Appreciation Certificate - Satyam Patel",
    description: "Certificate of Appreciation proudly presented to Satyam Patel for serving as an Event Volunteer in HARMONY'26 Technical Events, organized by Tech Fusion Club, SRMU on 9th October, 2026.",
  },
];

export default function CertificateSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (selectedIndex !== null && modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [selectedIndex]);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevCertificate = () => {
    setSelectedIndex(
      (selectedIndex - 1 + certificates.length) % certificates.length
    );
  };

  const nextCertificate = () => {
    setSelectedIndex((selectedIndex + 1) % certificates.length);
  };

  const certsJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Certificates & Achievements - Satyam Patel",
    description: "Certificates, achievements, and hackathons of Satyam Patel.",
    url: "/certificates",
    numberOfItems: certificates.length,
    itemListElement: certificates.map((cert, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cert.title,
    })),
  }), []);

  return (
    <>
      <Helmet>
        <title>Certificates | Satyam Patel</title>
        <meta name="description" content="View certificates and hackathon achievements of Satyam Patel - Smart India Hackathon, MLH Hackfest, Craftora, and SRMU events." />
        <link rel="canonical" href="/certificates" />
        <meta property="og:title" content="Certificates | Satyam Patel" />
        <meta property="og:description" content="Certificates and hackathon achievements of Satyam Patel." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(certsJsonLd)}</script>
      </Helmet>

      <section
        id="certificates"
        className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16"
      >
        <div className="max-w-7xl w-full mx-auto text-center">
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Certificates
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of my professional achievements, certifications, and
            training programs that showcase my expertise. 📜
          </motion.p>

          {/* Certificates Grid - Balanced & Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-gray-900/90 hover:border-blue-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 text-left group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                {/* Certificate Image Preview */}
                <div
                  className="relative cursor-pointer overflow-hidden bg-black/60 h-44 sm:h-48 w-full flex-shrink-0"
                  onClick={() => openModal(index)}
                  title="Click to view full certificate"
                >
                  {/* Floating Badge on top-left of image */}
                  {cert.highlight && (
                    <div className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/80 text-emerald-400 border border-emerald-500/40 backdrop-blur-md shadow-md">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>{cert.highlight}</span>
                    </div>
                  )}

                  {cert.img.endsWith(".pdf") ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-950 via-gray-900 to-black flex flex-col items-center justify-center p-4 text-center border-b border-white/5">
                      <Award className="w-12 h-12 text-blue-400 mb-2 drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
                      <span className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold">Official Document</span>
                      <h4 className="text-white font-bold text-xs sm:text-sm line-clamp-1 px-2 mt-0.5">{cert.title}</h4>
                      <span className="mt-2 text-[11px] text-gray-300 bg-white/10 px-3 py-1 rounded-full font-mono group-hover:bg-blue-600 group-hover:text-white transition">Click to View</span>
                    </div>
                  ) : (
                    <>
                      <img
                        src={cert.img}
                        alt={cert.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow backdrop-blur-sm">
                          Click to Enlarge 🔍
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Details below thumbnail */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-gradient-to-b from-gray-900 to-gray-950">
                  <div>
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug line-clamp-1" title={cert.title}>
                      {cert.title}
                    </h3>

                    {/* Location & Organization */}
                    <div className="flex flex-col gap-1 mb-2.5 text-xs text-gray-400">
                      {cert.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                          <span className="truncate">{cert.location}</span>
                        </div>
                      )}
                      {cert.organization && (
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <span className="truncate">{cert.organization}</span>
                        </div>
                      )}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed mb-3 line-clamp-2">
                      {cert.description}
                    </p>

                    {/* SIH Highlight Note */}
                    {cert.isSIHParticipant && (
                      <div className="mb-3 p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center gap-2 text-xs text-emerald-300 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="font-medium leading-tight">
                          Internal round clear kiya apne innovative idea aur prototype se! 🚀
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => openModal(index)}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold transition flex items-center gap-1"
                    >
                      View Full Details <ArrowRight size={12} />
                    </button>
                    <a
                      href={cert.img}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition"
                      title="Download Certificate"
                    >
                      <Download size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Internal Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="/about" className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-sm font-medium">
              About Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link to="/projects" className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:bg-white/5 transition-all duration-300 text-sm font-medium">
              View Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Fullscreen Modal Carousel */}
          <AnimatePresence>
            {selectedIndex !== null && (
              <motion.div
                className="fixed inset-0 bg-black/95 flex items-center justify-center z-[999] p-2 sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  ref={modalContentRef}
                  className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto overflow-x-hidden bg-white text-black rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 md:top-4 md:right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition z-50 shadow-lg"
                    onClick={closeModal}
                    aria-label="Close certificate viewer"
                  >
                    <X size={20} aria-hidden="true" />
                  </button>

                  {/* Navigation */}
                  <button
                    className="absolute left-2 md:left-4 top-[40%] text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition z-50 shadow-lg flex items-center justify-center opacity-80 hover:opacity-100"
                    onClick={prevCertificate}
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft size={24} aria-hidden="true" />
                  </button>
                  <button
                    className="absolute right-2 md:right-4 top-[40%] text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition z-50 shadow-lg flex items-center justify-center opacity-80 hover:opacity-100"
                    onClick={nextCertificate}
                    aria-label="Next certificate"
                  >
                    <ChevronRight size={24} aria-hidden="true" />
                  </button>

                  {/* Certificate Image */}
                  {certificates[selectedIndex].img.endsWith(".pdf") ? (
                    <iframe
                      src={certificates[selectedIndex].img}
                      className="w-full h-[50vh] md:h-[65vh] rounded-xl mt-8 md:mt-2"
                      style={{ border: "none" }}
                      title={certificates[selectedIndex].title}
                    />
                  ) : (
                    <img
                      src={certificates[selectedIndex].img}
                      alt={certificates[selectedIndex].alt}
                      className="w-full max-h-[50vh] md:max-h-[65vh] object-contain rounded-xl mt-8 md:mt-2"
                    />
                  )}

                  {/* Info */}
                  <div className="mt-6 text-center w-full max-w-3xl px-2 sm:px-4">
                    {/* Highlight Badge */}
                    {certificates[selectedIndex].highlight && (
                      <div className="mb-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{certificates[selectedIndex].highlight}</span>
                      </div>
                    )}

                    <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                      {certificates[selectedIndex].title}
                    </h3>

                    {/* Metadata Pills: Organization, Location, Date */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 text-xs sm:text-sm text-gray-600">
                      {certificates[selectedIndex].organization && (
                        <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1 rounded-lg border border-gray-200">
                          <Building2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <span className="font-medium">{certificates[selectedIndex].organization}</span>
                        </span>
                      )}
                      {certificates[selectedIndex].location && (
                        <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1 rounded-lg border border-gray-200">
                          <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                          <span>{certificates[selectedIndex].location}</span>
                        </span>
                      )}
                      {certificates[selectedIndex].date && (
                        <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1 rounded-lg border border-gray-200">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                          <span>{certificates[selectedIndex].date}</span>
                        </span>
                      )}
                    </div>

                    {/* Description Box */}
                    <div className="mt-4 bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-200/90 rounded-xl p-4 sm:p-5 text-gray-700 text-sm sm:text-base leading-relaxed text-left sm:text-center shadow-sm">
                      <p className="font-normal text-gray-700">
                        {certificates[selectedIndex].description}
                      </p>

                      {/* Highlight for SIH internal round */}
                      {certificates[selectedIndex].isSIHParticipant && (
                        <div className="mt-3.5 pt-3 border-t border-emerald-200 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50/90 rounded-lg p-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>💡 Internal round successfully clear kiya apne innovative idea aur prototype se!</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Download */}
                  <div className="flex justify-center mt-6">
                    <a
                      href={certificates[selectedIndex].img}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition font-medium shadow-md hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <Download size={18} aria-hidden="true" /> Download Certificate
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
