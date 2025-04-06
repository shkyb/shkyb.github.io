import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-stone-50">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
