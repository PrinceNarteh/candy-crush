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

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

export default App;
