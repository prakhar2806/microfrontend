// Import everything needed to use the `useQuery` hook
import React, { useState } from "react";
import About from "./components/About";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import Profile from "./components/Profile";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import GoogleUserLogin from "./components/GoogleUserLogin";

export default function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [profileData, setProfileData] = useState(null);

  return (
    <div>
      <div className="header">
        <Link className="logo" to="/">
          LAXMI CHITFUND
        </Link>
        <div className="header-right">
          <Link to="userProfile">User Profile</Link>
          <Link to="about">About</Link>
          <Link className="active" to="cart">
            CART
          </Link>
          <Link className="active" to="wishlist">
            WISHLIST
          </Link>
          {loginSuccess && profileData && (
            <span>
              <img
                className="profile-picture"
                src={profileData.picture}
                alt="user image"
              />
            </span>
          )}
          {
            <GoogleUserLogin
              loginSuccess={(val) => setLoginSuccess(val)}
              setProfileData={(data) => setProfileData(data)}
            />
          }
        </div>
      </div>

      <div className="content">
        <div className="contentWrapper">
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={loginSuccess ? <Home /> : <h2>Please Login</h2>}
              />
              <Route path="cart" element={<Cart />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="userProfile" element={<Profile />} />
              <Route path="about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
