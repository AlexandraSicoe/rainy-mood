var audio = new Audio("./rain.wav");
audio.volume = 0.5;
var isMusicOn = false;
var buttonIcon = document.getElementById("buttonIcon");
function playAudio() {
  if (isMusicOn) {
    buttonIcon.className = "fa-solid fa-circle-play";
    audio.pause();
  } else {
    buttonIcon.className = "fa-solid fa-circle-pause";
    audio.play();
  }
  isMusicOn = !isMusicOn;
}
function setVolume(volume) {
  audio.volume = volume;
}
