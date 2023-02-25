import { API_URL, API_KEY } from "../utilities/constants.js";
import { displayMovies } from "../views/displayMovies.js";
// Function to handle the "Home" button
// export const handleHome = async () => {
//     await fetchMovies(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
//   };
export const handleHome = async () => {
  try {
    const data = await fetchMovies(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
    displayMovies(data.results);
  } catch (error) {
    console.error(error);
  }
};