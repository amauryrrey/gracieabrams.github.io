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
let score = localStorage.getItem("score") || 0;
let highScore = localStorage.getItem("highScore") || 0;
let audioTimeout;
let currentGuessIndex = 0;
let currentPlayTime = 1; // Tiempo inicial de reproducción en segundos

// Actualización del DOM con valores iniciales
document.getElementById("current-streak").innerText = `Score: ${score}`;
document.getElementById("max-streak").innerText = `Max Streak: ${highScore}`;

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
  localStorage.setItem("currentSongIndex", currentSongIndex);
  localStorage.setItem("randomStart", randomStart);
  startGame();
  localStorage.setItem("lastPlayedDate", today); // Guardar la nueva fecha en el localStorage
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

function startGame() {
  score = parseInt(localStorage.getItem("score")) || 0;
  document.getElementById("current-streak").innerText = `Score: ${score}`;
  document.getElementById("result-container").innerHTML = "";
  document.getElementById("result").innerHTML = "";
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

  audio.pause();
  audio.currentTime = 0;

  progressBar.style.transition = "none";
  progressBar.style.width = "100%";
  setTimeout(() => {
    progressBar.style.transition = `width ${currentPlayTime}s linear`;
    progressBar.style.width = "0%";
  }, 0);

  audioPlayer.classList.remove("hidden");

  const currentSongFile = songFiles[currentSongIndex];
  audio.src = `canciones/${currentSongFile}`;
  audio.load();

  audio.onloadedmetadata = () => {
    audio.currentTime = randomStart;
    audio.play().then(() => {
      progressBar.style.transition = "none";
      progressBar.style.width = "100%";
      setTimeout(() => {
        progressBar.style.transition = `width ${currentPlayTime}s linear`;
        progressBar.style.width = "0%";
      }, 0);

      audioTimeout = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        progressBar.style.transition = "none";
        progressBar.style.width = "0%";
      }, currentPlayTime * 1000);
    }).catch(error => console.error("Error al reproducir el audio: ", error));
  };
}

function saveResponses() {
  const responses = inputs.map((input, index) => ({
    value: input.value,
    visible: input.style.visibility === "visible",
    disabled: input.disabled,
    hasSuccessBox: input.parentNode.querySelector('.success-box') !== null,
    hasErrorBox: input.parentNode.querySelector('.error-box') !== null,
    userGuess: input.parentNode.querySelector('.error-box') ? input.parentNode.querySelector('.error-box').innerText : "",
    isCurrent: index === currentGuessIndex // Marcar si es la última respuesta pendiente
  }));
  localStorage.setItem("responses", JSON.stringify(responses));
}

function submitGuess() {
  const input = inputs[currentGuessIndex];
  const suggestionList = suggestionLists[currentGuessIndex];
  const guess = input.value.trim().replace(/\s/g, "_").toLowerCase();
  const currentSongFile = songFiles[currentSongIndex];
  const currentSongName = currentSongFile.slice(currentSongFile.indexOf("_") + 1, currentSongFile.lastIndexOf(".")).toLowerCase();

  // Ocultar la lista desplegable
  suggestionList.innerHTML = "";

  if (guess === currentSongName) {
    score++;
    document.getElementById("current-streak").innerText = `Score: ${score}`;
    localStorage.setItem("score", score);
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
      document.getElementById("max-streak").innerText = `Max Streak: ${highScore}`;
    }

    const successBox = document.createElement("div");
    successBox.classList.add("success-box");
    successBox.innerText = input.value;
    input.parentNode.appendChild(successBox);
    input.style.visibility = "hidden";

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `
      <p>True fan!!</p>
      <p>Come back tomorrow to guess the song of the day.</p>
    `;


    for (let i = currentGuessIndex + 1; i < inputs.length; i++) {
      inputs[i].parentNode.style.visibility = "hidden";
    }

    saveResponses(); // Guardar las respuestas en el localStorage

    // Finalizar el juego si la respuesta es correcta
    currentGuessIndex = inputs.length; // Asegurar que el índice se actualiza correctamente para evitar nuevas respuestas
    currentPlayTime = 5;
    playAudioSnippet();	
  } else {
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

function loadResponses() {
    const responses = JSON.parse(localStorage.getItem("responses"));
    if (responses) {
        responses.forEach((response, index) => {
            const input = inputs[index];
            input.value = response.value;
            input.style.visibility = response.visible ? "visible" : "hidden";
            input.disabled = response.disabled;

            // Manejar cajas de éxito y error
            if (response.hasSuccessBox) {
                const successBox = document.createElement("div");
                successBox.classList.add("success-box");
                successBox.innerText = response.value;
                input.parentNode.appendChild(successBox);
                input.style.visibility = "hidden";
                currentGuessIndex = inputs.length; // Asegurar que el índice se actualiza correctamente para evitar nuevas respuestas
            } else if (response.hasErrorBox) {
                const errorBox = document.createElement("div");
                errorBox.classList.add("error-box");
                errorBox.innerText = response.userGuess;
                input.parentNode.appendChild(errorBox);
                currentGuessIndex = index + 1; // Actualizar currentGuessIndex al siguiente intento
            }

            if (response.isCurrent && response.value !== "") {
                input.disabled = false;
                input.focus();
            }
        });

        // Ajustar currentPlayTime según currentGuessIndex
        currentPlayTime = Math.min(currentGuessIndex + 1, 5);

        // Verificar si el juego ha sido finalizado
        if (currentGuessIndex >= inputs.length) {
        }
    }
}

loadResponses(); // Cargar las respuestas al iniciar la página


function endGame() {
  const resultContainer = document.getElementById("result-container");
  const currentSongFile = songFiles[currentSongIndex];
  const currentSongName = currentSongFile.slice(currentSongFile.indexOf("_") + 1, currentSongFile.lastIndexOf(".")).replace(/_/g, " ");
  resultContainer.innerHTML = `
    <p>Oops, not this time!</p>
    <p>The song of the day was: ${currentSongName}.</p>
    <p>Better luck tomorrow!</p>
    ${score > highScore ? `<p>¡Nuevo puntaje más alto!</p>` : ""}
  `;
  document.querySelectorAll('.input-container').forEach(container => container.classList.add("hidden"));
  document.getElementById("audio-player").classList.add("hidden");

  localStorage.setItem("score", 0);
}
playAudioBtn.addEventListener("click", playAudioSnippet);
