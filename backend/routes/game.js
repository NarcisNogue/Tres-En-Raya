var express = require('express');
var router = express.Router();
const _ = require("underscore")

/* GET move. */
router.get('/getMove', function(req, res, next) {
  console.log(req.body.board);
  if(_.isUndefined(req.body.board) || !_.isArray(JSON.parse(req.body.board)) || JSON.parse(req.body.board).length != 9) {
    res.status(400).send("Board must be an array of lenght 9");
  }
  let board = JSON.parse(req.body.board);
});

module.exports = router;
