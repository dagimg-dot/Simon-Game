// Initialising DOM Elements
const title = document.getElementById("level-title");
const btns = Array.from(document.querySelectorAll(".btn"));

const state = {
  level: 1,
  isPlaying: false,
  choosenBtn: null,
  sequence: [],
};

const resetState = () => {
  state.level = 1;
  state.isPlaying = false;
  state.choosenBtn = null;
  state.sequence = [];
};

const updateTitle = (newTitle) => {
  title.innerText = newTitle;
};

const showCurrentPlay = () => {
  const curr = currentPlay();
  const choosenBtn = btns[curr];
  state.choosenBtn = choosenBtn;
  choosenBtn.classList.add("pressed");
  setTimeout(() => {
    choosenBtn.classList.remove("pressed");
  }, 1000);
};

const checkAnswer = (event) => {
  if (!state.isPlaying) {
    return;
  }

  if (state.choosenBtn === event.target) {
    state.level++;
    updateTitle(`Level ${state.level}`);
    showCurrentPlay();
  } else {
    updateTitle(
      `Game Over, You lost in level ${state.level} !! Press any key to start again`
    );
    resetState();
  }
};

const startGame = () => {
  if (state.isPlaying) {
    return;
  }

  updateTitle(`Level ${state.level}`);
  state.isPlaying = true;
  showCurrentPlay();
};

const currentPlay = () => {
  const curr = Math.floor((Math.random() * 10) % 4);
  state.sequence.push(curr);
  return curr;
};

// Listen to any key
document.addEventListener("keypress", startGame);

// Listen click on the Color buttons
btns.forEach((btn) => {
  btn.addEventListener("click", checkAnswer);
});