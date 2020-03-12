import React, { useState } from "react";
import styled from "styled-components";
import CollectionItem from "../CollectionItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CollectionWrapper = styled.section`
  margin-top: 2.5rem;
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 1rem;
    > p {
      margin: 0;
      font-weight: bold;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      color: #523448;
    }
    > a {
      font-size: 11px;
      color: #d8a890;
      text-decoration: none;
    }
  }

  .items-container {
  }
`;
const Collection = props => {
  const [numberOfSlides, setNumberofSlides] = useState(3);

  window.addEventListener("load", () => {
    if (window.innerWidth > 1500) {
      setNumberofSlides(8);
    } else if (window.innerWidth > 1300) {
      setNumberofSlides(6);
    } else if (window.innerWidth > 1024) {
      setNumberofSlides(4);
    } else if (window.innerWidth > 500) {
      setNumberofSlides(3);
    } else {
      setNumberofSlides(2);
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1500) {
      setNumberofSlides(8);
    } else if (window.innerWidth > 1300) {
      setNumberofSlides(6);
    } else if (window.innerWidth > 1024) {
      setNumberofSlides(4);
    } else if (window.innerWidth > 500) {
      setNumberofSlides(3);
    } else {
      setNumberofSlides(2);
    }
  });
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: numberOfSlides,
    slidesToScroll: 1
  };
  return (
    <CollectionWrapper>
      <div className="top-bar">
        <p>{props.title}</p>
        <a href="#deadsies">SHOW ALL</a>
      </div>
      {/* <div className="items-container"></div> */}
      <Slider style={{ overflow: "hidden" }} {...settings}>
        <CollectionItem designer={props.designer[0]} />
        <CollectionItem designer={props.designer[1]} />
        <CollectionItem designer={props.designer[2]} />
        <CollectionItem designer={props.designer[3]} />
        <CollectionItem designer={props.designer[0]} />
        <CollectionItem designer={props.designer[1]} />
        <CollectionItem designer={props.designer[2]} />
        <CollectionItem designer={props.designer[3]} />
        <CollectionItem designer={props.designer[0]} />
        <CollectionItem designer={props.designer[1]} />
        <CollectionItem designer={props.designer[2]} />
        <CollectionItem designer={props.designer[3]} />
      </Slider>
      {/* <button onClick={_handleLeftSwipe}>swipe left</button> */}
      {/* <button>swipe right</button> */}
    </CollectionWrapper>
  );
};

export default Collection;
