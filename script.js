const cpu = document.getElementById('cpu');
const ram = document.getElementById('ram');
const storage = document.getElementById('storage');
const gpu = document.getElementById('gpu');
const totalPrice = document.getElementById('total-price');
const buyBtn = document.getElementById('buy-btn');

function updatePrice() {
  const cpuPrice = parseInt(cpu.value)||0;
  const ramPrice = parseInt(ram.value)||0;
  const storagePrice = parseInt(storage.value)||0;
  const gpuPrice = parseInt(gpu.value)||0;
  const total = cpuPrice + ramPrice + storagePrice + gpuPrice;
  totalPrice.textContent = total.toLocaleString('es-ES') + ' €';
}

// add event listeners
[cpu, ram, storage, gpu].forEach(el => el.addEventListener('change', updatePrice));

// init
updatePrice();

// Ripple effect on buy button
buyBtn.classList.add('ripple');
buyBtn.addEventListener('click', function(e){
  // create ripple span
  const rect = this.getBoundingClientRect();
  const span = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  span.style.width = span.style.height = size + 'px';
  span.style.left = (e.clientX - rect.left - size/2) + 'px';
  span.style.top = (e.clientY - rect.top - size/2) + 'px';
  this.appendChild(span);
  // remove after animation
  setTimeout(() => span.remove(), 700);

  // small confirmation animation and message
  this.style.pointerEvents = 'none';
  const originalText = this.textContent;
  this.textContent = 'Procesando...';
  setTimeout(()=>{
    this.textContent = '¡Gracias por tu compra!';
    setTimeout(()=>{
      this.textContent = originalText;
      this.style.pointerEvents = '';
    }, 1400);
  }, 900);
});