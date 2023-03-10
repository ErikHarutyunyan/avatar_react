import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHideShow } from "../../hooks/useHideShow";

export const DropdownLang = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("EN");
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const ref = useRef();

  useHideShow(ref, () => setIsActive(false));

  return (
    <div className="relative" ref={ref}>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="relative text-gray  hover:bg-gray-100  focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={(e) => {
          setIsActive(!isActive);
        }}>
        {selected}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        id="dropdownDivider"
        className={`absolute w-14 top-15 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
          isActive ? "block" : "hidden"
        }`}>
        <ul
          className="py-1 text-sm text-gray-700 "
          aria-labelledby="dropdownDividerButton">
          <li
            className="cursor-pointer block py-2 px-4 text-gray hover:bg-green-50 hover:text-green-700"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              changeLanguage("en");
              setIsActive(!isActive);
            }}>
            En
          </li>

          <li
            className="cursor-pointer block py-2 px-4 text-gray hover:bg-green-50 hover:text-green-700"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              changeLanguage("pl");
              setIsActive(!isActive);
            }}>
            Pl
          </li>
        </ul>
      </div>
    </div>
  );
};
