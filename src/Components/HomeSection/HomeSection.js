import React, { useContext } from "react";
import ProjectContext from "../../Contexts/ProjectContext";

export default function HomeSection() {
  const contextData = useContext(ProjectContext);

  return (
    <section
      className={`py-10 md:py-[60px] ${
        contextData.language === "EN" ? "ltr" : "rtl"
      }`}
    >
      <div className="container">
        <div className="flex flex-col-reverse gap-y-12 xl:flex-row items-center justify-between">
          <div className="text-black text-2xl/7 md:text-5xl/[56px]">
            <p
              className={`${
                contextData.language === "EN"
                  ? "font-SoraRegular"
                  : "font-MorabbaBold"
              } text-nowrap tracking-tighter`}
            >
              {contextData.language === "EN" ? "Hello I’am" : "سلام من"}
              <span
                className={`${
                  contextData.language === "EN"
                    ? "font-SoraExtraBold tracking-tighter"
                    : "font-MorabbaBold"
                } `}
              >
                {contextData.language === "EN"
                  ? " Abolfazl Sadeghi"
                  : " ابوالفضل صادقی هستم"}
              </span>
            </p>
            <div className="flex items-center gap-x-4 my-5">
              <span
                className={`${
                  contextData.language === "EN"
                    ? "font-SoraExtraBold tracking-tighter"
                    : "font-MorabbaBold"
                }`}
              >
                {contextData.language === "EN"
                  ? " Frontend"
                  : "توسعه دهنده فرانت اند"}
              </span>
              {contextData.language === "EN" ? (
                <>
                  <img
                    className="hidden md:block"
                    src="./image/svg/developer-outline.svg"
                    alt="developer-outline"
                  />
                  <img
                    className="block md:hidden"
                    src="./image/svg/developer-outline-m.svg"
                    alt="developer-outline"
                  />
                </>
              ) : (
                ""
              )}
            </div>
            <p
              className={`${
                contextData.language === "EN"
                  ? "font-SoraRegular tracking-tighter"
                  : "font-MorabbaBold"
              }`}
            >
              {contextData.language === "EN" ? " Based In" : "از کشور"}
              <span
                className={`${
                  contextData.language === "EN"
                    ? "font-SoraExtraBold tracking-tighter"
                    : "font-MorabbaBold"
                }`}
              >
                {contextData.language === "EN" ? " Iran." : " ایران"}
              </span>
            </p>
            {contextData.language === "EN" ? (
              <p className="font-SoraRegular text-base/5 text-zinc-500 max-w-[600px] mt-8">
                I am Abolfazl Sadeghi, a web developer and designer. i I loved
                programming and coding since I was a child, but because of some
                I chose the experimental field for reasons and got a diploma in
                this field and started programming at the age of 19.
              </p>
            ) : (
              <p className="font-DanaMedium text-base/5 text-zinc-500 max-w-[600px] mt-8">
                من ابوالفضل صادقی هستم، توسعه دهنده و طراح وب. از کودکی عاشق
                برنامه نویسی و کدنویسی بودم، اما به خاطر برخی دلایل رشته تجربی
                را انتخاب کردم و در این رشته دیپلم گرفتم و در سن 19 سالگی برنامه
                نویسی را آغاز کردم...
              </p>
            )}
          </div>
          {contextData.language === "EN" ? (
            <img
              className="-translate-x-[27px] xl:-translate-x-60 2xl:-translate-x-0"
              src="./image/svg/home banner.svg"
              alt=""
            />
          ) : (
            <>
              <img
                className="hidden lg:block xl:translate-x-60 2xl:translate-x-0"
                src="./image/svg/home-banner-right.svg"
                alt=""
              />
              <img
                className="block lg:hidden"
                src="./image/svg/home banner.svg"
                alt=""
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
