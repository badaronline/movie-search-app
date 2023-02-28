# Movie Search App

This app is a movie search and display web application that fetches movie data from The Movie Database API and displays it on a webpage.

- In this, user can enter in the site to search for a movie.

- The user can search for movies using a search bar. 

- When the user clicks on the a movie, they can see its details, including its title, rating and overview.

# App Demo

- My web application is live on: 

# Development

- To run this web application locally, you will need to open index.html in your browser using a local server. LiveServer, http-server or any other local static server will work.

# Installing Dependencies

- There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript.

# Structure
```
public
└── style.css
└── images
src
└── pages
    └── handleEnter.js
    └── handleHome.js
    └── handleSearch.js
    └── handleTopRated.js
    └── handleUpcoming.js
└── views
    └── welcomeScreen.js
    └── mainScreen.js
    └── displayMovies.js
└── utilities
    └── constants.js
    └── fetchMovies.js
└── app.js
index.html
```
- `public` This folder typically contains static files, such as the `style.css` file and any `images or assets` that will be served to the client-side.
- `src` this contains all of JavaScript code.
  - `pages` This folder typically contains JavaScript files that handle specific user interactions or events, such as `handleEnter.js` for handling the "enter" action, `handleSearch.js` for handling search requests, and so on.
  - `views` This folder typically contains JavaScript files that define the structure and logic of specific UI components or screens, such as `welcomeScreen.js`, `mainScreen.js`, and `displayMovies.js`. These files are responsible for rendering the HTML content that will be displayed to the user.
  - `utilities` This folder typically contains JavaScript files that provide common functions or utilities that are used throughout the application, such as `constants.js` for storing global constants, and `fetchMovies.js` for making API calls to retrieve movie data. 
  - `app.js` This file is typically the main entry point for the application, where the server-side and client-side code are combined and initialized.

# Installing Dependencies

- There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript.

## must have features

- [x] The app needs to be responsive.
- [x] The app needs to be a single page application. That means there should be only one index.html file and JavaScript needs to update the html using DOM manipulation.
- [x] The app needs to interact with an API to grab data.
- [x] The app needs to have loading/error handling for the interaction with the API and needs to show this to the user, not just a console.log.
- [x] The app needs some user interaction such that you need to grab different data from the API. So you cannot just grab everything from the API and store it locally with one fetch.
- [x] Change the title.
- [x] Add a favicon.
- [x] Ability to search for movies using a search query.

## nice to have features
- [x] Fetch and display popular movies by default.
- [x] Buttons to display movies sorted by top-rated and upcoming.
- [x] Information window about the movie title, overview and rating.
# Author

This app is developed by `Badar us Salam`.