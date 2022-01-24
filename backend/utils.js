const _ = require("underscore")

class Utils {
  playIA(board, player) {
    // TODO: Temp function to test frontend, plays randomly
    let indexes = []
    board.forEach((square, i) => {
      if(square === null) indexes.push(i);
    });
    let index = _.sample(indexes);
    board[index] = player === "X" ? "O" : "X";
    return board;
  }

  getResult(board) {
      // TODO: Program winning detection logic
      
      /*
      0 - Game hasn't finished
      1 - Draw
      2 - X wins
      3 - O wins
      */
      return 0
  }
}

export default new Utils();