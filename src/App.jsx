import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import Workprocess from "./sections/Workprocess";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CaseStudyPage from "./components/CaseStudyPage";

const MainLayout = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // show if the screen is at top
      if (currentScrollY === 0) {
        setShowNavbar(true);
      }
      // hide when scrolling down
      else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        //show when scrolling up
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div
        className={`
          fixed bottom-4 left-1/2 -translate-x-1/2 box-border rounded-full z-40
          transition-transform duration-300
          ${showNavbar ? "translate-y-0" : "translate-y-40"}
        `}
      >
        <Navbar />
      </div>

      <Hero />
      <Projects />
      <Workprocess />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

// ScrollToTop component to reset page scroll on route transition
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/mobile" element={<MainLayout />} />
        <Route path="/web" element={<MainLayout />} />
        <Route path="/design" element={<MainLayout />} />
        <Route path="/hrms" element={<CaseStudyPage slug="hrms" />} />
        <Route path="/safetrack" element={<CaseStudyPage slug="safetrack" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
