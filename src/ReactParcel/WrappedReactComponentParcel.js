import React from 'react';
import Parcel from 'single-spa-react/parcel';
import { reactParcel } from './ReactComponentParcel';
import { mountRootParcel } from 'single-spa';

export class WrappedReactComponentParcel extends React.Component {
  render() {
    return <Parcel config={reactParcel} mountParcel={mountRootParcel} />;
  }
}
