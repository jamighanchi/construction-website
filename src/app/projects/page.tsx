"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  X,
  MapPin,
  Calendar,
} from "lucide-react";

const projects = [
  {
    type: "Villa",
    image: "/projects/project1.png",
    category: "Luxury Villa",
    title: "Modern Elevation Design",
    location: "Dholka, Ahmedabad",
    year: "2026",
    description:
      "Elegant modern villa with premium exterior detailing and luxury facade styling.",
    details:
      "This luxury villa project was designed with modern elevation concepts, premium lighting, elegant textures, and realistic architectural detailing to create a bold and luxurious appearance.",
  },

  {
    type: "Villa",
    image: "/projects/project2.png",
    category: "Bungalow Concept",
    title: "Contemporary Architecture",
    location: "Ahmedabad, Gujarat",
    year: "2026",
    description:
      "Modern bungalow design with cinematic elevation and premium architectural aesthetics.",
    details:
      "This bungalow concept combines modern geometry, elegant facade design, and realistic architectural visualization with premium material selection.",
  },

  {
    type: "Interior",
    image: "/projects/project3.png",
    category: "Interior Design",
    title: "Premium Interior Concept",
    location: "Gujarat, India",
    year: "2026",
    description:
      "Luxury interior visualization with elegant textures and modern living concepts.",
    details:
      "This interior project focuses on luxury aesthetics, modern furniture styling, warm lighting, and elegant spatial planning for premium living experience.",
  },

  {
    type: "Planning",
    image: "/projects/project4.png",
    category: "Residence Planning",
    title: "Luxury Home Planning",
    location: "Rajkot, Gujarat",
    year: "2026",
    description:
      "Smart residential planning with modern layouts and premium aesthetics.",
    details:
      "This residence project was designed with efficient planning, luxury concepts, elegant zoning, and modern architectural styling.",
  },

  {
    type: "Visualization",
    image: "/projects/project5.png",
    category: "3D Visualization",
    title: "Exterior Visualization",
    location: "Ahmedabad, Gujarat",
    year: "2026",
    description:
      "Realistic modern exterior rendering with cinematic architectural presentation.",
    details:
      "This project showcases premium exterior rendering techniques with realistic lighting, materials, shadows, and luxury visual presentation.",
  },

  {
    type: "Villa",
    image: "/projects/project6.png",
    category: "Turnkey Project",
    title: "Complete Architecture Solution",
    location: "Gujarat, India",
    year: "2026",
    description:
      "Full modern architecture and construction solution with premium execution.",
    details:
      "A complete architecture and turnkey execution project designed with premium quality materials, elegant concepts, and modern construction methods.",
  },
];

export default function ProjectsPage() {

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute top-[30%] right-0 w-[450px] h-[450px] bg-orange-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 left-[30%] w-[450px] h-[450px] bg-orange-600/10 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 border-b border-white/10 overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">

          <Link
            href="/"
            className="inline-flex items-center gap-3 text-orange-500 hover:text-orange-400 transition mb-10"
          >
            <ArrowLeft size={22} />
            Back To Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full mb-8 backdrop-blur-xl">

              <Sparkles className="text-orange-500" size={18} />

              <span className="text-sm uppercase tracking-[4px] text-gray-300">
                Premium Architecture Portfolio
              </span>

            </div>

            <h1 className="text-[34px] sm:text-5xl md:text-8xl font-bold leading-[1.1] mb-6 md:mb-8 max-w-6xl">
              Our Modern
              <span className="text-orange-500"> Project Gallery</span>
            </h1>

            <p className="text-gray-400 text-[15px] md:text-2xl leading-7 md:leading-relaxed max-w-4xl">
              Explore premium architecture, luxury interiors,
              bungalow elevations, and cinematic 3D visualization
              projects designed with creativity and precision.
            </p>

          </motion.div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="relative py-20 md:py-28 px-4 md:px-6">

        {/* STATS */}
        <div className="max-w-7xl mx-auto mb-24">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[25px] p-6 md:p-10 text-center"
            >

              <h2 className="text-2xl md:text-5xl font-bold text-orange-500 mb-2 md:mb-4">
                50+
              </h2>

              <p className="text-gray-400 uppercase tracking-[3px] text-xs md:text-sm">
                Projects Completed
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[25px] p-6 md:p-10 text-center"
            >

              <h2 className="text-2xl md:text-5xl font-bold text-orange-500 mb-2 md:mb-4">
                10+
              </h2>

              <p className="text-gray-400 uppercase tracking-[3px] text-xs md:text-sm">
                Happy Clients
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[25px] p-6 md:p-10 text-center"
            >

              <h2 className="text-2xl md:text-5xl font-bold text-orange-500 mb-2 md:mb-4">
                5+
              </h2>

              <p className="text-gray-400 uppercase tracking-[3px] text-xs md:text-sm">
                Years Experience
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[25px] p-6 md:p-10 text-center"
            >

              <h2 className="text-2xl md:text-5xl font-bold text-orange-500 mb-2 md:mb-4">
                100%
              </h2>

              <p className="text-gray-400 uppercase tracking-[3px] text-xs md:text-sm">
                Client Satisfaction
              </p>

            </motion.div>

          </div>

        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">

          {["All", "Villa", "Interior", "Visualization", "Planning"].map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
             className={`px-4 md:px-8 py-2.5 md:py-3 text-xs sm:text-sm md:text-base rounded-full border transition duration-300 ${
                activeCategory === category
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "border-white/10 bg-white/5 hover:bg-orange-500"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* PROJECT GRID */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">

          {projects
            .filter(
              (project) =>
                activeCategory === "All" ||
                project.type === activeCategory
            )
            .map((project, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-zinc-950"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    lassName="h-[260px] sm:h-[420px] md:h-[600px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">

                  <div className="flex items-center justify-between mb-4">

                    <p className="text-orange-500 uppercase tracking-[4px] text-xs md:text-sm">
                      {project.category}
                    </p>

                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

                      <ArrowUpRight size={20} />

                    </div>

                  </div>

                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight mb-2 md:mb-4 group-hover:text-orange-500 transition duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-[13px] md:text-base leading-6 md:leading-relaxed mb-5 md:mb-8">
                    {project.description}
                  </p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-orange-500 px-5 md:px-6 py-3 rounded-full font-medium transition duration-300"
                  >
                    View Details
                  </button>

                </div>

              </motion.div>

            ))}

        </div>

      </section>

      {/* MODAL */}
      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[9999] flex items-center justify-center p-4 md:p-6"
          >

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-zinc-950 border border-white/10 rounded-[25px] md:rounded-[40px] overflow-y-auto max-h-[95vh] max-w-6xl w-full"
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 md:top-6 right-4 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-orange-500 transition duration-300 flex items-center justify-center"
              >

                <X size={22} />

              </button>

              <div className="grid lg:grid-cols-2 gap-0 max-h-[95vh] overflow-y-auto">

                {/* IMAGE */}
                <div className="overflow-hidden h-full">

                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-[220px] md:h-full w-full object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-10 lg:p-14 flex flex-col justify-center">

                  <p className="text-orange-500 uppercase tracking-[5px] mb-4 text-sm">
                    {selectedProject.category}
                  </p>

                  <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-wrap gap-6 mb-8 text-gray-400 text-sm md:text-base">

                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      {selectedProject.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      {selectedProject.year}
                    </div>

                  </div>

                  <p className="text-gray-300 leading-7 text-[14px] md:text-lg mb-8 md:mb-10">
                    {selectedProject.details}
                  </p>

                  <div className="flex gap-4 flex-wrap">

                    <a
                      href="https://wa.me/919016751570"
                      target="_blank"
                      className="bg-orange-500 hover:bg-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition duration-300"
                    >
                      Contact Now
                    </a>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="border border-white/10 hover:bg-white hover:text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition duration-300"
                    >
                      Close
                    </button>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}