AFRAME.registerComponent('frame-rate-limiter', {
    tick: function (time, deltaTime) {
        
        if (deltaTime < 1000 / 90) {
            return; 
        }
        
    }
});

let countdownTime = 600;
let timerInterval = null;

function startCountdown() {
    let remainingTime = sessionStorage.getItem('remainingTime') 
        ? parseInt(sessionStorage.getItem('remainingTime'), 10) 
        : countdownTime;

    const timerElement = document.querySelector('#timer');

    timerInterval = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerElement.setAttribute('text', 'value: Tempo scaduto!; align: center; color: red');
            
            return;
        }

        remainingTime--;
        sessionStorage.setItem('remainingTime', remainingTime);

        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerElement.setAttribute('text', `value: Tempo: ${minutes}m ${seconds}s; align: center; color: white`);
    }, 1000);
}

// Avvia il countdown al caricamento della pagina
document.addEventListener('DOMContentLoaded', startCountdown);


