// Assignment Code
var generateBtn = document.querySelector("#generate"); //original

var charsAvail; //empty array where user's choice of characters will be added
upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
specialArray = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '`', '{', '|', '}', '~', '_', ']'];
numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let passwordLength;
let charsUpper;
let charsLower;
let charsSpecial;
let charsNum;

function writePassword(){ //original
  let password = generatePassword(); 
  let passwordText = document.querySelector("#password"); 

  passwordText.value = password; 
};

//you'll need to define this function since it's called in the function below
function generatePassword(){ 

  passwordLength = parseInt(prompt("How many characters would you like your password to be? Enter a number between 8-128"));    

    if (passwordLength <= 8 || passwordLength >= 128){
      window.alert("Please enter a numerical value between 8-128. Refresh page and try again."); 
      return;
    } else if (passwordLength >= 8 && passwordLength <= 128){ //if the character length is within range, continue to ask user for the following input
      console.log("Password length will be: " + passwordLength);
      charsUpper = confirm("Would you like to: include uppercase letters in your password?");
      charsLower = confirm("Would you like to: include lowercase letters in your password?");
      charsSpecial = confirm("Would you like to: include special characters in your password?");
      charsNum = confirm("Would you like to: include numbers in your password?");
    };

  if (charsUpper === false && charsLower === false && charsSpecial === false && charsNum === false){
    alert("No character types were selected, so they have all been included");
    charsAvail = upperArray.concat(lowerArray, specialArray, numArray); //all false
  } else if (charsUpper === true && charsLower === true && charsSpecial === true && charsNum === true){
    charsAvail = upperArray.concat(lowerArray, specialArray, numArray); //all true
  } else if (charsUpper === true && charsLower === true && charsSpecial === true && charsNum === false){
    charsAvail = upperArray.concat(lowerArray, specialArray); //TTTF
  } else if (charsUpper === true && charsLower === true && charsSpecial === false && charsNum === true){
    charsAvail = upperArray.concat(lowerArray, numArray); //TTFT
  } else if (charsUpper === true && charsLower === false && charsSpecial === true && charsNum === true){
    charsAvail = upperArray.concat(specialArray, numArray); //TFTT
  } else if (charsUpper === false && charsLower === true && charsSpecial === true && charsNum === true){
    charsAvail = lowerArray.concat(specialArray, numArray); //FTTT
  } else if (charsUpper === false && charsLower === false && charsSpecial === true && charsNum === true){
    charsAvail = specialArray.concat(numArray); //FFTT
  } else if (charsUpper === true && charsLower === true && charsSpecial === false && charsNum === false){
    charsAvail = upperArray.concat(lowerArray); //TTFF
  } else if (charsUpper === false && charsLower === true && charsSpecial === true && charsNum === false){
    charsAvail = lowerArray.concat(specialArray); //FTTF 
  } else if (charsUpper === true && charsLower === false && charsSpecial === false && charsNum === true){
    charsAvail = upperArray.concat(numArray); //TFFT
  } else if (charsUpper === true && charsLower === false && charsSpecial === true && charsNum === false){
    charsAvail = upperArray.concat(specialArray); //TFTF
  } else if (charsUpper === false && charsLower === true && charsSpecial === false && charsNum === true){
    charsAvail = lowerArray.concat(numArray); //FTFT
  } else if (charsUpper === true && charsLower === false && charsSpecial === false && charsNum === false){
    charsAvail = upperArray; //TFFF
  } else if (charsUpper === false && charsLower === true && charsSpecial === false && charsNum === false){
    charsAvail = lowerArray; //FTFF
  } else if (charsUpper === false && charsLower === false && charsSpecial === true && charsNum === false){
    charsAvail = specialArray; //FFTF
  }  else if (charsUpper === false && charsLower === false && charsSpecial === false && charsNum === true){
    charsAvail = numArray; //FFFT
  };

  console.log(charsAvail); //test

  let randomPassword = [];

  // random selection of the variables selected in the array
  for (let i = 0; i < passwordLength; i++){
    let selectedCharsAvail = charsAvail[Math.floor(Math.random() * charsAvail.length)];
    randomPassword.push(selectedCharsAvail); 
  } console.log(randomPassword); //test

  let passwordText = randomPassword.join(""); //converts array into a string
  
  return passwordText;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {writePassword()}); //original

