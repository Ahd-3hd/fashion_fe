import React from "react";
import styled from "styled-components";
import ExploreItem from "../ExploreItem";
import itemImage0 from "../../img/abaya12.jpg";
import itemImage1 from "../../img/abaya3.jpg";
import itemImage2 from "../../img/abaya5.jpg";
import itemImage3 from "../../img/abaya9.jpg";

const images = [itemImage0, itemImage1, itemImage2, itemImage3];

const ExploreWrapper = styled.main`
  margin: 7rem 0;
  padding: 0 1rem;
  > .items-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    grid-gap: 2rem;
  }
  > p {
    margin: 2rem 0;
    font-weight: bold;
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    color: #523448;
  }
`;

const Explore = () => {
  return (
    <ExploreWrapper>
      <p>EXPLORE</p>
      <div className="items-container">
        <ExploreItem media={images[0]} />
        <ExploreItem media={images[1]} />
        <ExploreItem media={images[2]} />
        <ExploreItem media={images[3]} />
        <ExploreItem media={images[0]} />
        <ExploreItem media={images[1]} />
        <ExploreItem media={images[0]} />
        <ExploreItem media={images[1]} />
        <ExploreItem media={images[2]} />
        <ExploreItem media={images[3]} />
        <ExploreItem media={images[0]} />
        <ExploreItem media={images[1]} />
      </div>
    </ExploreWrapper>
  );
};

export default Explore;
