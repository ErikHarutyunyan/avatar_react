import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { FontStyle } from "./themes/FontStyle";
import "./index.css";
import { GlobalStyle } from "./themes/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
// import setupInterceptors from "./services/setupInterceptors";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <FontStyle />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// setupInterceptors(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
