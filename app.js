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
  return squares;
}

const container = document.querySelector(".container");

createGrid();