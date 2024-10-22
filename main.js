
function updateClock(){
    const now = new Date();
    const hours = now.getHours() .toString() .padStart (2, '0');
    const minutes = now.getMinutes() .toString() .padStart(2  ,'0');
    const seconds = now.getSeconds() .toString().padStart(2, '0');

    document.getElementById('clockDisplay').innerText = `${hours}:${minutes}:${seconds}`;

}

//Atualiza o relogio a cada segundo
setInterval(updateClock, 1000);

//inicia o relogio ao carregar a pagina
updateClock();


window.addEventListener('mousemove', function(event) {
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.left = event.clientX + 'px';
    div.style.top = event.clientY + 'px';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = getRandomColor();
    document.body.appendChild(div);
  
    setTimeout(() => {
      div.remove();
    }, 1000); // Remove a div após 1 segundo
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }