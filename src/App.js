// Import everything needed to use the `useQuery` hook
import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards from "./components/Cards";
import "./App.scss";

export default function App() {
  const GET_COMMODITIES = gql`
    query {
      commodities {
        title
        description
        discountPercentage
        images
        thumbnail
        brand
        category
        id
      }
    }
  `;

  function GetCommdities() {
    const { loading, error, data } = useQuery(GET_COMMODITIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log("data", data);
    return (
      <div className="cardsContainer">
        {data.commodities.map((product, index) => (
          <Cards key={`${product.id}_index`} data={product} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          LAXMI CHITFUND
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            CART
          </a>
          <a className="active" href="#home">
            WISHLIST
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div className="content">
        <div className="contentWrapper">
          <GetCommdities />
        </div>
      </div>
    </div>
  );
}
