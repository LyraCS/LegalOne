import Masthead from "./components/Masthead";
import Hero from "./components/Hero";
import IntroStats from "./components/IntroStats";
import About from "./components/About";
import Pendirian from "./components/Pendirian";
import NotarisPPAT from "./components/NotarisPPAT";
import Perizinan from "./components/Perizinan";
import JasaHukum from "./components/JasaHukum";
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
        <IntroStats />
        <About />
        <Pendirian />
        <NotarisPPAT />
        <Perizinan />
        <JasaHukum />
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
