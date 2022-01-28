// const _ = require("underscore")
const axios = require('axios').default;

class Utils {
  onClickSquare(board, square, player) {
    board[square] = player;
    board = this.playIA(board, player);
    return board;
  }

  async playIA(board, player) {
    // TODO: Put url and port in .env file
    return axios.post('http://localhost:3001/game/getMove', {board, player})
    .then(resp => {
        return resp;
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
  }

  async getRanking() {
    return axios.get('http://localhost:3001/database/getAll')
    .then(resp => {
      return resp;
    });
  }
}

export default new Utils();