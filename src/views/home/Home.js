import React, { Fragment } from "react";
import { compose, graphql } from 'react-apollo'
import { getPlaceQuery } from "../../queries/PlaceQuery"
import tiger from "../../assets/tiger.jpg"
import "./Home.scss"

const Home = () => (
<div className="home-container">
  {/* <form>
    <input></input>
  </form> */}
  <div className="user-post-info">
    <img className="post-profile-img" src={tiger}/>
    <h3 className="post-username">Username</h3>
  </div>
  <div className="img-container">
    <img className="post-img" src={tiger}/>
    <button className="save-img">Save</button>
  </div>
  <div className="image-extras">
    <div className="like-caption">
      <i className="fa fa-heart fa-lg"></i>
      <i className="fa fa-comment fa-lg"></i>
    </div>
    <p className="post-date">Date/Time</p>
  </div>
  <div className="caption-container">
    <p className="caption">Temp caption</p>
  </div>
  <div className="home-footer">
    <i className="fa fa-arrow-up fa-2x"></i>    
    <i className="fa fa-search fa-2x" ></i>
    <i className="fa fa-upload fa-2x"></i>
  </div>
</div>
);

export default graphql(getPlaceQuery, {
  options: (props) => {
    return {
        variables: {
          place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4"
        }
      }
    }
  }
)(Home);