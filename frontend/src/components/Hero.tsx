import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-indigo-400">MidknightMantra</span>
        <br />A Full-Stack Developer
      </motion.h1>

      <motion.p
        className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I design immersive web experiences, build high-performance APIs, and craft
        digital systems that feel alive.
      </motion.p>

      <div className="mt-10 flex justify-center gap-4">
        <a href="#projects" className="card px-6 py-3 text-sm hover:bg-white/10 transition">
          View Projects
        </a>
        <a href="#contact" className="card px-6 py-3 text-sm hover:bg-white/10 transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}
