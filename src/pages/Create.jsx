import React, { useReducer, useRef } from "react";
import { useState } from "react";
import AvatarOptions from "../components/AvatarOptions/AvatarOptions";
import {
  IcBg,
  IcImp,
  IcModel,
  IcPayment,
  IcPlan,
  IcText,
  IcVoice,
} from "../components/Icons/Icons";
import { Models } from "../components/Models/Models";
import { Text } from "../components/Text/Text";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import paymentIcon from "../assets/img/pay_met_icon.png";

const initialState = {
  plan: null,
  price: null,
  sale: null,
  total: null,
  modelGender: "women",
  modelId: null,
  modelName: null,
  text: "",
  numberWords: "",
  voiceLanguage: "Polish",
  voiceType: "",
  background: "Green",
};

function reducer(state, action) {
  switch (action.type) {
    case "plan":
      return { ...state, plan: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "sale":
      return { ...state, sale: action.payload };
    case "total":
      return { ...state, total: action.payload };
    case "modelGender":
      return { ...state, modelGender: action.payload };
    case "modelId":
      return { ...state, modelId: action.payload };
    case "modelName":
      return { ...state, modelName: action.payload };
    case "text":
      return { ...state, text: action.payload };
    case "numberWords":
      return { ...state, numberWords: action.payload };
    case "voiceLanguage":
      return { ...state, voiceLanguage: action.payload };
    case "voiceType":
      return { ...state, voiceType: action.payload };
    case "background":
      return { ...state, background: action.payload };
    default:
      throw new Error();
  }
}
export const Create = () => {
  const [modelCat, setModelCat] = useState("");
  const [textSpeak, setTextSpeak] = useState("");
  const [voice, setVoice] = useState("Pl");
  const [plan, setPlan] = useState("");
  const [salesPrice, setSalesPrice] = useState(0);
  const [dataForm, dispatch] = useReducer(reducer, initialState);
  console.log("dataForm :", dataForm);

  const { t } = useTranslation();

  const planRef = useRef(null);
  const modelsRef = useRef(null);
  const backgroundRef = useRef(null);
  const textRef = useRef(null);
  const voiceRef = useRef(null);
  const paymentRef = useRef(null);

  const handleModel = (cat) => {
    setModelCat(cat);
  };
  const [active, setActive] = useState(" ");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const changeNav = (entries, observer) => {
      entries.forEach((entry) => {
        // verify the element is intersecting
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          // remove old active class
          // document.querySelector(".active").classList.remove("active");
          setActive("");
          // get id of the intersecting section
          var id = entry.target.getAttribute("id");
          // find matching link & add appropriate class
          var newLink = document;
          setActive(`${id}Item`);
        }
      });
    };

    // init the observer
    const options = {
      threshold: [0.2, 0.5, 0.8],
    };

    const observer = new IntersectionObserver(changeNav, options);

    // target the elements to be observed
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  const onAdd = (text, type) => {
    switch (type) {
      case "plan":
        return dispatch({ type: "plan", payload: text });
      case "price":
        return dispatch({ type: "price", payload: text });
      case "sale":
        return dispatch({ type: "sale", payload: text });
      case "total":
        return dispatch({ type: "total", payload: text });
      case "modelGender":
        return dispatch({ type: "modelGender", payload: text });
      case "modelId":
        return dispatch({ type: "modelId", payload: text });
      case "modelName":
        return dispatch({ type: "modelName", payload: text });
      case "text":
        return dispatch({ type: "text", payload: text });
      case "numberWords":
        return dispatch({ type: "numberWords", payload: text.length });
      case "voiceLanguage":
        return dispatch({ type: "voiceLanguage", payload: text });
      case "voiceType":
        return dispatch({ type: "voiceType", payload: text });
      case "voiceName":
        return dispatch({ type: "voiceName", payload: text });
      case "background":
        return dispatch({ type: "background", payload: text });
      default:
        throw new Error();
    }
  };

  const handleSalesPrice = (price, tax = 6.5) => {
    let salePrice = (price * tax) / 100;
    onAdd(salePrice, "sale");
    onAdd(price + salePrice, "total");
    setSalesPrice(salePrice);
  };

  return (
    <>
      <AvatarOptions active={active} setActive={setActive} />
      <section className="mt-20" id="test">
        <h2 className="text-5xl font-semibold text-center">
          {t("sectionCreatorTitle")}
        </h2>
      </section>
      <section id="plan" ref={planRef}>
        <div className="container mt-20">
          <header className="py-5vh flex items-center gap-x-3.5">
            <IcPlan w={35} h={40} />
            <h2 className="text-5xl font-semibold ">
              {" "}
              {t("sectionPlanTitle")}
            </h2>
          </header>
          <div className="imp pl-10 flex items-center gap-x-4">
            <IcImp />
            <span className="text-1xl font-semibold ">
              {t("sectionPlanSubTitle")}
            </span>
          </div>
          <form action="#">
            <div className="flex mt-10 justify-center gap-4" id="gender">
              <label htmlFor="gender-man">
                <input
                  type="radio"
                  name="plan"
                  id="plan-basic"
                  value="man"
                  className="hidden peer"
                />
                <div
                  price={50}
                  onClick={(e) => {
                    e.preventDefault();
                    onAdd(e.target.innerText, "plan");
                    onAdd(+e.target.attributes["price"].value, "price");
                    handleSalesPrice(+e.target.attributes["price"].value);
                  }}
                  className={`px-12 cursor-pointer py-2.5 border-2 border-gray-400 rounded-full transition-colors peer-checked:border-green-400 peer-checked:text-green-400 ${
                    dataForm.plan === "Basic"
                      ? "text-green-500 !border-green-500"
                      : null
                  }`}>
                  Basic
                </div>
              </label>
            </div>
          </form>
        </div>
      </section>
      <section id="models" ref={modelsRef}>
        <div className="container mt-20">
          <header className="py-5vh flex items-center gap-x-3.5">
            <IcModel w={35} h={40} />
            <h2 className="text-5xl font-semibold ">
              {" "}
              {t("sectionModelTitle")}
            </h2>
          </header>
          <div className="imp pl-10 flex items-center gap-x-4">
            <IcImp />
            <span className="text-1xl font-semibold ">
              {t("sectionModelSubTitle")}
            </span>
          </div>
          <form action="#" className="mt-20">
            <div className="flex justify-center gap-4" id="gender">
              <label
                htmlFor="gender-man"
                onClick={(e) => {
                  e.preventDefault();
                  handleModel("man");
                  onAdd("man", "modelGender");
                }}>
                <input
                  type="radio"
                  name="plan"
                  id="gender-man"
                  value="man"
                  className="hidden peer"
                />
                <div
                  className={`px-12 cursor-pointer py-2.5 border-2 border-gray-400 rounded-full transition-colors peer-checked:border-green-400 peer-checked:text-green-400 ${
                    dataForm.modelGender === "man"
                      ? "text-green-500 !border-green-500"
                      : null
                  }`}>
                  {t("sectionModelMan")}
                </div>
              </label>
              <label
                htmlFor="gender-women"
                onClick={(e) => {
                  e.preventDefault();
                  handleModel("women");
                  onAdd("women", "modelGender");
                }}>
                <input
                  type="radio"
                  name="plan"
                  id="gender-women"
                  value="women"
                  className="hidden peer"
                />
                <div
                  className={`px-12 cursor-pointer py-2.5 border-2 border-gray-400 rounded-full transition-colors peer-checked:border-green-400 peer-checked:text-green-400 ${
                    dataForm.modelGender === "women"
                      ? "text-green-500 !border-green-500"
                      : null
                  }`}>
                  {t("sectionModelWoman")}
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="container mt-20">
          <Models
            modelCat={dataForm.modelGender}
            dispatch={dispatch}
            onAdd={onAdd}
            dataForm={dataForm}
          />
        </div>
      </section>
      <section id="text" ref={textRef}>
        <div className="container mt-20">
          <header className="py-5vh flex items-center gap-x-3.5">
            <IcText w={40} h={40} />
            <h2 className="text-5xl font-semibold ">{t("sectionTextTitle")}</h2>
          </header>
          <div className="imp pl-10 flex items-center gap-x-4">
            <IcImp />
            <span className="text-1xl font-semibold ">
              {t("sectionTextSubTitle")}
            </span>
          </div>
          <div className="mt-20">
            <Text
              plan={dataForm.plan}
              setTextSpeak={setTextSpeak}
              onAdd={onAdd}
              dataForm={dataForm}
            />
          </div>
        </div>
      </section>
      <section id="voice" ref={voiceRef}>
        <div className="container mt-20">
          <header className="py-5vh flex items-center gap-x-3.5">
            <IcVoice w={35} h={40} />
            <h2 className="text-5xl font-semibold ">
              {t("sectionVoiceTitle")}
            </h2>
          </header>
          <div className="imp pl-10 flex items-center gap-x-4">
            <IcImp />
            <span className="text-1xl font-semibold ">
              {t("sectionVoiceSubTitle")}
            </span>
          </div>
          <div className="mt-20 inline-flex align-end gap-x-72">
            <Dropdown
              c="dropdownCustom"
              moreItem={["Polish", "English"]}
              type="Language"
              setVoice={setVoice}
              onAdd={onAdd}
            />
            <div className="flex items-center justify-between gap-x-4">
              <label
                htmlFor="sample-en-88"
                className="flex items-center flex-1 py-3 space-x-4 hover:cursor-pointer"
                onClick={(e) => {
                  console.log("first", e);
                  onAdd(e.target.value, "voiceType");
                }}>
                <input
                  type="radio"
                  name={`voice-${voice}`}
                  value={`Kornelia voice sample ${voice}`}
                  id="sample-en-88"
                  className="text-green-400 peer focus:ring-green-400"
                />
                <span className="text-sm text-gray-400 peer-checked:text-green-400">
                  Kornelia voice sample {voice}
                </span>
                <svg
                  className="w-5 h-5 peer-checked:fill-green-400"
                  viewBox="0 0 24 21">
                  <path d="M10.5,1.5c0,-0.39782 0.158,-0.77936 0.4393,-1.06066c0.2813,-0.2813 0.6629,-0.43934 1.0607,-0.43934c0.3978,0 0.7794,0.15804 1.0607,0.43934c0.2813,0.28131 0.4393,0.66284 0.4393,1.06066v18c0,0.3978 -0.158,0.7794 -0.4393,1.0607c-0.2813,0.2813 -0.6629,0.4393 -1.0607,0.4393c-0.3978,0 -0.7794,-0.158 -1.0607,-0.4393c-0.2813,-0.2813 -0.4393,-0.6629 -0.4393,-1.0607zM8.25,16.5c0,0.3978 -0.15804,0.7794 -0.43934,1.0607c-0.2813,0.2813 -0.66284,0.4393 -1.06066,0.4393c-0.39782,0 -0.77936,-0.158 -1.06066,-0.4393c-0.2813,-0.2813 -0.43934,-0.6629 -0.43934,-1.0607v-12c0,-0.39782 0.15804,-0.77936 0.43934,-1.06066c0.2813,-0.2813 0.66284,-0.43934 1.06066,-0.43934c0.39782,0 0.77936,0.15804 1.06066,0.43934c0.2813,0.2813 0.43934,0.66284 0.43934,1.06066zM0.43934,14.5607c-0.2813,-0.2813 -0.43934,-0.6629 -0.43934,-1.0607v-6c0,-0.39782 0.15804,-0.77936 0.43934,-1.06066c0.28131,-0.2813 0.66284,-0.43934 1.06066,-0.43934c0.39782,0 0.77936,0.15804 1.06066,0.43934c0.2813,0.2813 0.43934,0.66284 0.43934,1.06066v6c0,0.3978 -0.15804,0.7794 -0.43934,1.0607c-0.2813,0.2813 -0.66284,0.4393 -1.06066,0.4393c-0.39782,0 -0.77936,-0.158 -1.06066,-0.4393zM18.75,16.5c0,0.3978 -0.158,0.7794 -0.4393,1.0607c-0.2813,0.2813 -0.6629,0.4393 -1.0607,0.4393c-0.3978,0 -0.7794,-0.158 -1.0607,-0.4393c-0.2813,-0.2813 -0.4393,-0.6629 -0.4393,-1.0607v-12c0,-0.39782 0.158,-0.77936 0.4393,-1.06066c0.2813,-0.2813 0.6629,-0.43934 1.0607,-0.43934c0.3978,0 0.7794,0.15804 1.0607,0.43934c0.2813,0.2813 0.4393,0.66284 0.4393,1.06066zM23.5607,6.43934c0.2813,0.2813 0.4393,0.66284 0.4393,1.06066v6c0,0.3978 -0.158,0.7794 -0.4393,1.0607c-0.2813,0.2813 -0.6629,0.4393 -1.0607,0.4393c-0.3978,0 -0.7794,-0.158 -1.0607,-0.4393c-0.2813,-0.2813 -0.4393,-0.6629 -0.4393,-1.0607v-6c0,-0.39782 0.158,-0.77936 0.4393,-1.06066c0.2813,-0.2813 0.6629,-0.43934 1.0607,-0.43934c0.3978,0 0.7794,0.15804 1.0607,0.43934z"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </section>
      <section id="background" ref={backgroundRef}>
        <div className="container mt-20">
          <header className="py-5vh flex items-center gap-x-3.5">
            <IcBg w={40} h={40} />
            <h2 className="text-5xl font-semibold ">
              {t("sectionBackgroundTitle")}
            </h2>
          </header>
          <div className="imp pl-10 flex items-center gap-x-4">
            <IcImp />
            <span className="text-1xl font-semibold ">
              {t("sectionBackgroundSubTitle")}
            </span>
          </div>
          <div className="mt-20">
            <Dropdown
              c="dropdownCustom"
              moreItem={["Green", "Blue", "Red"]}
              type="Background"
              onAdd={onAdd}
            />
          </div>
        </div>
      </section>
      <section id="payment" ref={paymentRef}>
        <div className="container mt-20">
          <header className="py-5vh flex items-center gap-x-3.5">
            <IcPayment w={42} h={48} />
            <h2 className="text-5xl font-semibold ">{t("sectionPayment")}</h2>
          </header>
          <div className="imp pl-10 flex items-center gap-x-4">
            <IcImp />
            <span className="text-1xl font-semibold ">
              {t("sectionPaymentSubTitle")}
            </span>
          </div>
        </div>
        <div className="container  payment-details flex gap-x-20 mt-16">
          <div className="order">
            <div className="order-detals">
              <h3>{t("sectionOrderSum")}:</h3>
              <div className="order-info">
                <p>
                  {t("sectionOrderPlan")}: <span>{dataForm.plan}</span>
                </p>
                <p>
                  {t("sectionOrderGender")}:{" "}
                  <span>
                    {dataForm?.modelGender === "man"
                      ? t("sectionModelMan")
                      : t("sectionModelWoman")}
                  </span>
                </p>
                <p>
                  {t("sectionOrderAvatar")}: <span>{dataForm.modelName}</span>
                </p>
                <p>
                  {t("sectionOrderNumber")}: <span>{dataForm.numberWords}</span>
                </p>
                <p>
                  {t("sectionOrderVoice")}: <span>{dataForm.voiceType}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="order-pay">
            <div className="subTotal">
              <p>{t("sectionOrderSubtotal")}</p>{" "}
              <p>{dataForm.price && dataForm.price + " " + t("priceSymbol")}</p>
            </div>
            <div className="sales">
              <p>{t("sectionOrderSales")}</p>
              <p>{dataForm.price && dataForm.sale + " " + t("priceSymbol")}</p>
            </div>
            <div className="total">
              <p>{t("sectionOrderTotalDue")}</p>
              <p>{dataForm.total && dataForm.total + " " + t("priceSymbol")}</p>
            </div>
            <div className="powered">
              <p>{t("sectionOrderPowered")}</p>
              <img src={paymentIcon} alt="paymentIcon" />
            </div>
            <div className="finalTotal">
              <p>{t("sectionOrderTotal")}</p>
              <p>{dataForm.total && dataForm.total + " " + t("priceSymbol")}</p>
            </div>
            <div className="btnDiv">
              <button>{t("sectionOrderCheckout")}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
