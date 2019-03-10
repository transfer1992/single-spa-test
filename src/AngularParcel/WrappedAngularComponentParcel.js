import React from 'react';
import Parcel from 'single-spa-react/parcel';
import { angularParcel } from './AngularComponentParcel';
import { mountRootParcel } from 'single-spa';

export class WrappedAngularComponentParcel extends React.Component {
  render() {
    return <Parcel config={angularParcel} mountParcel={mountRootParcel} />;
  }
}
