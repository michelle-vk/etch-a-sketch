function createGrid() {
  const squares = [];
  for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
      // Push the squares in an array so it can be returned and used in another function
      squares.push(square);
    }
    container.append(document.createElement('br'));
  }
  drawLineOfSquares(squares)
}

function drawLineOfSquares(squares) {
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

const container = document.querySelector(".container");

createGrid();