const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  handleTitleEnter: function () {
    title.style.color = "#1abc9c";
    title.innerText = "The mouse is here!";
  },
  handleTitleLeave: function () {
    title.style.color = "#3498db";
    title.innerText = "The mouse is gone!";
  },
  handleTitleContext: function () {
    title.style.color = "#e74c3c";
    title.innerText = "That was a right click!";
  },
  handleWindowSize: function () {
    title.style.color = "#9b59b6";
    title.innerText = "You just resized!";
  },
};

title.addEventListener("mouseenter", superEventHandler.handleTitleEnter);
title.addEventListener("mouseleave", superEventHandler.handleTitleLeave);
title.addEventListener("contextmenu", superEventHandler.handleTitleContext);
window.addEventListener("resize", superEventHandler.handleWindowSize);
