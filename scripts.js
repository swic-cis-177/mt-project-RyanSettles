// import the command which allows the table to be created from lib.js
import createTable from "./lib.js";

const form = document.querySelector("form");

// create table from the data
createTable(user);

render(user);

// wait for the submit button to be clicked then push the new information from the text boxes onto the table, and prevent the default information from being pushed
form.addEventListener("submit", (event) => {
  event.preventDefault();

  data.push(generateUser(event.target.elements));
  render(user)
})