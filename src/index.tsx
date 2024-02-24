import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./app";

import { BrowserRouter } from "react-router-dom";

import { LoginModal } from "@/components/modal/login-modal";
import { RegisterModal } from "@/components/modal/register-modal";
import { SearchModal } from "@/components/modal/search-modal";
import { FilterModal } from "@/components/modal/filter-modal";
// import { HostModal } from "@/components/modal/host-modal";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LoginModal />
        <RegisterModal />
        <SearchModal />
        {/* <FilterModal /> */}
        {/* <HostModal /> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
