const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const button = document.querySelector("button");

// when the button is clicked the data should be turned into an array and a new game table should be sumbitted
button.addEventListener("submit"){
  Array.from(event.target.elements)
  .reduce(
    (details, { score, value }) => ({
      ...details,
      [score]: value,
    }),
    {})
    // Generate a random score
    const generateScore = () =>
Math.floor(Math.random() * (300-100 +1) +100);
// create a new table once the button is clicked that adds the data from the text boxes into a new row on the table.
  )
}

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