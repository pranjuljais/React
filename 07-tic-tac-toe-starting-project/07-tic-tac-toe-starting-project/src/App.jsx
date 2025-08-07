import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/log";
import GameOver from "./components/GameOver"
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedactivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}





function App() {
  const [players,setPlayers]= useState({
    'X':'Player 1',
    'O':'Player 2'
  })
  const [gameTurn, setGameTurn] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = derivedactivePlayer(gameTurn);
  //const [hasWinner, setHasWinner] = useState(false);
  let gameBoard = [...initialGameBoard.map(arr => [...arr])];

  for (const t of gameTurn) {
    const { square, player } = t;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const c of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[c[0].row][c[0].column];
    const secondSquareSymbol = gameBoard[c[1].row][c[1].column];
    const thirdSquareSymbol = gameBoard[c[2].row][c[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
const draw = gameTurn.length === 9 && !winner;

  
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((cur) => (cur === "X" ? "O" : "X"));
    setGameTurn((prevturn) => {
      const currentPlayer = derivedactivePlayer(prevturn);

      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevturn,
      ];
      return updatedTurn;
    });
  }

function handleRestart() {
  setGameTurn([]);
}

function handlePlayerNameChange(symbol,newName){
  setPlayers(prev => {
    return{
      ...prev,
[symbol]:newName
    };
  });
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player-1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          ></Player>
          <Player
            initialName="Player-2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}

          ></Player>
        </ol>
                {(winner || draw) && <GameOver winner={winner} onRestart={handleRestart}></GameOver>}

        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        ></GameBoard>
      </div>
      <Log turns={gameTurn}></Log>
    </main>
  );
}

export default App;
