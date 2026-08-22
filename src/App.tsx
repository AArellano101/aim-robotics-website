import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WhatWeDo from "./sections/WhatWeDo";
import Engineering from "./sections/Engineering";
import SubTeams from "./sections/SubTeams";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <WhatWeDo />
        <Engineering />
        <SubTeams />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
