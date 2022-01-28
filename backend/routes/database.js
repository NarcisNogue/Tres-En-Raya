var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getAll', function(req, res, next) {
  // TODO: Access database and implement
  let result = [{
      id: "afafa",
      player: "HEYHEYHEY",
      victories: -2,
      draws: 5,
      losses: 9999
  }];
  res.send(result);
});

module.exports = router;
