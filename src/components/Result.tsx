import styled from "styled-components";

const StyledResult = styled.section`
  position: relative;
  flex: 1 1 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  p {
    margin: auto;
    z-index: 9;
    color: #e6e6e6;
    text-shadow: 1px 1px 2px black;
    width: 4rem;
  }
`;

type ContainerProps = {
  hasMoved: boolean;
  guessClr: { red: number; green: number; blue: number };
  confirmColor: { red: number; green: number; blue: number };
  score: number;
};

const Result = ({
  hasMoved,
  guessClr,
  confirmColor,
  score,
}: ContainerProps) => {
  return (
    <StyledResult
      style={{
        background: `linear-gradient(to right, rgb(${guessClr.red},${
          guessClr.green
        },${guessClr.blue}) 0% 40%, rgb(
          ${
            !hasMoved
              ? "255,255,255"
              : `${confirmColor.red === 256 ? 0 : confirmColor.red},
                ${confirmColor.green === 256 ? 0 : confirmColor.green},
                ${confirmColor.blue === 256 ? 0 : confirmColor.blue}`
          }) 60% 100%)
          `,
      }}
    >
      <p>{score}%</p>
    </StyledResult>
  );
};

export default Result;
