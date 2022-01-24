import "./styles/startscreen.css"

function StartScreen(props) {
  return (
      <div className="startScreen">
        <button className="startScreenButton" onClick={() => {props.click("X")}} disabled={props.currPlayer != null}>Jugar como X</button>
        <button className="startScreenButton" onClick={() => {props.click("O")}} disabled={props.currPlayer != null}>Jugar como O</button>
      </div>
    );
}

export default StartScreen;