import { motion, useReducedMotion } from "framer-motion";

const credentials = [
  { label: "Award", value: "IDA Bronze 2023" },
  { label: "Exhibition", value: "Milan Design Week '25" },
  { label: "Published", value: "Journal of Design Thinking" },
  { label: "Thesis", value: "Agentic AI in Long-Haul Trucks" },
];

export default function CredentialStrip() {
  const reduced = useReducedMotion();

  return (
    <div className="border-y border-border px-6 md:px-12 lg:px-16 py-5">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-0 gap-y-5 lg:gap-y-0"
        initial={reduced ? {} : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {credentials.map((c, i) => (
          <div
            key={c.label}
            className={`flex flex-col gap-1 lg:pl-8 lg:border-l lg:border-border/50 ${i === 0 ? "lg:pl-0 lg:border-l-0" : ""}`}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground/50">
              {c.label}
            </span>
            <span className="text-xs font-mono text-foreground">
              {c.value}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
