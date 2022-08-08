const play = document.getElementById("button");
const chose = document.getElementById("chose");
const machine = document.getElementById("machine");
const form = document.getElementById("form");

function buttonhandelr(event) {
  event.preventDefault();
  const guess = document.getElementById("guess").value;
  const random = Math.ceil(Math.random() * 40);
  chose.innerText = `You chose:${guess}, `;
  machine.innerText = `the machine chose: ${random}.`;

  if (parseInt(guess) === random) {
    const winner = document.getElementById("winner");
    winner.innerText = "You win!";
  } else {
    winner.innerText = "You lost!";
  }
}
form.addEventListener("submit", buttonhandelr);
