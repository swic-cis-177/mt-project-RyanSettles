const uname =document.querySelector("#username");
const winQuote =document.querySelector("#winQuote");
const loseQuote =document.querySelector("#loseQuote");



document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  //Getter
  console.log(document.querySelector("p").textContent);

  //Setter
  document.querySelector("p").textConent = "${uname.value} your win quote is ${winQuote.value} and your lose quote is ${loseQuote.value}";
})