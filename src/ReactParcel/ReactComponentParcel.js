import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { ReactComponent } from './ReactComponent.js';

export const reactParcel = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ReactComponent
});
