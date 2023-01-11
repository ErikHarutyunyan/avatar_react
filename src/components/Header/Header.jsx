import React from "react";
import AvatarLogo from "../../assets/img/avatar-logo.svg";

// Scroll
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { DropdownLang } from "../DropdownLang/DropdownLang";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <header className=" px-3 py-2 shadow-sm lg:gap-[5vw] bg-white/80 sticky top-0 z-50 backdrop-blur">
        <div className="container flex items-center justify-between gap-10">
          <Link to="/">
            <span className="sr-only">AVATAR</span>
            <img src={AvatarLogo} alt="AVATAR" width="210" className="pb-1" />
          </Link>
          <nav className="justify-between flex-1 hidden lg:flex xl:flex-initial xl:gap-28">
            <AnchorLink offset="100" href="#how">
              <Link to="/#how">{t("headerItem1")}</Link>
            </AnchorLink>
            <AnchorLink offset="100" href="#who">
              <Link to="/#who">{t("headerItem2")}</Link>
            </AnchorLink>
            <AnchorLink offset="100" href="#pricing">
              <Link to="/#pricing"></Link>
              {t("headerItem3")}
            </AnchorLink>
            <AnchorLink offset="100" href="#contact">
              <Link to="/#contact"></Link>
              {t("headerItem4")}
            </AnchorLink>
          </nav>
          <div className="flex items-center justify-center gap-5">
            <DropdownLang />
            <Link to="#" className="hidden lg:block">
              <svg
                className="text-aqua-500 w-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{1}"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>

            <Link className="relative button" to={"create"}>
              {t("creator")}{" "}
              <span className="button-icon">
                <svg
                  className="w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
