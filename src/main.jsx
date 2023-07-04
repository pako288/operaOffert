import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ValueOption from "./ValueOption.jsx";

import OperaOffert from "./OperaOffert.jsx";
import CardImg from "./CardImg.jsx";
import Proxy from "./Proxy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OperaOffert />
    <CardImg />
    <Proxy />

    {/* <ValueOption title={`Holaa`} /> */}
    {/* <App /> */}
  </React.StrictMode>
);
