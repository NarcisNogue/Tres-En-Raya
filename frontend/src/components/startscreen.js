import "./styles/startscreen.css"

function StartScreen(props) {
  return (
    props.currPlayer === null ? 
      <div className="startScreen">
        <input className="startScreenNameInput" placeholder="Elige un nombre" value={props.currPlayerName} onChange={(e) => {props.onChangeName(e)}} disabled={props.currPlayer !== null}></input>
        <button className="startScreenButton" onClick={() => {props.click("X")}} disabled={props.currPlayer !== null || props.currPlayerName === ""}>Jugar como X</button>
        <button className="startScreenButton" onClick={() => {props.click("O")}} disabled={props.currPlayer !== null || props.currPlayerName === ""}>Jugar como O</button>
      </div>
      : null
  );
}

export default StartScreen;