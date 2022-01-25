import "./styles/board.css"
import React, {useState} from 'react'
import Square from "./square.js"
import StartScreen from "./startscreen.js"
import FooterButtons from "./footerbuttons.js"
import Utils from "../utils.js"

function Board() {
  const [boardState, setBoardState] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [gameState, setGameState] = useState(0)
  /* GameState
    0 - Game hasn't finished
    1 - Draw
    2 - X wins
    3 - O wins
    */


  const onClickSquare = (square) => {
    if(player === null || boardState[square] !== null || gameState !== 0) return;
    let board = boardState.slice();
    board[square] = player;
    Utils.playIA(board, player).then(res => {
      if(res.statusText === "OK") {
        if(res.data.result !== 0) {
          setGameState(res.data.result);
          console.log("game ended, result: " + res.data.result);
        }
        setBoardState(res.data.board);
      } else {
        console.error("Server not available");
      }
      console.log(res);
    });
  }

  const onSelectPlayer = (pl) => {
    if(player) return;
    setPlayer(pl);
    if(pl === "O") { //If we are O, computer plays first
      let board = boardState.slice();
      Utils.playIA(board, pl).then(res => {
        if(res.statusText === "OK") {
          setBoardState(res.data.board);
        }
      });
      // setBoardState(board);
    }
  }

  const onChangeName = (e) => {
    setPlayerName(e.target.value);
  }

  const onReset = () => {
    setPlayerName("");
    setBoardState(Array(9).fill(null));
    setPlayer(null);
    setGameState(0);
  }

  return (
    <div className="game">
      <StartScreen click={onSelectPlayer} onChangeName={onChangeName} currPlayer={player} currPlayerName={playerName}/>
      <p>{player ? "Jugando como " + player : "Selecciona jugador"}</p>
      <p>{playerName && player ? "Nombre: " + playerName : null}</p>
      <div className="board">
        {  
          boardState.map((square, index) => {
            return < Square key={index} value={square} index={index} click={onClickSquare} />
          })
        }
      </div>
      <FooterButtons onReset={onReset}/>
    </div>
  );
}

export default Board;