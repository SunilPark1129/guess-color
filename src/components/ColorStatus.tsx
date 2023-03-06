import React from "react";
import styled from "styled-components";

const StyledColorBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:nth-of-type(1) {
    flex: 1 1 80%;
  }
`;

const StylesColorStatus = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #e4e4e4;
  outline: 1px solid transparent;
  cursor: pointer;
  transition: filter 0.3s;
`;

type ContainerProps = {
  confirmColor: { red: number; green: number; blue: number };
  isCalculating: boolean;
  colorClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styles: React.CSSProperties;
};

const ColorStatus = ({
  confirmColor,
  isCalculating,
  colorClickHandler,
  styles,
}: ContainerProps) => {
  return (
    <StyledColorBox>
      <StylesColorStatus
        id="red"
        style={
          confirmColor.red !== 256
            ? {
                ...styles,
                backgroundColor: `rgb(${confirmColor.red},0,0)`,
              }
            : { backgroundColor: "#fff" }
        }
        disabled={isCalculating}
        onClick={colorClickHandler}
      ></StylesColorStatus>
      <StylesColorStatus
        id="green"
        style={
          confirmColor.green !== 256
            ? {
                ...styles,
                backgroundColor: `rgb(0,${confirmColor.green},0)`,
              }
            : { backgroundColor: "#fff" }
        }
        disabled={isCalculating}
        onClick={colorClickHandler}
      ></StylesColorStatus>
      <StylesColorStatus
        id="blue"
        style={
          confirmColor.blue !== 256
            ? {
                ...styles,
                backgroundColor: `rgb(0,0,${confirmColor.blue})`,
              }
            : { backgroundColor: "#fff" }
        }
        disabled={isCalculating}
        onClick={colorClickHandler}
      ></StylesColorStatus>
    </StyledColorBox>
  );
};

export default ColorStatus;
