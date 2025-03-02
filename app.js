(() => {
  const container = document.querySelector('.container');
  const resizeBtn = document.querySelector('.resize');

  const getRandomColor = () => {
    const values = [];
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * 256);
      values.push(randomNumber);
    }
    return values;
  };
  const createSquares = (quantity = 16) => {
    const squares = [];
    for (let i = 1; i <= quantity * quantity; i++) {
      const square = document.createElement('div');
      square.style.width = `${660 / quantity}px`;
      square.style.height = `${660 / quantity}px`;
      square.style.opacity = 0.2;
      squares.push(square);
    }
    return squares;
  };

  const createHoverEffect = (event) => {
    const random = getRandomColor();
    if (event.target.style.backgroundColor) {
      event.target.style.opacity = +event.target.style.opacity + 0.1;
    } else {
      event.target.style.background = `RGB(${random.toString()})`;
      event.target.style.opacity = +event.target.style.opacity + 0.1;
    }
  };

  const appendSquares = (size = 16) => {
    const squares = createSquares(size);
    squares.forEach((square) => container.appendChild(square));
    squares.forEach((square) =>
      square.addEventListener('mouseover', (event) => createHoverEffect(event))
    );
  };
  const resizeGrid = () => {
    const size = prompt('Enter new size');
    if (+size > 100) return alert('Too much');
    if (+size < 5) return alert('Too few');
    container.innerHTML = '';
    appendSquares(size);
  };
  resizeBtn.addEventListener('click', resizeGrid);

  appendSquares(16);
})();
