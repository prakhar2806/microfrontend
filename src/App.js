// Import everything needed to use the `useQuery` hook
import React from "react";
import { useQuery, gql } from "@apollo/client";

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
    return data.commodities.map(
      ({ id, title, description, images, thumbnail, brand, category }) => (
        <div key={id}>
          <h3>{title}</h3>
          <h4>{brand}</h4> 
          <h4>{category}</h4>
          <img
            width="400"
            height="250"
            alt="location-reference"
            src={`${images[0]}`}
          />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      )
    );
  }

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <GetCommdities />
    </div>
  );
}
