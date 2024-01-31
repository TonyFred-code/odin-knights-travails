class Node {
    constructor(x, y) {
        this.address = [x, y];
        this.possibleMoves = [];
    }
}

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
        const upperLeft = [x-1, y + 2]
        console.log(upperLeft);
    }
}

const board = new ChessBoard();
console.log(board.vertices);