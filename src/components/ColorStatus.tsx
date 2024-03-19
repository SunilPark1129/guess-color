import React from "react";
import styled from "styled-components";

const StyledColorBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: filter 0.3s;
  justify-content: space-around;
`;

const StylesColorStatus = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  border: 1px solid #efefef;
  cursor: default !important;
  transition: filter 0.3s;
  border-radius: 4px;
`;

type ContainerProps = {
  currentClr: { red: number; green: number; blue: number };
  styleIsCalulating: React.CSSProperties;
  stylesHasStarted: React.CSSProperties;
};

const ColorStatus = ({
  currentClr,
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
        }}
      ></StylesColorStatus>
      <StylesColorStatus
        id="green"
        style={{
          ...styleIsCalulating,
          backgroundColor: `rgb(0,${currentClr.green},0)`,
        }}
      ></StylesColorStatus>
      <StylesColorStatus
        id="blue"
        style={{
          ...styleIsCalulating,
          backgroundColor: `rgb(0,0,${currentClr.blue})`,
        }}
      ></StylesColorStatus>
    </StyledColorBox>
  );
};

export default ColorStatus;
