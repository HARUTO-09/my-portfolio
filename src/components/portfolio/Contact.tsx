import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import ParticleField from "./ParticleField";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "saivarunmukunda@gmail.com",
    href: "mailto:saivarunmukunda@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/sai-varun-mukundu/",
    href: "https://www.linkedin.com/in/sai-varun-mukundu/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@HARUTO-09",
    href: "https://github.com/HARUTO-09",
  },
];

const marqueeSkills = [
  "React", "TypeScript", "Python", "Machine Learning", "FastAPI", "AWS",
  "Oracle GenAI", "PyTorch", "Next.js", "PostgreSQL", "Docker", "Tailwind",
];

const MagneticLink = ({ link }: { link: typeof links[number] }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      ref={ref}
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="magnetic glass group relative flex items-center justify-between gap-4 rounded-2xl p-5 shadow-soft transition-shadow hover:shadow-glow"
      style={{ transition: "transform 0.25s ease-out, box-shadow 0.3s" }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-rainbow shadow-glow">
          <link.icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {link.label}
          </p>
          <p className="text-sm font-semibold sm:text-base">{link.value}</p>
        </div>
      </div>
      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-28">
      <ParticleField density={50} colorMode="rainbow" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          07 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-7xl"
        >
          Let's build <span className="gradient-text">something</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-muted-foreground"
        >
          I'm open to internships, collaborations, and conversations about AI, full-stack systems,
          or just nerdy side projects. My inbox is the fastest way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-12 grid max-w-2xl gap-3 text-left"
        >
          {links.map((link) => (
            <MagneticLink key={link.label} link={link} />
          ))}
        </motion.div>
      </div>

      {/* Marquee footer */}
      <div className="relative mt-24 overflow-hidden border-t border-border/50 py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span
              key={i}
              className="mx-6 font-display text-3xl font-bold text-muted-foreground/40 sm:text-5xl"
            >
              {s} <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-8 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Sai Varun Mukunda · Built with React + Framer Motion
        </p>
      </div>
    </section>
  );
};

export default Contact;
