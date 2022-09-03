import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero/hero";
import Mint from "./components/Mint";
import QuantumSoul from "./components/QuantumSouls";
import VideoGallery from "./components/VideoGalary";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "./components/FAQ";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App relative">
      <div className="font-ibm flex gap-6 fixed bottom-0 text-sm md:text-base text-white z-50">
        <a href="https://discord.gg/invite/qntmverse" className="underline">Discord</a> /
        <a href = "https://twitter.com/qntmverse" className="underline">Twitter</a>
      </div>

      <Hero />
      <QuantumSoul />
      <About />
      <VideoGallery />
      {/* <Mint /> */}
      <FAQ />
    </div>
  );
}

export default App;
