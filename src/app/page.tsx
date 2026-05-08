"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import CountUp from "react-countup";


import {
  Building2,
  Hammer,
  Phone,
  ArrowRight,
  Menu,
  X,
  House,
  PencilRuler,
  Sofa,
  Briefcase,
  Compass,
  ImageIcon,
  MessageCircle,
  Mail,
  PhoneCall,
  Camera,
  
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_59m5u3t",
        "template_qoa8sph",
        e.target,
        "U0QTuQraVWv3dV5o0"
      )
      .then(
        () => {
          alert("Message Sent Successfully 🔥");
        },
        () => {
          alert("Failed to send message ❌");
        }
      );

    e.target.reset();
  };

  const [position, setPosition] = useState({
  x: 0,
  y: 0,
});

useEffect(() => {
  const mouseMove = (e: MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", mouseMove);

  return () => {
    window.removeEventListener("mousemove", mouseMove);
  };
}, []);
  return (
    <>
    <motion.div
  animate={{
    x: position.x - 12,
    y: position.y - 12,
  }}
  transition={{
    type: "spring",
    stiffness: 500,
    damping: 28,
  }}
  className="fixed top-0 left-0 w-6 h-6 rounded-full bg-orange-500 pointer-events-none z-[99999] mix-blend-difference"
/>
  {loading ? (

    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-center"
      >

      <div className="flex flex-col items-center justify-center">

  <img
    src="/logo.png"
    alt="Mirani Architecture"
    className="w-[250px] md:w-[320px] object-contain"
  />

  <p className="text-orange-500 text-center text-[13px] md:text-sm mt-2 font-medium">
    Architecture • Interior • 3D Visualizer
  </p>

</div>
      </motion.div>

    </div>

  ) : (
    <main className="relative bg-black text-white overflow-hidden scroll-smooth">
      {/* BACKGROUND GLOWS */}

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full"></div>

<div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-orange-400/10 blur-[120px] rounded-full"></div>

<div className="absolute bottom-0 left-[30%] w-[450px] h-[450px] bg-orange-600/10 blur-[120px] rounded-full"></div>

      {/* NAVBAR */}
<nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

  <div className="max-w-7xl mx-auto px-6 h-[90px] flex items-center justify-between">
    {/* LOGO */}
<div className="flex items-center">

 <img
  src="/logo.png"
  alt="Mirani Architecture"
  className="w-[240px] md:w-[320px] object-contain scale-105"
/>
</div>

    {/* DESKTOP MENU */}
    <div className="hidden md:flex gap-8 text-sm font-medium">

      <a href="#home" className="hover:text-orange-500 transition">
        Home
      </a>

      <a href="#services" className="hover:text-orange-500 transition">
        Services
      </a>

      <a href="/projects" className="hover:text-orange-500 transition">
        Projects
      </a>

      <a href="#contact" className="hover:text-orange-500 transition">
        Contact
      </a>

    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={30} /> : <Menu size={30} />}
    </button>

  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-lg">

      <a href="#home" onClick={() => setMenuOpen(false)}>
        Home
      </a>

      <a href="#services" onClick={() => setMenuOpen(false)}>
        Services
      </a>

      <a href="/projects" onClick={() => setMenuOpen(false)}>
        Projects
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>

    </div>
  )}

</nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >

          <p className="text-orange-500 uppercase tracking-[8px] mb-6 text-sm md:text-base">
  Architecture • Interior • 3D Visualizer
</p>

<h1 className="text-5xl md:text-8xl font-bold leading-tight">
  Designing Spaces
  <span className="text-orange-500"> That Inspire</span>
</h1>

<p className="mt-8 text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
  Modern architecture, luxury interiors, 2D planning,
  3D elevation design, and turnkey project solutions
  crafted with creativity and precision.
</p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

            <a
              href="/projects"
              className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition duration-300 shadow-2xl"
            >
              Our Projects
              <ArrowRight size={22} />
            </a>

            <a
              href="#contact"
              className="border border-white/30 backdrop-blur-md hover:bg-white hover:text-black px-10 py-5 rounded-full font-semibold text-lg transition duration-300"
            >
              Contact Us
            </a>

          </div>

        </motion.div>

      </section>

      {/* ABOUT SECTION */}
<section className="py-28 px-6 bg-black">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >

      <p className="text-orange-500 uppercase tracking-[5px] mb-4">
        About Us
      </p>

      <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Designing Modern
Architectural Experiences
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed mb-8">
       We specialize in modern architecture, 2D planning,
3D elevation design, interior concepts, and turnkey
project solutions. Every project is designed with
creativity, precision, and attention to detail to
transform ideas into stunning real-world spaces.
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition">
        Learn More
      </button>

    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-2 gap-6"
    >

      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center">
        <h3 className="text-5xl font-bold text-orange-500 mb-4">
          <CountUp end={10} duration={3} />+
        </h3>

        <p className="text-gray-400">
          Projects Completed
        </p>
      </div>

      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center">
        <h3 className="text-5xl font-bold text-orange-500 mb-4">
          <CountUp end={5} duration={3} />+
        </h3>

        <p className="text-gray-400">
          Years Experience
        </p>
      </div>

      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center">
        <h3 className="text-5xl font-bold text-orange-500 mb-4">
          <CountUp end={100} duration={3} />%
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
<motion.section
  id="services"
  className="py-28 px-6 bg-zinc-950"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-orange-500 uppercase tracking-[5px] mb-4">
        Our Services
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        What We Provide
      </h2>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
        Professional architecture, planning, visualization,
        interior design, and construction solutions tailored
        for modern lifestyle projects.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* SERVICE 1 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition duration-500"
      >

        <PencilRuler className="text-orange-500 mb-6" size={40} />

        <h3 className="text-2xl font-semibold mb-4">
          2D Planning
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Smart architectural floor planning with functional layouts and modern concepts.
        </p>

      </motion.div>

      {/* SERVICE 2 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition duration-500"
      >

        <Compass className="text-orange-500 mb-6" size={40} />

        <h3 className="text-2xl font-semibold mb-4">
          3D Elevation Design
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Realistic modern elevation and exterior visualization with premium detailing.
        </p>

      </motion.div>

      {/* SERVICE 3 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition duration-500"
      >

        <Sofa className="text-orange-500 mb-6" size={40} />

        <h3 className="text-2xl font-semibold mb-4">
          Interior Design
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Luxury interior concepts designed for comfort, elegance, and modern living.
        </p>

      </motion.div>

      {/* SERVICE 4 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition duration-500"
      >

        <Briefcase className="text-orange-500 mb-6" size={40} />

        <h3 className="text-2xl font-semibold mb-4">
          Turnkey Projects
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Complete project solutions from planning and design to execution and finishing.
        </p>

      </motion.div>

      {/* SERVICE 5 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition duration-500"
      >

        <House className="text-orange-500 mb-6" size={40} />

        <h3 className="text-2xl font-semibold mb-4">
          House Construction
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Modern residential construction with quality workmanship and stylish execution.
        </p>

      </motion.div>

      {/* SERVICE 6 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition duration-500"
      >

        <Compass className="text-orange-500 mb-6" size={40} />

        <h3 className="text-2xl font-semibold mb-4">
          Architecture Consultation
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Professional guidance and planning support for smart and modern construction projects.
        </p>

      </motion.div>

    </div>

  </div>

</motion.section>
{/* PROJECT GALLERY */}
<motion.section
  id="projects"
  className="py-32 px-6 bg-black relative overflow-hidden"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* HEADING */}
    <div className="text-center mb-20">

      <p className="text-orange-500 uppercase tracking-[6px] mb-4">
        Our Portfolio
      </p>

      <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        Project
        <span className="text-orange-500"> Gallery</span>
      </h2>

      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Explore our modern architecture, luxury interiors,
        bungalow elevations, and premium visualization projects.
      </p>

    </div>

    {/* GALLERY GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* PROJECT 1 */}
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4 }}
        className="group relative overflow-hidden rounded-[35px]"
      >

        <img
          src="/projects/project1.png"
          alt="Project 1"
          className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm mb-2">
            Luxury Villa
          </p>

          <h3 className="text-3xl font-bold mb-3">
            Modern Elevation Design
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Elegant exterior elevation with premium materials and modern architectural styling.
          </p>

        </div>

      </motion.div>

      {/* PROJECT 2 */}
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4 }}
        className="group relative overflow-hidden rounded-[35px]"
      >

        <img
          src="/projects/project2.png"
          alt="Project 2"
          className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm mb-2">
            Bungalow Concept
          </p>

          <h3 className="text-3xl font-bold mb-3">
            Contemporary Architecture
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Stylish bungalow concept with luxury facade and elegant design language.
          </p>

        </div>

      </motion.div>

      {/* PROJECT 3 */}
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4 }}
        className="group relative overflow-hidden rounded-[35px]"
      >

        <img
          src="/projects/project3.png"
          alt="Project 3"
          className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm mb-2">
            Interior Design
          </p>

          <h3 className="text-3xl font-bold mb-3">
            Premium Interior Concept
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Modern luxury interior visualization with elegant space planning.
          </p>

        </div>

      </motion.div>

      {/* PROJECT 4 */}
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4 }}
        className="group relative overflow-hidden rounded-[35px]"
      >

        <img
          src="/projects/project4.png"
          alt="Project 4"
          className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm mb-2">
            Residence Design
          </p>

          <h3 className="text-3xl font-bold mb-3">
            Luxury Home Planning
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Smart residential planning with modern layouts and premium aesthetics.
          </p>

        </div>

      </motion.div>

      {/* PROJECT 5 */}
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4 }}
        className="group relative overflow-hidden rounded-[35px]"
      >

        <img
          src="/projects/project5.png"
          alt="Project 5"
          className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm mb-2">
            3D Visualization
          </p>

          <h3 className="text-3xl font-bold mb-3">
            Exterior Visualization
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Realistic modern exterior rendering with cinematic architectural presentation.
          </p>

        </div>

      </motion.div>

      {/* PROJECT 6 */}
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4 }}
        className="group relative overflow-hidden rounded-[35px]"
      >

        <img
          src="/projects/project6.png"
          alt="Project 6"
          className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm mb-2">
            Turnkey Project
          </p>

          <h3 className="text-3xl font-bold mb-3">
            Complete Architecture Solution
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Full modern architecture and construction solution with premium execution.
          </p>

        </div>

      </motion.div>

    </div>

  </div>

</motion.section>
{/* CONTACT */}
<motion.section
  id="contact"
  className="py-28 px-6 bg-zinc-950"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >

          <p className="text-orange-500 uppercase tracking-[5px] mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>

          <p className="text-gray-400 mb-10">
            Contact us today to discuss your dream construction project.
          </p>

          <form
            onSubmit={sendEmail}
            className="grid gap-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-black border border-white/10 rounded-2xl px-6 py-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-black border border-white/10 rounded-2xl px-6 py-4 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="bg-black border border-white/10 rounded-2xl px-6 py-4 outline-none"
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </motion.div>

      </motion.section>
      {/* WHY CHOOSE US */}
<motion.section
  className="py-28 px-6 bg-black"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-orange-500 uppercase tracking-[5px] mb-4">
        Why Choose Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Why Choose Mirani Architecture
      </h2>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
        We combine creativity, modern architecture,
        and premium quality execution to deliver
        stylish and functional spaces tailored for
        modern living.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center"
      >

        <PencilRuler className="text-orange-500 mx-auto mb-6" size={45} />

        <h3 className="text-2xl font-semibold mb-4">
          Modern Design
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Creative and modern architectural concepts
          designed with elegance and functionality.
        </p>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center"
      >

        <Building2 className="text-orange-500 mx-auto mb-6" size={45} />

        <h3 className="text-2xl font-semibold mb-4">
          Premium Quality
        </h3>

        <p className="text-gray-400 leading-relaxed">
          High-quality materials, detailing,
          and professional project execution.
        </p>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center"
      >

        <Hammer className="text-orange-500 mx-auto mb-6" size={45} />

        <h3 className="text-2xl font-semibold mb-4">
          Smart Execution
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Smooth workflow from planning and
          visualization to final execution.
        </p>

      </motion.div>

      {/* CARD 4 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center"
      >

        <Briefcase className="text-orange-500 mx-auto mb-6" size={45} />

        <h3 className="text-2xl font-semibold mb-4">
          Turnkey Solutions
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Complete architecture, interior,
          and construction solutions under one roof.
        </p>

      </motion.div>

    </div>

  </div>

</motion.section>
{/* WORK PROCESS */}
<motion.section
  className="py-28 px-6 bg-zinc-950"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <p className="text-orange-500 uppercase tracking-[5px] mb-4">
        Work Process
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        How We Work
      </h2>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
        We follow a professional step-by-step process
        to deliver modern, functional, and premium
        architectural solutions.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {/* STEP 1 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="relative bg-black border border-white/10 rounded-3xl p-10 text-center"
      >

        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-xl font-bold">
          1
        </div>

        <PencilRuler className="text-orange-500 mx-auto mb-6 mt-6" size={45} />

        <h3 className="text-2xl font-semibold mb-4">
          Planning
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Understanding requirements, layouts,
          and project vision carefully.
        </p>

      </motion.div>

      {/* STEP 2 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="relative bg-black border border-white/10 rounded-3xl p-10 text-center"
      >

        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-xl font-bold">
          2
        </div>

        <Compass className="text-orange-500 mx-auto mb-6 mt-6" size={45} />

        <h3 className="text-2xl font-semibold mb-4">
          Design
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Creating elegant and modern architectural
          concepts with premium aesthetics.
        </p>

      </motion.div>

      {/* STEP 3 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="relative bg-black border border-white/10 rounded-3xl p-10 text-center"
      >

        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-xl font-bold">
          3
        </div>

        <Building2 className="text-orange-500 mx-auto mb-6 mt-6" size={45} />

        <h3 className="text-2xl font-semibold mb-4">
          Visualization
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Realistic 3D elevation and interior
          visualization before execution.
        </p>

      </motion.div>

      {/* STEP 4 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="relative bg-black border border-white/10 rounded-3xl p-10 text-center"
      >

        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-xl font-bold">
          4
        </div>

        <Hammer className="text-orange-500 mx-auto mb-6 mt-6" size={45} />

        <h3 className="text-2xl font-semibold mb-4">
          Execution
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Smooth project execution with
          attention to quality and detailing.
        </p>

      </motion.div>

    </div>

  </div>

</motion.section>
{/* STATS SECTION */}
<motion.section
  className="py-24 px-6 bg-black"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-4 gap-8 text-center">

      {/* STAT 1 */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10">

        <h2 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
          <CountUp end={50} duration={3} />+
        </h2>

        <p className="text-gray-400 text-lg">
          Design Concepts
        </p>

      </div>

      {/* STAT 2 */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10">

        <h2 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
          <CountUp end={25} duration={3} />+
        </h2>

        <p className="text-gray-400 text-lg">
          Happy Clients
        </p>

      </div>

      {/* STAT 3 */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10">

        <h2 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
          <CountUp end={10} duration={3} />+
        </h2>

        <p className="text-gray-400 text-lg">
          Completed Projects
        </p>

      </div>

      {/* STAT 4 */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10">

        <h2 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
          <CountUp end={5} duration={3} />+
        </h2>

        <p className="text-gray-400 text-lg">
          Years Experience
        </p>

      </div>

    </div>

  </div>

</motion.section>
{/* LUXURY BANNER */}
<motion.section
  className="relative py-40 px-6 bg-cover bg-center"
  style={{
    backgroundImage: "url('/projects/project2.png')",
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/75"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">

    <p className="text-orange-500 uppercase tracking-[6px] mb-6">
      Modern Architecture
    </p>

    <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
      Creating Luxury Spaces
      <span className="text-orange-500"> With Modern Vision</span>
    </h2>

    <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
      From architectural planning and 3D visualization
      to premium interior and turnkey solutions,
      we design spaces that reflect elegance,
      creativity, and modern lifestyle.
    </p>

    <a
      href="#contact"
      className="inline-block bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-semibold text-lg transition duration-300 shadow-2xl"
    >
      Start Your Project
    </a>

  </div>

</motion.section>
      {/* TESTIMONIALS */}
<motion.section
  id="services"
  className="py-28 px-6 bg-zinc-950"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-orange-500 uppercase tracking-[5px] mb-4">
        Testimonials
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        What Our Clients Say
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-10"
      >

        <div className="flex text-orange-500 text-2xl mb-6">
          ★★★★★
        </div>

        <p className="text-gray-400 leading-relaxed mb-8">
          Amazing construction quality and modern design.
          Highly professional team and excellent finishing.
        </p>

        <div>
          <h3 className="text-xl font-semibold">
            Rahul Patel
          </h3>

          <p className="text-gray-500 text-sm">
            Home Owner
          </p>
        </div>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-10"
      >

        <div className="flex text-orange-500 text-2xl mb-6">
          ★★★★★
        </div>

        <p className="text-gray-400 leading-relaxed mb-8">
          They transformed our old property into a luxury modern villa.
          Truly impressed with the work.
        </p>

        <div>
          <h3 className="text-xl font-semibold">
            Ayesha Khan
          </h3>

          <p className="text-gray-500 text-sm">
            Villa Owner
          </p>
        </div>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-10"
      >

        <div className="flex text-orange-500 text-2xl mb-6">
          ★★★★★
        </div>

        <p className="text-gray-400 leading-relaxed mb-8">
          Smooth experience from planning to execution.
          Excellent support and premium quality work.
        </p>

        <div>
          <h3 className="text-xl font-semibold">
            Arjun Mehta
          </h3>

          <p className="text-gray-500 text-sm">
            Business Owner
          </p>
        </div>

      </motion.div>

    </div>

  </div>

</motion.section>
{/* MAP SECTION */}
<motion.section
  id="services"
  className="py-28 px-6 bg-zinc-950"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-orange-500 uppercase tracking-[5px] mb-4">
        Our Location
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Visit Our Office
      </h2>

    </div>

    <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

      <iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d230.001603044115!2d72.43790648202646!3d22.72728803243265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshai%20avenue%20complex%20dholka!5e0!3m2!1sen!2sin!4v1778143385743!5m2!1sen!2sin"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

    </div>

  </div>

</motion.section>
{/* CTA SECTION */}
<motion.section
  className="py-32 px-6 bg-zinc-950"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto text-center bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/20 rounded-[40px] p-16 backdrop-blur-xl">

    <p className="text-orange-500 uppercase tracking-[6px] mb-6">
      Let’s Build Something Amazing
    </p>

    <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
      Ready To Design
      <span className="text-orange-500"> Your Dream Space?</span>
    </h2>

    <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
      Contact Mirani Architecture for modern architecture,
      luxury interiors, 3D visualization, and premium
      turnkey project solutions tailored to your vision.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-6">

      <a
        href="#contact"
        className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-semibold text-lg transition duration-300 shadow-2xl"
      >
        Start Your Project
      </a>

      <a
        href="https://wa.me/919016751570"
        target="_blank"
        className="border border-white/20 hover:bg-white hover:text-black px-10 py-5 rounded-full font-semibold text-lg transition duration-300"
      >
        WhatsApp Us
      </a>

    </div>

  </div>

</motion.section>
{/* SOCIAL BAR */}
<motion.section
  className="py-12 px-6 bg-black border-t border-white/10 border-b border-white/10"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">

    {/* INSTAGRAM */}
    <a
      href="https://instagram.com/mirani_architecture"
      target="_blank"
      className="flex items-center gap-3 bg-zinc-900 hover:bg-orange-500 px-8 py-4 rounded-full transition duration-300"
    >

      <ImageIcon size={22} />

      <span className="font-medium">
        Instagram
      </span>

    </a>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/919016751570"
      target="_blank"
      className="flex items-center gap-3 bg-zinc-900 hover:bg-orange-500 px-8 py-4 rounded-full transition duration-300"
    >

      <MessageCircle size={22} />

      <span className="font-medium">
        WhatsApp
      </span>

    </a>

    {/* EMAIL */}
    <a
      href="mailto:ghanchigufran@gmail.com"
      className="flex items-center gap-3 bg-zinc-900 hover:bg-orange-500 px-8 py-4 rounded-full transition duration-300"
    >

      <Mail size={22} />

      <span className="font-medium">
        Email
      </span>

    </a>

    {/* CALL */}
    <a
      href="tel:+919016751570"
      className="flex items-center gap-3 bg-zinc-900 hover:bg-orange-500 px-8 py-4 rounded-full transition duration-300"
    >

      <PhoneCall size={22} />

      <span className="font-medium">
        Call Now
      </span>

    </a>

  </div>

</motion.section>

      {/* FOOTER */}
<footer className="bg-black border-t border-white/10 py-20 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-14">

    {/* BRAND */}
    <div>

      <img
        src="/logo.png"
        alt="Mirani Architecture"
        className="w-[220px] object-contain mb-6"
      />

      <p className="text-gray-400 leading-relaxed">
        Modern architecture, luxury interiors,
        3D visualization, and turnkey project
        solutions crafted with creativity and precision.
      </p>

    </div>

    {/* QUICK LINKS */}
    <div>

      <h3 className="text-2xl font-semibold mb-6">
        Quick Links
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#services" className="hover:text-orange-500 transition">
            Services
          </a>
        </li>

        <li>
          <a href="/projects" className="hover:text-orange-500 transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </li>

      </ul>

    </div>

    {/* SERVICES */}
    <div>

      <h3 className="text-2xl font-semibold mb-6">
        Services
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>2D Planning</li>
        <li>3D Elevation Design</li>
        <li>Interior Design</li>
        <li>Turnkey Projects</li>
        <li>House Construction</li>

      </ul>

    </div>

    {/* CONTACT */}
    <div>

      <h3 className="text-2xl font-semibold mb-6">
        Contact Info
      </h3>

      <ul className="space-y-4 text-gray-400 leading-relaxed">

        <li>
          📞 +91 9016751570
        </li>

        <li>
          📧 ghanchigufran@gmail.com
        </li>

        <li>
          📍 Shop No. 207, First Floor Sai Avenue,
          Shopping Centre, Nr. Bus Stand Road,
          Dholka - 382225
        </li>

        <li>
          📸 Instagram: @mirani_architecture
        </li>

      </ul>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">

    © 2026 Mirani Architecture & 3D Visualizer.
    All Rights Reserved.

  </div>

</footer>

      {/* FLOATING CONTACT BAR */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

  {/* CALL */}
  <a
    href="tel:+919016751570"
    className="bg-orange-500 hover:bg-orange-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition duration-300"
  >
    <PhoneCall size={24} />
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/919016751570"
    target="_blank"
    className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition duration-300"
  >
    <MessageCircle size={24} />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/mirani_architecture"
    target="_blank"
    className="bg-pink-500 hover:bg-pink-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition duration-300"
  >
    <Camera size={24} />
  </a>

</div>
        WhatsApp
    

   </main>
    )}
    </>
  );
}