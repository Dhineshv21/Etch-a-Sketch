const container = document.querySelector(".container");
const newGridButton = document.getElementById("newGridButton");

function createGrid(squaresPerSide) {
  container.innerHTML = "";

  const squareSize = 960 / squaresPerSide;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      square.classList.add("hovered");
    });

    container.appendChild(square);
  }
}

newGridButton.addEventListener("click", () => {
  let squaresPerSide = prompt("Enter number of squares per side (1-100):");
  squaresPerSide = parseInt(squaresPerSide);
  if (squaresPerSide && squaresPerSide > 0 && squaresPerSide <= 100) {
    createGrid(squaresPerSide);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

createGrid(16);
