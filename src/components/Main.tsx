import React, { useState } from "react";
import styled from "styled-components";
import Guide from "./Guide";
import InputBox from "./InputBox";
import ColorStatus from "./ColorStatus";
import Result from "./Result";
import ButtonBox from "./ButtonBox";

const StyledMain = styled.main`
  display: flex;
  margin: 0 auto;
  max-width: 24rem;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;

  .sign {
    width: 100%;
  }
`;

interface Colors {
  red: number;
  blue: number;
  green: number;
  [key: string]: number | undefined;
}

interface Payload {
  name: string;
  id: string;
  value?: number;
}

const initialColor: Colors = {
  red: 255,
  green: 255,
  blue: 255,
};

const initialColorConfirm: Colors = {
  red: 256,
  green: 256,
  blue: 256,
};

const initialBool: boolean = false;
const initialNumber: number = 0;

const Main = () => {
  const [currentClr, setCurrentClr] = useState(initialColor);
  const [confirmColor, setConfirmColor] = useState(initialColorConfirm);
  const [guessClr, setGuessClr] = useState(initialColor);

  const [hasMoved, setHasMoved] = useState(initialBool);
  const [hasStarted, setHasStarted] = useState(initialBool);

  const [score, setScore] = useState(initialNumber);
  const [isCalculating, setIsCalculating] = useState(initialBool);

  function colorChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget;
    if (!hasStarted) {
      return;
    }
    colorChange({ name: name, value: Number(value), id: "preview" });
  }

  function colorClickHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    const { id } = e.currentTarget;
    if (!hasStarted) {
      return;
    }
    colorChange({ name: id, id: "confirm" });
    !hasMoved && setHasMoved(true);
  }

  function colorChange(payload: Payload): void {
    if (payload.id === "preview") {
      setCurrentClr((prev) => ({
        ...prev,
        [payload.name]: payload.value,
      }));
    } else if (payload.id === "confirm") {
      setConfirmColor((prev) => ({
        ...prev,
        [payload.name]: currentClr[payload.name],
      }));
    }
  }

  function resetColors(): void {
    setCurrentClr(initialColor);
    setConfirmColor(initialColorConfirm);
    setHasMoved(initialBool);
    setScore(initialNumber);
  }

  function startClickHandler(): void {
    const ranClr: number[] = new Array(3);
    for (let i = 0; i < ranClr.length; i++) {
      ranClr[i] = Math.floor(Math.random() * 255 + 1);
    }
    setGuessClr({
      red: ranClr[0],
      green: ranClr[1],
      blue: ranClr[2],
    });
    resetColors();
    setHasStarted(true);
  }

  function resetClickHandler(): void {
    resetColors();
    setHasStarted(initialBool);
    setGuessClr(initialColor);
  }

  function submitClickHandler(): void {
    if (
      confirmColor.red === 256 ||
      confirmColor.green === 256 ||
      confirmColor.blue === 256
    ) {
      return;
    }

    const rangeOne = Math.max(
      0,
      100 - Math.abs(confirmColor.red - guessClr.red)
    );
    const rangeTwo = Math.max(
      0,
      100 - Math.abs(confirmColor.green - guessClr.green)
    );
    const rangeThree = Math.max(
      0,
      100 - Math.abs(confirmColor.blue - guessClr.blue)
    );

    const value = Math.round((rangeOne + rangeTwo + rangeThree) / 3);

    if (score === value) return;

    setIsCalculating(true);
    numberCount(Math.abs(score - value), value > score);
  }

  function numberCount(calc: number, isLarger: boolean): void {
    if (calc === 0) {
      setIsCalculating(false);
      return;
    }
    if (isLarger) {
      setTimeout(() => {
        setScore((prev) => prev + 1);
        numberCount(calc - 1, isLarger);
      }, 180 - calc * 6);
    } else {
      setTimeout(() => {
        setScore((prev) => prev - 1);
        numberCount(calc - 1, isLarger);
      }, 180 - calc * 6);
    }
  }

  const styleIsCalulating = isCalculating
    ? {
        filter: "brightness(50%)",
        cursor: "not-allowed",
      }
    : {
        filter: "brightness(100%)",
        cursor: "pointer",
      };

  const stylesHasStarted = hasStarted
    ? { filter: "brightness(100%)" }
    : { filter: "brightness(50%)" };

  return (
    <StyledMain>
      <Guide />
      <InputBox
        currentClr={currentClr}
        isCalculating={isCalculating}
        colorChangeHandler={colorChangeHandler}
        styleIsCalulating={styleIsCalulating}
        stylesHasStarted={stylesHasStarted}
      />
      <ColorStatus
        currentClr={currentClr}
        confirmColor={confirmColor}
        isCalculating={isCalculating}
        colorClickHandler={colorClickHandler}
        styleIsCalulating={styleIsCalulating}
        stylesHasStarted={stylesHasStarted}
      />
      <Result
        hasStarted={hasStarted}
        hasMoved={hasMoved}
        guessClr={guessClr}
        confirmColor={confirmColor}
        score={score}
      />
      <ButtonBox
        startClickHandler={startClickHandler}
        submitClickHandler={submitClickHandler}
        resetClickHandler={resetClickHandler}
        isCalculating={isCalculating}
        hasStarted={hasStarted}
      />
      <p className="sign">Developed by Sunil Park</p>
    </StyledMain>
  );
};

export default Main;
