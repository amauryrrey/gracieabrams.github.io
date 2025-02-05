const songs = [
  "Mean_It",
  "Stay",
  "minor",
  "Long_Sleeves",
  "I_miss_you_Im_sorry",
  "tehe",
  "Under_Over",
  "21",
  "Friend",
  "Brush_Fire",
  "Unlearn",
  "Mess_It_Up",
  "Alright",
  "Painkillers",
  "Augusta",
  "Hard_to_Sleep",
  "Better",
  "Older",
  "Wishful_Thinking",
  "The_Bottom",
  "Camden",
  "For_Real_This_Time",
  "Rockland",
  "Feels_Like",
  "Block_me_out",
  "Two_People",
  "405",
  "Unsteady",
  "Right_now",
  "The_blue",
  "Fault_line",
  "This_is_what_the_drugs_are_for",
  "Difficult",
  "Amelie",
  "Will_you_cry",
  "I_should_hate_you",
  "Where_do_we_go_now",
  "Full_machine",
  "I_know_it_wont_work",
  "Best",
  "Cedar",
  "Everywhere_everything",
  "Packing_It_Up",
  "I_Told_You_Things",
  "Thats_So_True",
  "Cool",
  "Close_To_You",
  "Free_now",
  "Good_Luck_Charlie",
  "Normal_Thing",
  "Gave_You_I_Gave_You",
  "I_Knew_It_I_Know_You",
  "Tough_Love",
  "Let_It_Happen",
  "us",
  "I_Love_You_Im_Sorry",
  "Blowing_Smoke",
  "Risk",
  "Felt_Good_About_You"
];

let songFiles = [
  "1_Mean_It.mp3",
  "2_Stay.mp3",
  "3_minor.mp3",
  "4_Long_Sleeves.mp3",
  "5_I_miss_you_Im_sorry.mp3",
  "6_tehe.mp3",
  "7_Under_Over.mp3",
  "8_21.mp3",
  "9_Friend.mp3",
  "10_Brush_Fire.mp3",
  "11_Unlearn.mp3",
  "12_Mess_It_Up.mp3",
  "13_Alright.mp3",
  "14_Painkillers.mp3",
  "15_Augusta.mp3",
  "16_Hard_to_Sleep.mp3",
  "17_Better.mp3",
  "18_Older.mp3",
  "19_Wishful_Thinking.mp3",
  "20_The_Bottom.mp3",
  "21_Camden.mp3",
  "22_For_Real_This_Time.mp3",
  "23_Rockland.mp3",
  "24_Feels_Like.mp3",
  "25_Block_me_out.mp3",
  "26_Two_People.mp3",
  "27_405.mp3",
  "28_Unsteady.mp3",
  "29_Right_now.mp3",
  "30_The_blue.mp3",
  "31_Fault_line.mp3",
  "32_This_is_what_the_drugs_are_for.mp3",
  "33_Difficult.mp3",
  "34_Amelie.mp3",
  "35_Will_you_cry.mp3",
  "36_I_should_hate_you.mp3",
  "37_Where_do_we_go_now.mp3",
  "38_Full_machine.mp3",
  "39_I_know_it_wont_work.mp3",
  "40_Best.mp3",
  "41_Cedar.mp3",
  "42_Everywhere_everything.mp3",
  "43_Packing_It_Up.mp3",
  "44_I_Told_You_Things.mp3",
  "45_Thats_So_True.mp3",
  "46_Cool.mp3",
  "47_Close_To_You.mp3",
  "48_Free_now.mp3",
  "49_Good_Luck_Charlie.mp3",
  "50_Normal_Thing.mp3",
  "51_Gave_You_I_Gave_You.mp3",
  "52_I_Knew_It_I_Know_You.mp3",
  "53_Tough_Love.mp3",
  "54_Let_It_Happen.mp3",
  "55_us.mp3",
  "56_I_Love_You_Im_Sorry.mp3",
  "57_Blowing_Smoke.mp3",
  "58_Risk.mp3",
  "59_Felt_Good_About_You.mp3"
];

let currentSongIndex = 0;
let score = 0;
let highScore11 = localStorage.getItem("highScore11") || 0;
document.getElementById("high-score").innerText = `High Score: ${highScore11}`;

const input = document.getElementById("guess-input");
const suggestions = document.getElementById("suggestions");
const submitGuessBtn = document.getElementById("submit-guess");

function showSuggestions(value) {
suggestions.innerHTML = "";
const filteredSongs = songs.filter(song =>
song.toLowerCase().includes(value.toLowerCase().replace(/\s/g, "_"))
);
filteredSongs.forEach(song => {
const li = document.createElement("li");
li.textContent = song.replace(/_/g, " ");
li.classList.add('suggestion-item');  // Añadir clase para los ítems de sugerencias
li.addEventListener("click", () => {
  input.value = song.replace(/_/g, " ");
  suggestions.innerHTML = "";
  submitGuess(); // Enviar la respuesta al hacer clic en la sugerencia
});
suggestions.appendChild(li);
});
selectedIndex = -1; // Reiniciar el índice seleccionado
}

let selectedIndex = -1;

input.addEventListener("input", (e) => {
showSuggestions(e.target.value);
});

input.addEventListener("keydown", (e) => {
const items = suggestions.getElementsByClassName("suggestion-item");
if (e.key === "ArrowDown") {
e.preventDefault();
if (selectedIndex < items.length - 1) {
  selectedIndex++;
} else {
  selectedIndex = 0; // Volver al primer elemento si se llega al final
}
for (let i = 0; i < items.length; i++) {
  items[i].classList.remove("selected");
}
items[selectedIndex].classList.add("selected");
} else if (e.key === "ArrowUp") {
e.preventDefault();
if (selectedIndex > 0) {
  selectedIndex--;
} else {
  selectedIndex = items.length - 1; // Volver al último elemento si se llega al inicio
}
for (let i = 0; i < items.length; i++) {
  items[i].classList.remove("selected");
}
items[selectedIndex].classList.add("selected");
} else if (e.key === "Enter") {
e.preventDefault();
if (selectedIndex >= 0) {
  input.value = items[selectedIndex].textContent;
  suggestions.innerHTML = "";
  selectedIndex = -1; // Reiniciar el índice seleccionado
  submitGuess(); // Enviar la respuesta al presionar Enter
} else {
  submitGuess(); // Enviar la respuesta al presionar Enter si no hay ninguna selección
}
}
});


function startGame() {
score = 0;
document.getElementById("score").innerText = `Score: ${score}`;
document.getElementById("result-container").innerHTML = ""; // Limpiar el contenedor de resultados
document.getElementById("result").innerHTML = ""; // Limpiar la respuesta correcta
document.querySelector('.input-container-rapid').classList.remove("hidden"); // Mostrar la casilla de entrada exclusiva de rapid.html
submitGuessBtn.classList.remove("hidden");
document.getElementById("start-game").classList.add("hidden"); // Ocultar el botón de empezar juego

currentSongIndex = Math.floor(Math.random() * songFiles.length); // Seleccionar una canción aleatoria al inicio del juego

// Reiniciar la barra de progreso y el temporizador
const progressBar = document.getElementById("progress-bar");
progressBar.style.transition = "none"; // Desactivar la transición para reiniciar
progressBar.style.width = "100%";
setTimeout(() => {
progressBar.style.transition = "width 10s linear"; // Reactivar la transición
progressBar.style.width = "0%";
}, 0);

clearTimeout(audioTimeout); // Cancelar cualquier temporizador de audio anterior
playNextSong();
}

let audioTimeout;

function playNextSong() {
if (songFiles.length === 0) {
alert("¡No hay más canciones disponibles!");
return;
}

const audio = document.getElementById("audio");
const audioPlayer = document.getElementById("audio-player");
const progressBar = document.getElementById("progress-bar");

audioPlayer.classList.remove("hidden");

const currentSongFile = songFiles[currentSongIndex];
audio.src = `canciones/${currentSongFile}`;
audio.load(); // Cargar el archivo de audio
audio.onloadeddata = () => { // Verificar que el audio se ha cargado
const duration = audio.duration;

// Calcular un punto de inicio aleatorio entre los 30 y 120 segundos
let randomStart = Math.floor(Math.random() * 90) + 30; // 90 + 30 = 120
if (randomStart + 10 > duration) {
  // Si el punto de inicio + 10 segundos supera la duración de la canción, ajustar el punto de inicio
  randomStart = duration - 10;
}
audio.currentTime = randomStart;

audio.play().catch(error => console.error("Error al reproducir el audio: ", error));

// Iniciar la animación de la barra de progreso
progressBar.style.transition = "none"; // Desactivar la transición para reiniciar
progressBar.style.width = "100%";
setTimeout(() => {
  progressBar.style.transition = "width 10s linear"; // Reactivar la transición
  progressBar.style.width = "0%";
}, 0);

audioTimeout = setTimeout(() => {
  audio.pause();
  audio.currentTime = 0; // Reiniciar el tiempo del audio
  progressBar.style.transition = "none"; // Desactivar la transición
  progressBar.style.width = "0%"; // Asegurarse de que la barra se queda en 0
  endGame(); // Terminar el juego al llegar a cero
}, 10000); // Reproducir durante 10 segundos

audio.onpause = () => clearTimeout(audioTimeout); // Limpiar el timeout si el audio se pausa
};
}

function submitGuess() {
const guess = input.value.trim().replace(/\s/g, "_").toLowerCase();
const currentSongFile = songFiles[currentSongIndex];
const currentSongName = currentSongFile.slice(currentSongFile.indexOf("_") + 1, currentSongFile.lastIndexOf(".")).toLowerCase();

if (guess === currentSongName) {
score++;
document.getElementById("score").innerText = `Score: ${score}`;
input.value = "";

// Mostrar flash verde para respuesta correcta en la casilla de entrada
input.classList.add("flash-success");
setTimeout(() => input.classList.remove("flash-success"), 500);

// Reiniciar la barra de progreso y el temporizador
const progressBar = document.getElementById("progress-bar");
progressBar.style.transition = "none"; // Desactivar la transición para reiniciar
progressBar.style.width = "100%";

// Cancelar cualquier temporizador de audio anterior
clearTimeout(audioTimeout);

// Seleccionar una nueva canción aleatoria
if (songFiles.length > 0) {
  currentSongIndex = Math.floor(Math.random() * songFiles.length);
  // Reiniciar la barra de progreso y el temporizador al reproducir la nueva canción
  setTimeout(playNextSong, 0);
} else {
  endGame();
}
} else {
// Mostrar flash rojo para respuesta incorrecta en la casilla de entrada
input.classList.add("flash-error");
setTimeout(() => input.classList.remove("flash-error"), 500);

// La respuesta es incorrecta pero el juego continúa, así que no terminamos el juego
input.value = "";
}
}

function endGame() {
const resultContainer = document.getElementById("result-container");
const currentSongFile = songFiles[currentSongIndex];
const currentSongName = currentSongFile.slice(currentSongFile.indexOf("_") + 1, currentSongFile.lastIndexOf(".")).replace(/_/g, " ");

resultContainer.innerHTML = `
<p>Game over! You scored ${score} points.</p>
<p>The correct answer was: ${currentSongName}.</p>
${score > highScore11 ? `<p>New high score!</p>` : ""}
<button onclick="startGame()">Play again</button>
`;
if (score > highScore11) {
highScore11 = score;
localStorage.setItem("highScore11", highScore11);
document.getElementById("high-score").innerText = `High Score: ${highScore11}`;
}
submitGuessBtn.classList.add("hidden");
input.value = "";
document.getElementById("audio-player").classList.add("hidden");
document.querySelector('.input-container-rapid').classList.add('hidden');
}
document.getElementById("start-game").addEventListener("click", startGame);
submitGuessBtn.addEventListener("click", submitGuess);