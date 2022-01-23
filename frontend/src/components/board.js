import "./styles/board.css"
import React, {useState} from 'react'
import Square from "./square.js"
import Utils from "../utils.js"

function Board() {
  const [boardState, setBoardState] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState("X");

  

  const onClickSquare = (square) => {
    let board = boardState.slice();
    board = Utils.onClickSquare(board, square, player);
    setBoardState(board);
  }

  return (
    <div className="board">
    {  
      boardState.map((square, index) => {
        return < Square key={index} value={square} index={index} click={onClickSquare}/>
      })
    }
    </div>
  );
}

export default Board;