const products = {
  luna: { title: 'Luna Serena', image: 'assets/vela-luna-serena.jpg', alt: 'Vela Luna Serena encendida', description: 'Una luz suave, tonos cálidos y un momento para volver a ti. Luna Serena es la primera mirada a nuestra propuesta de velas aromáticas. Compartiremos sus notas aromáticas y características cuando la colección esté definida.' },
  regalo: { title: 'Un detalle que permanece', image: 'assets/vela-estuche.jpg', alt: 'Vela Casa Arcana con estuche rosa', description: 'Una presentación pensada para hacer especial el gesto de regalar. Descubre la inspiración de Casa Arcana: una vela, un estuche y la intención de crear un recuerdo. Presentación final por confirmar.' }
};
const dialog = document.querySelector('#product-dialog');
let trigger;
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
  const product = products[button.dataset.product];
  trigger = button;
  document.querySelector('#dialog-title').textContent = product.title;
  document.querySelector('#dialog-description').textContent = product.description;
  const image = document.querySelector('#dialog-image');
  image.src = product.image; image.alt = product.alt;
  dialog.showModal();
}));
document.querySelectorAll('.close-dialog, .close-action').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if(event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => trigger?.focus());
document.querySelector('#year').textContent = new Date().getFullYear();
