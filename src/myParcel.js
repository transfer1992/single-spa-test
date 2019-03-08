import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { ReactComponent } from "./ReactComponent";
export const MyParcel = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ReactComponent
});
