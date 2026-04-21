import { motion } from "framer-motion";

/**
 * Animated gradient mesh background — slowly drifting blobs of color.
 * Sits as a fixed full-viewport layer behind all content.
 */
const GradientMesh = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* Static base mesh */}
      <div className="absolute inset-0 mesh-bg opacity-90" />

      {/* Drifting orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--grad-violet) / 0.45), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 100, -50, 0], y: [0, 80, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-20 right-0 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--grad-magenta) / 0.4), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, -120, 60, 0], y: [0, 100, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[42rem] w-[42rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--grad-cyan) / 0.35), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 140, -80, 0], y: [0, -90, 50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 h-[34rem] w-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--grad-blue) / 0.4), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, -100, 70, 0], y: [0, -70, 60, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grain / vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
    </div>
  );
};

export default GradientMesh;
