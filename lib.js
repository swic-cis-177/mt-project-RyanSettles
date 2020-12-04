const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const button = document.querySelector("button");



// this is what will be exported into scripts.js
export default (data) => {
  // a function that should pull the username, winQuote, loseQuote and score one at a time from an object
  data.forEach(({username, winQuote, loseQuote, score }) => {
    //grab the template and copy this note for each object
    const newTableRow = template.content.cloneNode(true);
    // grab all of the td tags in the tr tag and then assign variables to the td tags
    const newGameTDs = newTableRow.querySelectorAll("td");

    //Setting the text content of the td tags to the variables in the array
    newGameTDs[0].textContent = username;
    newGameTDs[1].textContent = winQuote;
    newGameTDs[0].textContent = loseQuote;
    newGameTDs[0].textContent = score;
    // put this game row into the tbody tag
    tbody.appendChild(newTableRow);
  })