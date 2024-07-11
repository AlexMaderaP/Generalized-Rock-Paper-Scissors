import readlineSync from "readline-sync";
import Rules from "./Rules.js";

export default class Logger {
  static showHmac(hmac, isKey = false) {
    if (isKey) {
      console.log(`HMAC KEY:\n${hmac}`);
    } else {
      console.log(`HMAC:\n${hmac}`);
    }
  }

  static showMenu(moves) {
    console.log("Available moves:");
    moves.forEach((move, idx) => console.log(`${idx + 1} - ${move}`));
    console.log("0 - exit");
    console.log("? - help");
  }

  static askQuestion(message) {
    return readlineSync.question(message);
  }

  static showResults(userMove, computerMove, winner) {
    console.log(`Your move: ${userMove}`);
    console.log(`Computer move: ${computerMove}`);
    if (winner === "User") {
      console.log("You Win!");
    } else if (winner === "Computer") {
      console.log("You Lose!");
    } else {
      console.log("It's a Draw");
    }
  }
}
