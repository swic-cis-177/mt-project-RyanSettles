const form =document.querySelector('form');
const p =document.querySelector("p");

form.addEventListener('submit', function () {
event.preventDefault();

console.log("Your username is: " + event.target.elements[0].value + ". Your Win Quote is:  " + event.target.elements[1].value + ". Your lose quote is: " + event.target.elements[2].value + ".");

const formData = {}
for (let i = 0; i <= 2; i++){
  console.log(event.target.elements[i].value)

  p.textContent =  ("Your username is: " + event.target.elements[0].value + ". Your Win Quote is:  " + event.target.elements[1].value + ". Your lose quote is: " + event.target.elements[2].value + ".");
}
});

