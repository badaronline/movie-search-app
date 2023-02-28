import { displayMovies } from "../views/displayMovies.js";
// Function to fetch movies from API
  export const fetchMovies = async (url) => {
    const movieBox = document.getElementById("movie-box");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      displayMovies(data.results, movieBox);
      } 
    catch (error) {
      console.error("Error: ", error);
      movieBox.innerHTML = (error.message);
    }
  };