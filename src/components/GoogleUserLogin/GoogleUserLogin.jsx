import React, { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./style.scss";

const GoogleUserLogin = ({ loginSuccess, setProfileData }) => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    logOut();
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfileData(res.data);
          setProfile(res.data);
          loginSuccess(true);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    loginSuccess(false);
    setProfile(null);
  };

  return (
    <span>
      {profile ? (
        <button className="googleSignIn" onClick={logOut}>
          Log out
        </button>
      ) : (
        <button className="googleSignIn" onClick={() => login()}>
          Sign in with Google 🚀{" "}
        </button>
      )}
    </span>
  );
};
export default GoogleUserLogin;
