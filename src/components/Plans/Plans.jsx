import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Plans = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section
      className="py-5vh md:py-8vh scroll-m-10vh bg-gradient-to-br from-green-50/30 to-aqua-200/40"
      id="pricing">
      <div className="container xl:max-w-screen-xl">
        <div className="pricing-wrapper clearfix">
          <div className="pricing-table">
            <svg
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x={3} y={3} width={40} height={40} rx={20} fill="white" />
              <path
                d="M23.8333 14.6667L16.4112 23.5732C16.1205 23.922 15.9752 24.0964 15.973 24.2437C15.971 24.3718 16.0281 24.4936 16.1277 24.5741C16.2423 24.6667 16.4693 24.6667 16.9234 24.6667H23L22.1667 31.3334L29.5888 22.4268C29.8795 22.078 30.0248 21.9036 30.027 21.7563C30.0289 21.6283 29.9719 21.5064 29.8723 21.4259C29.7577 21.3334 29.5307 21.3334 29.0766 21.3334H23L23.8333 14.6667Z"
                stroke="#00A67E"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x={3}
                y={3}
                width={40}
                height={40}
                rx={20}
                stroke="#F9FAFB"
                strokeWidth={6}
              />
            </svg>

            <h3 className="pricing-title"> {t("sectionPlansBasicTitle")}</h3>
            <div className="price">
              {t("sectionPlansBasicPrice")} <br />
              <sup>{t("sectionPlansBasicInfo")}</sup>
            </div>

            <ul className="table-list">
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansBasicTool1")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansBasicTool2")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansBasicTool3")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansBasicTool4")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansBasicTool5")}</li>
              </span>
            </ul>
            <div className="table-buy">
              <button
                onClick={() => {
                  navigate("/create", {
                    state: {
                      plan: "Basic plan",
                      price: 50,
                    },
                  });
                }}>
                {t("sectionPlanChoose")}
              </button>
            </div>
          </div>
          <div className="pricing-table disable">
            <svg
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x={3} y={3} width={40} height={40} rx={20} fill="#FFF" />
              <path
                d="M14.6667 25.0833L22.7019 29.1009C22.8112 29.1556 22.8659 29.1829 22.9232 29.1937C22.974 29.2032 23.0261 29.2032 23.0769 29.1937C23.1342 29.1829 23.1888 29.1556 23.2982 29.1009L31.3334 25.0833M14.6667 20.9167L22.7019 16.8991C22.8112 16.8444 22.8659 16.8171 22.9232 16.8063C22.974 16.7968 23.0261 16.7968 23.0769 16.8063C23.1342 16.8171 23.1888 16.8444 23.2982 16.8991L31.3334 20.9167L23.2982 24.9343C23.1888 24.9889 23.1342 25.0163 23.0769 25.027C23.0261 25.0365 22.974 25.0365 22.9232 25.027C22.8659 25.0163 22.8112 24.9889 22.7019 24.9343L14.6667 20.9167Z"
                stroke="#00A67E"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x={3}
                y={3}
                width={40}
                height={40}
                rx={20}
                stroke="#61D3A6"
                strokeOpacity="0.05"
                strokeWidth={6}
              />
            </svg>
            <h3 className="pricing-title">{t("sectionPlansPremiumTitle")}</h3>
            <div className="price">
              {t("sectionPlansPremiumPrice")}
              <br />
              <sup>{t("sectionPlansPremiumInfo")}</sup>
            </div>
            <ul className="table-list">
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansPremiumTool1")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansPremiumTool2")}</li>
              </span>
            </ul>
            <div className="table-buy">
              <button>{t("sectionPlanChoose")}</button>
            </div>
          </div>
          <div className="pricing-table disable">
            <svg
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x={3} y={3} width={40} height={40} rx={20} fill="#FFF" />
              <path
                d="M14.6667 25.0833L22.7019 29.1009C22.8112 29.1556 22.8659 29.1829 22.9232 29.1937C22.974 29.2032 23.0261 29.2032 23.0769 29.1937C23.1342 29.1829 23.1888 29.1556 23.2982 29.1009L31.3334 25.0833M14.6667 20.9167L22.7019 16.8991C22.8112 16.8444 22.8659 16.8171 22.9232 16.8063C22.974 16.7968 23.0261 16.7968 23.0769 16.8063C23.1342 16.8171 23.1888 16.8444 23.2982 16.8991L31.3334 20.9167L23.2982 24.9343C23.1888 24.9889 23.1342 25.0163 23.0769 25.027C23.0261 25.0365 22.974 25.0365 22.9232 25.027C22.8659 25.0163 22.8112 24.9889 22.7019 24.9343L14.6667 20.9167Z"
                stroke="#00A67E"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x={3}
                y={3}
                width={40}
                height={40}
                rx={20}
                stroke="#61D3A6"
                strokeOpacity="0.05"
                strokeWidth={6}
              />
            </svg>

            <h3 className="pricing-title">{t("sectionPlansCustomTitle")}</h3>
            <div className="price">
              {t("sectionPlansCustomPrice")}
              <p className="text-xl leading-6 underline text-green-500">
                {t("sectionPlansCustomInfo")}
              </p>
            </div>

            <ul className="table-list">
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansCustomTool1")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansCustomTool2")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansCustomTool3")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansCustomTool4")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansCustomTool5")}</li>
              </span>
              <span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.365967"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#F3FCFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
                    fill="#00D8A4"
                  />
                </svg>

                <li>{t("sectionPlansCustomTool6")}</li>
              </span>
            </ul>
            <div className="table-buy">
              <button>{t("sectionPlanChoose")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
