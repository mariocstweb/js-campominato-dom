// 1) Recupero gli elementi
const box = document.getElementById("box");
const button = document.getElementById("button");
// 2) Griglia di partenza
let rows = 10;
let cols = 10;
const totalCells = rows * cols;

// FUNZIONI:

// Funzione per creare le celle
const createCell = (num) => {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerText = num;

  cell.addEventListener("click", () => {
    // Ottieni il numero della cella cliccata
    const cellNumber = cell.innerText;

    // Stampa il numero della cella nella console
    console.log("Hai cliccato la cella numero:", cellNumber);

    cell.classList.toggle("bgc-g");
  });

  return cell;
};

// Funzione per creare la griglia
const createGrid = () => {
  box.innerHTML = "";

  for (let i = 1; i <= totalCells; i++) {
    const cell = createCell(i);
    box.appendChild(cell);
  }
};

button.addEventListener("click", () => {
  createGrid();
});
