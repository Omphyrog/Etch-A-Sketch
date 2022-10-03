let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

for (let i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.classList.add("gridItems");
  grid.addEventListener("mouseover", changeColor);
  grid.addEventListener("mousedown", changeColor);

  const container = document.querySelector(".grid-container");
  container.appendChild(grid);
}

function changeColor(e) {
  if (mouseDown) {
    e.target.style.backgroundColor = "red";
  }
}
