import React, { Component } from "react";
import "./App.css";

import { WrappedReactComponentParcel } from "./ReactParcel/WrappedReactComponentParcel";
import { WrappedAngularComponentParcel } from "./AngularParcel/WrappedAngularComponentParcel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WrappedReactComponentParcel />
        <WrappedAngularComponentParcel />
      </div>
    );
  }
}

export default App;
