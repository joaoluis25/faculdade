// Seleciona os elementos
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const stopwatch = document.getElementById("stopwatch");

// Variáveis
let isRunning = false;
let totalSeconds = 0;
let interval;

// Botão Start/Stop
startStopButton.addEventListener("click", () => {

    if (isRunning) {
        clearInterval(interval);
        startStopButton.textContent = "Start";
    } else {
        startStopButton.textContent = "Stop";

        interval = setInterval(() => {

            totalSeconds++;

            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor((totalSeconds % 3600) / 60);
            let seconds = totalSeconds % 60;

            stopwatch.textContent =
                String(hours).padStart(2, "0") + ":" +
                String(minutes).padStart(2, "0") + ":" +
                String(seconds).padStart(2, "0");

        }, 1000);
    }

    isRunning = !isRunning;
});

// Botão Reset
resetButton.addEventListener("click", () => {

    // Para o cronômetro
    clearInterval(interval);

    // Zera o contador
    totalSeconds = 0;

    // Atualiza o texto
    stopwatch.textContent = "00:00:00";

    // Volta o botão para Start
    startStopButton.textContent = "Start";

    // Indica que o cronômetro está parado
    isRunning = false;
});