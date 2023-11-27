let tempoDecorrido = 0;
let temporizador;
const mario = document.querySelector('.mario');
const obstaculo = document.querySelector('.obstaculo');
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval(() => {
    const obstaculoPosition = obstaculo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    if (obstaculoPosition <= 160 && obstaculoPosition > 0 && marioPosition < 90) {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src= 'frame game over.png';
        clearInterval(loop);
        clearInterval(temporizador);
    }
},10)
document.addEventListener('keydown', jump);

tempoDecorrido = 0;
document.getElementById('tempo').innerText = tempoDecorrido;
temporizador = setInterval(atualizarTempo, 100);

function atualizarTempo() {
    tempoDecorrido++;
    document.getElementById('tempo').innerText = tempoDecorrido;
}