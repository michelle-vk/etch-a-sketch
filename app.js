function createGrid(numOfSquares = 16) {
  container.innerHTML = "";
  const squares = [];

  for(let i = 0; i < numOfSquares; i++) {
    for(let j = 0; j < numOfSquares; j++) {
      const square = document.createElement("div");
      const sizeOfSquare = `${(960 / numOfSquares) - 2}px`;
      square.style.width = sizeOfSquare;
      square.style.height = sizeOfSquare;
      square.classList.add("square");
      container.appendChild(square);
      // Push the squares in an array so it can be returned and used in another function
      squares.push(square);
    }
    container.append(document.createElement('br'));
  }

  prepareSquares(squares);
  btnClickHandler();
}

function prepareSquares(squares) {
  // Loop over the array squares with forEach array method and set event listener on each square
  squares.forEach(square => {
    // event listener will call fillSquare function when mouse enters a square
    square.addEventListener("mouseover", (event) => fillSquare(event.currentTarget));
  })
}

function fillSquare(square) {
  // add class filled-square for styling when mouse enters a square
  square.classList.add("filled-square");
}

function btnClickHandler() {
  button.addEventListener("click", createFormattedGrid);
}

function createFormattedGrid() {
  let gridSize = prompt("How big do you want the grid to be?");
  Number(gridSize);

  if(gridSize > 100) {
    gridSize = prompt("Please enter a number between 1 and 100");
  } else {
    createGrid(gridSize);
  }
}

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

createGrid();