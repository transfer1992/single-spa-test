import React from "react";
import { Parcel } from "single-spa-react";
import { MyParcel } from "./myParcel.js";

export class MyComponent extends React.Component {
  render() {
    return <Parcel config={MyParcel} />;
  }
}
