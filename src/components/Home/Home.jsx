import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards from "../Cards";
import { useMediaQuery } from "@mantine/hooks";
import CardsMobile from "../CardsMobile";
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
  const isMobile = useMediaQuery("(max-width: 600px)");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="cardsContainer">
      {data.commodities.map((product, index) =>
        isMobile ? (
          <CardsMobile key={`${product.id}_index_mobile`} data={product} />
        ) : (
          <Cards key={`${product.id}_index`} data={product} />
        )
      )}
    </div>
  );
};

export default Home;
