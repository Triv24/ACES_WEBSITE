import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../src/images/poster.jpg"; // Example image 1
// import img2 from "../src/images/image_2.png"; // Example image 2


const CardPopup = ({ onClose }) => {
  // Array of card data
  const cards = [
    { img: img1, message: "" },
    // { img: img2, message: "Cheers to the Second Winner!" },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Get the current card
  const { img, message } = cards[currentIndex];

  return (
    <Overlay>
      <StyledCard>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ImageWrapper>
          <img src={img} alt={`Card ${currentIndex + 1}`} />
        </ImageWrapper>
        <CardContent>
          <p>{message}</p>
        </CardContent>
        <Navigation>
          <ArrowButton onClick={handlePrev}>&lt;</ArrowButton>
          <ArrowButton onClick={handleNext}>&gt;</ArrowButton>
        </Navigation>
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
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const StyledCard = styled.div`
  width: 800px;
  height: 750px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  img {
    max-width: 90%;
    max-height: 80%;
    margin: 2px;
    padding-bottom:10px;
    border-radius: 0px;
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 24px; 
    font-weight: bold; 
    color:rgb(33, 50, 80); 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
    letter-spacing: 1.5px; 
    margin: 10;
    padding: 10px 20px;
    
  }
`;

const Navigation = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%); /* Vertically center the buttons */
`;

const ArrowButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transform: translateY(-50%);
  position: relative;

  &:hover {
    background: #555;
  }
`;



export default CardPopup;
