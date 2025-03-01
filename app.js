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

const createHoverEffect = (event) => {
  event.target.style.backgroundColor = 'lightcoral';
};

const appendSquares = () => {
  const container = document.querySelector('.container');
  const squares = createSquares('60', '60', 'lightblue', 256);
  squares.forEach((square) => container.appendChild(square));
  squares.forEach((square) =>
    square.addEventListener('mouseover', (event) => createHoverEffect(event))
  );
};

appendSquares();
