import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import USEREDUCER from "./USEREDUCER";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ContextApp from "./ContextApp";
import USEMEMO from "./USEMEMO";
import USEMEMO2 from "./USEMEMO2";
import Market from "./market";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
