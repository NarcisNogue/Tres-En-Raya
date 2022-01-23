import "./styles/square.css"

function Board(props) {
  return (
      <button className="square" onClick={() => {props.click(props.index)}}>
          {props.value}
      </button>
    );
}

export default Board;