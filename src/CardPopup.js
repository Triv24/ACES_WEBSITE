import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../src/images/poster.jpg"; // Example image 1

const CardPopup = ({ onClose }) => {
  const cards = [
    { img: img1, message: "" },
  ];

  const [currentIndex] = useState(0);


  const { img, message } = cards[currentIndex];

  return (
    <Overlay onClick={onClose}>
      <StyledCard onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ImageWrapper>
          <img src={img} alt={`Card ${currentIndex + 1}`} />
        </ImageWrapper>
        <CardContent>
          <p>{message}</p>
        </CardContent>
      </StyledCard>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const StyledCard = styled.div`
  width: 700px;
  height: 700px;
  background: transparent; /* Transparent card */
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent button */
  border: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Make the image cover the entire box */
    border-radius: 15px;
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  p {
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;


export default CardPopup;
