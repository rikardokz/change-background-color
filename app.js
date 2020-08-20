const button = document.getElementById("button");
const body = document.querySelector("body");
const colors = ["red", "green", "blue", "yellow", "purple", "purple"];

body.style.backgroundClip = "violet";
button.addEventListener("click", () => {
  changeColor();
  changeButtonColor();
});

function changeColor() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}

function changeButtonColor() {
  const colorIndex = parseInt(Math.random() * colors.length);
  button.style.backgroundColor = colors[colorIndex];
}
