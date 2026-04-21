import { motion } from "framer-motion";
import { MapPin, Sparkles, Code2, Brain } from "lucide-react";
import ParticleField from "./ParticleField";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-28"
    >
      <ParticleField density={45} colorMode="violet" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">01 — About</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            A builder of <span className="gradient-text">intelligent systems</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Avatar / gradient orb card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <div className="glass relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl p-8 shadow-soft">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--grad-violet)), hsl(var(--grad-magenta)), hsl(var(--grad-cyan)), hsl(var(--grad-blue)), hsl(var(--grad-violet)))",
                  filter: "blur(40px)",
                  opacity: 0.6,
                }}
              />
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-rainbow shadow-glow">
                <span className="font-display text-6xl font-bold text-primary-foreground">SV</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass-strong px-4 py-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span className="font-mono text-xs">Hyderabad, IN</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  CSE · AI
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="glass space-y-5 rounded-3xl p-8 shadow-soft">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm <span className="text-foreground font-semibold">Sai Varun Mukunda</span>, a
                Computer Science (AI) undergrad at Amrita Vishwa Vidyapeetham pursuing a parallel
                Diploma in Data Science from <span className="text-foreground">IIT Madras</span>.
                I love building things that sit at the intersection of <em className="text-foreground not-italic">full-stack engineering</em> and{" "}
                <em className="text-foreground not-italic">applied machine learning</em>.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                From real-time analytics platforms to medical-image AI, I focus on
                production-grade systems — clean APIs, thoughtful UX, and models that actually
                ship.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                {[
                  { icon: Code2, label: "Full-Stack", desc: "MERN · Next" },
                  { icon: Brain, label: "ML / AI", desc: "BiLSTM · CNNs" },
                  { icon: Sparkles, label: "GenAI", desc: "LLMs · RAG" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="rounded-xl border border-border/60 bg-muted/40 p-3"
                  >
                    <item.icon className="h-4 w-4 text-accent" />
                    <p className="mt-2 text-sm font-semibold">{item.label}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
