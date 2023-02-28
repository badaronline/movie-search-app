  const createWelcomeScreen = () => {
  const welcomeScreen = document.createElement("div");
  welcomeScreen.classList.add("welcome-screen");

  const title = document.createElement("h1");
  title.textContent = "Welcome to Movies Search App";
  welcomeScreen.appendChild(title);

  const button = document.createElement("button");
  button.textContent = "Enter to website";
  button.id = "enter-button";
  welcomeScreen.appendChild(button);
  
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const createdBy = document.createElement("span");
  createdBy.textContent = "Developed by Badar";
  footer.appendChild(createdBy);

  welcomeScreen.appendChild(footer);

    return welcomeScreen;
  };
export const welcomeScreen = createWelcomeScreen();
document.body.appendChild(welcomeScreen);