import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import crossAnimation from "./animations/cross.json";
import ovalAnimation from "./animations/oval.json";
import gridAnimation from "./animations/grid.json";

const Cell = ({ value, onClick }) => {
  const cellStyle = {
    width: "96px",
    height: "96px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <div style={cellStyle} onClick={onClick}>
      {value === "X" && (
        <Lottie
          animationData={crossAnimation}
          loop={false}
          autoplay
          style={{ width: 48, height: 48 }}
        />
      )}
      {value === "O" && (
        <Lottie
          animationData={ovalAnimation}
          loop={false}
          autoplay
          style={{ width: 48, height: 48 }}
        />
      )}
    </div>
  );
};

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (b) => {
    for (let [a, b1, c] of winningCombos) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
    }
    return null;
  };

  const makeAIMove = () => {
    const emptyIndices = board
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    if (emptyIndices.length === 0 || winner) return;

    const randomIndex =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newBoard = [...board];
    newBoard[randomIndex] = "O";

    const win = checkWinner(newBoard);
    setTimeout(() => {
      setBoard(newBoard);
      if (win) setWinner("O");
      else if (!newBoard.includes(null)) setWinner("draw");
      else setCurrentPlayer("X");
    }, 400);
  };

  const handleClick = (i) => {
    if (board[i] || winner || currentPlayer !== "X") return;

    const newBoard = [...board];
    newBoard[i] = "X";

    const win = checkWinner(newBoard);
    setBoard(newBoard);
    if (win) {
      setWinner("X");
    } else if (!newBoard.includes(null)) {
      setWinner("draw");
    } else {
      setCurrentPlayer("O");
    }
  };

  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      makeAIMove();
    }
  }, [currentPlayer]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Крестики-нолики
      </h1>

      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          marginBottom: "1.5rem",
        }}
      >
        {/* background grid animation */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 1,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Lottie
            animationData={gridAnimation}
            loop={false}
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {board.map((val, i) => (
            <Cell key={i} value={val} onClick={() => handleClick(i)} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "1rem", fontSize: "1.125rem" }}>
        {winner === "draw"
          ? "Ничья!"
          : winner
          ? `Победил: ${winner}`
          : currentPlayer === "X"
          ? "Ваш ход"
          : "Ход соперника..."}
      </div>

      <button
        onClick={resetGame}
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "0.5rem 1.5rem",
          borderRadius: "0.375rem",
          fontWeight: "600",
          border: "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#1d4ed8")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#2563eb")
        }
      >
        Заново
      </button>
    </div>
  );
};

export default TicTacToe;
