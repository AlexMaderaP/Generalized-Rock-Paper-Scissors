export default class Rules {
  constructor(moves) {
    this.moves = moves;
    this.totalMoves = moves.length;
    this.winningRules = this.calculateRules(moves);
    this.availableMoves = {};
    moves.forEach((move, idx) => {
      this.availableMoves[idx + 1] = move;
    });
    this.availableMoves["0"] = "exit";
    this.availableMoves["?"] = "help";
  }

  calculateRules(moves) {
    const arr = [];
    const n = moves.length;
    const middle = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
      arr[i] = [];
      for (let j = 0; j < n; j++) {
        const value = Math.sign(((j - i + middle + n) % n) - middle);
        arr[i][j] = value;
      }
    }
    return arr;
  }

  getWinner(computerMove, userMove) {
    const userIdx = this.moves.indexOf(userMove);
    const computerIdx = this.moves.indexOf(computerMove);
    const winner = this.winningRules[computerIdx][userIdx];
    if (winner === -1) {
      return "Computer";
    }
    if (winner === 1) {
      return "User";
    }
    return "Draw";
  }

  checkValidInput(input) {
    return this.availableMoves.hasOwnProperty(input);
  }
}
