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

  const pathLengths = {};
  let shortestPathLength = Infinity;
  for (const path of paths) {
    const pathLength = path.length;
    const moves = pathLength - 1;

    if (pathLengths[moves]) {
      pathLengths[moves].push(path)
    } else {
      pathLengths[moves] = [[...path]]
    }

    if (moves < shortestPathLength) shortestPathLength = moves
  }


  const shortestPaths = pathLengths[shortestPathLength];
  const shortestPathsLen = shortestPaths.length;
  let pathCount = 0;

  for (const path of shortestPaths) {
    console.log(`Path ${++pathCount} of ${shortestPathsLen}`);
    console.log(`You made it in ${shortestPathLength} move${shortestPathLength > 1 ? 's' : ''}! Here's your path: `);
    for (const move of path) {
      console.log(move)
    }
    console.log('\n')
  }

}

KnightMoves([3, 3], [0, 0]);
