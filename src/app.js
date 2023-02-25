import { handleEnter } from "./pages/handleEnter.js";
import { enterButton } from "./utilities/dom.js";

window.addEventListener('load', () => {
  enterButton.addEventListener("click", handleEnter);
  });