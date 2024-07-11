import crypto from "crypto";

export default class RandomGenerator {
  constructor(moves) {
    this.key = this.generateRandomKey();
    this.move = this.generateRandomMove(moves);
  }

  generateRandomKey() {
    return crypto.randomBytes(32).toString("hex");
  }

  generateRandomMove(moves) {
    return moves[this.getRandomInt(moves.length)];
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
