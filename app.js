const container = document.getElementById("container");
const clearButton = document.getElementById("clear-button");
const slider = document.getElementById("slider");
const colorPicker = document.getElementById("color-picker");
const gridInfo = document.getElementById("grid-info");
const colorModeButton = document.getElementById("color-mode-button");
const eraserButton = document.getElementById("eraser-button");

let currentColor = colorPicker.value;
let isColorMode = true;

function createGrid(rows, cols) {
  clearGrid();
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.addEventListener("mouseover", () => {
      if (isColorMode) {
        cell.style.backgroundColor = currentColor;
      } else {
        cell.style.backgroundColor = "white";
      }
    });
  }

  gridInfo.textContent = `${rows}x${cols}`;
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

colorPicker.addEventListener("input", () => {
  currentColor = colorPicker.value;
});

colorModeButton.addEventListener("click", () => {
  isColorMode = true;
});

eraserButton.addEventListener("click", () => {
  isColorMode = false;
});

function handleButtonClick(button) {
  button.addEventListener("click", () => {
    const isActive = button.classList.contains("active-button");

    if (isActive) {
      button.classList.remove("active-button");
    } else {
      button.classList.add("active-button");
    }
  });
}

handleButtonClick(colorModeButton);
handleButtonClick(eraserButton);
