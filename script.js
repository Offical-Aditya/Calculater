const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
      playClickSound();
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
      playClickSound();
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
      playClickSound();
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "";
      playClickSound();
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "click") {
      display.innerText = "";
      playClickSound();
    } else {
      display.innerText += item.id;
      playClickSound(); // Play sound when a digit button is clicked
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-button");
const calculator = document.querySelector(".calc");
const box = document.querySelector(".box");
const toggleIcon = document.querySelector(".theme-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("theme-dark");
  box.classList.toggle("background");
  themeToggleBtn.classList.toggle("active");
  playClickSound();
  isDark = !isDark;
};

function playClickSound() {
  const clickSound = document.getElementById("myAudio");
  clickSound.currentTime = 0; // Rewind sound to the beginning to allow playing it repeatedly
  clickSound.play();
}
