(() => {
  const container = document.querySelector('.container');
  const resizeBtn = document.querySelector('.resize');

  const createSquares = (quantity = 16) => {
    const squares = [];
    const realQuantity = quantity * quantity;
    for (let i = 1; i <= quantity * quantity; i++) {
      const square = document.createElement('div');
      square.style.width = `${960 / quantity}px`;
      square.style.height = `${960 / quantity}px`;
      squares.push(square);
    }
    return squares;
  };

  const createHoverEffect = (event) => {
    event.target.style.backgroundColor = 'lightcoral';
  };

  const appendSquares = (size = 16) => {
    const squares = createSquares(size);
    squares.forEach((square) => container.appendChild(square));
    squares.forEach((square) =>
      square.addEventListener('mouseover', (event) => createHoverEffect(event))
    );
  };
  const resizeGread = () => {
    const size = prompt('Enter new size');
    container.innerHTML = '';
    appendSquares(size);
  };
  resizeBtn.addEventListener('click', resizeGread);

  appendSquares(16);
})();
