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
    square.dataset.opacity = 0;
    square.style.backgroundColor = "white";


    square.addEventListener("mouseenter", () => {
      let opacity = parseFloat(square.dataset.opacity);
      if (opacity < 1) {
        opacity += 0.3;
        square.dataset.opacity = opacity.toFixed(1);
        if (opacity === 0.3) {
          const randomColor = getRandomRGB();
          square.style.backgroundColor = `rgba(${randomColor}, ${opacity})`;
        } else {
          const currentColor = getComputedStyle(square).backgroundColor;
          const rgba = currentColor.match(
            /rgba?\((\d+), (\d+), (\d+),? (\d+\.?\d*)?\)/
          );
          if (rgba) {
            const [_, r, g, b] = rgba.map(Number);
            square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          }
        }
      }
    });

    container.appendChild(square);
  }
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `${r}, ${g}, ${b}`;
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


createGrid(2);
