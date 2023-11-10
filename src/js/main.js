import './../css/style.css'

// const theNumber = 53;
// let theGuess =0;

// while (theGuess != theNumber) {
//   theGuess = +prompt("Gissa talet mellan 0-100");

//   if (theGuess > theNumber){
//     alert("Du gissade för högt");
//   }

//   else if (theGuess == theNumber){
//     alert("Du gissade rätt");

//   }


// }

const myName = ["M", "A", "L", "I", "N"];
const lettersContiner = document.getElementById("myName");

myName.forEach((value) => {
  const nameContainer = document.createElement("div");
  const name = document.createElement("h2");

  name.innerHTML = value;
  nameContainer.className = "letters";


  nameContainer.appendChild(name);
  lettersContiner.appendChild(nameContainer);


})


