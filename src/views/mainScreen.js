import { handleSearch } from "../pages/handleSearch.js";
import { handleHome } from "../pages/handleHome.js";
import { handleTopRated } from "../pages/handleTopRated.js";
import { handleUpcoming } from "../pages/handleUpcoming.js";
export const createMainScreen = () => {
  const main = document.createElement("div");
  main.classList.add("main");
  main.id = "main";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.id = "home-button";
  homeButton.addEventListener("click", handleHome);
  buttonContainer.appendChild(homeButton);

  const topRatedButton = document.createElement("button");
  topRatedButton.textContent = "Top Rated Movies";
  topRatedButton.id = "top-rated-button";
  topRatedButton.addEventListener("click", handleTopRated);
  buttonContainer.appendChild(topRatedButton);

  const upcomingButton = document.createElement("button");
  upcomingButton.textContent = "Upcoming Movies";
  upcomingButton.id = "upcoming-button";
  upcomingButton.addEventListener("click", handleUpcoming); 
  buttonContainer.appendChild(upcomingButton);
  main.appendChild(buttonContainer);

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("row");
  searchContainer.style.justifyContent = "center";

  const searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.id = "search";
  searchInput.autofocus = true;
  searchInput.autocomplete = "off";
  searchInput.placeholder = "Search here...";
  searchInput.addEventListener("keyup", handleSearch);
  searchContainer.appendChild(searchInput);
  main.appendChild(searchContainer);

  const movieBox = document.createElement("div");
  movieBox.classList.add("row");
  movieBox.id = "movie-box";
  main.appendChild(movieBox);

  return main;
};
