import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import ProjectShowcaseMid from "./components/ProjectShowcaseMid";
import VerticalLines from "./components/VerticalLines";

function App() {
  return (
    <div className="relative bg-stone-50 scroll-smooth">
      {/* Background vertical lines */}
      <VerticalLines />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <div id="showcase">
            <ProjectShowcaseMid id="D-Heart" order="01." />
            <ProjectShowcaseMid id="Nathan" order="02." />
            <ProjectShowcaseMid id="ITA" order="03." />
            <ProjectShowcaseMid id="Mazhan" order="04." />
            <ProjectShowcaseMid id="Asemoun" order="05." />
            <ProjectShowcaseMid id="Raven" order="06." />
            <ProjectShowcaseMid id="Surena" order="07." />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
