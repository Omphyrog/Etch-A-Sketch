for (let i = 0; i < 256; i++) {
  makeGrid();
}

function makeGrid() {
  const grid = document.createElement("div");
  grid.classList.add("gridItems");

  const container = document.querySelector(".grid-container");
  container.appendChild(grid);

  if (true) {
    grid.addEventListener("mousemove", function () {
      grid.style.backgroundColor = "red";
    });
  }
}
