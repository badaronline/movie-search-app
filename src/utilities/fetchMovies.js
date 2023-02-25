import { movieBox } from "./dom.js";
import { displayMovies } from "../views/displayMovies.js";
// Function to fetch movies from API
  export const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      displayMovies(data.results);
      } 
    catch (error) {
      console.error("Error: ", error);
      movieBox.innerHTML = "Failed to fetch movies. Please try again later.";
    }
  };