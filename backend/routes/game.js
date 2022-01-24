var express = require('express');
var router = express.Router();
const _ = require("underscore");
// *********************************************
// PRIVATE FUNCTIONS
// *********************************************

function playIA(board, player) {
  // TODO: Temp function to test frontend, plays randomly
  console.log("HEY")
  let indexes = []
  board.forEach((square, i) => {
    if(square === null) indexes.push(i);
  });
  let index = _.sample(indexes);
  board[index] = player === "X" ? "O" : "X";
  return board;
}

function getResult(board) {
    // TODO: Program winning detection logic
    let lines = [
      // Horizontal
      [0,1,2],
      [3,4,5],
      [6,7,8],
      // Vertical
      [0,3,6],
      [1,4,7],
      [2,5,8],
      // Diagonal
      [0,4,8],
      [2,4,6]
    ]

    var res = 0;

    lines.forEach(line => {
      if(!_.isNull(board[line[0]]) && board[line[0]] === board[line[1]] && board[line[1]] === board[line[2]]) {
        res = board[line[0]] === "X" ? 2: 3
      }
    })

    // If every square is full but still no winner it's a draw
    if(_.filter(lines, x => {return !_.isNull(x)}).length === 0 && res === 0) {
      res = 1;
    }
    
    /*
    0 - Game hasn't finished
    1 - Draw
    2 - X wins
    3 - O wins
    */
    return res;
}

// ******************************************
// PUBLIC FUNCTIONS
// ******************************************

/* GET move. */
router.post('/getMove', function(req, res, next) {
  // console.log(req.body.board);
  // console.log(req.body)
  if(_.isUndefined(req.body.board) || !_.isArray(req.body.board) || req.body.board.length != 9) {
    res.status(400).send("Board must be an array of lenght 9");
  }
  if(_.isUndefined(req.body.player) || (req.body.player !== "X" && req.body.player !== "O")) {
    res.status(400).send("Player must be either X or O");
  }
  let board = req.body.board;
  let player = req.body.player;
  let ret = {}
  ret.board = playIA(board, player);
  ret.result = getResult(board);
  res.send(ret);
});

module.exports = router;
