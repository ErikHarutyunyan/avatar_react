import React from "react";
import { useTranslation } from "react-i18next";

// Scroll
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

// Image
import AvatarGirl from "../assets/img/avatar_girl_2.jpg";
import AvatarAccount from "../assets/img/avatar-account.png";
import TabImg1 from "../assets/img/tab-img.png";
import AvatarUnion from "../assets/img/union.png";
import { useState } from "react";
import { Contact } from "../components/Contact/Contact";
import { Plans } from "../components/Plans/Plans";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  const [tabs, setTabs] = useState("1");
  const [videoLang, setVideoLang] = useState(null);
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <>
      <section className="relative overflow-hidden  py-5vh my-b xl:py-10vh 2xl:py-15vh">
        <div className="container relative xl:max-w-screen-xl">
          <div className="flex-row-reverse xl:flex xl:items-center sectionOne-img">
            <div className="py-5vh lg:py-0" x-show="video === 'pl'">
              <img
                src={AvatarGirl}
                alt="AvatarGirl"
                className="relative -z-10 lg:scale-100 xl:scale-150"
              />
              <div className="relative text-center lg:-top-5vh xl:top-0 ">
                <Link
                  to="#"
                  className="button relative button inline-flex px-8 py-2 lg:px-16 lg:py-3 rounded-full text-white font-bold lg:text-base text-sm  shadow-md  hover:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                  {videoLang === null || videoLang === "pl"
                    ? "Odtwórz wideo"
                    : "Play Video"}
                </Link>
              </div>
            </div>
            {/* <div className="py-5vh lg:py-0" x-show="video === 'en'">
              <img
                src={AvatarGirl}
                alt="AvatarGirl"
                className="relative scale-150 -z-10 lg:scale-100 xl:scale-150"
              />
              <div className="relative text-center lg:-top-5vh xl:top-0">
                <Link to="#" className="button">
                  Play video
                </a>
              </div>
            </div> */}
            {/* <div className="py-5vh lg:py-0" x-show="video === 'de'">
              <img
                src="assets/uploads/temp/avatar_girl_2.jpg"
                alt=""
                className="relative scale-150 -z-10 lg:scale-100 xl:scale-150"
              />
              <div className="relative text-center lg:-top-5vh xl:top-0" />
              <Link to="#" className="button">
                Video abspielen
              </a>
            </div> */}
            {/* <div className="py-5vh lg:py-0" x-show="video === 'es'">
            <img
              src="assets/uploads/temp/avatar_girl_2.jpg"
              alt=""
              className="relative scale-150 -z-10 lg:scale-100 xl:scale-150"
            />
            <div className="relative text-center lg:-top-5vh xl:top-0">
              <Link to="#" className="button">
                Reproduce el video
              </a>
            </div>
          </div> */}
            <div className="max-w-31 mx-auto space-y-8 text-center xl:text-left sectionOne-txt">
              <h2 className="text-5xl font-medium text-black  xl:text-7xl">
                {t("sectionHeroTitle")}
              </h2>
              <p>{t("sectionHeroSub")}</p>
            </div>
          </div>
          <div className="absolute right-4 top-16 md:right-8 xl:right-0">
            <div className="inline-flex flex-col p-2 space-y-2 bg-white rounded-full shadow-lg">
              <button
                className={`px-3 text-lg  transition-colors border-2 border-transparent rounded-full ${
                  videoLang === null || videoLang === "pl"
                    ? "border-green-500 text-green-500"
                    : null
                }`}
                // onClick={() => changeLanguage("pi")}
                onClick={() => setVideoLang("pl")}>
                PI
              </button>
              <button
                // onClick={() => changeLanguage("en")}
                onClick={() => setVideoLang("en")}
                className={`px-3 text-lg  transition-colors border-2 border-transparent rounded-full ${
                  videoLang === "en" ? "border-green-500 text-green-500" : null
                }`}>
                En
              </button>
              <button
                // onClick={() => changeLanguage("de")}
                className="px-3 text-lg  transition-colors border-2 border-transparent rounded-full">
                De
              </button>
              <button
                // onClick={() => changeLanguage("es")}
                className="px-3 text-lg  transition-colors border-2 border-transparent rounded-full">
                Es
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center my-5vh my-tvh">
        <AnchorLink
          href="#how"
          className="border-2 inline-flex px-2 py-3.5 rounded-full text-green-400 border-green-400 hover:cursor-pointer group ">
          <svg
            className="w-4 h-4 text-current group-hover:animate-bounce-small"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </AnchorLink>
      </div>
      <section className="py-5vh scroll-m-10vh" id="how">
        <div className="container xl:max-w-screen-xl">
          <h2 className="mx-8 text-3xl text-center xl:mx-16 lg:text-4xl xl:text-5xl">
            {t("sectionOrdersGeneralTitle")}
          </h2>

          <div className="relative grid gap-8 mt-5vh md:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:mt-10vh">
            <div className="-my-10 md:col-span-2 xl:col-span-1 xl:row-span-3 xl:col-start-2 xl:row-start-1 xl:flex xl:place-items-center">
              <img
                src={AvatarAccount}
                alt=""
                className="w-[400px] mx-auto xl:scale-150"
              />
            </div>
            <div className="space-y-2 xl:col-start-1 xl:text-right">
              <p className="text-3xl font-semibold text-green-500">01</p>
              <h3 className="text-2xl">{t("sectionOrders1Title")}</h3>
              <p className="lg:text-lg">{t("sectionOrders1Text")}</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-green-500">02</p>
              <h3 className="text-2xl">{t("sectionOrders2Title")}</h3>
              <p className="lg:text-lg">{t("sectionOrders2Text")}</p>
            </div>
            <div className="space-y-2 xl:text-right">
              <p className="text-3xl font-semibold text-green-500">03</p>
              <h3 className="text-2xl">{t("sectionOrders3Title")}</h3>
              <p className="lg:text-lg">{t("sectionOrders3Text")}</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-green-500">04</p>
              <h3 className="text-2xl">{t("sectionOrders4Title")} </h3>
              <p className="lg:text-lg">{t("sectionOrders4Text")}</p>
            </div>
            <div className="space-y-2 xl:text-right">
              <p className="text-3xl font-semibold text-green-500">05</p>
              <h3 className="text-2xl">{t("sectionOrders5Title")}</h3>
              <p className="lg:text-lg">{t("sectionOrders5Text")}</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-green-500">06</p>
              <h3 className="text-2xl">{t("sectionOrders6Title")}</h3>
              <p className="lg:text-lg">{t("sectionOrders6Text")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5vh md:py-10vh scroll-m-10vh">
        <div className="container xl:max-w-screen-xl">
          <header>
            <h2 className="text-3xl text-center lg:text-4xl">
              {t("sectionServiceGeneralTitle")}
            </h2>
          </header>
          <div className="tabs">
            <div className="flex justify-center gap-5 py-5vh">
              <button className="text-center" onClick={() => setTabs("1")}>
                <span
                  className={`px-4 py-2 text-lg font-semibold rounded-full outline-2 outline-green-500 md:hidden outline text-green-500 ${
                    tabs === "1" ? "outline text-green-500" : "text-gray-500"
                  }`}
                  // :className="isActive(0) ? 'outline text-green-500': 'text-gray-500'"
                >
                  01
                </span>
                <div className=" hidden space-y-4 md:block">
                  <svg
                    className="mx-auto text-green-500 w-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span
                    className={`inline-block px-10 py-2 font-medium rounded-full outline-2 outline-green-500 ${
                      tabs === "1" ? "text-green-500" : "text-gray-500"
                    }`}>
                    01
                  </span>
                </div>
              </button>
              <button className="text-center" onClick={() => setTabs("2")}>
                <span
                  className={`px-4 py-2 text-lg font-semibold rounded-full outline-2 outline-green-500 md:hidden outline text-green-500 ${
                    tabs === "2" ? "outline text-green-500" : "text-gray-500"
                  }`}
                  // :className="isActive(0) ? 'outline text-green-500': 'text-gray-500'"
                >
                  02
                </span>
                <div className=" hidden space-y-4 md:block">
                  <svg
                    className="mx-auto text-green-500 w-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span
                    className={`inline-block px-10 py-2 font-medium rounded-full outline-2 outline-green-500 text-blue-500 ${
                      tabs === "2" ? "text-green-500" : "text-gray-500"
                    }`}>
                    02
                  </span>
                </div>
              </button>
              <button
                className="text-center"
                onClick={() => setTabs("3")}
                // role="tab" @click="setActive(0)"
              >
                <span
                  className={`px-4 py-2 text-lg font-semibold rounded-full outline-2 outline-green-500 md:hidden outline text-green-500 ${
                    tabs === "3" ? "outline text-green-500" : "text-gray-500"
                  }`}
                  // :className="isActive(0) ? 'outline text-green-500': 'text-gray-500'"
                >
                  03
                </span>
                <div className=" hidden space-y-4 md:block">
                  <svg
                    className="mx-auto text-green-500 w-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span
                    className={`inline-block px-10 py-2 font-medium rounded-full outline-2 outline-green-500 text-blue-500 ${
                      tabs === "3" ? "text-green-500" : "text-gray-500"
                    }`}
                    // :className="isActive(0) ? 'text-green-500': 'text-blue-500'"
                  >
                    03
                  </span>
                </div>
              </button>
              <button
                className="text-center"
                onClick={() => setTabs("4")}
                // role="tab" @click="setActive(0)"
              >
                <span
                  className={`px-4 py-2 text-lg font-semibold rounded-full outline-2 outline-green-500 md:hidden outline text-green-500 ${
                    tabs === "4" ? "outline text-green-500" : "text-gray-500"
                  }`}
                  // :className="isActive(0) ? 'outline text-green-500': 'text-gray-500'"
                >
                  04
                </span>
                <div className=" hidden space-y-4 md:block">
                  <svg
                    className="mx-auto text-green-500 w-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span
                    className={`inline-block px-10 py-2 font-medium rounded-full outline-2 outline-green-500 text-blue-500 ${
                      tabs === "4" ? "text-green-500" : "text-gray-500"
                    }`}>
                    04
                  </span>
                </div>
              </button>
              <button
                className="text-center"
                onClick={() => setTabs("5")}
                // role="tab" @click="setActive(0)"
              >
                <span
                  className={`px-4 py-2 text-lg font-semibold rounded-full outline-2 outline-green-500 md:hidden outline text-green-500 ${
                    tabs === "5" ? "outline text-green-500" : "text-gray-500"
                  }`}
                  // :className="isActive(0) ? 'outline text-green-500': 'text-gray-500'"
                >
                  05
                </span>
                <div className=" hidden space-y-4 md:block">
                  <svg
                    className="mx-auto text-green-500 w-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span
                    className={`inline-block px-10 py-2 font-medium rounded-full outline-2 outline-green-500 text-blue-500 ${
                      tabs === "5" ? "text-green-500" : "text-gray-500"
                    }`}>
                    05
                  </span>
                </div>
              </button>
            </div>
            <div className="py-5vh relative">
              <div className={`${tabs === "1" ? "hiddenn show" : "hiddenn"}`}>
                <div className="grid lg:grid-cols-12 place-items-center">
                  <div className="relative space-y-5 -top-5 lg:col-start-1 lg:row-start-1 lg:col-span-5">
                    <p className="text-4xl font-semibold text-green-500 xl:text-5xl">
                      01
                    </p>
                    <p className="text-5xl  xl:text-7xl">
                      {t("sectionService1Title")}
                    </p>
                    <p>{t("sectionService1Text")}</p>
                  </div>
                  <picture className="row-start-1 lg:col-start-5 lg:col-span-8">
                    <img src={TabImg1} alt="TabImg1" />
                  </picture>
                </div>
              </div>
              <div className={`${tabs === "2" ? "hiddenn show" : "hiddenn"}`}>
                <div className="grid lg:grid-cols-12 place-items-center">
                  <div className="relative space-y-5 -top-5 lg:col-start-1 lg:row-start-1 lg:col-span-5">
                    <p className="text-4xl font-semibold text-green-500 xl:text-5xl">
                      02
                    </p>
                    <p className="text-5xl font-semibold xl:text-7xl">
                      {t("sectionService2Title")}
                    </p>
                    <p>{t("sectionService2Text")}</p>
                  </div>
                  <picture className="row-start-1 lg:col-start-5 lg:col-span-8">
                    <img src={TabImg1} alt="TabImg1" />
                  </picture>
                </div>
              </div>
              <div className={`${tabs === "3" ? "hiddenn show" : "hiddenn"}`}>
                <div className="grid lg:grid-cols-12 place-items-center">
                  <div className="relative space-y-5 -top-5 lg:col-start-1 lg:row-start-1 lg:col-span-5">
                    <p className="text-4xl font-semibold text-green-500 xl:text-5xl">
                      03
                    </p>
                    <p className="text-5xl font-semibold xl:text-7xl">
                      {t("sectionService3Title")}
                    </p>
                    <p>{t("sectionService3Text")}</p>
                  </div>
                  <picture className="row-start-1 lg:col-start-5 lg:col-span-8">
                    <img src={TabImg1} alt="TabImg1" />
                  </picture>
                </div>
              </div>
              <div className={`${tabs === "4" ? "hiddenn show" : "hiddenn"}`}>
                <div className="grid lg:grid-cols-12 place-items-center">
                  <div className="relative space-y-5 -top-5 lg:col-start-1 lg:row-start-1 lg:col-span-5">
                    <p className="text-4xl font-semibold text-green-500 xl:text-5xl">
                      04
                    </p>
                    <p className="text-5xl font-semibold xl:text-7xl">
                      {t("sectionService4Title")}
                    </p>
                    <p>{t("sectionService4Text")}</p>
                  </div>
                  <picture className="row-start-1 lg:col-start-5 lg:col-span-8">
                    <img src={TabImg1} alt="TabImg1" />
                  </picture>
                </div>
              </div>
              <div className={`${tabs === "5" ? "hiddenn show" : "hiddenn"}`}>
                <div className="grid lg:grid-cols-12 place-items-center">
                  <div className="relative space-y-5 -top-5 lg:col-start-1 lg:row-start-1 lg:col-span-5">
                    <p className="text-4xl font-semibold text-green-500 xl:text-5xl">
                      05
                    </p>
                    <p className="text-5xl font-semibold xl:text-7xl">
                      {t("sectionService5Title")}
                    </p>
                    <p>{t("sectionService5Text")}</p>
                  </div>
                  <picture className="row-start-1 lg:col-start-5 lg:col-span-8">
                    <img src={TabImg1} alt="TabImg1" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative text-center">
          <a
            href="https://calendar.google.com/calendar/u/0?cid=aDYzZ21nc3BsZDN2cGdjdHJwaWc0YWE5ZjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Umów na spotkanie!
          </a>
        </div> */}
      </section>
      <section className="overflow- py-5vh xl:py-10vh xl:pb-15vh" id="who">
        <div className="container xl:max-w-screen-xl">
          <div className="items-center xl:flex">
            <div>
              <img
                src={AvatarUnion}
                alt=""
                className="max-w-sm mx-auto scale-125 2xl:scale-150"
              />
            </div>
            <div className="relative z-10 max-w-lg mx-auto space-y-8 text-center xl:max-w-none xl:text-left ">
              <h2 className="text-3xl  xl:text-5xl">
                {t("sectionAboutTitle")}
              </h2>
              <p className="text-2xl text-gray-500 xl:text-3xl">
                {t("sectionAboutText")}
              </p>
            </div>
          </div>
          <div className="btn-auto">
            <AnchorLink
              href="#pricing"
              className="onas border-2 inline-flex px-2 py-3.5 rounded-full text-green-400 border-green-400 hover:cursor-pointer group ">
              <svg
                className="w-4 h-4 text-current group-hover:animate-bounce-small"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </AnchorLink>
          </div>
        </div>
      </section>
      <Plans />
      <Contact />
    </>
  );
}

export default Home;
