import React from "react";

import profileBackground from '../../assets/nature.jpg'
// import Highlight from "../../components/Highlight";
import Loading from "../../components/Loading";
import { useAuth0 } from "../../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="">
        <img src={profileBackground} alt="Profile" className=""/>
        <div>
          <img src={user.picture} alt="Profile" className=""/>
        </div>
        <div>
          <h2>{user.name}</h2>
          <p className="">{user.email}</p>
          <p>Hello Everyone</p>
        </div>
      </div>
      <div>
        <h2>Given_name: {user.given_name}</h2>
        <p>Family_name: {user.family_name}</p>
        <p>Nickname: {user.nickname}</p>
        <p>First_name: {user.name}</p>
        <p>Profile_picture_url: {user.picture}</p>
        <p>Locale: {user.locale}</p>
        <p>Updated_at: {user.updated_at}</p>
        <p>Email: {user.email}</p>
        <p>Verified_email: {user.email_verified}</p>
        <p>Sub: {user.sub}</p>
      </div>
    </div>
  );
};

export default Profile;
