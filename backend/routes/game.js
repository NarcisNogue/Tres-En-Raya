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
    
    /*
    0 - Game hasn't finished
    1 - Draw
    2 - X wins
    3 - O wins
    */
    return 0
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
