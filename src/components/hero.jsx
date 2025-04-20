import CTA from "./cta";
import { HiArrowLongDown } from "react-icons/hi2";

// Hero.jsx
export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-14">
        <h1 className="text-4xl md:text-6xl text-stone-900 mb-6">
          The Name’s <strong>Shakib</strong>
        </h1>
        <h2 className="text-xl md:text-2xl text-stone-700">
          Interaction & Industrial Designer<br />building thoughtful experiences across digital and physical worlds.
          </h2>
        <p className="pt-6 text-lg md:text-xl text-stone-600 max-w-2xl mb-10">
        From smart hardware to mobile apps, I design seamless experiences where humans meet machines. My work lives at the intersection of thoughtful form, clear function, and real-world use.
        </p>
        <CTA text="Scroll to Explore" icon={<HiArrowLongDown />} link={"#showcase"}/>
      </section>
    );
  }
  