import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../app/features/user/userActions";
import { CONTACT_SCHEMA } from "../../utils/helper/validation.helper";
// import Error from "../components/Error";
export const Contact = () => {
  const { t } = useTranslation();
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // onSubmit
    resolver: yupResolver(CONTACT_SCHEMA),
  });

  const submitForm = (data) => {
    console.log("data :", data);
    dispatch(contactUs(data));
  };
  return (
    <section className="py-5vh bg-aqua-200 scroll-m-10vh" id="contact">
      <div className="container sm:max-w-screen-sm">
        <h2 className="text-3xl text-center xl:text-5xl">
          {t("sectionContact")}
        </h2>

        <form onSubmit={handleSubmit(submitForm)} className="mt-10 space-y-5">
          <label htmlFor="name" className="flex flex-col">
            <span> {t("sectionContactName")}</span>
            <input
              type="text"
              name="name"
              id="name"
              {...register("name")}
              className="border-gray-300 rounded-lg focus:ring-aqua-400 focus:ring-2 focus:border-transparent"
              required
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span> {t("sectionContactEmail")}</span>
            <input
              type="text"
              name="email"
              id="email"
              {...register("email")}
              className="border-gray-300 rounded-lg focus:ring-aqua-400 focus:ring-2 focus:border-transparent"
              required
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span>{t("sectionContactMessage")}</span>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              {...register("text")}
              className="border-gray-300 rounded-lg focus:ring-aqua-400 focus:ring-2 focus:border-transparent"
            ></textarea>
          </label>
          <label htmlFor="terms" className="flex space-x-4">
            <input
              type="checkbox"
              name="terms"
              id="termKontakts"
              className="border-gray-300 focus:ring-aqua-400 focus:ring-2 focus:border-transparent accent-aqua-400 focus:accent-aqua-400"
            />
            <span className="text-sm text-neutral-500">
              {t("sectionContactText")}
            </span>
          </label>
          <div className="pt-5 text-center">
            <button type="submit" className="button">
              {t("sectionContactButton")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
