import './../css/style.css'

const theNumber = 53;
let theGuess =0;

while (theGuess != theNumber) {
  theGuess = +prompt("Gissa talet mellan 0-100");

  if (theGuess > theNumber){
    alert("Du gissade för högt");
  }
  
  else if (theGuess == theNumber){
    alert("Du gissade rätt");

  }


}



