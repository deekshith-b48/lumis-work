"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";

function EcosystemCard({
  label,
  className,
  children,
  x,
  y,
  factor,
  delay,
  reduce,
}: {
  label: string;
  className: string;
  children: React.ReactNode;
  x: MotionValue<number>;
  y: MotionValue<number>;
  factor: number;
  delay: number;
  reduce: boolean | null;
}) {
  const dx = useTransform(x, (v) => v * factor);
  const dy = useTransform(y, (v) => v * (factor * 0.7));
  return (
    <motion.article
      style={{ x: dx, y: dy }}
      initial={false}
      animate={
        reduce
          ? { opacity: 1 }
          : {
              opacity: 1,
              scale: 1,
              y: [0, -7, 0],
            }
      }
      transition={{
        opacity: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        y: {
          duration: 5.4 + factor,
          delay: delay + 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.04, zIndex: 8 }}
      className={`absolute rounded-xl border border-white/70 bg-white/80 p-1.5 shadow-[0_12px_28px_rgba(91,111,255,0.14)] backdrop-blur-md sm:rounded-2xl sm:p-3 ${className}`}
    >
      <p className="mb-1 text-[7px] uppercase tracking-[0.14em] text-accent sm:mb-2 sm:text-[10px] sm:tracking-[0.16em]">
        {label}
      </p>
      {children}
    </motion.article>
  );
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const glowX = useTransform(sx, [-40, 40], ["32%", "68%"]);
  const glowY = useTransform(sy, [-40, 40], ["28%", "62%"]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 28);
        my.set(((e.clientY - rect.top) / rect.height - 0.5) * 28);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative aspect-square w-[7.25rem] shrink-0 overflow-hidden rounded-[16px] border border-white/80 bg-gradient-to-br from-white via-[#eef1ff] to-[#f3e9ff] shadow-[0_12px_32px_rgba(91,111,255,0.1)] sm:w-[9.5rem] sm:rounded-[20px] lg:w-full lg:max-w-none lg:rounded-[28px]"
    >
      <motion.div
        className="absolute size-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,111,255,0.22),rgba(34,197,192,0.1),transparent_70%)] blur-2xl sm:size-[280px]"
        style={{ left: glowX, top: glowY }}
      />
      <EcosystemCard
        label="Website"
        className="left-[8%] top-[8%] w-[58%]"
        x={sx}
        y={sy}
        factor={0.4}
        delay={0.25}
        reduce={reduce}
      >
        <div className="space-y-1 sm:space-y-2">
          <div className="h-1 w-8 rounded-full bg-accent/30 sm:h-2 sm:w-24" />
          <div className="h-1 w-12 rounded-full bg-fg/10 sm:h-1.5 sm:w-40" />
          <div className="mt-1.5 grid grid-cols-3 gap-1 sm:mt-4 sm:gap-2">
            <div className="h-5 rounded-md bg-accent-soft sm:h-16 sm:rounded-lg" />
            <div className="h-5 rounded-md bg-[#e8fbf9] sm:h-16 sm:rounded-lg" />
            <div className="h-5 rounded-md bg-[#f3e9ff] sm:h-16 sm:rounded-lg" />
          </div>
        </div>
      </EcosystemCard>
      <EcosystemCard
        label="Ecommerce"
        className="right-[4%] top-[18%] w-[42%]"
        x={sx}
        y={sy}
        factor={0.55}
        delay={0.35}
        reduce={reduce}
      >
        <div className="grid grid-cols-2 gap-2">
          {["#ece8ff", "#e8fbf9", "#ffe8f2", "#fff4d6"].map((color) => (
            <div
              key={color}
              className="aspect-square rounded-lg"
              style={{ background: color }}
            />
          ))}
        </div>
      </EcosystemCard>
      <EcosystemCard
        label="Analytics"
        className="bottom-[18%] left-[6%] w-[46%]"
        x={sx}
        y={sy}
        factor={0.7}
        delay={0.45}
        reduce={reduce}
      >
        <div className="flex h-6 items-end gap-0.5 sm:h-16 sm:gap-1.5">
          {[40, 62, 48, 78, 55, 88, 70].map((h, i) => (
            <motion.div
              key={h}
              className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-violet-400/40 to-cyan-400/70"
              initial={reduce ? false : { scaleY: 0.35 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7 + i * 0.06,
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 2.4,
              }}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </EcosystemCard>
      <EcosystemCard
        label="Mobile"
        className="bottom-[10%] right-[10%] w-[34%]"
        x={sx}
        y={sy}
        factor={0.85}
        delay={0.5}
        reduce={reduce}
      >
        <div className="space-y-1 sm:space-y-2">
          <div className="h-2.5 rounded-full bg-fg/8 sm:h-8" />
          <div className="h-2.5 rounded-full bg-accent-soft sm:h-8" />
          <div className="h-2.5 rounded-full bg-accent/20 sm:h-8" />
        </div>
      </EcosystemCard>
      <EcosystemCard
        label="AI"
        className="top-[42%] left-[38%] w-[36%]"
        x={sx}
        y={sy}
        factor={0.5}
        delay={0.4}
        reduce={reduce}
      >
        <div className="space-y-1 sm:space-y-2">
          <div className="ml-auto h-2.5 w-3/4 rounded-xl bg-accent-soft sm:h-6 sm:rounded-2xl" />
          <div className="h-2.5 w-2/3 rounded-xl bg-[#e8fbf9] sm:h-6 sm:rounded-2xl" />
        </div>
      </EcosystemCard>
    </motion.div>
  );
}
