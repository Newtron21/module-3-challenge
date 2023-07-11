// Assignment code here

// Write password to the #password input
// GIVEN I need a new, secure password
var password=document.getElementById("password");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function writePassword() {
  // WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLengthNumber = window.prompt("How many characters do you want in your password: 8-128", 8);
  if (!passwordLengthNumber) {
    return;
  };    
  console.log("Password length is = "+passwordLengthNumber);
  
  //trying to make sure someone typed something between 8-128 if not make them start over 
  if ((passwordLengthNumber>=8)&&(passwordLengthNumber<=128)){
    console.log('pass');
  } else {
    console.log('fail');
    window.alert("please try again and input length of password between 8-128");
    writePassword();
  };
  // WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//declare if element is true or false lowercase
  var lowerCaseOption = window.prompt("Include lowercase?","Yes"); 
  if (!lowerCaseOption) {
    return;
  };
  if (lowerCaseOption=="Yes"){
    lowerCaseOption=true;
  }
  else {
    lowerCaseOption=false;
  }
  console.log("using lowercase characters? "+lowerCaseOption);
//declare if element is true or false uppercase
var upperCaseOption = window.prompt("Include UPPERCASE?","Yes"); 

  if (!upperCaseOption) {
    return;
  };
  if (upperCaseOption=="Yes"){
    upperCaseOption=true;
  }
  else {
    upperCaseOption=false;
  }
console.log("Using uppercase characters? "+upperCaseOption)
//declare if element is true or false
//question for numeric option
var numericOption = window.prompt("Include numeric?","Yes"); 
  if (!numericOption) {
    return;
  };
  if (numericOption=="Yes"){
    numericOption=true;
  }
  else {
    numericOption=false;
  }
console.log("Using numbers? "+ numericOption);
//true or false for special character
  var specialCharacterOption = window.prompt("Include special characters?","Yes"); 
  if (!specialCharacterOption) {
    return;
  };
  if (specialCharacterOption=="Yes"){
    specialCharacterOption=true;
  }
  else {
    specialCharacterOption=false;
  }
console.log("Use special characters? "+ specialCharacterOption);

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
if ((lowerCaseOption==false)&&(upperCaseOption==false)&&(numericOption==false)&&(specialCharacterOption==false)){
  console.log('all character types were marked as false');
  window.alert("please try again and select at least one character type");
  writePassword();
} 
else {
  console.log('pass');
}
//writing password generator now
//if else 
//length of password = password length number (i should clean up the string)
//then you do if variable==false dont include if true then use
//random  password generator code
//declaring variables for password

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
var newLength = passwordLengthNumber;
var charUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower="abcdefghijklmnopqrstuvwxyz";
var charNumerical="0123456789";
var charSpecial="?!@#$%&*";
var newPassword="";
//making sure if they arent selected they get taken out of the password option
if (lowerCaseOption==true){ charLower="abcdefghijklmnopqrstuvwxyz"
}
else {charLower=""};
console.log("lowercase characters used= "+charLower);
//uppercase true or false 
if (upperCaseOption==true){ charUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
else {charUpper=""};
console.log("Uppercase characters used= "+charUpper);
//numeric option true or false
if (numericOption==true){ charNumerical="0123456789"
}
else {charNumerical=""};
console.log("numbers used = "+ charNumerical);
//special character option true or false
if (specialCharacterOption==true){ charSpecial="?!@#$%&*"
}
else {charSpecial=""};
//im console logging each variable to make sure it comes out correctly
console.log("Special characters used= "+charSpecial);
//combining all the character options
var passwordCharacters= (charLower+charUpper+charSpecial+charNumerical)
for (var i =0; i <=newLength; i++){
  var pullCharacter = Math.floor(Math.random()*passwordCharacters.length);
  newPassword += passwordCharacters.substring(pullCharacter, pullCharacter +1);
}
// var index = Math.floor(Math.random() * passwordCharacters.length); pulled from rock paper scissors code

console.log("total list of characters used= "+passwordCharacters);

// var password ="";
// var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  
//   passwordText.value = password;
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
console.log ("New random password is = "+newPassword);
document.getElementById('password').value = "Your secure password is " + newPassword;
window.alert("Your new password is " + newPassword + " you can also view it down below on the page after clicking out of this.")
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

