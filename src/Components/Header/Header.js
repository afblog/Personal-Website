import React, { useContext, useEffect, useState } from "react";
import ProjectContext from "../../Contexts/ProjectContext";
import useLocal from "../../Hooks/useLocal";

export default function Header({ onOpen }) {
  const contextData = useContext(ProjectContext);
  const [value, setValue] = useLocal("language");

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

  const openModal = () => {
    onOpen(true);
  };

  return (
    <>
      <header
        className={`my-6 ${contextData.language === "EN" ? "ltr" : "rtl"}`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              {contextData.language === "EN" ? (
                <>
                  <img
                    className="w-10 h-10"
                    src="./image/svg/site-logo.svg"
                    alt="Site Logo"
                  />
                  <h5 className="font-SoraBold text-xl/6 tracking-tighter">
                    AFblog
                  </h5>
                </>
              ) : (
                <>
                  <h5 className="font-SoraBold text-xl/6 tracking-tighter">
                    AFblog
                  </h5>
                  <img
                    className="w-10 h-10"
                    src="./image/svg/site-logo.svg"
                    alt="Site Logo"
                  />
                </>
              )}
            </div>
            <div
              className={`hidden lg:flex items-center gap-x-8 ${
                contextData.language === "EN"
                  ? "child:font-SoraSemiBold tracking-tighter"
                  : "child:font-MorabbaBold"
              } text-xl/6 child-hover:text-neutral-700 child-hover:border-b child-hover:border-solid child-hover:border-neutral-700 transition-all`}
            >
              {contextData.language === "EN" ? (
                <>
                  <a href="#skills">Skills</a>
                  <a href="#about">About Me</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact Me</a>
                </>
              ) : (
                <>
                  <a href="#skills">مهارت ها</a>
                  <a href="#about">درباره من</a>
                  <a href="#projects">پروژه ها</a>
                  <a href="#contact">تماس با من</a>
                </>
              )}
            </div>
            <div className="hidden lg:flex items-center gap-x-5">
              {contextData.language === "EN" ? (
                <a
                  href="./pdf/MyResume-EN.pdf"
                  download="my-resume.pdf"
                  className="hidden lg:flex items-center gap-x-2 w-[153px] py-4 px-5 bg-black hover:bg-neutral-700 rounded"
                >
                  <span className="font-SoraSemiBold text-xl/6 text-white">
                    Resume
                  </span>
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
                  download="my-resume.pdf"
                  className="hidden lg:flex items-center justify-center gap-x-2 w-[153px] py-4 px-5 bg-black hover:bg-neutral-700 rounded"
                >
                  <span className="text-xl/6 font-DanaMedium text-white">
                    رزومه
                  </span>
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
              <div
                className="cursor-pointer bg-black text-white font-SoraRegular hover:bg-neutral-700 p-4 rounded"
                onClick={() => {
                  contextData.setIsLanguage((prev) => !prev);
                  if (contextData.isLanguage) {
                    setValue("EN");
                    contextData.setLanguage("EN");
                  } else {
                    setValue("FA");
                    contextData.setLanguage("FA");
                  }
                }}
              >
                {contextData.language === "EN" ? "FA" : "EN"}
              </div>
            </div>
            <div className="block lg:hidden" onClick={openModal}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" fill="white" />
                <path
                  d="M4.5 27V24H31.5V27H4.5ZM4.5 19.5V16.5H31.5V19.5H4.5ZM4.5 12V9H31.5V12H4.5Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
