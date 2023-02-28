import { IMG_PATH } from "../utilities/constants.js";
// Function to display movies on the webpage
export const displayMovies = (movies, element) => {
  if (movies.length === 0) {
    element.innerHTML = "No movie found. Please search another movie name.";
  } else {
  element.innerHTML = "";
   movies.forEach((movie) => {
    const imagePath = movie.poster_path ? IMG_PATH + movie.poster_path : "/public/images/image-missing.png";
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
    element.insertAdjacentHTML("beforeend", box);
  });
  }
};  