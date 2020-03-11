import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  > .item-media {
    width: 160px;
    height: 220px;
    background: url(${props => props.image}) no-repeat;
    background-size: cover;
    border-radius: 0.5rem;
  }
  > .item-details {
    p {
      margin: 0;
      font-size: 0.85rem;
    }
  }
`;
const CollectionItem = props => {
  return (
    <ItemWrapper image={props.designer}>
      <div className="item-media"></div>
      <div className="item-details">
        <p className="item-title">Item Title</p>
        <p className="item-price">$99,99</p>
      </div>
    </ItemWrapper>
  );
};

export default CollectionItem;
