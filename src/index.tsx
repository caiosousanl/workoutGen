import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Header, Logo } from "./Styles/Global";
import logo from "./Assets/logo.svg";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header>
      <Logo src={logo} />
    </Header>
    <App />
  </React.StrictMode>
);
