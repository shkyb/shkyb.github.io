import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const SHAKIB_ORANGE = "#F0690F"
const DARK_BG       = "#111113"

export default function NotFoundPage() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = "404 — Shakib Alipour"
    return () => { document.title = "Shakib Alipour — Interaction Designer" }
  }, [])

  return (
    <main
      className="relative min-h-[calc(100dvh-3rem)] flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: DARK_BG }}
    >
      {/* Ghost watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-serif font-bold leading-none text-white"
          style={{ fontSize: "clamp(14rem, 55vw, 46rem)", opacity: 0.03 }}
        >
          404
        </span>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Kicker */}
        <p className="font-mono text-xs tracking-[0.2em] text-white/30 mb-8">
          ERR · 404
        </p>

        {/* Code block */}
        <h1 className="font-mono font-medium text-2xl md:text-3xl leading-loose mb-8">
          <span className="text-white/30">{"{"}</span>
          <br />
          <span className="pl-6 md:pl-8">
            <span className="text-white/50">path</span>
            <span className="text-white/25">: </span>
            <span className="text-white/70 break-all">"{pathname}"</span>
            <span className="text-white/25">,</span>
          </span>
          <br />
          <span className="pl-6 md:pl-8">
            <span className="text-white/50">state</span>
            <span className="text-white/25">: </span>
            <ScrambleText text="undefined" delay={900} style={{ color: SHAKIB_ORANGE }} />
          </span>
          <br />
          <span className="text-white/30">{"}"}</span>
        </h1>

        {/* Human aside */}
        <p className="font-serif text-lg md:text-xl text-white/40 leading-relaxed italic mb-10">
          The interface doesn't know what to do here.
          Neither do I.
        </p>

        <WipeCTA to="/" label="Back to home →" />
      </motion.div>
    </main>
  )
}

const GLYPHS = "░▒▓█▐▌▄▀▪▲▼▶◀◆◇◉◈●○■□◐◑◒◓∂∑∫∞√∇∆∈∉⊕⊗⊂⊃≈≠≤≥±×÷→←↑↓↔↕⇒⇐⇑⇓⇄⇆⌐¬¦¨°─│┤├┼╬═║╗╔⌘⌥⎋§¶†‡¿¡ᚠᚡᚢᚣᚤᚥᚦᚧ⠿⠶⠦⠴⠲⠱"

function ScrambleText({ text, delay = 0, className, style }) {
  const [display, setDisplay] = useState(text)
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    let iteration = 0
    const steps = text.length * 4

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setDisplay(
          text.split("").map((char, i) =>
            i < Math.floor(iteration / 4)
              ? char
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          ).join("")
        )
        iteration++
        if (iteration > steps) {
          clearInterval(intervalRef.current)
          setDisplay(text)
        }
      }, 35)
    }, delay)

    return () => {
      clearTimeout(timeoutRef.current)
      clearInterval(intervalRef.current)
    }
  }, [text, delay])

  return <span className={className} style={style}>{display}</span>
}

function WipeCTA({ to, label }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-block font-mono text-lg md:text-xl px-2 py-1 -mx-2"
      style={{
        background:         `linear-gradient(to right, ${SHAKIB_ORANGE} 50%, transparent 50%)`,
        backgroundSize:     "200% 100%",
        backgroundPosition: hovered ? "left" : "right",
        transition:         "background-position 0.4s ease, color 0.4s ease",
        color:              hovered ? DARK_BG : SHAKIB_ORANGE,
      }}
    >
      {label}
    </Link>
  )
}
