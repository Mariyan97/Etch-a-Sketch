const container = document.getElementById("container");
const clearButton = document.getElementById("clear-button");
const slider = document.getElementById("slider");

function createGrid(rows, cols) {
  container.innerHTML = ""; // Изчистваме всички съществуващи елементи

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
slider.addEventListener("input", () => {
  const gridSize = slider.value;
  clearGrid();
  createGrid(gridSize, gridSize);
});

createGrid(16, 16);

clearButton.addEventListener("click", clearGrid);
