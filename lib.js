const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const button = document.querySelector("button");


// Depending on what random score you get, you will be given a rank based on how good the score is, which will color code your score on the table. If no thresholds are met then No Rank will be assigned and that row will have a white background color.
const assignRank = (score) => {
  if (score >= 400) {
    return "Gold";
  }
  if (score >= 300) {
    return "Silver";
  }
  if (score >= 200) {
    return "Bronze";
  }
  return "No Rank";
}

// color code the scores by using the variables from the stylesheet with the dataset and the variable assigners by selecting each and every score variable from the table and checking their values to assign the color to the table rows.
const colorCodeScores = () => {
  tbody.querySelectorAll("td:nth-child(4)").forEach((td) => {
    const currentTd = td;
    currentTd.parentElement.dataset.score = assignRank(Number(td.innerTxt));
  });
};

// process the form from the text content of the text boxes and assign them to the variables.
const processForm = (elements) => {
  const newUser = { username: event.target.elements[0], winQuote: event.target.elements[1], loseQuote: event.target.elements[2], score: generateScore }
}

export const generateUser = (elements) => {
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
createGameTable(user);
  );
};
};

// this is what will be exported into scripts.js
export default (user) => {
  // a function that should pull the username, winQuote, loseQuote and score one at a time from an object
  user.forEach(({username, winQuote, loseQuote, score }) => {
    //grab the template and copy this note for each object
    const newTableRow = template.content.cloneNode(true);
    // grab all of the td tags in the tr tag and then assign variables to the td tags
    const newGameTDs = newTableRow.querySelectorAll("td");

    //Setting the text content of the td tags to the variables in the array
    newGameTDs[0].textContent = username;
    newGameTDs[1].textContent = winQuote;
    newGameTDs[2].textContent = loseQuote;
    newGameTDs[3].textContent = score;
    // put this game row into the tbody tag
    tbody.appendChild(newTableRow);
    // Assign the ranks to the table rows
    const assignRanks: () => void
    assignRanks();
  })