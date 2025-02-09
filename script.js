const songsData = [
  // Sencillos
  { name: "Mean_It", album: "Sencillos" },
  { name: "Stay", album: "Sencillos" },
  { name: "Brush_Fire", album: "Sencillos" },
  { name: "Unlearn", album: "Sencillos" },
  { name: "Mess_It_Up", album: "Sencillos" },
  { name: "Cedar", album: "Sencillos" },
  { name: "Everywhere_everything", album: "Sencillos" },

  // THE SECRET OF US
  { name: "Packing_It_Up", album: "THE_SECRET_OF_US" },
  { name: "I_Told_You_Things", album: "THE_SECRET_OF_US" },
  { name: "Thats_So_True", album: "THE_SECRET_OF_US" },
  { name: "Cool", album: "THE_SECRET_OF_US" },
  { name: "Close_To_You", album: "THE_SECRET_OF_US" },
  { name: "Free_now", album: "THE_SECRET_OF_US" },
  { name: "Good_Luck_Charlie", album: "THE_SECRET_OF_US" },
  { name: "Normal_Thing", album: "THE_SECRET_OF_US" },
  { name: "Gave_You_I_Gave_You", album: "THE_SECRET_OF_US" },
  { name: "I_Knew_It_I_Know_You", album: "THE_SECRET_OF_US" },
  { name: "Tough_Love", album: "THE_SECRET_OF_US" },
  { name: "Let_It_Happen", album: "THE_SECRET_OF_US" },
  { name: "us", album: "THE_SECRET_OF_US" },
  { name: "I_Love_You_Im_Sorry", album: "THE_SECRET_OF_US" },
  { name: "Blowing_Smoke", album: "THE_SECRET_OF_US" },
  { name: "Risk", album: "THE_SECRET_OF_US" },
  { name: "Felt_Good_About_You", album: "THE_SECRET_OF_US" },

  // good riddance
  { name: "Two_People", album: "good_riddance" },
  { name: "405", album: "good_riddance" },
  { name: "Unsteady", album: "good_riddance" },
  { name: "Right_now", album: "good_riddance" },
  { name: "The_blue", album: "good_riddance" },
  { name: "Fault_line", album: "good_riddance" },
  { name: "This_is_what_the_drugs_are_for", album: "good_riddance" },
  { name: "Difficult", album: "good_riddance" },
  { name: "Amelie", album: "good_riddance" },
  { name: "Will_you_cry", album: "good_riddance" },
  { name: "I_should_hate_you", album: "good_riddance" },
  { name: "Where_do_we_go_now", album: "good_riddance" },
  { name: "Full_machine", album: "good_riddance" },
  { name: "I_know_it_wont_work", album: "good_riddance" },
  { name: "Best", album: "good_riddance" },
  { name: "Block_me_out", album: "good_riddance" },

  // minor
  { name: "minor", album: "minor" },
  { name: "Long_Sleeves", album: "minor" },
  { name: "I_miss_you_Im_sorry", album: "minor" },
  { name: "tehe", album: "minor" },
  { name: "Under_Over", album: "minor" },
  { name: "21", album: "minor" },
  { name: "Friend", album: "minor" },

  // This is what it feels like
  { name: "Alright", album: "This_is_what_it_feels_like" },
  { name: "Painkillers", album: "This_is_what_it_feels_like" },
  { name: "Augusta", album: "This_is_what_it_feels_like" },
  { name: "Hard_to_Sleep", album: "This_is_what_it_feels_like" },
  { name: "Better", album: "This_is_what_it_feels_like" },
  { name: "Older", album: "This_is_what_it_feels_like" },
  { name: "Wishful_Thinking", album: "This_is_what_it_feels_like" },
  { name: "The_Bottom", album: "This_is_what_it_feels_like" },
  { name: "Camden", album: "This_is_what_it_feels_like" },
  { name: "For_Real_This_Time", album: "This_is_what_it_feels_like" },
  { name: "Rockland", album: "This_is_what_it_feels_like" },
  { name: "Feels_Like", album: "This_is_what_it_feels_like" }
];
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

// Constantes y datos del almacenamiento local
const today = new Date().toLocaleDateString();
const lastPlayedDate = localStorage.getItem("lastPlayedDate");

// Variables iniciales
let currentSongIndex = parseInt(localStorage.getItem("currentSongIndex")) || 0;
let randomStart = parseInt(localStorage.getItem("randomStart")) || 0;
let played = parseInt(localStorage.getItem("played")) || 0;
let winPercentage = parseInt(localStorage.getItem("winPercentage")) || 0;
let streak = localStorage.getItem("streak") || 0;
let highstreak = localStorage.getItem("highstreak") || 0;
let audioTimeout;
let currentGuessIndex = 0;
let currentPlayTime = 1; // Tiempo inicial de reproducción en segundos
let attemptHistory = JSON.parse(localStorage.getItem("attemptHistory")) || [0, 0, 0, 0, 0];
let wins = parseInt(localStorage.getItem("wins")) || 0;
let isWin = JSON.parse(localStorage.getItem("isWin")) || false;

// Elementos del DOM relacionados con las entradas de usuario
const inputs = [];
const suggestionLists = [];
for (let i = 1; i <= 5; i++) {
  inputs.push(document.getElementById(`guess-input-${i}`));
  suggestionLists.push(document.getElementById(`suggestions-${i}`));
}

// Botón de reproducción de audio
const playAudioBtn = document.getElementById("play-audio");

// Iniciar el juego automáticamente si no se ha jugado hoy
if (lastPlayedDate !== today) {
  localStorage.removeItem("responses");
  // Seleccionar una canción y fragmento al azar
  currentSongIndex = Math.floor(Math.random() * songFiles.length);
  randomStart = Math.floor(Math.random() * 90) + 30;
  if (randomStart + 5 > audio.duration) {
    randomStart = audio.duration - 5; // Ajustar si el tiempo de reproducción es mayor a la duración del audio
  }
  isWin=false;
  localStorage.setItem("isWin", JSON.stringify(isWin));
  localStorage.setItem("currentSongIndex", currentSongIndex);
  localStorage.setItem("randomStart", randomStart);
  startGame();
  localStorage.setItem("lastPlayedDate", today); // Guardar la nueva fecha en el localStorage
}

function startGame() {
  streak = parseInt(localStorage.getItem("streak")) || 0;
  document.getElementById("result-container").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  played+=1;
  localStorage.setItem("played", played);
  document.querySelectorAll('.input-container').forEach((container, index) => {
    container.querySelector("input").disabled = true;
    container.querySelector("input").style.visibility = "visible";
  });

  playAudioBtn.classList.remove("hidden");
  loadResponses(); // Cargar respuestas guardadas

  if (currentGuessIndex < inputs.length) {
    const nextInput = inputs[currentGuessIndex];
    nextInput.disabled = false;
    nextInput.focus();

    nextInput.addEventListener("input", (e) => {
      showSuggestions(nextInput, suggestionLists[currentGuessIndex], e.target.value);
    });
  } else {
    // Si el juego ya ha terminado, asegurar que no se puedan enviar nuevas respuestas
    endGame(); // Finalizar el juego si ya se dio una respuesta correcta
  }
}

function playAudioSnippet() {
  clearTimeout(audioTimeout);

  const audio = document.getElementById("audio");
  const audioPlayer = document.getElementById("audio-player");
  const progressBar = document.getElementById("progress-bar");

  // Detener y reiniciar el audio
  audio.pause();
  audio.currentTime = 0;

  // Reiniciar la barra de progreso sin transición
  progressBar.style.transition = "none";
  progressBar.style.width = "100%";

  // Forzar un reflow para aplicar los cambios sin transición
  setTimeout(() => {
    progressBar.style.transition = `width ${currentPlayTime}s linear`;
    progressBar.style.width = "0%";
  }, 0);

  // Mostrar el reproductor de audio
  audioPlayer.classList.remove("hidden");

  // Configurar la canción actual
  const currentSongFile = songFiles[currentSongIndex];
  audio.src = `canciones/${currentSongFile}`;
  audio.load();

  audio.onloadedmetadata = () => {
    audio.currentTime = randomStart;

    audio.play()
      .then(() => {
        // Reiniciar la barra de progreso después de iniciar la reproducción
        progressBar.style.transition = "none";
        progressBar.style.width = "100%";

        // Forzar un reflow para aplicar los cambios sin transición
        setTimeout(() => {
          progressBar.style.transition = `width ${currentPlayTime}s linear`;
          progressBar.style.width = "0%";
        }, 0);

        // Programar el reinicio de la barra una vez que llegue a 0
        audioTimeout = setTimeout(() => {
          audio.pause();
          audio.currentTime = 0;
          // Forzar un reflow para aplicar los cambios sin transición
          setTimeout(() => {
            progressBar.style.transition = `width ${currentPlayTime}s linear`;
            progressBar.style.width = "100%";
          }, 0);
        }, currentPlayTime * 1000); // Duración de la animación de la barra
      })
      .catch(error => console.error("Error al reproducir el audio: ", error));
  };
}

function saveResponses() {
  const responses = inputs.map((input, index) => ({
    value: input.value,
    visible: input.style.visibility === "visible",
    disabled: input.disabled,
    hasSuccessBox: input.parentNode.querySelector('.success-box') !== null,
    hasErrorBox: input.parentNode.querySelector('.error-box') !== null,
    hasAlbumBox: input.parentNode.querySelector('.album-box') !== null, // Nueva propiedad
    userGuess: input.parentNode.querySelector('.error-box')
      ? input.parentNode.querySelector('.error-box').innerText
      : input.parentNode.querySelector('.album-box')
        ? input.parentNode.querySelector('.album-box').innerText // Guardar texto del album-box
        : "",
    isCurrent: index === currentGuessIndex // Marcar si es la última respuesta pendiente
  }));
  localStorage.setItem("responses", JSON.stringify(responses));
}

function submitGuess() {
  const input = inputs[currentGuessIndex];
  const suggestionList = suggestionLists[currentGuessIndex];
  const guess = input.value.trim().replace(/\s/g, "_").toLowerCase();
  const currentSongFile = songFiles[currentSongIndex];
  const currentSongName = currentSongFile.slice(
    currentSongFile.indexOf("_") + 1,
    currentSongFile.lastIndexOf(".")
  ).toLowerCase();
  // Ocultar la lista desplegable
  suggestionList.innerHTML = "";

  if (guess === currentSongName) {
  isWin=true;
localStorage.setItem("isWin", JSON.stringify(isWin));
  // Incrementar la racha y actualizar el localStorage
  streak++;
  localStorage.setItem("streak", streak);
  if (streak > highstreak) {
    highstreak = streak;
    localStorage.setItem("highstreak", highstreak);
  }

  // Crear y mostrar la caja de éxito
  const successBox = document.createElement("div");
  successBox.classList.add("success-box");
  successBox.innerText = input.value;
  input.parentNode.appendChild(successBox);

  // Ocultar el input actual y deshabilitar interacciones
  input.style.visibility = "hidden";
  input.disabled = true;

  // Ocultar todos los inputs y contenedores siguientes
  for (let i = currentGuessIndex + 1; i < inputs.length; i++) {
    const nextInputContainer = inputs[i].parentNode;
    nextInputContainer.style.display = "none"; // Ocultar completamente el contenedor
  }

  // Guardar el intento en el que se adivinó la canción
  const attemptNumber = currentGuessIndex; // Índice del intento actual (0-indexed)
  saveAttemptHistory(attemptNumber); // Guardar el historial de intentos
  saveResponses(); // Guardar las respuestas en el localStorage

  // Finalizar el juego si la respuesta es correcta
  currentGuessIndex = inputs.length; // Asegurar que el índice se actualiza correctamente para evitar nuevas respuestas
  currentPlayTime = 5;
  playAudioSnippet();

  // Calcular y guardar el porcentaje de victorias
  // Mostrar estadísticas después de 1 segundo
  setTimeout(() => {
    showStatistics();
  }, 1000);
}else 
{
    const guessedSongAlbum = getAlbumForSong(guess); // Obtener el álbum de la canción ingresada
    const currentSongAlbum = getAlbumForSong(currentSongName); // Obtener el álbum de la canción correcta
if(currentSongAlbum===guessedSongAlbum){
      const userGuess = input.value;
      input.value = "";
      input.style.visibility = "hidden";

      const albumBox = document.createElement("div");
      albumBox.classList.add("album-box");
      albumBox.innerText = userGuess;
      input.parentNode.appendChild(albumBox);
      currentGuessIndex++;

      if (currentGuessIndex < 5) {
        const nextInput = inputs[currentGuessIndex];
        nextInput.disabled = false;
        nextInput.focus();
        currentPlayTime = Math.min(currentGuessIndex + 1, 5);
        playAudioSnippet();

        nextInput.addEventListener("input", (e) => {
          showSuggestions(nextInput, suggestionLists[currentGuessIndex], e.target.value);
        });
      } else {
        endGame();
      }
      saveResponses(); // Guardar las respuestas en el localStorage
  }else {
    input.classList.add("flash-error");
    setTimeout(() => {
      input.classList.remove("flash-error");

      const userGuess = input.value;
      input.value = "";
      input.style.visibility = "hidden";

      const errorBox = document.createElement("div");
      errorBox.classList.add("error-box");
      errorBox.innerText = userGuess;
      input.parentNode.appendChild(errorBox);

      currentGuessIndex++;

      if (currentGuessIndex < 5) {
        const nextInput = inputs[currentGuessIndex];
        nextInput.disabled = false;
        nextInput.focus();
        currentPlayTime = Math.min(currentGuessIndex + 1, 5);
        playAudioSnippet();

        nextInput.addEventListener("input", (e) => {
          showSuggestions(nextInput, suggestionLists[currentGuessIndex], e.target.value);
        });
      } else {
        endGame();
      }

      saveResponses(); // Guardar las respuestas en el localStorage
    }, 500);
  }
}
}

// Función para guardar el historial de intentos
function saveAttemptHistory(attemptIndex) {
  let attemptHistory = JSON.parse(localStorage.getItem("attemptHistory")) || [0, 0, 0, 0, 0]; // Inicializar con 5 posiciones
  attemptHistory[attemptIndex]++; // Incrementar el contador en la posición correspondiente
  localStorage.setItem("attemptHistory", JSON.stringify(attemptHistory));
  wins = attemptHistory.reduce((sum, value) => sum + value, 0);
  localStorage.setItem("wins", wins);

}

function loadResponses() {
  const responses = JSON.parse(localStorage.getItem("responses"));
  if (responses) {
    responses.forEach((response, index) => {
      const input = inputs[index];
      input.value = response.value;
      input.style.visibility = response.visible ? "visible" : "hidden";
      input.disabled = response.disabled;

      // Manejar cajas de éxito, error y álbum
      if (response.hasSuccessBox) {
        const successBox = document.createElement("div");
        successBox.classList.add("success-box");
        successBox.innerText = response.value;
        input.parentNode.appendChild(successBox);
        input.style.visibility = "hidden";
 for (let i = currentGuessIndex + 1; i < inputs.length; i++) {
    const nextInputContainer = inputs[i].parentNode;
    nextInputContainer.style.display = "none"; // Ocultar completamente el contenedor
  }
        currentGuessIndex = inputs.length; // Asegurar que el índice se actualiza correctamente para evitar nuevas respuestas
      } else if (response.hasErrorBox) {
        const errorBox = document.createElement("div");
        errorBox.classList.add("error-box");
        errorBox.innerText = response.userGuess;
        input.parentNode.appendChild(errorBox);
        currentGuessIndex = index + 1; // Actualizar currentGuessIndex al siguiente intento
      } else if (response.hasAlbumBox) {
        const albumBox = document.createElement("div");
        albumBox.classList.add("album-box");
        albumBox.innerText = response.userGuess; // Restaurar el texto del album-box
        input.parentNode.appendChild(albumBox);
        input.style.visibility = "hidden";
        currentGuessIndex = index + 1; // Actualizar currentGuessIndex al siguiente intento
      }

      // Enfocar el input actual si es el intento pendiente
      if (response.isCurrent && response.value !== "") {
        input.disabled = false;
        input.focus();
      }
    });

    // Ajustar currentPlayTime según currentGuessIndex
    currentPlayTime = Math.min(currentGuessIndex + 1, 5);

    // Verificar si el juego ha sido finalizado
    if (currentGuessIndex >= inputs.length) {
      endGame();
    }
  }
}

loadResponses(); // Cargar las respuestas al iniciar la página

function showStatistics() {
  // Obtener elementos del DOM
  const modal = document.getElementById("statisticsModal");
  const closeBtn = document.querySelector(".close-btn");
let winPercentage = Math.round((wins / played) * 100);
localStorage.setItem("winPercentage", winPercentage);
  // Actualizar las estadísticas en la ventana modal
  document.getElementById("played").textContent = played;
  document.getElementById("winPercentage").textContent = `${winPercentage}%`;
  document.getElementById("streak").textContent = streak;
  document.getElementById("highstreak").textContent = highstreak;

  // Mostrar las barras de intentos
  displayAttemptBars();

  // Mostrar la ventana modal
  modal.style.display = "block";

  // Cerrar la ventana modal al hacer clic en la "X"
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Cerrar la ventana modal si se hace clic fuera de ella
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

// Función para mostrar las barras de intentos
function displayAttemptBars() {
  const attemptHistory = JSON.parse(localStorage.getItem("attemptHistory")) || [0, 0, 0, 0, 0];
  const attemptsContainer = document.getElementById("attempts-container");

  // Limpiar el contenedor previo
  attemptsContainer.innerHTML = "";

  // Calcular el total de partidas jugadas
  const totalPlayed = attemptHistory.reduce((sum, count) => sum + count, 0);

  // Iterar sobre el arreglo e imprimir cada intento con su barra
  attemptHistory.forEach((count, index) => {
    const percentage = totalPlayed > 0 ? (count * 100) / totalPlayed : 0;

    // Crear el contenedor de la barra
    const barContainer = document.createElement("div");
    barContainer.classList.add("bar-container");

    // Crear el texto del intento
    const attemptText = document.createElement("span");
    attemptText.textContent = ` ${index + 1}: ${count}`;
    attemptText.classList.add("attempt-text");

    // Crear la barra
    const bar = document.createElement("div");
    bar.classList.add("bar");

    // Escalar el ancho de la barra para que sea más ancha
    const maxWidth = 400; // Anchura máxima de la barra en píxeles
    const scaledWidth = (percentage / 100) * maxWidth; // Escalar el ancho según el porcentaje
    bar.style.width = `${scaledWidth}px`; // Aplicar el ancho escalado

    // Agregar elementos al contenedor
    barContainer.appendChild(attemptText);
    barContainer.appendChild(bar);
    // Agregar el contenedor al DOM
    attemptsContainer.appendChild(barContainer);
  });
}
function getAlbumForSong(songName) {
  const songData = songsData.find(song => song.name.toLowerCase() === songName.toLowerCase());
  return songData ? songData.album : null;
}

function endGame() {
  const resultContainer = document.getElementById("result-container");
  const currentSongFile = songFiles[currentSongIndex];
  const currentSongName = currentSongFile.slice(currentSongFile.indexOf("_") + 1, currentSongFile.lastIndexOf(".")).replace(/_/g, " ");
  document.getElementById("audio-player").classList.add("hidden");

  if (isWin===false) {
localStorage.setItem("streak", 0);
}
  showStatistics();
}

function showSuggestions(input, suggestions, value) {
  suggestions.innerHTML = "";

  const filteredSongs = songs.filter(song =>
    song.toLowerCase().includes(value.toLowerCase().replace(/\s/g, "_"))
  );

  filteredSongs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.replace(/_/g, " ");
    li.classList.add('suggestion-item');

    li.addEventListener("click", () => {
      input.value = song.replace(/_/g, " ");
      suggestions.innerHTML = "";
      submitGuess();
    });

    suggestions.appendChild(li);
  });

  selectedIndex = -1; // Reiniciar el índice seleccionado
}

let selectedIndex = -1;

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    showSuggestions(input, suggestionLists[index], e.target.value);
  });

  input.addEventListener("keydown", (e) => {
    const items = suggestionLists[index].getElementsByClassName("suggestion-item");

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (selectedIndex < items.length - 1) {
        selectedIndex++;
      } else {
        selectedIndex = 0;
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
        selectedIndex = items.length - 1;
      }

      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("selected");
      }

      items[selectedIndex].classList.add("selected");
    } else if (e.key === "Enter") {
      e.preventDefault();

      if (selectedIndex >= 0) {
        input.value = items[selectedIndex].textContent;
        selectedIndex = -1;
        submitGuess();
      } else {
        submitGuess();
      }
    }
  });
});

playAudioBtn.addEventListener("click", playAudioSnippet);
playAudioBtn.classList.remove("hidden");
console.log("Hi");
