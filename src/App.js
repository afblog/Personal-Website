import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import HomeSection from "./Components/HomeSection/HomeSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import SnowEffect from "./Components/SnowEffect/SnowEffect";
import Loader from "./Components/Loader/Loader";
import About from "./Components/About/About";
import MyProjects from "./Components/MyProjects/MyProjects";
import Modal from "./Components/Modal/Modal";
import ProjectContext from "./Contexts/ProjectContext";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [isShowLoader, setIsShowLoader] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowLoader(false);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        isLanguage,
        setIsLanguage,
        language,
        setLanguage,
        setIsShowModal,
      }}
    >
      <Header onOpen={setIsShowModal} />
      <main>
        <SnowEffect />
        <HomeSection />
        <SkillsSection />
        <About />
        <MyProjects />
        <Contact />
      </main>
      <Footer />
      {isShowLoader && <Loader />}
      {isShowModal && <Modal onClose={setIsShowModal} />}
      <ToastContainer />
    </ProjectContext.Provider>
  );
}
