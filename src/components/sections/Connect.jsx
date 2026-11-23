import React, { useState } from "react";
import { Phone, MessageCircle, MoveRight, MoveLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function RealConnect() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      
      {/* Expandable Options */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3 mb-3"
          >
            {/* Call Button */}
            <a
              href="mailto:chandrayan2k23@gmail.com"
              aria-label="Email Satyam Patel"
              className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full shadow-lg flex items-center justify-center text-white"
            >
              <Phone size={24} aria-hidden="true" />
            </a>

            {/* Message Button */}
            <a
              href="mailto:chandrayan2k23@gmail.com"
              aria-label="Message Satyam Patel"
              className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center text-white"
            >
              <MessageCircle size={24} aria-hidden="true" />
            </a>

            {/* WhatsApp Button */}
            <a
              href="mailto:chandrayan2k23@gmail.com"
              aria-label="Connect with Satyam Patel"
              className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white"
            >
              <FaWhatsapp size={24} aria-hidden="true" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setOpenMenu(!openMenu)}
        whileTap={{ scale: 0.9 }}
        aria-label={
          openMenu ? "Close contact options" : "Open contact options"
        }
        aria-expanded={openMenu}
        className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center text-white"
      >
        {openMenu ? (
          <MoveRight size={28} aria-hidden="true" />
        ) : (
          <MoveLeft size={28} aria-hidden="true" />
        )}
      </motion.button>
    </div>
  );
}
