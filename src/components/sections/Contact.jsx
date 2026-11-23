import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const [message, setMessage] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "28cea9de-7e82-4166-bfb6-ac711ae81b23"); // Satyam Patel Web3Forms API key
    formData.append("subject", "New message from your portfolio contact form");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Thank you! Your message has been sent.");
      event.target.reset();
    } else {
      setMessage("Oops! Something went wrong. Please try again.");
    }
  };

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Satyam Patel",
    "description": "Get in touch with Satyam Patel for projects, web development, or collaborations.",
    "url": "/contact",
    "mainEntity": {
      "@type": "Person",
      "name": "Satyam Patel",
      "url": "/"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Satyam Patel</title>
        <meta name="description" content="Get in touch with Satyam Patel for frontend projects, machine learning collaborations, or to connect." />
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content="Contact | Satyam Patel" />
        <meta property="og:description" content="Reach out to Satyam Patel for projects or collaborations." />
        <meta property="og:url" content="/contact" />
        <script type="application/ld+json">{JSON.stringify(contactJsonLd)}</script>
      </Helmet>

    <section id="Contact" className="py-20 bg-black text-white relative min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500">Contact</span> Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Want to work together, collaborate on a project, or just say hi? Drop a message below!
        </motion.p>

        {/* Show message after form submission */}
        {message && (
          <div className="mb-6 text-green-400 font-semibold">{message}</div>
        )}

        <motion.form
          onSubmit={onSubmit}
          className="grid gap-6 max-w-xl mx-auto text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
          >
            <FaPaperPlane /> Send Message
          </button>
        </motion.form>

        {/* Internal Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link to="/projects" className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-sm font-medium">
            View My Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
          <Link to="/connect" className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:bg-white/5 transition-all duration-300 text-sm font-medium">
            Connect on Socials <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
    </>
  );
}