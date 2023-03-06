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
  currentClr: { red: number; green: number; blue: number };
  confirmColor: { red: number; green: number; blue: number };
  isCalculating: boolean;
  colorClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styleIsCalulating: React.CSSProperties;
  stylesHasStarted: React.CSSProperties;
};

const ColorStatus = ({
  currentClr,
  confirmColor,
  isCalculating,
  colorClickHandler,
  styleIsCalulating,
  stylesHasStarted,
}: ContainerProps) => {
  return (
    <StyledColorBox style={stylesHasStarted}>
      <StylesColorStatus
        id="red"
        style={{
          ...styleIsCalulating,
          backgroundColor: `rgb(${currentClr.red},0,0)`,
          outline: `3px solid ${
            currentClr.red !== confirmColor.red ? "#d8ddc1" : "transparent"
          }`,
        }}
        disabled={isCalculating}
        onClick={colorClickHandler}
      ></StylesColorStatus>
      <StylesColorStatus
        id="green"
        style={{
          ...styleIsCalulating,
          backgroundColor: `rgb(0,${currentClr.green},0)`,
          outline: `3px solid ${
            currentClr.green !== confirmColor.green ? "#d8ddc1" : "transparent"
          }`,
        }}
        disabled={isCalculating}
        onClick={colorClickHandler}
      ></StylesColorStatus>
      <StylesColorStatus
        id="blue"
        style={{
          ...styleIsCalulating,
          backgroundColor: `rgb(0,0,${currentClr.blue})`,
          outline: `3px solid ${
            currentClr.blue !== confirmColor.blue ? "#d8ddc1" : "transparent"
          }`,
        }}
        disabled={isCalculating}
        onClick={colorClickHandler}
      ></StylesColorStatus>
    </StyledColorBox>
  );
};

export default ColorStatus;
