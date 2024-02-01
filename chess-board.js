const Node = require('./chess-board-node');

class ChessBoard {
  constructor() {
    this.vertices = [];
    this.#buildBoard();
  }

  #buildBoard() {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const node = new Node(x, y);
        this.#addPossibleMoves(node);
        this.vertices.push(node);
      }
    }
  }

  #addPossibleMoves(node) {
    const address = node.address;
    const [x, y] = address;

    const upperLeft = [x - 1, y + 2];
    if (this.isValid(upperLeft)) {
      node.possibleMoves.push(upperLeft);
    }

    const upperRight = [x + 1, y + 2];
    if (this.isValid(upperRight)) {
      node.possibleMoves.push(upperRight);
    }

    const lowerRight = [x + 1, y - 2];
    if (this.isValid(lowerRight)) {
      node.possibleMoves.push(lowerRight);
    }

    const lowerLeft = [x - 1, y - 2];
    if (this.isValid(lowerLeft)) {
      node.possibleMoves.push(lowerLeft);
    }

    const rightUpper = [x + 2, y + 1];
    if (this.isValid(rightUpper)) {
      node.possibleMoves.push(rightUpper);
    }

    const rightLower = [x + 2, y - 1];
    if (this.isValid(rightLower)) {
      node.possibleMoves.push(rightLower);
    }

    const leftUpper = [x - 2, y + 1];
    if (this.isValid(leftUpper)) {
      node.possibleMoves.push(leftUpper);
    }

    const leftLower = [x - 2, y - 1];
    if (this.isValid(leftLower)) {
      node.possibleMoves.push(leftLower);
    }
  }

  isValid([x, y]) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
  }
}


module.exports = ChessBoard;