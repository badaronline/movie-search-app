import { API_URL, API_KEY } from "../utilities/constants.js";
import { displayMovies } from "../views/displayMovies.js";
// Function to handle the "Top Rated" button
export const handleTopRated = async () => {
    await fetchMovies(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
  };