import Masthead from "./components/Masthead";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import PullQuote from "./components/PullQuote";
import Why from "./components/Why";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Colophon from "./components/Colophon";

export default function LegalOnePage() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Process />
        <PullQuote />
        <Why />
        <FAQ />
        <Contact />
      </main>
      <Colophon />
    </>
  );
}
