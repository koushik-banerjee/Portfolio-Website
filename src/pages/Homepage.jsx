import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ToggleTheme from "../components/ToggleTheme.jsx";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";
import Certificate from "../components/sections/Certificate.jsx";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-zinc-100 p-6 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto rounded-2xl border border-white h-full border-x dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />

        <Hero />
        <Projects />
				<EducationAndExperience />
        <Certificate/>
        <Skills />
        <Contact />

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;