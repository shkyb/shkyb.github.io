import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Reveal
 *
 * Wraps children with a fade-up entrance animation triggered when the
 * element enters the viewport. Respects prefers-reduced-motion.
 *
 * Props:
 * - delay?: number      // seconds, default 0
 * - className?: string  // forwarded to the wrapper div
 */
export function Reveal({ children, className, delay = 0 }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 20 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
