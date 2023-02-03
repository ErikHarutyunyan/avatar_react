import React, { useState } from "react";
import {
  IcBg,
  IcModel,
  IcPayment,
  IcPlan,
  IcText,
  IcVoice,
} from "../Icons/Icons";
// Scroll
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { useTranslation } from "react-i18next";
export default function AvatarOptions({
  active = "",
  setActive = () => {},
  ref = [],
}) {
  const handleClick = (event) => {
    setActive(event.target.id);
  };
  const { t } = useTranslation();
  return (
    <div className="sticky bg-white top-24 !m-0 z-10">
      <div
        className="container grid max-w-8xl grid-cols-6 gap-1 py-2 mx-auto md:py-3 xl:py-5"
        x-data="{active:''}">
        <AnchorLink
          offset="100"
          id="planItem"
          href="#plan"
          className={`active flex justify-between flex-col py-5 items-center space-y-2 text-center transition-colors border-2 border-transparent xl:px-5 rounded-xl ${
            active === "planItem" ? "text-green-500 !border-green-500" : null
          }`}
          onClick={handleClick}>
          <IcPlan
            c="m-auto pointer-events-none"
            s={`${active === "planItem" ? "#00A67E" : "#414141"}`}
          />
          <span
            className={`inline-block text-xs font-medium md:text-base pointer-events-none ${
              active === "planItem" ? "text-green-500" : "text-gray-500"
            }`}>
            Plan
          </span>
        </AnchorLink>
        <AnchorLink
          offset="195"
          id="modelsItem"
          href="#models"
          className={`flex justify-between flex-col py-5 items-center space-y-2 text-center transition-colors border-2 border-transparent xl:px-5 rounded-xl ${
            active === "modelsItem" ? "text-green-500 !border-green-500" : null
          }`}
          onClick={handleClick}>
          <IcModel
            c="m-auto  pointer-events-none"
            f={`${active === "modelsItem" ? "#00A67E" : "#414141"}`}
          />
          <span
            className={`inline-block text-xs font-medium md:text-base pointer-events-none ${
              active === "modelsItem" ? "text-green-500" : "text-gray-500"
            }`}>
            Modele
          </span>
        </AnchorLink>
        <AnchorLink
          offset="195"
          id="textItem"
          href="#text"
          className={`flex justify-between flex-col py-5 items-center space-y-2 text-center transition-colors border-2 border-transparent xl:px-5 rounded-xl ${
            active === "textItem" ? "text-green-500 !border-green-500" : null
          }`}
          onClick={handleClick}>
          <IcText
            c="m-auto  pointer-events-none"
            f={`${active === "textItem" ? "#00A67E" : "#414141"}`}
          />
          <span
            className={`inline-block text-xs font-medium md:text-base pointer-events-none ${
              active === "textItem" ? "text-green-500" : "text-gray-500"
            }`}>
            {t("sectionYorText")}
          </span>
        </AnchorLink>
        <AnchorLink
          offset="195"
          id="voiceItem"
          href="#voice"
          className={`flex justify-between flex-col py-5 items-center space-y-2 text-center transition-colors border-2 border-transparent xl:px-5 rounded-xl ${
            active === "voiceItem" ? "text-green-500 !border-green-500" : null
          }`}
          onClick={handleClick}>
          <IcVoice
            c="m-auto  pointer-events-none"
            f={`${active === "voiceItem" ? "#00A67E" : "#414141"}`}
          />
          <span
            className={`inline-block text-xs font-medium md:text-base pointer-events-none ${
              active === "voiceItem" ? "text-green-500" : "text-gray-500"
            }`}>
            {t("sectionOrderVoice")}
          </span>
        </AnchorLink>
        <AnchorLink
          offset="195"
          id="backgroundItem"
          href="#background"
          className={`flex justify-between flex-col py-5 items-center space-y-2 text-center transition-colors border-2 border-transparent xl:px-5 rounded-xl ${
            active === "backgroundItem"
              ? "text-green-500 !border-green-500"
              : null
          }`}
          onClick={handleClick}>
          <IcBg
            c="m-auto  pointer-events-none"
            s={`${active === "backgroundItem" ? "#00A67E" : "#414141"}`}
          />
          <span
            className={`inline-block text-xs font-medium md:text-base pointer-events-none ${
              active === "backgroundItem" ? "text-green-500" : "text-gray-500"
            }`}>
            {t("optionBackground")}
          </span>
        </AnchorLink>
        <AnchorLink
          offset="100"
          id="paymentItem"
          href="#payment"
          className={`flex justify-between flex-col py-5 items-center space-y-2 text-center transition-colors border-2 border-transparent xl:px-5 rounded-xl ${
            active === "paymentItem" ? "text-green-500 !border-green-500" : null
          }`}
          onClick={handleClick}>
          <IcPayment
            c="m-auto  pointer-events-none"
            s={`${active === "paymentItem" ? "#00A67E" : "#414141"}`}
          />
          <span
            className={`inline-block text-xs font-medium md:text-base pointer-events-none ${
              active === "paymentItem" ? "text-green-500" : "text-gray-500"
            }`}>
            {t("sectionPayment")}
          </span>
        </AnchorLink>
      </div>
    </div>
  );
}
