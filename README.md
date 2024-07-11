# Generalized Rock-Paper-Scissors Game

This project implements a generalized rock-paper-scissors game that supports an arbitrary odd number of non-repeating moves. The game can be run from the command line with specified moves, and it determines the winner based on the order of the moves provided.

## Features

- Supports any odd number (≥ 3) of non-repeating moves.
- Accepts moves as command line arguments.
- Provides error messages for incorrect arguments.
- Determines victory based on the order of moves.

## Installation

1. Clone the repository
2. Install dependencies:

```
npm install
```

## Usage

To run the game, use the following command format:

```
node game.js move1 move2 move3 ...
```

For a standard Rock-Paper-Scissors game:

```
node game.js rock paper scissors
```

For an extended Rock-Paper-Scissors-Lizard-Spock game:

```
node game.js rock paper scissors lizard spock
```

## Error Handling

If the arguments are incorrect, the program will display an error message indicating what is wrong and provide an example of correct usage. Examples of incorrect arguments include:

- Providing an even number of moves.
- Providing fewer than 3 moves.
- Providing repeating moves.

## Rules

The victory is defined as follows:

- Half of the next moves in the circle win.
- Half of the previous moves in the circle lose.
