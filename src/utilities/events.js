import { searchInput } from "./dom.js";
import { handleSearch } from "../pages/handleSearch.js";
import { homeButton } from "./dom.js";
import { handleHome } from "../pages/handleHome.js";
import { topRatedButton } from "./dom.js";
import { handleTopRated } from "../pages/handleTopRated.js";
import { upcomingButton } from "./dom.js";
import { handleUpcoming } from "../pages/handleUpcoming.js";
// Add event listeners to DOM elements
searchInput.addEventListener("keyup", handleSearch);
homeButton.addEventListener("click", handleHome);
topRatedButton.addEventListener("click", handleTopRated);
upcomingButton.addEventListener("click", handleUpcoming);  