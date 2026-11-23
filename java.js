// Botón para volver arriba
var boton = document.createElement('button');
boton.id = 'subir';
boton.textContent = '\u2191';
boton.title = 'Volver arriba';
document.body.appendChild(boton);

window.addEventListener('scroll', function () {
  boton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

boton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Revisar el formulario antes de enviarlo
var formulario = document.querySelector('form');
if (formulario) {
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('correo').value.trim();
    if (nombre === '' || correo === '') {
      alert('Por favor escribe tu nombre y tu correo.');
    } else {
      alert('Gracias, ' + nombre + '. Este formulario es de práctica y no envía datos.');
      formulario.reset();
    }
  });
}
