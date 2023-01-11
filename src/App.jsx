import React from "react";
import Router from "./router/router";
import i18next from "i18next";
function App() {
  React.useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
