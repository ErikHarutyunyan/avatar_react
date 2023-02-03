import React from "react";
import Router from "./router/router";
import i18next from "i18next";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js/pure";

const stripePromise = loadStripe("pk_test_...");
function App() {
  React.useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  return (
    <>
      <Elements stripe={stripePromise}>
        <Router />
      </Elements>
    </>
  );
}

export default App;
