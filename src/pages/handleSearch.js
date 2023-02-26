import { API_URL, API_KEY } from "../utilities/constants.js";
import { fetchMovies } from "../utilities/fetchMovies.js";

// Function to handle search queries
export const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    const searchURL = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`;
    if (searchQuery) {
      await fetchMovies(searchURL);
    } else {
      await fetchMovies(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
    }
  };  
