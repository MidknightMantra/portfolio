import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.live}
            className="card p-4 hover:scale-[1.01] transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={p.cover} alt={p.title} className="rounded-lg mb-4" />
            <h3 className="text-xl font-medium">{p.title}</h3>
            <p className="text-sm text-gray-400">{p.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
