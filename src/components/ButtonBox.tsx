import React from "react";
import styled from "styled-components";

const StyledButtonBox = styled.section`
  position: relative;
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  width: 4rem;
  padding: 0.5rem 0;
  cursor: pointer;

  &:nth-of-type(1) {
    margin-right: auto;
  }
`;

type ContainerProps = {
  startClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  submitClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  resetClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isCalculating: boolean;
  hasStarted: boolean;
};

const ButtonBox = ({
  startClickHandler,
  submitClickHandler,
  resetClickHandler,
  isCalculating,
  hasStarted,
}: ContainerProps) => {
  return (
    <StyledButtonBox>
      <StyledButton
        onClick={startClickHandler}
        disabled={isCalculating}
        style={isCalculating ? { cursor: "not-allowed" } : {}}
      >
        Start
      </StyledButton>
      <StyledButton
        onClick={submitClickHandler}
        disabled={!hasStarted || isCalculating}
        style={!hasStarted || isCalculating ? { cursor: "not-allowed" } : {}}
      >
        Guess
      </StyledButton>
      <StyledButton
        onClick={resetClickHandler}
        disabled={!hasStarted || isCalculating}
        style={!hasStarted || isCalculating ? { cursor: "not-allowed" } : {}}
      >
        Reset
      </StyledButton>
    </StyledButtonBox>
  );
};

export default ButtonBox;
