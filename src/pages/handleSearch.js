import { API_URL, API_KEY } from "../utilities/constants.js";
import { fetchMovies } from "../utilities/fetchMovies.js";
import { searchInput } from "../utilities/dom.js";
import { displayMovies } from "../views/displayMovies.js";

// Function to handle search queries
export const handleSearch = async () => {
    const searchQuery = searchInput.value.trim();
    const searchURL = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`;
    if (searchQuery) {
      await fetchMovies(searchURL);
    } else {
      await fetchMovies(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
    }
  };  
