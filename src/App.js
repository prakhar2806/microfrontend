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
      }
    }
  `;

  function GetCommdities() {
    const { loading, error, data } = useQuery(GET_COMMODITIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log("data", data);
    return (
      <div class="cardsContainer">
        {data.commodities.map((product) => (
          <Cards key={product.id} data={product} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2>User product shopping cart 🛒</h2>
      <GetCommdities />
    </div>
  );
}
