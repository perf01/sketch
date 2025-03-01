const createSquares = (width, height, color, quantity) => {
  const squares = [];
  for (let i = 1; i <= quantity; i++) {
    const square = document.createElement('div');
    square.style.width = `${width}px`;
    square.style.height = `${height}px`;
    square.style.backgroundColor = color;
    squares.push(square);
  }
  return squares;
};
