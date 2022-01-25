var express = require('express');
const { max, min } = require('underscore');
var router = express.Router();
const _ = require("underscore");
// *********************************************
// PRIVATE FUNCTIONS
// *********************************************

function evalPos(board, isX, indexes, depth) { // MinMax, X wants to maximize O wants to minimize
  // Basecase
  let result = getResult(board)
  if(result) {
    switch(result){
      case 1: // Draw
        return 0;
      case 2: // X wins
        return 1 / depth;
      case 3: // O wins
        return -1 / depth;
    }
  }
  // Evaluate positions
  let positions = [];
  indexes.forEach((i, index) => {
    let b = board.slice();
    b[i] = isX ? "X" : "O";
    let ind = indexes.slice();
    ind.splice(index, 1);
    positions.push(evalPos(b, !isX, ind, depth+1));
  })

  return isX ? max(positions) : min(positions);
}

function playIA(board, player) {
  let indexes = []
  board.forEach((square, i) => {
    if(square === null) indexes.push(i);
  });

  // Get best index
  let best = player === "X" ? 2 : -2;
  let bestIndex = null;
  indexes.forEach((i, index) => {
    let b = board.slice();
    b[i] = player === "X" ? "O" : "X";
    let ind = indexes.slice();
    ind.splice(index, 1);
    if(player === "X") {
      let eval = evalPos(b, true, ind, 1);
      if(eval < best) {
        best = eval;
        bestIndex = i;
      }
    } else {
      let eval = evalPos(b, false, ind, 1);
      if(eval > best) {
        best = eval;
        bestIndex = i;
      }
    }
  });
  board[bestIndex] = player === "X" ? "O" : "X";
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
    if(_.filter(board, x => {return _.isNull(x)}).length === 0 && res === 0) {
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
  if(_.isUndefined(req.body.board) || !_.isArray(req.body.board) || req.body.board.length != 9) {
    res.status(400).send("Board must be an array of lenght 9");
  }
  if(_.isUndefined(req.body.player) || (req.body.player !== "X" && req.body.player !== "O")) {
    res.status(400).send("Player must be either X or O");
  }
  let board = req.body.board;
  let player = req.body.player;
  let ret = {}
  
  let currResult = getResult(board);
  if(currResult) {
    ret.board = board;
    ret.result = currResult;
  } else {
    ret.board = playIA(board, player);
    ret.result = getResult(board);
  }
  res.send(ret);
});

module.exports = router;
