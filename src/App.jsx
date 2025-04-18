import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ProjectShowcase from "./components/projectShowcase";

function App() {
  return (
    <div className="bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        {/* <ProjectShowcase id="project-1" order="01." /> */}
        {/* <ProjectShowcase id="project-1" order="02." /> */}
      </main>
    </div>
  );
}

export default App;
