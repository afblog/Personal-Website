import React, { useContext } from "react";
import ProjectContext from "../../Contexts/ProjectContext";

export default function Footer() {
  const contextData = useContext(ProjectContext);

  return (
    <footer
      className={`py-6 bg-black ${
        contextData.language === "EN" ? "ltr" : "rtl"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-x-20">
          <div className="flex items-center gap-x-3">
            <img
              className="w-10 h-[30px]"
              src="./image/png/AFblog 1.png"
              alt="Site Logo"
            />
            <h4 className="font-SoraBold text-xl/6 text-white tracking-tighter">
              AFblog
            </h4>
          </div>
          {contextData.language === "EN" ? (
            <div className="text-zinc-500 max-w-[150px] sm:max-w-full font-SoraSemiBold text-base/5 md:text-xs/4 text-wrap">
              All material and intellectual rights belong to Afblog website. ©
            </div>
          ) : (
            <div className="text-zinc-500 font-DanaDemiBold text-base/5 md:text-xs/4 text-wrap">
              کلیه حقوق مادی و معنوی متعلق به وب سایت ای‌اف بلاگ می باشد. ©
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
