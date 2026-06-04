import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = time.toLocaleTimeString("it-IT", {
    timeZone: "Europe/Rome",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const dateStr = time.toLocaleDateString("en-GB", {
    timeZone: "Europe/Rome",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/50">
        Milan, Italy
      </span>
      <span className="text-2xl font-mono tabular-nums text-muted-foreground">
        {timeStr}
      </span>
      <span className="text-xs font-mono text-muted-foreground/50">
        {dateStr}
      </span>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();

  const anim = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut", delay },
        };

  return (
    <section className="relative min-h-[calc(100dvh-3rem)] flex flex-col px-6 md:px-12 lg:px-16 pt-14 pb-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-1">

        <div className="flex-1 flex flex-col justify-center">
          <div>
            <div>
              <motion.span
                className="block font-brand text-2xl md:text-4xl font-light text-foreground leading-snug"
                {...anim(0)}
              >
                The Name's
              </motion.span>
              <motion.h1
                className="font-brand font-semibold leading-none tracking-tight text-foreground"
                style={{ fontSize: "clamp(4.5rem, 17vw, 13rem)", marginLeft: "-0.06em" }}
                {...anim(0.14)}
              >
                Shakib.
              </motion.h1>
            </div>

            <motion.p
              className="text-sm font-medium text-muted-foreground mt-4"
              {...anim(0.26)}
            >
              Interaction Designer — HMI &amp; Human-Robot Interaction
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground text-balance max-w-xl mt-6 leading-relaxed"
              {...anim(0.38)}
            >
              Five years at the seam between hardware and software — consumer electronics, companion apps, humanoid robots.<br />Now at Politecnico di Milano — MSc Digital & Interaction Design.
            </motion.p>
          </div>

        </div>

        {/* Clock — absolutely positioned to match section padding exactly */}
        <motion.div
          className="hidden lg:block absolute bottom-10 right-16 text-right"
          {...anim(0.5)}
        >
          <LiveClock />
        </motion.div>

        {/* Scroll button — bottom-left */}
        <motion.button
          className="flex flex-col items-start gap-1.5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-200 w-fit mt-8 lg:mt-4"
          aria-label="Scroll to work"
          onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
          {...anim(0.6)}
        >
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.button>

      </div>
    </section>
  );
}
