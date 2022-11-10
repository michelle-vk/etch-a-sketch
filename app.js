function createGrid() {
  container.innerHTML = "";
  const squares = [];

  for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      const sizeOfSquare = `${ 960 / gridSize }px`;
      square.style.width = sizeOfSquare;
      square.style.height = sizeOfSquare;
      square.classList.add("square");
      container.appendChild(square);
      // Push the squares in an array so it can be returned and used in another function
      squares.push(square);
    }
  }
  prepareSquares(squares);

  chooseGridButton.addEventListener("click", createFormattedGrid);
  clearGridButton.addEventListener("click", clearGrid);
}

function prepareSquares(squares) {
  // Loop over the array squares with forEach array method and set event listener on each square
  squares.forEach(square => {
    // Event listener will call fillSquare function when mouse enters a square
    square.addEventListener("mouseover", (event) => fillSquare(event.currentTarget));
  })
}

function fillSquare(square) {
  // Create random background color when mouse enters a square
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  square.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function createFormattedGrid() {
  gridSize = prompt("How big do you want the grid to be? Choose a number between 0 and 100");
  Number(gridSize);

  while(gridSize > 100 || gridSize <= 0) {
    gridSize = prompt("Please enter a number between 0 and 100");
  } 
  createGrid();
}

function clearGrid() {
  createGrid();
}

let gridSize = 16;
const container = document.querySelector(".container");
const chooseGridButton = document.querySelector(".btn-grid");
const clearGridButton = document.querySelector(".btn-clear");

createGrid();