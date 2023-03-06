import React from "react";
import styled from "styled-components";

const StyledColorBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:nth-of-type(1) {
    flex: 1 1 80%;
  }
  &:nth-of-type(2) {
    flex: 1 1 20%;
  }
`;

const StyledColorInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 40px;
  cursor: pointer;
  outline: 0px solid transparent;
  overflow: hidden;
  border-radius: 2px;
  transition: filter 0.3s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 40px;
    border-radius: 2px;
    box-shadow: 0px 0px 20px 5px #0000008b;
    border: 1px solid #4d4d4d85;
    background-color: red;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    height: 40px;
    border-radius: 2px;
    box-shadow: 0px 0px 20px 5px #0000008b;
    border: 1px solid #4d4d4d85;
    background-color: red;
  }
`;

type ContainerProps = {
  currentClr: { red: number; green: number; blue: number };
  isCalculating: boolean;
  colorChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  styles: React.CSSProperties;
};

const InputBox = ({
  currentClr,
  isCalculating,
  colorChangeHandler,
  styles,
}: ContainerProps) => {
  return (
    <StyledColorBox>
      <StyledColorInput
        type="range"
        name="red"
        min={0}
        max={255}
        value={currentClr.red}
        style={{
          ...styles,
          backgroundColor: `rgb(${currentClr.red},0,0)`,
        }}
        disabled={isCalculating}
        onChange={colorChangeHandler}
      />
      <StyledColorInput
        type="range"
        name="green"
        min={0}
        max={255}
        value={currentClr.green}
        style={{
          ...styles,
          backgroundColor: `rgb(0,${currentClr.green},0)`,
        }}
        disabled={isCalculating}
        onChange={colorChangeHandler}
      />
      <StyledColorInput
        type="range"
        name="blue"
        min={0}
        max={255}
        value={currentClr.blue}
        style={{
          ...styles,
          backgroundColor: `rgb(0,0,${currentClr.blue})`,
        }}
        disabled={isCalculating}
        onChange={colorChangeHandler}
      />
    </StyledColorBox>
  );
};

export default InputBox;
