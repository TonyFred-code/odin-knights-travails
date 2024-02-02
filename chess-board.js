const Node = require('./chess-board-node');

class ChessBoard {
  #BOARD_SIZE = 8;

  constructor() {
    this.vertices = [];
    this.#buildBoard();
  }

  #buildBoard() {
    for (let y = 0; y < this.#BOARD_SIZE; y++) {
      for (let x = 0; x < this.#BOARD_SIZE; x++) {
        const node = new Node(x, y);
        this.#addPossibleMoves(node);
        this.vertices[y * this.#BOARD_SIZE + x] = node;
      }
    }
  }

  #addPossibleMoves(node) {
    const address = node.address;
    const [x, y] = address;

    const moves = [
      [x - 1, y + 2],
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x - 1, y - 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y + 1],
      [x - 2, y - 1],
    ];

    for (const move of moves) {
      if (this.isValid(move)) {
        node.possibleMoves.push(move);
      }
    }
  }

  isValid([x, y]) {
    return x >= 0 && x < this.#BOARD_SIZE && y >= 0 && y < this.#BOARD_SIZE;
  }

  isSamePoint([x, y], [a, b]) {
    if (!this.isValid([x, y]) || !this.isValid([a, b])) return false;

    return x === a && y === b;
  }

  getMoves([x, y]) {
    if (!this.isValid([x, y])) return null;

    return this.vertices[y * this.#BOARD_SIZE + x];
  }
}

module.exports = ChessBoard;
