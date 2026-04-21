import { motion } from "framer-motion";
import { Cloud, Sparkles } from "lucide-react";

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: Cloud,
    accent: "from-[hsl(35,95%,60%)] to-[hsl(15,95%,60%)]",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    icon: Sparkles,
    accent: "from-[hsl(var(--grad-violet))] to-[hsl(var(--grad-cyan))]",
  },
];

const Certifications = () => {
  return (
    <section id="certs" className="relative px-4 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">05 — Certifications</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Verified <span className="gradient-text">credentials</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 shadow-soft"
            >
              {/* Shimmer */}
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-500 group-hover:translate-x-full group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 30%, hsl(var(--foreground) / 0.08) 50%, transparent 70%)",
                  transition: "transform 1.2s ease, opacity 0.5s",
                }}
              />

              <div className="flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.accent} shadow-glow`}
                >
                  <cert.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {cert.year} · {cert.issuer}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-tight sm:text-xl">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Verified Credential
                </span>
                <div className="flex h-1.5 w-1.5 items-center justify-center">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
