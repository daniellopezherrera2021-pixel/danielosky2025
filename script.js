const cpu = document.getElementById('cpu');
const ram = document.getElementById('ram');
const storage = document.getElementById('storage');
const gpu = document.getElementById('gpu');
const totalPrice = document.getElementById('total-price');
const buyBtn = document.getElementById('buy-btn');

function updatePrice() {
  const cpuPrice = parseInt(cpu.value);
  const ramPrice = parseInt(ram.value);
  const storagePrice = parseInt(storage.value);
  const gpuPrice = parseInt(gpu.value);

  const total = cpuPrice + ramPrice + storagePrice + gpuPrice;
  totalPrice.textContent = `$${total}`;
}

// Evento para actualizar cada vez que cambie una opción
[cpu, ram, storage, gpu].forEach(select => {
  select.addEventListener('change', updatePrice);
});

// Calcular al cargar la página
updatePrice();

// Simulación del botón "comprar"
buyBtn.addEventListener('click', () => {
  alert(`Gracias por tu compra. Total: ${totalPrice.textContent}`);
});
