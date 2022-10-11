let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let choice = 0;

const colorMode = document.getElementById("color");
const eraser = document.getElementById("eraser");
const rainbow = document.getElementById("rainbow");

colorMode.addEventListener("click", () => {
  choice = 1;
  colorMode.style.backgroundColor = "rgba(188, 122, 241, 0.904)";
  eraser.style.backgroundColor = "rgba(165, 55, 253, 0.8)";
  rainbow.style.backgroundColor = "rgba(165, 55, 253, 0.8)";
});

eraser.addEventListener("click", () => {
  choice = 2;
  colorMode.style.backgroundColor = "rgba(165, 55, 253, 0.8)";
  eraser.style.backgroundColor = "rgba(188, 122, 241, 0.904)";
  rainbow.style.backgroundColor = "rgba(165, 55, 253, 0.8)";
});

rainbow.addEventListener("click", () => {
  choice = 3;
  colorMode.style.backgroundColor = "rgba(165, 55, 253, 0.8)";
  eraser.style.backgroundColor = "rgba(165, 55, 253, 0.8))";
  rainbow.style.backgroundColor = "rgba(188, 122, 241, 0.904)";
});

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
    square.classList.add("square");

    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mousedown", changeColor);
    square.addEventListener("mouseup", changeColor);

    grid.insertAdjacentElement("beforeend", square);
  }
}

function changeColor(e) {
  const colorPicker = document.getElementById("color-picker");

  if (mouseDown && choice == 1) {
    e.target.style.backgroundColor = colorPicker.value;
  } else if (mouseDown && choice == 2) {
    e.target.style.backgroundColor = "white";
  } else if (mouseDown && choice == 3) {
    e.target.style.backgroundColor = randomColor();
  }
}

function randomColor() {
  let random = Math.floor(Math.random() * 16777215).toString(16);
  let color = "#" + random;

  return color;
}

function resetGrid() {
  const grid = document.querySelector(".grid");
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

function changeGridSize() {
  const slider = document.getElementById("myRange");
  const output = document.querySelector(".demo");

  output.innerText = `${slider.value} x ${slider.value}`; // Display the default slider value

  slider.oninput = function () {
    output.innerHTML = this.value;
    output.innerText = `${slider.value} x ${slider.value}`;

    createGrid(this.value);
  };
}

changeGridSize();
createGrid(33);
