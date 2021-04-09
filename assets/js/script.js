// Assignment code here

//Alert when landing on the page.
alert(
  "Welcome to Password Generator! Click on 'Generate Password' and follow the prompts to create your passowrd!"
);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Password length prompt

  var lengthInput = window.prompt(
    "How long do you want your password to be? Choose between 8-128 characters."
  );
  debugger;
  if ((lengthInput) => 8 || lengthInput === 127) lengthInput === lengthInput;

  //Lowercase prompt
  var lowerInput = window.prompt(
    "Do you want to use lowercase letters? 'yes' or 'no'? "
  );
  if (lowerInput === "yes" || lowerInput === "YES") {
    lowerInput = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowerInput = "";
  }
  console.log(lowerInput);

  //Uppercase prompt
  var upperInput = window.prompt(
    "Do you want to use uppercase letters? 'yes' or 'no'? "
  );
  if (upperInput === "yes" || upperInput === "YES") {
    upperInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    upperInput = "";
  }
  console.log(upperInput);

  //Number prompt
  var numberInput = window.prompt(
    "Do you want to use numbers? 'yes' or 'no'? "
  );
  if (numberInput === "yes" || numberInput === "YES") {
    numberInput = "1234567890";
  } else {
    numberInput = "";
  }
  console.log(numberInput);

  //Special prompt
  var specialInput = window.prompt(
    "Do you want to use special characters? 'yes' or 'no'? "
  );
  if (specialInput === "yes" || specialInput === "YES") {
    specialInput = "!@#$%^&*()-_=+";
  } else {
    specialInput = "";
  }
  console.log(specialInput);

  //Generate Password Function
  var generatePassword = function () {
    var fullPw = lowerInput + upperInput + numberInput + specialInput;
    console.log(fullPw);
    mixedPW = "";
    for (let i = 0; i <= lengthInput; i++) {
      mixedPW =
        mixedPW +
        fullPw.charAt(
          Math.floor(Math.random() * Math.floor(fullPw.length - 1))
        );
      console.log(mixedPW);
    }
    return mixedPW;
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*Character Types
var lowerTypes = "abcdefghijklmnopqrstuvwxyz";
var upperTypes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberTypes = "1234567890";
var specialTypes = "!@#$%^&*()-_=+"; */
