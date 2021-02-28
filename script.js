const gridContainer = document.querySelector("#container");
const button = document.getElementById("changeSize");

const defaultGrid = () => {
  gridSize(16);
  gridFill(16);
};

const gridSize = (num) => {
  gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
};

const gridFill = (num) => {
  for (let i = 1; i <= num * num; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", randomColor);
    gridContainer.appendChild(div);
  }
};

function randomColor() {
  const randomR = Math.floor(Math.random() * 255) + 1;
  const randomG = Math.floor(Math.random() * 255) + 1;
  const randomB = Math.floor(Math.random() * 255) + 1;
  this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

const changeSize = () => {
  const size = parseInt(prompt("Input number between 1 - 30"));

  if (isNaN(size)) {
    changeSize();
  }

  if (size > 30) {
    changeSize();
  }
  clearGrid();
  gridSize(size);
  gridFill(size);
};

const clearGrid = () => {
  const gridItems = document.querySelectorAll("#container div");
  gridItems.forEach((item) => {
    gridContainer.removeChild(item);
  });
};

window.addEventListener("load", defaultGrid);
button.addEventListener("click", changeSize);
