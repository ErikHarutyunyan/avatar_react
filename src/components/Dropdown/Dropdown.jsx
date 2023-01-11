import { useEffect, useRef, useState } from "react";

export const Dropdown = ({
  type = "",
  moreItem = [],
  c = "",
  setVoice,
  onAdd,
}) => {
  const [isActive, setIsActive] = useState(false);
  let item;
  if (type === "Language") {
    item = moreItem[0];
  }
  if (type === "Background") item = moreItem[0];
  const [selected, setIsSelected] = useState(item);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isActive]);
  return (
    <div className="relative" ref={ref}>
      <div className="mb-5 text-1xl font-semibold">{type}</div>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className={`${c} text-gray w-96 bg-blue-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between`}
        type="button"
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {selected}
        <svg
          className="block ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        className={`absolute top-15 z-10 w-96 bg-white rounded divide-y divide-gray-100 shadow ${
          isActive ? "block" : "hidden"
        }`}
      >
        <ul
          className="py-1 text-sm text-gray-700 "
          aria-labelledby="dropdownDividerButton"
        >
          {moreItem.map((item, index) => {
            return (
              <li
                key={index}
                className="block py-2 px-4 hover:bg-gray-100 text-gray"
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);

                  if (type === "Language") {
                    setVoice(e.target.textContent);
                    onAdd(e.target.textContent, "voiceLanguage");
                  } else if (type === "Background") {
                    onAdd(e.target.textContent, "background");
                  }
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
