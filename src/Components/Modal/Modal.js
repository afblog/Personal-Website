import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import ProjectContext from "../../Contexts/ProjectContext";
import useLocal from "../../Hooks/useLocal";

export default function Modal({ onClose }) {
  const contextData = useContext(ProjectContext);
  const [value, setValue] = useLocal("language");

  const closeModal = () => {
    onClose(false);
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      if (value === "FA") {
        contextData.setLanguage("FA");
        contextData.setIsLanguage(true);
      } else if (value === "EN") {
        contextData.setLanguage("EN");
      }
    });
  }, []);

  const changeLanguage = () => {
    contextData.setIsLanguage((prev) => !prev);
    if (contextData.isLanguage) {
      setValue("EN");
      contextData.setLanguage("EN");
    } else {
      setValue("FA");
      contextData.setLanguage("FA");
    }
    setTimeout(() => {
      closeModal();
    }, 0.1);
  };

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 ${
        contextData.language === "EN" ? "ltr" : "rtl"
      } block lg:hidden`}
    >
      <div
        className="absolute inset-0 bg-black/40 transition-all backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      <div
        className={` ${
          contextData.language === "EN" ? "overlay" : "overlay-right"
        } absolute w-64 h-full bg-white transition-all px-4`}
      >
        <div className="flex items-center justify-between pt-6 border-b border-solid border-gary/10 pb-3">
          {contextData.language === "EN" ? (
            <div className={`flex items-center gap-x-3`}>
              <img
                className="w-10 h-10"
                src="./image/svg/site-logo.svg"
                alt="Site Logo"
              />
              <h5 className="font-SoraBold text-xl/6 tracking-tighter">
                AFblog
              </h5>
            </div>
          ) : (
            <div className={`flex rtl items-center gap-x-3`}>
              <h5 className="font-SoraBold text-xl/6 tracking-tighter">
                AFblog
              </h5>
              <img
                className="w-10 h-10"
                src="./image/svg/site-logo.svg"
                alt="Site Logo"
              />
            </div>
          )}
          <div onClick={() => onClose(false)}>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {contextData.language === "EN" ? (
          <div className="flex flex-col justify-center gap-y-9 mt-9 child:font-SoraSemiBold text-lg tracking-tighter child-hover:text-neutral-700 transition-all">
            <a href="#skills" onClick={closeModal}>
              Skills
            </a>
            <a href="#about" onClick={closeModal}>
              About Me
            </a>
            <a href="#projects" onClick={closeModal}>
              Project
            </a>
            <a href="#contact" onClick={closeModal}>
              Contact Me
            </a>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-y-9 mt-9 child:font-MorabbaBold text-lg child-hover:text-neutral-700 transition-all">
            <a href="#skills" onClick={closeModal}>
              مهارت ها
            </a>
            <a href="#about" onClick={closeModal}>
              درباره من
            </a>
            <a href="#projects" onClick={closeModal}>
              پروژه ها
            </a>
            <a href="#contact" onClick={closeModal}>
              تماس با من
            </a>
          </div>
        )}
        {contextData.language === "EN" ? (
          <a
            href="./pdf/MyResume-EN.pdf"
            download='my-resume.pdf'
            className="inline-flex items-center gap-x-2 py-4 px-3 mt-9 bg-black hover:bg-neutral-700 rounded"
          >
            <span className="font-SoraLight text-lg/6 text-white">Resume</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : (
          <a
            href="./pdf/MyResume-FA.pdf"
            download='my-resume.pdf'
            className="inline-flex items-center gap-x-2 py-4 px-3 mt-9 bg-black hover:bg-neutral-700 rounded"
          >
            <span className="font-DanaMedium text-lg/6 text-white">رزومه</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
        {contextData.language === "EN" ? (
          <span
            className="cursor-pointer bg-black text-white font-SoraRegular hover:bg-neutral-700 py-[18px] px-[15px] rounded ml-3"
            onClick={changeLanguage}
          >
            FA
          </span>
        ) : (
          <span
            className="cursor-pointer bg-black text-white font-DanaMedium hover:bg-neutral-700 p-4 rounded mr-3"
            onClick={changeLanguage}
          >
            EN
          </span>
        )}
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
