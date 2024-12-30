import React, { useContext } from "react";
import ProjectContext from "../../Contexts/ProjectContext";

export default function About() {
  const contextData = useContext(ProjectContext);

  return (
    <section
      id="about"
      data-aos="fade-up"
      className={`py-10 ${
        contextData.language === "EN" ? "ltr" : "rtl"
      } md:py-[60px]`}
    >
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between lg:gap-x-20">
          {contextData.language === "EN" ? (
            <img
              className="w-[343px] md:w-[500px] lg:w-auto"
              src="./image/svg/about-banner.svg"
              alt="About Banner"
            />
          ) : (
            <img
              className="w-[343px] md:w-[500px] lg:w-auto"
              src="./image/svg/about-banner-right.svg"
              alt="About Banner"
            />
          )}
          <div className="mt-10 md:mt-0">
            {contextData.language === "EN" ? (
              <h4 className="font-SoraRegular text-5xl/[56px] tracking-tighter mb-10">
                About <span className="font-SoraSemiBold ml-4">Me</span>
              </h4>
            ) : (
              <h4 className="font-MorabbaMedium text-5xl/[56px] mb-10">
                درباره <span className="font-MorabbaBold ml-4"> من</span>
              </h4>
            )}

            <div
              className={`text-base/6 ${
                contextData.language === "EN"
                  ? "font-SoraRegular"
                  : "font-DanaMedium"
              } text-zinc-500 lg:h-[350px] child:max-w-[610px]`}
            >
              {contextData.language === "EN" ? (
                <>
                  <p className="mb-5">
                    I am a passionate and self-proclaimed web designer who
                    worked hard to achieve something that I have been passionate
                    about since childhood and I finally achieved what I wanted
                    and I am gaining experience in this field and I always
                    strive to be the best in this field. to be
                  </p>
                  <p>
                    I started my journey as a web developer in 2022 and since
                    then, I have continued to grow and evolve as a developer,
                    taking on new challenges and learning the latest
                    technologies along the way.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-5">
                    من یک طراح وب پرشور و خودخوانده هستم که سخت کار کردم تا به
                    چیزی که از کودکی به آن علاقه داشتم برسم و بلاخره به چیزی که
                    می خواستم رسیدم و در حال کسب تجربه در این زمینه هستم و همیشه
                    تلاش میکنم تا در این زمینه بهترین خودم باشم.
                  </p>
                  <p>
                    من سفر خود را به عنوان یک توسعه‌دهنده وب در سال ۲۰۲۲ آغاز
                    کردم و از آن زمان، به رشد و تکامل خود به عنوان یک
                    توسعه‌دهنده ادامه دادم و چالش‌های جدید را پذیرفتم و آخرین
                    فناوری‌ها را در این مسیر یاد گرفتم.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
