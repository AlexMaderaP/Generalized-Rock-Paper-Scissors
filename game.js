import Hmac from "./Classes/Hmac.js";
import Logger from "./Classes/Logger.js";
import RandomGenerator from "./Classes/RandomGenerator.js";
import Rules from "./Classes/Rules.js";
import TableGenerator from "./Classes/TableGenerator.js";
import Validator from "./Classes/Validator.js";

function main(moves) {
  Validator.validate(moves);

  // Calculate rules of winning
  const rules = new Rules(moves);

  // Generate random key of 256 bits
  // Generate random move from computer
  const randValues = new RandomGenerator(moves);
  const computerMove = randValues.move;
  const hmacKey = randValues.key;

  // Calculate HMAC from the move with the generated key
  const hmacToUser = Hmac.generate(hmacKey, computerMove);

  // Shows HMAC to user
  Logger.showHmac(hmacToUser);

  // Get User input until correct
  let userMoveNumber = "";
  do {
    // When select help, display table
    if (userMoveNumber === "?") {
      const helpTable = new TableGenerator(moves, rules.winningRules);
      helpTable.printTable();
    }
    Logger.showMenu(moves);
    userMoveNumber = Logger.askQuestion("Enter your move: ");
  } while (!rules.checkValidInput(userMoveNumber) || userMoveNumber === "?");

  if (userMoveNumber === "0") {
    process.exit(1);
  }

  const userMove = rules.availableMoves[userMoveNumber];
  const winner = rules.getWinner(computerMove, userMove);
  Logger.showResults(userMove, computerMove, winner);
  Logger.showHmac(hmacKey, true);
}

main(process.argv.slice(2));
