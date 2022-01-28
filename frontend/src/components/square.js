import "./styles/square.css"

function Board(props) {
  return (
      <button className="square" onClick={() => {props.click(props.index)}}>
          {props.value ? props.value === "X" ? <i class="fas fa-times"></i> : <i className="far fa-circle"></i> : null}
      </button>
    );
}

export default Board;