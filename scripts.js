document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    var playButton = document.getElementById('playButton');

    // Iniciar a música quando o botão for clicado
    playButton.addEventListener('click', function() {
        audio.play();
        playButton.style.display = 'none'; // Esconder o botão após iniciar a música
    });
});
// JavaScript no arquivo scripts.js

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousemove', (e) => {
        const star = document.createElement('div'); // Cria um elemento <div> para representar uma estrela
        star.className = 'star'; // Adiciona a classe 'star' ao elemento
        star.style.top = `${e.clientY}px`; // Define a posição vertical da estrela com base na posição do cursor
        star.style.left = `${e.clientX}px`; // Define a posição horizontal da estrela com base na posição do cursor
        document.body.appendChild(star); // Adiciona a estrela ao corpo do documento

        // Remove a estrela após um curto período de tempo
        setTimeout(() => {
            star.remove();
        }, 1000); // Ajuste o tempo conforme necessário para controlar a duração do rastro
    });
});

