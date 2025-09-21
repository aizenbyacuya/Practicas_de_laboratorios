// Elementos del DOM
const clickBtn = document.getElementById('clickBtn');
const dblClickBtn = document.getElementById('dblClickBtn');
const hoverBox = document.getElementById('hoverBox');
const myForm = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const keyInput = document.getElementById('keyInput');
const output = document.getElementById('output');

// Evento click
clickBtn.addEventListener('click', () => {
  output.textContent = '¡Botón clickeado!';
});

// Evento doble click
dblClickBtn.addEventListener('dblclick', () => {
  output.textContent = '¡Botón doble clickeado!';
});

// Evento hover
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.backgroundColor = 'lightgreen';
  output.textContent = '¡Hola!';
});

hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = 'lightblue';
  output.textContent = 'Pasa el mouse por aquí';
});

// Evento submit de formulario
myForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recargar la página
  output.textContent = `Hola, ${nameInput.value}! Formulario enviado.`;
  nameInput.value = '';
});

// Evento input (en tiempo real)
nameInput.addEventListener('input', () => {
  output.textContent = `Escribiendo: ${nameInput.value}`;
});

// Evento keydown
keyInput.addEventListener('keydown', (e) => {
  output.textContent = `Presionaste la tecla: ${e.key}`;
});