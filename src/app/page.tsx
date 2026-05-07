"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            Build<span className="text-orange-500">X</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-orange-500 transition">
              Home
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Services
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Projects
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* EXTRA GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >

          <p className="text-orange-500 uppercase tracking-[8px] mb-6 text-sm md:text-base">
            Luxury Construction
          </p>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            Building Modern
            <span className="text-orange-500"> Dream Homes</span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Premium construction solutions with elegant design,
            modern architecture, and trusted craftsmanship.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

            <button className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition duration-300 shadow-2xl">
              Our Projects
              <ArrowRight size={22} />
            </button>

            <button className="border border-white/30 backdrop-blur-md hover:bg-white hover:text-black px-10 py-5 rounded-full font-semibold text-lg transition duration-300">
              Contact Us
            </button>

          </div>

        </motion.div>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-28 px-6 bg-black">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-orange-500 uppercase tracking-[5px] mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              We Create Modern &
              Luxury Spaces
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We provide premium construction services with modern architecture,
              elegant interiors, and trusted workmanship. Our goal is to build
              beautiful spaces that match your dream lifestyle.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition">
              Learn More
            </button>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-bold text-orange-500 mb-4">
                10+
              </h3>

              <p className="text-gray-400">
                Projects Completed
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-bold text-orange-500 mb-4">
                5+
              </h3>

              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-bold text-orange-500 mb-4">
                100%
              </h3>

              <p className="text-gray-400">
                Client Satisfaction
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-bold text-orange-500 mb-4">
                24/7
              </h3>

              <p className="text-gray-400">
                Support Available
              </p>
            </div>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-orange-500 uppercase tracking-[5px] mb-4">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              What We Provide
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-black border border-white/10 p-10 rounded-3xl"
            >
              <Building2 className="text-orange-500 mb-6" size={40} />

              <h3 className="text-2xl font-semibold mb-4">
                House Construction
              </h3>

              <p className="text-gray-400">
                Premium residential construction with modern architecture and quality finishing.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-black border border-white/10 p-10 rounded-3xl"
            >
              <Hammer className="text-orange-500 mb-6" size={40} />

              <h3 className="text-2xl font-semibold mb-4">
                Renovation
              </h3>

              <p className="text-gray-400">
                Transform old properties into luxury modern spaces with expert renovation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-black border border-white/10 p-10 rounded-3xl"
            >
              <Phone className="text-orange-500 mb-6" size={40} />

              <h3 className="text-2xl font-semibold mb-4">
                Consultation
              </h3>

              <p className="text-gray-400">
                Get expert construction guidance and planning for your dream project.
              </p>
            </motion.div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="py-28 px-6 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-orange-500 uppercase tracking-[5px] mb-4">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Our Latest Work
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/projects/project1.png"
                alt="Project 1"
                className="h-96 w-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/projects/project2.png"
                alt="Project 2"
                className="h-96 w-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/projects/project3.png"
                alt="Project 3"
                className="h-96 w-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-28 px-6 bg-zinc-950 text-center">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p className="text-orange-500 uppercase tracking-[5px] mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Contact us today to discuss your dream construction project.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition">
            Contact Now
          </button>

        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-16 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>

            <h2 className="text-3xl font-bold mb-4">
              Build<span className="text-orange-500">X</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Premium construction solutions with modern design,
              trusted quality, and luxury craftsmanship.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>House Construction</li>
              <li>Interior Design</li>
              <li>Renovation</li>
              <li>Consultation</li>
            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>📞 +91 9016751570</li>
              <li>📧 buildx@gmail.com</li>
              <li>📍 Rajkot, Gujarat</li>
            </ul>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 BuildX Construction. All rights reserved.
        </div>

      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919016751570"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition"
      >
        WhatsApp
      </a>

    </main>
  );
}