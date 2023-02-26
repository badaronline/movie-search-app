import { handleEnter } from "./pages/handleEnter.js";
window.addEventListener('load', () => {
  const enterButton = document.getElementById("enter-button");
  enterButton.addEventListener("click", handleEnter);
  });