const container = document.getElementById("container");
const clearButton = document.getElementById("clear-button");

function createGrid(rows, cols) {
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
  }
}

function clearGrid() {
  const cells = container.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

clearButton.addEventListener("click", clearGrid);

createGrid(16, 16); // default 16x16 grid!
