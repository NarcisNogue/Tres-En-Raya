const _ = require("underscore")

class Utils {
  onClickSquare(board, square, player) {
    board[square] = player;
    board = this.playIA(board, player);
    return board;
  }

  playIA(board, player) {
    // Temp function to test frontend, plays randomly
    let indexes = []
    board.forEach((square, i) => {
      if(square === null) indexes.push(i);
    });
    let index = _.sample(indexes);
    board[index] = player === "X" ? "O" : "X";
    return board;
  }
}

export default new Utils();