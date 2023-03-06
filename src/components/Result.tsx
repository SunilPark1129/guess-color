import React from "react";
import styled from "styled-components";

const StyledResult = styled.section`
  position: relative;
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const StyledCompare = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);

  p {
    margin: auto;
    z-index: 9;
    color: #e6e6e6;
    text-shadow: 1px 1px 2px black;
    width: 4rem;
    backdrop-filter: blur(16px);
  }
`;

const StyledOutput = styled.div`
  width: 100%;
  height: 40px;

  &:nth-of-type(1) {
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:nth-of-type(2) {
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

type ContainerProps = {
  hasStarted: boolean;
  hasMoved: boolean;
  guessClr: { red: number; green: number; blue: number };
  confirmColor: { red: number; green: number; blue: number };
  score: number;
};

const Result = ({
  hasStarted,
  hasMoved,
  guessClr,
  confirmColor,
  score,
}: ContainerProps) => {
  return (
    <StyledResult>
      <StyledOutput
        style={
          hasStarted
            ? {
                backgroundColor: `rgb(${guessClr.red},${guessClr.green},${guessClr.blue})`,
              }
            : { backgroundColor: "#fff" }
        }
      ></StyledOutput>
      <StyledOutput
        style={
          hasMoved
            ? {
                backgroundColor: `rgb(${
                  confirmColor.red === 256 ? 0 : confirmColor.red
                },${confirmColor.green === 256 ? 0 : confirmColor.green},${
                  confirmColor.blue === 256 ? 0 : confirmColor.blue
                })`,
              }
            : { backgroundColor: `rgb(255,255,255)` }
        }
      ></StyledOutput>
      <StyledCompare>
        <p>{score}%</p>
      </StyledCompare>
    </StyledResult>
  );
};

export default Result;
