// Initialising DOM Elements

const title = document.getElementById("level-title");

const greenBtn = document.getElementById("green");
const redBtn = document.getElementById("red");
const yellowBtn = document.getElementById("yellow");
const blueBtn = document.getElementById("blue");

const startGame = () => {
  title.innerText = "Level 1";
  game();
};

// Listen to any key
document.addEventListener("keypress", startGame);

const currentPlay = () => {
  return Math.floor((Math.random() * 10) % 4);
};

const state = {
  buttons: {
    0: greenBtn,
    1: redBtn,
    2: yellowBtn,
    3: blueBtn,
  },
  isPlaying: true,
};

const curr = currentPlay();
const choosenBtn = state.buttons[curr];

console.log(curr, choosenBtn);

const showCurrentPlay = () => {
  choosenBtn.classList.add("pressed");
  setTimeout(() => {
    choosenBtn.classList.remove("pressed");
  }, 1000);
};

const game = () => {
  showCurrentPlay();
};
