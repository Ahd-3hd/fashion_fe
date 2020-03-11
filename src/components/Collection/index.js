import React from "react";
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
    padding: 0 0.5rem;
  }
`;
const Collection = props => {
  return (
    <CollectionWrapper>
      <div className="top-bar">
        <p>DESIGNER'S COLLECTION</p>
        <a href="#deadsies">SHOW ALL</a>
      </div>
      <div className="items-container">
        <CollectionItem designer={props.designer} />
      </div>
    </CollectionWrapper>
  );
};

export default Collection;
