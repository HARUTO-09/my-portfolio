import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleField from "./ParticleField";

const skillData = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  Frameworks: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Tailwind"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  Cloud: ["AWS", "Oracle Cloud", "Docker", "GitHub Actions"],
  Tools: ["Git", "Postman", "Figma", "Linux", "VS Code"],
  "Core Concepts": ["Machine Learning", "Deep Learning", "GenAI / LLMs", "DSA", "OOP", "REST APIs"],
};

type Category = keyof typeof skillData;
const categories = ["All", ...Object.keys(skillData)] as const;

const Skills = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const tiles = (filter === "All"
    ? Object.entries(skillData).flatMap(([cat, skills]) =>
        skills.map((s) => ({ cat: cat as Category, skill: s })),
      )
    : skillData[filter as Category].map((s) => ({ cat: filter as Category, skill: s }))
  );

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-28">
      <ParticleField density={40} colorMode="cyan" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">03 — Skills</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            The <span className="gradient-text">toolbox</span>
          </h2>
        </motion.div>

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === cat
                  ? "bg-gradient-rainbow text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {tiles.map(({ cat, skill }, i) => (
              <motion.div
                key={`${cat}-${skill}`}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="glass group relative cursor-default overflow-hidden rounded-2xl p-4 text-center"
              >
                <div className="absolute inset-0 bg-gradient-rainbow opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                <p className="relative text-sm font-semibold">{skill}</p>
                <p className="relative font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {cat}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
