import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ValueOption from "./ValueOption.jsx";


import Padre from "./Padre.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Padre/>
   

    {/* <ValueOption title={`Holaa`} /> */}
    {/* <App /> */}
  </React.StrictMode>
);
