import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const items = [
  {
    school: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech — Computer Science & Engineering (AI)",
    period: "2023 — 2027",
    detail: "GPA 7.72 · Specialization in Artificial Intelligence",
    location: "Coimbatore, IN",
  },
  {
    school: "IIT Madras",
    degree: "Diploma in Data Science & Programming",
    period: "Ongoing",
    detail: "Foundational + Diploma level — statistics, ML, systems",
    location: "Chennai, IN (Remote)",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">04 — Education</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Where I <span className="gradient-text">study</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical gradient line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(var(--grad-violet))] via-[hsl(var(--grad-magenta))] to-[hsl(var(--grad-cyan))] sm:left-1/2"
          />

          <ul className="space-y-10">
            {items.map((item, i) => (
              <motion.li
                key={item.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative pl-14 sm:flex ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} sm:pl-0`}
              >
                {/* Node */}
                <div className="absolute left-0 top-2 sm:left-1/2 sm:-translate-x-1/2">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-rainbow shadow-glow"
                  >
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Card */}
                <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="glass rounded-2xl p-5 shadow-soft">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {item.period} · {item.location}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">{item.school}</h3>
                    <p className="mt-1 text-sm text-foreground/90">{item.degree}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
