import React from "react";
import styled from "styled-components";

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
`;
const Collection = () => {
  return (
    <CollectionWrapper>
      <div className="top-bar">
        <p>DESIGNER'S COLLECTION</p>
        <a href="#deadsies">SHOW ALL</a>
      </div>
    </CollectionWrapper>
  );
};

export default Collection;
