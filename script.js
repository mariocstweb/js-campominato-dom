// 1) Recupero gli elementi
const box = document.getElementById("box");
const button = document.getElementById("button");
const scoreElement = document.getElementById("score");
// 2) Griglia di partenza
let rows = 10;
let score = 0;
let cols = 10;
const totalCells = rows * cols;
const totalBombs = 16;
const maxBombNumber = 100;
let gameEnded = false;
let bombs = [];

// Funzione di fine gioco
const isGameFinished = () => {
  gameEnded = true;
};

// Funzione per creare le celle
const createCell = (num) => {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerText = num;

  const isBomb = bombs.includes(num);

  cell.addEventListener("click", (event) => {
    if (gameEnded) {
      return;
    }

    const clickedCell = event.currentTarget;

    if (clickedCell.classList.contains("clicked")) {
      return;
    }

    if (isBomb) {
      clickedCell.classList.add("bgc-r");
      alert("Hai cliccato una BOMBA!");
      isGameFinished();
    } else {
      clickedCell.classList.add("bgc-g");
      clickedCell.classList.add("clicked");
      // Aggiorna il punteggio
      score++;
      scoreElement.innerText = `Punteggio: ${score}`;
    }
  });

  return cell;
};

// Funzione per creare 16 bombe casuali con un numero diverso tra loro
const generateBombs = () => {
  bombs = [];
  while (bombs.length < totalBombs) {
    const randomNumber = Math.floor(Math.random() * maxBombNumber) + 1;
    if (!bombs.includes(randomNumber)) bombs.push(randomNumber);
  }
  console.log(bombs);
};

// Funzione per creare la griglia
const createGrid = () => {
  box.innerHTML = "";
  generateBombs();

  for (let i = 1; i <= totalCells; i++) {
    const cell = createCell(i);
    box.appendChild(cell);
  }
};

button.addEventListener("click", () => {
  gameEnded = false;
  createGrid();
});
