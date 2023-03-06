import React, { useState } from "react";
import styled from "styled-components";

const StyledGuide = styled.section`
  display: flex;
  width: 100%;
  justify-content: end;
  overflow: hidden;
`;

const StyledGuideBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  padding: 0.6rem;
  cursor: pointer;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
`;

const StyledBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000078;
  backdrop-filter: blur(5px);
  z-index: -1;
`;

const StyledModalContent = styled.article`
  overflow-y: auto;
  width: 100%;
  max-width: 300px;
  background-color: #2b2b2b;
  text-align: left;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: auto;
  position: relative;
`;

const StyledModalClose = styled(StyledGuideBtn)`
  position: absolute;
  right: 1rem;
  top: 0.5rem;
`;

const initialModalState: boolean = false;

const Guide = () => {
  const [hasModalOpened, setHasModalOpened] = useState(initialModalState);
  function toggleClickHandler(): void {
    setHasModalOpened((prev) => !prev);
  }
  return (
    <StyledGuide>
      <StyledGuideBtn onClick={toggleClickHandler}>?</StyledGuideBtn>
      {hasModalOpened && (
        <StyledModal>
          <StyledBg onClick={toggleClickHandler}></StyledBg>
          <StyledModalContent>
            <StyledModalClose onClick={toggleClickHandler}>x</StyledModalClose>
            <h3>Guide</h3>
            <p>Press the start button to start the game.</p>
            <p>
              Notice the randomly generated color on the left below (you have to
              combine the same color with that color).
            </p>
            <p>Set the color with the range chart.</p>
            <p>
              Click the square on the right of the range to save the current
              range color.
            </p>
            <p>
              Compare the color created by mixing the three colors (all three
              colors must be picked).
            </p>
            <p>
              When you're done choosing colors, click the Guess button to see
              your score.
            </p>
          </StyledModalContent>
        </StyledModal>
      )}
    </StyledGuide>
  );
};

export default Guide;
