// Import everything needed to use the `useQuery` hook
import React from "react";
import About from "./components/About";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import Profile from "./components/Profile";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

export default function App() {
  return (
    <div>
      <div className="header">
        <Link className="logo" to="/">
          LAXMI CHITFUND
        </Link>
        <div className="header-right">
          <Link className="active" to="cart">
            CART
          </Link>
          <Link className="active" to="wishlist">
            WISHLIST
          </Link>
          <Link to="userProfile">User Profile</Link>
          <Link to="about">About</Link>
        </div>
      </div>
      <div className="content">
        <div className="contentWrapper">
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
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
