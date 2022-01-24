import "./styles/startscreen.css"

function StartScreen(props) {
  return (
      <div className="startScreen">
        <input className="startScreenNameInput" onChange={(e) => {props.onChangeName(e)}} disabled={props.currPlayer !== null}></input>
        <button className="startScreenButton" onClick={() => {props.click("X")}} disabled={props.currPlayer !== null || props.currPlayerName === null}>Jugar como X</button>
        <button className="startScreenButton" onClick={() => {props.click("O")}} disabled={props.currPlayer !== null || props.currPlayerName === null}>Jugar como O</button>
      </div>
    );
}

export default StartScreen;