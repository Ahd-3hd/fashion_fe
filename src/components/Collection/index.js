import React, { useState } from "react";
import styled from "styled-components";
import CollectionItem from "../CollectionItem";
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
    position: relative;
    padding-left: 0.5rem;
    overflow-x: hidden;
    display: flex;
    transition: 0.7s;
    /** left property causes overflow aka horizontal scrolling; hiding the scrollbar works on safari and chrome but not firefox and not sure about edge */
    /** TODO FIND AWAY TO CHANGE LEFT PROPERTY WITHOUT OVERFLOW */
  }
`;
const Collection = props => {
  const [slide, setSlide] = useState(0);
  const _handleLeftSwipe = () => {
    if (slide < 0) {
      setSlide(slide * 10);
    } else {
      setSlide(-slide * 10);
    }
  };
  return (
    <CollectionWrapper slide={slide}>
      <div className="top-bar">
        <p>DESIGNER'S COLLECTION</p>
        <a href="#deadsies">SHOW ALL</a>
      </div>
      <div className="items-container">
        <CollectionItem designer={props.designer} id={0} />
        <CollectionItem designer={props.designer} id={1} />
        <CollectionItem designer={props.designer} id={2} />
        <CollectionItem designer={props.designer} id={3} />
        <CollectionItem designer={props.designer} id={4} />
        <CollectionItem designer={props.designer} id={5} />
      </div>
      <button onClick={_handleLeftSwipe}>swipe left</button>
      <button>swipe right</button>
    </CollectionWrapper>
  );
};

export default Collection;
