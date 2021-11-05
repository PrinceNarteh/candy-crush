import React, { useEffect, useState } from "react";

const width = 8;
const candyColors = ["red", "green", "blue", "yellow", "orange", "purple"];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState<
    string[]
  >([]);

  const createBoard = () => {
    const randomColorArrangement: string[] = [];

    for (let i = 0; i < width * width; i++) {
      const randomNumber = Math.floor(Math.random() * candyColors.length);
      const randomColor = candyColors[randomNumber];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  const checkForColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentColorArrangement[i];

      if (
        columnOfThree.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        columnOfThree.forEach(
          (square) => (currentColorArrangement[square] = "")
        );
      }
    }
  };

  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfThree();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [checkForColumnOfThree]);

  console.log(currentColorArrangement);

  return (
    <div className="app">
      <h1>Candy Crush</h1>
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img key={index} style={{ backgroundColor: candyColor }} />
        ))}
      </div>
    </div>
  );
};

export default App;
