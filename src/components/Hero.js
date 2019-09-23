import React from "react";

import logo from "../assets/logo.svg";
import { compose, graphql } from 'react-apollo'
import { getPlaceQuery } from "../queries/PlaceQuery"

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Experience Trail</h1>

    <p className="lead">
      Create connections through shared travel experiences!
    </p>
    console.log(this.props)
  </div>
);

export default graphql(getPlaceQuery, {
  options: (props) => {
    variables: {
      place_id: props.place_id
    }
  }
})(Hero);
