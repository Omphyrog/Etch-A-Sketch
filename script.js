let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid(size) {
  const grid = document.querySelector(".grid");
  const squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const resetBtn = document.getElementById("reset-btn");
  resetBtn.addEventListener("click", resetGrid);

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.style.border = "1px solid black";

    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mousedown", changeColor);
    square.addEventListener("mouseup", changeColor);

    grid.insertAdjacentElement("beforeend", square);
  }
}

function changeColor(e) {
  const color = document.getElementById("color-picker");

  if (mouseDown) {
    e.target.style.backgroundColor = color.value;
  }
}

function resetGrid() {
  const grid = document.querySelector(".grid");
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

function changeGridSize() {
  const slider = document.getElementById("myRange");
  const output = document.getElementById("demo");

  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerHTML = this.value;
    createGrid(this.value);
  };
}

changeGridSize();
createGrid(16);
