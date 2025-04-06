import { RiBehanceFill } from "react-icons/ri";

// Hero.jsx
export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl text-stone-900 mb-6">
          The Name’s <strong>Shakib</strong>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-xl mb-10">
          I’m a multidisciplinary designer with 5+ years of experience in Industrial Design and UI/UX. I blend physical and digital to craft meaningful, human-centered solutions.
        </p>
        <a href="https://behance.net/shakib-alipour" target="_blank" className="text-stone-800 p-4 m-10 text-lg gap-2 tracking-wide flex hover:text-red-500 border-2 rounded-full">
        {<RiBehanceFill size={24} />}
        View my portfolio
        </a>
        <p className="text-stone-500">🧭 Site’s out exploring new design horizons. Stay tuned for its return! 🪃</p>
      </section>
    );
  }
  