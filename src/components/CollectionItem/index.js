import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const ItemWrapper = styled.div`
  // set to absolute to handle swiping effect, but might break positioning.
  position: relative;
  border-radius: 0.5rem;
  margin: 1rem;
  /* left: ${props => props.id * 50 + "%"}; */
  > .item-media {
    position: relative;
    width: 160px;
    height: 220px;
    background: url(${props => props.image}) no-repeat;
    background-size: cover;
    border-radius: 0.5rem;
    .fav-button {
      background: rgba(255, 255, 255, 0.6);
      border: none;
      padding: 0.4rem 0.6rem;
      margin: 0.5rem;
      position: absolute;
      right: 0;
      border-radius: 0.3rem;
      color: #8e4368;
    }
    p {
      position: absolute;
      bottom: 0;
      margin-left: 0.4rem;
      font-size: 0.85rem;
      font-weight: bold;
      padding: 0.4rem 0.6rem;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 0.3rem;
      color: #8e4368;
    }
  }
  > .item-details {
    p {
      margin: 0;
      font-size: 0.85rem;
      color: #523448;
    }
    .item-title {
      font-weight: bold;
    }
  }
`;
const CollectionItem = props => {
  return (
    <ItemWrapper image={props.designer} id={props.id}>
      <div className="item-media">
        <button className="fav-button">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <p>New</p>
      </div>
      <div className="item-details">
        <p className="item-title">Item Title</p>
        <p className="item-price">$99,99</p>
      </div>
    </ItemWrapper>
  );
};

export default CollectionItem;
