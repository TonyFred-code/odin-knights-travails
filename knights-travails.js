const ChessBoard = require('./chess-board');

function KnightMoves(start, end) {
  const board = new ChessBoard();

  if (!board.isValid(start) || !board.isValid(end)) return null;

  const paths = [];
  const stack = [];

  const visited = {
    [start]: true,
  };

  stack.push([start, [start]]);

  while (stack.length > 0) {
    const [current, path] = stack.pop();

    const node = board.getMoves([...current]);
    const moves = node.possibleMoves;

    for (const move of moves) {
      if (!visited[move]) {
        stack.push([move, [...path, move]]);
        visited[move] = true;
      }

      if (board.isSamePoint([...move], [...end])) {
        paths.push([...path, move]);
      }
    }
  }

  for (const path of paths) {
    const pathLength = path.length;

    console.log(`You made it in ${pathLength - 1} moves! Here's your path: \n`);

    for (const move of path) {
      console.log(move);
    }
  }
}

KnightMoves([3, 3], [0, 0]);
