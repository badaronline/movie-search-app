import { API_URL, API_KEY } from "./constants.js";
import { displayMovies } from "../views/displayMovies.js";
// Function to fetch movies from API
  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.results.length === 0) {
          movieBox.innerHTML = "No movie found. Please try a different movie name.";
      } else {
      displayMovies(data.results);
      }
    } 
    catch (error) {
      console.error("Error: ", error);
      movieBox.innerHTML = "Failed to fetch movies. Please try again later.";
    }
  };
  fetchMovies(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);

export {fetchMovies};