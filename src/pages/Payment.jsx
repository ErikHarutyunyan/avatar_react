import React from "react";
import AvatarLogo from "../assets/img/avatar-logo.svg";
import StripeLogo from "../assets/img/stripeLogo.png";

import { IcArRight, IcPlan } from "../components/Icons/Icons";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="payment mt-24 pb-20 flex">
      <div className="payment-wrapper  flex-1">
        <div className="payment-info max-w-md m-auto">
          <div className="payment-info-header">
            <div className="flex align-middle items-center relative">
              <IcArRight
                w={"24px"}
                h={"24px"}
                cl={"rotate-180 absolute -left-7"}
                onClick={() => navigate(-1)}
              />
              <img src={AvatarLogo} alt="AVATAR" width="122" className="pb-1" />
            </div>
          </div>
          <div className="payment-info-body mt-7">
            <div className="payment-info-pay">
              <div>
                <h3 className="text-gray-400 font-normal text-base">
                  Pay Avatar
                </h3>
                <p className="price text-black font-medium text-4xl">400.00 </p>
              </div>
              <div className="payment-info-pay-set mt-8">
                <div className="flex">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-x-4">
                      <IcPlan />
                      <div>
                        <span className="text-black font-medium text-sm mt-2">
                          Basic plan,
                        </span>
                        <span className="text-black font-medium text-sm mt-2">
                          Woman
                        </span>
                      </div>
                    </div>
                    <div className="flex px-8 ">
                      <p className="text-black font-medium text-sm">4000</p>
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <div className="payment-info-pay-desc ml-auto max-w-xs px-8 w-full">
                    <div className="flex justify-between py-3">
                      <p className="text-black font-medium text-sm">Subtotal</p>
                      <p className="text-black font-medium text-sm">374.00</p>
                    </div>
                    <div className="flex justify-between py-3 border-y border-gray-400">
                      <p className="text-gray-400 font-normal text-sm">
                        Subtotal
                      </p>
                      <p className="text-gray-400 font-normal text-sm">
                        374.00
                      </p>
                    </div>
                    <div className="flex justify-between py-3">
                      <p className="text-black font-medium text-sm">Subtotal</p>
                      <p className="text-black font-medium text-sm">374.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-info-footer mt-auto">
            <div className="flex gap-x-5">
              <div className="flex gap-x-5">
                <div className="flex">
                  <span className="text-xs text-gray-500 font-medium">
                    Powered by
                  </span>
                  <img
                    src={StripeLogo}
                    alt="StripeLogo"
                    width={34}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="line"></div>
              </div>
              <div className="flex gap-x-5">
                <span className="text-xs text-gray-500 font-medium">Terms</span>
                <span className="text-xs text-gray-500 font-medium">
                  Privacy
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-details"></div>
      </div>
      <div className="flex-1">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Payment;
