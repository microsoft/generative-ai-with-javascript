const chatWindow = document.querySelector('.chat-window textarea');
const responseWindow = document.querySelector('.response-window textarea');
const button = document.querySelector('.button');
const buttonChange = document.getElementById("btnChange");
const listEl = document.getElementById("list");
const backgroundEl = document.getElementById("background");
const voicesEl = document.getElementById("voices");
const speakEl = document.getElementById("speak");

const currentUrl = new URL(window.location.href);
let currentCharacter = currentUrl.searchParams.get('character') || "";
let currentVoice = "<%= voice  %>";

const maxVolume = 0.5

backgroundEl.volume = maxVolume;

if (currentCharacter) {
  listEl.value = currentCharacter;
} else {
  listEl.value = "ada";
}

let voices = [];
speechSynthesis.onvoiceschanged = populateVoiceList;

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
  // console.log(voices);

  // for (let i = 0; i < voices.length; i++) {
  //   const option = document.createElement("option");
  //   option.textContent = `${voices[i].name} (${voices[i].lang})`;
  //   option.value = i;

  //   if (voices[i].default) {
  //     option.textContent += " — DEFAULT";

  //   }

  //   voicesEl.appendChild(option);
  // }
}

function say(text) {
  const utterance = new SpeechSynthesisUtterance(text);

  console.log("current voice: ", currentVoice);

  // Optional: Set voice and other properties
  // console.log("selected value: ", voicesEl.value);
  // console.log("selected voice", voicesEl.value);
  utterance.voice = voices[parseInt(currentVoice)]; // Choose the first available voice
  utterance.rate = 1; // Speed of the speech
  utterance.pitch = 1; // Pitch of the speech
  utterance.volume = 1; // Volume of the speech

  backgroundEl.volume = 0.1;
  speechSynthesis.speak(utterance);

  utterance.onend = () => {
    backgroundEl.volume = maxVolume;
  }
}

buttonChange.addEventListener("click", () => {
  let selectedValue = listEl.value;
  // should call default route with param character
  // Get the current URL
  const currentUrl = new URL(window.location.href);

  // Set or update the 'character' query parameter
  currentUrl.searchParams.set('character', selectedValue);

  // Update the document URL
  window.location.href = currentUrl.toString();
})

button.addEventListener('click', () => {
  const message = chatWindow.value;
  responseWindow.value = `You: ${message}`;
  fetch('/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  })
    .then(response => response.json())
    .then(data => {
      responseWindow.value += `\n<%= title %>: ${data.answer}`;
      console.log("speak enabled", speakEl.checked);

      if (speakEl.checked) {
        say(data.answer);
      }

    })
    .catch(error => {
      console.error('Error:', error.error);
    });
  chatWindow.value = '';
});
