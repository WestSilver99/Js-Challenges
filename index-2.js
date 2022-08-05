const hello = document.getElementById("hello");
const body = document.getElementById("body");
hello.style.color = "white";
hello.style.fontWeight = "600";

function handleWindow() {
  const size = window.innerWidth;
  if (size >= 1200) {
    body.style.backgroundColor = "yellow";
  } else if (size < 1200 && size > 900) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "deepskyblue";
  }
}

window.addEventListener("resize", handleWindow);
