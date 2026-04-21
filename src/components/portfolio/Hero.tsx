import { motion } from "framer-motion";
import { ChevronDown, Award, Cloud, BookOpen } from "lucide-react";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

const name = "Sai Varun Mukunda";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          AVAILABLE FOR OPPORTUNITIES · BASED IN HYDERABAD
        </motion.div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          {name.split(" ").map((word, wi) => (
            <span key={wi} className="mr-3 inline-block whitespace-nowrap">
              {word.split("").map((ch, ci) => (
                <motion.span
                  key={ci}
                  initial={{ opacity: 0, y: 60, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.2 + (wi * 6 + ci) * 0.04,
                    type: "spring",
                    damping: 14,
                    stiffness: 120,
                  }}
                  className={`inline-block ${wi === 1 ? "gradient-text" : ""}`}
                  style={{ transformOrigin: "50% 100%" }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Computer Science (AI) student crafting full-stack & ML systems —{" "}
          <span className="text-foreground">Amrita Vishwa Vidyapeetham</span> ·{" "}
          <span className="text-foreground">IIT Madras</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Cloud, label: "AWS Certified" },
            { icon: Award, label: "Oracle GenAI 2025" },
            { icon: BookOpen, label: "Springer Author" },
          ].map((chip, i) => (
            <motion.div
              key={chip.label}
              whileHover={{ y: -3, scale: 1.05 }}
              className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm"
            >
              <chip.icon className="h-3.5 w-3.5 text-accent" />
              <span className="font-mono text-xs uppercase tracking-wider">{chip.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="magnetic group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-rainbow px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 -z-0 bg-gradient-rainbow opacity-0 blur-xl transition-opacity group-hover:opacity-70" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="magnetic glass inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-105"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce-slow" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
