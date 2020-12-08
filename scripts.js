// import the command which allows the table to be created from lib.js
import createTable from "./lib.js";

// import the user that was brought from the text boxes into scripts.
import user from "./lib.js";

const form = document.querySelector("form");


render(user);

// wait for the submit button to be clicked then push the new information from the text boxes onto the table, and prevent the default information from being pushed
form.addEventListener("submit", (event) => {
  event.preventDefault();

  user.push(generateUser(event.target.elements));
  render(user)
})