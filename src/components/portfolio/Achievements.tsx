import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, BookOpenCheck, Megaphone } from "lucide-react";

const Counter = ({ to, duration = 1.4 }: { to: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const animate = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{val.toLocaleString()}</span>;
};

const achievements = [
  {
    icon: Trophy,
    title: "AI for Impact Hackathon",
    metric: "Top 10",
    sub: "of 1,200+ teams",
    desc: "Recognized among the top finalists for an applied AI solution tackling a real-world social impact challenge.",
    accent: "from-[hsl(45,95%,60%)] to-[hsl(15,95%,60%)]",
  },
  {
    icon: BookOpenCheck,
    title: "Springer Publication",
    metric: "1",
    sub: "research paper",
    desc: "Co-authored a paper on Attention-Based BiLSTM models for sequence learning, published in a Springer proceedings.",
    accent: "from-[hsl(var(--grad-violet))] to-[hsl(var(--grad-magenta))]",
  },
  {
    icon: Megaphone,
    title: "Student Council",
    metric: "PR",
    sub: "& Outreach Lead",
    desc: "Led PR & outreach initiatives — driving event visibility, partnerships, and student engagement at scale.",
    accent: "from-[hsl(var(--grad-cyan))] to-[hsl(var(--grad-blue))]",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">06 — Achievements</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Wins worth <span className="gradient-text">mentioning</span>
          </h2>
        </motion.div>

        {/* Headline stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto mb-10 flex max-w-2xl flex-wrap items-baseline justify-center gap-x-3 gap-y-1 rounded-3xl px-6 py-6 text-center shadow-soft"
        >
          <span className="font-display text-5xl font-bold gradient-text sm:text-6xl">
            Top <Counter to={10} />
          </span>
          <span className="font-display text-2xl font-semibold text-muted-foreground sm:text-3xl">
            of <Counter to={1200} />+ teams
          </span>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-3xl p-6 shadow-soft"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${a.accent} shadow-glow`}
              >
                <a.icon className="h-5 w-5 text-primary-foreground" />
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold gradient-text">{a.metric}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {a.sub}
                </span>
              </div>

              <h3 className="mt-3 font-display text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
