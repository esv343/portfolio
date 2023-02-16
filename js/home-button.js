window.addEventListener("load", function()
{
  const anchor = document.getElementById('btn-anchor');

  saludos = new Array()

  saludos[0] = 'Bienvenido/a a mi portfolio'
  saludos[1] = '¡Hola! Te doy la bienvenida'
  saludos[2] = 'Gracias por visitar mi sitio'
  saludos[3] = '¡Hola! ¡Estaba esperándote!'

  saludoRandom = saludos[Math.floor(Math.random() * saludos.length)]

  anchor.innerHTML = saludoRandom
});