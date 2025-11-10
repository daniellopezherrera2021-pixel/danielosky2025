const colorButtons = document.querySelectorAll(".colors button");
const productImage = document.getElementById("product-image");
const memorySelect = document.getElementById("memory");
const storageSelect = document.getElementById("storage");
const summaryText = document.getElementById("summary-text");
const darkToggle = document.getElementById("toggle-dark");

const images = {
  azul: "imac-azul.jpg",
  verde: "imac-verde.jpg",
  rosa: "imac-rosa.jpg"
};

colorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;
    productImage.src = images[color];
    updateSummary();
  });
});

memorySelect.addEventListener("change", updateSummary);
storageSelect.addEventListener("change", updateSummary);

function updateSummary() {
  const color = [...colorButtons].find(btn => btn.classList.contains("selected"))?.dataset.color || "azul";
  const memory = memorySelect.value;
  const storage = storageSelect.value;
  summaryText.textContent = Has elegido un iMac ${color} con ${memory} de memoria y ${storage} de almacenamiento.;
}

colorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    colorButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});