import Contact from "../Contact";
import Features from "../Features";
import Footer from "../Footer";
import Hero from "../Hero";
import NavBar from "../utils/NavBar";

const LandingPage = () => {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
