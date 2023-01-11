import React from "react";
import CastingImg from "../../assets/img/castingstudio-logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container xl:max-w-screen-xl">
        <div className="py-5vh xl:py-10vh">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-14 xl:gap-20">
            <div className="space-y-4 xl:pr-20">
              <h2 className="text-xl text-black lg:text-2xl">
                {" "}
                {t("footerContactTitle")}
              </h2>
              <p> {t("footerContactText")}.</p>
              <Link
                to="#"
                className="flex items-center space-x-1 text-xl font-bold text-green-500 hover:underline"
              >
                <span>{t("footerContactTitle")}</span>
                <svg
                  className="w-5 stroke-[3]"
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
              </Link>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl text-black lg:text-2xl">
                {t("footerInfo")}
              </h2>
              <div className="flex flex-col space-y-2">
                <Link
                  to="#"
                  className="hover:underline decoration-green-500 decoration-2"
                >
                  {t("footerInfoPrivacy")}
                </Link>
                <Link
                  to="#"
                  className="hover:underline decoration-green-500 decoration-2"
                >
                  {t("footerInfoCookies")}
                </Link>
                <Link
                  to="#"
                  className="hover:underline decoration-green-500 decoration-2"
                >
                  {t("footerInfoRegulations")}
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xl text-black lg:text-2xl">Powered by</p>
              <Link to="#" className="inline-block">
                <img
                  src={CastingImg}
                  alt="casting studio"
                  width="267"
                  height="38"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container xl:max-w-screen-xl">
        <div className="flex items-center justify-between py-4">
          <p>Copyright © 2022 Avatar</p>
        </div>
      </div>
    </footer>
  );
}
