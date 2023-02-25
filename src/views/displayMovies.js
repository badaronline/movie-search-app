import { IMG_PATH } from "../utilities/constants.js";
import { movieBox } from "../utilities/dom.js";
// Function to display movies on the webpage
export const displayMovies = (movies) => {
  movieBox.innerHTML = "";
  movies.forEach((movie) => {
    const imagePath = movie.poster_path ? IMG_PATH + movie.poster_path : "/src/images/image-missing.png";
    const box = `
      <div class="box">
        <img src="${imagePath}" alt="" />
        <div class="overlay">
          <div class="title"> 
            <h2>${movie.original_title}</h2>
            <span>${movie.vote_average}</span>
          </div>
          <h3>Overview:</h3>
          <p>${movie.overview}</p>
        </div>
      </div>
    `;
    movieBox.insertAdjacentHTML("beforeend", box);
  });
};