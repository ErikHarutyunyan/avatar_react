import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Text = ({ plan = "Basic", setTextSpeak = () => {}, onAdd }) => {
  const [count, setCount] = useState(0);
  const recalculate = (e) => {
    setCount(e.target.value.length);
    setTextSpeak(e.target.value);
    onAdd(e.target.value, "text");
    onAdd(e.target.value, "numberWords");
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="limit-plan flex w-full items-center justify-end gap-1.5">
        <div className="limit flex items-center gap-1">
          <div className="nowChar text-gray-400 text-2xl">{count}</div>/
          <div className="maxChar text-black text-2xl">
            {plan === "Basic" ? 3000 : 0}
          </div>
        </div>
        <p className="text-xl gap-2">|</p>
        <div className="plan flex items-center gap-1">
          <span className="text-black text-2xl">Basic</span>
          <svg
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.71436 3.33337L11.3204 8.00004L6.71436 12.6667"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="textForm xl:pl-10 ">
        <label
          htmlFor="message"
          className="block mb-2 text-lg font-medium text-gray-900">
          {t("sectionYorText")}
        </label>
        <textarea
          id="message"
          rows={13}
          className="block p-2.5 w-full text-xl text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
          placeholder={t("sectionYorTextPlaceholder")}
          spellCheck="false"
          maxLength={plan === "Basic" ? 3000 : 0}
          onChange={recalculate}></textarea>
      </div>
      <div className="mt-5 pl-10">
        <p>{t("sectionYorTextChart")}</p>
      </div>
    </>
  );
};
