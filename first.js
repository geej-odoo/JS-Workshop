let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function checkGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  console.log(guess)
  if(isNaN(guess) || guess<1 || guess>100)
  {
    alert("Please Enter Appropriate Value")
    return false;
  }
  
  guessCount++;
  let resultElement = document.getElementById("result");
 
  if (guess > randomNumber) {
    resultElement.textContent = "HIGH";
  } else if (guess < randomNumber) {
    resultElement.textContent = "LOW";
  } else{
    resultElement.textContent = "CORRECT GUESS - " + guessCount + " Trials";
    document.getElementById("guessInput").disabled = true;
  }
}