import { API_URL, API_KEY } from "../utilities/constants.js";
import { welcomeScreen } from "../views/welcomeScreen.js";
import { createMainScreen } from "../views/mainScreen.js";
import { fetchMovies } from "../utilities/fetchMovies.js";

// Function to handle the "Enter" button
export const handleEnter = () => {
    welcomeScreen.style.display = "none";
    const main = createMainScreen();
    document.body.appendChild(main);
    main.style.display = "block";
    fetchMovies(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
  }; 