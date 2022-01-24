import "./styles/board.css"
import React, {useState} from 'react'
import Square from "./square.js"
import StartScreen from "./startscreen.js"
import Utils from "../utils.js"

function Board() {
  const [boardState, setBoardState] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(null);

  const onClickSquare = (square) => {
    if(player === null) return;
    let board = boardState.slice();
    board = Utils.onClickSquare(board, square, player);
    setBoardState(board);
  }

  const onSelectPlayer = (pl) => {
    if(player) return;
    setPlayer(pl);
  }

  return (
    <div className="game">
      <StartScreen click={onSelectPlayer} currPlayer={player}/>
      <p>{player ? "Jugando como " + player : "Selecciona jugador"}</p>
      <div className="board">
        {  
          boardState.map((square, index) => {
            return < Square key={index} value={square} index={index} click={onClickSquare}/>
          })
        }
      </div>
    </div>
  );
}

export default Board;