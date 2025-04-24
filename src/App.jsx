import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import ProjectShowcase from "./components/ProjectShowcase";
import ProjectShowcaseMid from "./components/ProjectShowcaseMid";

function App() {
  return (
    <div className="bg-stone-50">
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
  );
}

export default App;
