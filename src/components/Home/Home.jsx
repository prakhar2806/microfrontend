import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards from "../Cards";

const Home = () => {
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
        price
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_COMMODITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="cardsContainer">
      {data.commodities.map((product, index) => (
        <Cards key={`${product.id}_index`} data={product} />
      ))}
      ``
    </div>
  );
};

export default Home;
