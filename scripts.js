const form =document.querySelector('form');
const uname =document.querySelector("#username");
const winQuote =document.querySelector("#winQuote");
const loseQuote =document.querySelector("#loseQuote");


form.addEventListener('submit', function () {
event.preventDefault();

console.log("Your username is: " + event.target.elements[0].value + ". Your Win Quote is:  " + event.target.elements[1].value + ". Your lose quote is: " + event.target.elements[2].value + ".");

const formData = {}
for (let i = 0; i <= 2; i++){
  console.log(event.target.elements[i].value)
}
});

// {username: event.target.elements[0].value
// password: event.target.elements[1].value}