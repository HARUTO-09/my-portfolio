import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  stack: string[];
  accent: string;
}

const projects: Project[] = [
  {
    id: "parent-log",
    title: "Parent Log Book System",
    tagline: "School ↔ parent communication, reimagined",
    description:
      "A full-stack platform that streamlines daily communication between teachers and parents — homework, attendance, behavior notes, and analytics in one place.",
    bullets: [
      "Role-based dashboards for teachers, parents, and admins",
      "Real-time notifications and chat threads per student",
      "Attendance & behavior analytics with weekly digests",
      "Mobile-first, responsive UI with offline-friendly caching",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Socket.IO"],
    accent: "from-[hsl(var(--grad-violet))] to-[hsl(var(--grad-magenta))]",
  },
  {
    id: "ecom-analytics",
    title: "Real-Time E-Commerce Analytics",
    tagline: "Live storefront intelligence at scale",
    description:
      "A streaming analytics platform that ingests storefront events and visualizes KPIs — sales velocity, funnel drop-off, cohort behavior — in real time.",
    bullets: [
      "Event ingestion pipeline with sub-second latency",
      "Interactive dashboards: revenue, AOV, conversion, retention",
      "Cohort and funnel analyses with custom date ranges",
      "Alerting hooks for anomaly detection on key metrics",
    ],
    stack: ["Next.js", "Python", "FastAPI", "Kafka", "PostgreSQL", "Recharts"],
    accent: "from-[hsl(var(--grad-cyan))] to-[hsl(var(--grad-blue))]",
  },
  {
    id: "medical-ai",
    title: "AI Medical Image Analysis",
    tagline: "Deep learning for clinical imaging",
    description:
      "An end-to-end platform where clinicians upload medical scans and receive AI-assisted predictions with explainable heatmaps — built around production-grade CNNs.",
    bullets: [
      "Custom CNN ensemble fine-tuned on multi-modal scans",
      "Grad-CAM heatmaps for explainability and trust",
      "DICOM ingestion + secure clinician dashboard",
      "Containerized inference service with autoscaling",
    ],
    stack: ["PyTorch", "FastAPI", "React", "Docker", "AWS", "Postgres"],
    accent: "from-[hsl(var(--grad-magenta))] to-[hsl(var(--grad-cyan))]",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">02 — Projects</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A few recent builds across full-stack, real-time data, and applied AI.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isExpanded={expanded === project.id}
              onToggle={() => setExpanded(expanded === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateZ(0)`;
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      layout
      className={`relative ${isExpanded ? "md:col-span-3" : ""}`}
    >
      <div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="glass group relative h-full overflow-hidden rounded-3xl p-6 shadow-soft transition-shadow duration-300 hover:shadow-glow"
        style={{ transition: "transform 0.2s ease-out, box-shadow 0.3s" }}
      >
        {/* Gradient border glow on hover */}
        <div
          className={`pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${project.accent} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60`}
        />

        <div className="flex items-start justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} font-mono text-xs font-bold text-primary-foreground`}
          >
            0{index + 1}
          </div>
          <button
            onClick={onToggle}
            aria-label={isExpanded ? "Collapse" : "Expand"}
            className="rounded-full glass p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
            />
          </button>
        </div>

        <h3 className="mt-5 font-display text-xl font-bold leading-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{project.tagline}</p>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
          {project.description}
        </p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              {project.bullets.map((b, bi) => (
                <motion.li
                  key={bi}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: bi * 0.06 }}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech, ti) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + ti * 0.04 }}
              className="rounded-full border border-border/60 bg-muted/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <button
          onClick={onToggle}
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground"
        >
          {isExpanded ? "Show less" : "View details"}
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </motion.article>
  );
};

export default Projects;
