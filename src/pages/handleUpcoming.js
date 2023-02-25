import { API_URL, API_KEY } from "../utilities/constants.js";
// Function to handle the "Upcoming" button
export const handleUpcoming = async () => {
    await fetchMovies(`${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
  };
  