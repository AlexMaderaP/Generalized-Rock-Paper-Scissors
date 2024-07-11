export default class Validator {
  static validate(moves) {
    try {
      this.minimumMoves(moves, "You should give at least 3 different moves.");
      this.oddMoves(moves, "You should give an odd number of moves.");
      this.differentMoves(moves, "You should not repeat moves.");
    } catch (error) {
      if (error instanceof ValidationError) {
        console.error(
          "\x1b[31m%s\x1b[0m",
          "Validation Error: " + error.message
        );
        console.error("\x1b[33m%s\x1b[0m", "Examples of running game: "); // Yellow color
        console.error("node game.js rock papper scissors");
        console.error("node game.js Rock Paper Scissors Lizard Spock");
        console.error("node game.js 1 2 3 4 5 6 7 8 9");
        process.exit(1);
      } else {
        console.error(error.stack);
        process.exit(1);
      }
    }
  }

  static minimumMoves(moves, message) {
    if (moves.length < 3) {
      throw new ValidationError(message);
    }
  }

  static oddMoves(moves, message) {
    if (moves.length % 2 === 0) {
      throw new ValidationError(message);
    }
  }

  static differentMoves(moves, message) {
    if (moves.length !== new Set(moves).size) {
      throw new ValidationError(message);
    }
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
