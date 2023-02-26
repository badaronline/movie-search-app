    const createWelcomeScreen = () => {
    const welcomeScreen = document.createElement("div");
    welcomeScreen.classList.add("welcome-screen");
  
    const title = document.createElement("h1");
    title.textContent = "Welcome to Movie Search App";
    welcomeScreen.appendChild(title);
  
    const button = document.createElement("button");
    button.textContent = "Enter to website";
    button.id = "enter-button";
    welcomeScreen.appendChild(button);
    return welcomeScreen;
  };
 export const welcomeScreen = createWelcomeScreen();
document.body.appendChild(welcomeScreen);