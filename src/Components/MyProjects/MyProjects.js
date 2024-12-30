import React, { useContext } from "react";
import ProjectContext from "../../Contexts/ProjectContext";

export default function MyProjects() {
  const contextData = useContext(ProjectContext);

  return (
    <>
      <section
        id="projects"
        className={`py-10 md:py-[60px] ${
          contextData.language === "EN" ? "ltr" : "rtl"
        } bg-black text-white`}
      >
        <div className="container">
          {contextData.language === "EN" ? (
            <h2 className="font-SoraRegular text-2xl/7 md:text-5xl/[56px] tracking-tighter text-center mb-10">
              My <span className="font-SoraExtraBold">Projects</span>
            </h2>
          ) : (
            <h2 className="font-MorabbaBold text-2xl/7 md:text-5xl/[56px] text-center mb-10">
              پروژه های <span className="font-DanaMedium">من</span>
            </h2>
          )}
          <div className="flex flex-col gap-y-7 md:gap-y-20">
            <div
              data-aos="fade-up"
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-5 xl:gap-x-24"
            >
              <img className="hidden lg:block" src="./image/svg/project-img-3.svg" alt="" />
              <img className="block lg:hidden mb-7" src="./image/svg/project-img-3-mobail.svg" alt="" />
              {contextData.language === "EN" ? (
                <div>
                  <h4 className="font-SoraExtraBold text-2xl/7 md:text-5xl/[56px] tracking-tighter">
                    01
                  </h4>
                  <h2 className="font-SoraExtraBold text-xl/6 md:font-SoraBold md:text-4xl/[44px] py-7">
                    Developing ...
                  </h2>
                  <p className="font-SoraRegular text-base/6 xl:h-24 text-zinc-500 mb-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, sapiente repellendus. Aliquid fugit pariatur labore
                    quidem voluptas. Natus magni est, vitae dolorum maxime
                    repellat beatae architecto, illum cum alias dolores.
                  </p>
                  <a href="#" className="group inline-block">
                    <svg
                      className="w-5 h-5 group-hover:fill-neutral-600 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              ) : (
                <div>
                  <h4 className="font-MorabbaMedium text-2xl/7 md:text-5xl/[56px]">
                    ۰۱
                  </h4>
                  <h2 className="font-MorabbaMedium text-xl/6 md:font-MorabbaBold md:text-4xl/[44px] py-7">
                    در حال توسعه ...
                  </h2>
                  <p className="font-DanaMedium text-base/6 xl:h-24 text-zinc-500 mb-7">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه شامل
                    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                  <a href="#" className="group inline-block">
                    <svg
                      className="w-5 h-5 group-hover:fill-neutral-600 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div
              data-aos="fade-up"
              className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:gap-x-5 xl:gap-x-24"
            >
              {contextData.language === "EN" ? (
                <div>
                  <h4 className="font-SoraExtraBold text-2xl/7 md:text-5xl/[56px] tracking-tighter">
                    02
                  </h4>
                  <h2 className="font-SoraExtraBold text-xl/6 md:font-SoraBold md:text-4xl/[44px] py-7">
                    Developing ...
                  </h2>
                  <p className="font-SoraRegular text-base/6 xl:h-24 text-zinc-500 mb-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, sapiente repellendus. Aliquid fugit pariatur labore
                    quidem voluptas. Natus magni est, vitae dolorum maxime
                    repellat beatae architecto, illum cum alias dolores.
                  </p>
                  <a href="#" className="group inline-block">
                    <svg
                      className="w-5 h-5 group-hover:fill-neutral-600 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              ) : (
                <div>
                  <h4 className="font-MorabbaMedium text-2xl/7 md:text-5xl/[56px]">
                    ۰۲
                  </h4>
                  <h2 className="font-MorabbaMedium text-xl/6 md:font-MorabbaBold md:text-4xl/[44px] py-7">
                    در حال توسعه ...
                  </h2>
                  <p className="font-DanaMedium text-base/6 xl:h-24 text-zinc-500 mb-7">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه شامل
                    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                  <a href="#" className="group inline-block">
                    <svg
                      className="w-5 h-5 group-hover:fill-neutral-600 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              )}
              <img className="hidden lg:block" src="./image/svg/project-img-2.svg" alt="" />
              <img className="block lg:hidden mb-7" src="./image/svg/project-img-2-mobail.svg" alt="" />
            </div>
            
            <div
              data-aos="fade-up"
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-5 xl:gap-x-24"
            >
              <img className="hidden lg:block" src="./image/svg/project-img-1.svg" alt="" />
              <img className="block lg:hidden mb-7" src="./image/svg/project-img-1-mobail.svg" alt="" />
              {contextData.language === "EN" ? (
                <div>
                  <h4 className="font-SoraExtraBold text-2xl/7 md:text-5xl/[56px] tracking-tighter">
                    02
                  </h4>
                  <h2 className="font-SoraExtraBold text-xl/6 md:font-SoraBold md:text-4xl/[44px] py-7">
                    Developing ...
                  </h2>
                  <p className="font-SoraRegular text-base/6 xl:h-24 text-zinc-500 mb-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, sapiente repellendus. Aliquid fugit pariatur labore
                    quidem voluptas. Natus magni est, vitae dolorum maxime
                    repellat beatae architecto, illum cum alias dolores.
                  </p>
                  <a href="#" className="group inline-block">
                    <svg
                      className="w-5 h-5 group-hover:fill-neutral-600 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              ) : (
                <div>
                  <h4 className="font-MorabbaMedium text-2xl/7 md:text-5xl/[56px]">
                    ۰۳
                  </h4>
                  <h2 className="font-MorabbaMedium text-xl/6 md:font-MorabbaBold md:text-4xl/[44px] py-7">
                    در حال توسعه ...
                  </h2>
                  <p className="font-DanaMedium text-base/6 xl:h-24 text-zinc-500 mb-7">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه شامل
                    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                  <a href="#" className="group inline-block">
                    <svg
                      className="w-5 h-5 group-hover:fill-neutral-600 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
