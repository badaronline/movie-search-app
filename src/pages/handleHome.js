import { API_URL, API_KEY } from "../utilities/constants.js";
import { fetchMovies } from "../utilities/fetchMovies.js";
// Function to handle the "Home" button
export const handleHome = async () => {
    await fetchMovies(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
  };