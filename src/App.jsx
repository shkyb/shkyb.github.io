import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ProjectShowcase from "./components/projectShowcase";

function App() {
  return (
    <div className="bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <div id="showcase">
          <ProjectShowcase id="Mazhan" order="01." />
        </div>
      </main>
    </div>
  );
}

export default App;
