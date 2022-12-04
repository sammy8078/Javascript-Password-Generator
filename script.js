// creates new variables
const generateButtonEl = document.getElementById('generate');

const PasswordEl = document.getElementById('password');

function isNumber(data){
  
    return !isNaN(Number(data)); // if result is not a number then it returns nan, if result is a number then it returns number (1,2 etc)


}

function askPasswordLength(){
    
    const passwordLength = prompt('How many characters (8-128)?');  //creates prompt "how many characters 8-128?

    

    if (!isNumber(passwordLength)) {  //checks if password is numeric , if it not a number then it will ask again
        return askPasswordLength();  // recurision  -- when func calls itself
}
const length = Number(passwordLength);

console.log(length);  // logs character length to console (8-128)


if(length < 8 || length > 128){  // if password length is shorter than 8 or longer than 128 characters, it will ask again 
    return askPasswordLength();
}


return length;
}

//asks if you want upper or lower case characters, numbers and special characters
function askCriteria(){

    const upper = confirm ('Would you like uppercase characters?');
    const lower = confirm ('Would you like lowercase characters?');
    const number = confirm ('Would you like numbers?');
    const special = confirm ('Would you like special characters?');
  // checks if user has picked a criteria, if user clicks no to all confirms, it will ask again
    if (!upper && !lower && !number && !special){       
        return askCriteria();
    }

    return {
        upper: upper,
        lower, 
        number, 
        special,
    }

}
// adds numbers,symbols and characters to bank
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specials = "!@#$%&'()*+,-./:;<=>"



// user is able to click on the button, it will then ask password length, asks criteria upper or lower case, do you want number or special characters etc,logs criteria to console
// Generates a password based on input collected

generateButtonEl.addEventListener('click', function(e){   

     // when user clicks on the button
    const passwordLength = askPasswordLength();   

    const criteria = askCriteria();    

    console.log(criteria);            
    let bank = "";  // bank of characters

if(criteria.upper){            // if user selected upper, then add all uppper to bank
bank = bank + uppercases;  
}

if (criteria.lower) {          // if user selected lower, then add all lower to bank
    bank = bank + lowercases;
    }

if (criteria.number) {            // if user selected number, then add all numbers to bank
        bank = bank + numbers;
}

if (criteria.special){            // if user selected special, then add all special to bank
            bank = bank + specials;    
}

        let password = "";  
// grab a random character from bank for password length times
        for (let index = 0; index < passwordLength; index++) {
        
     const randomNumber = Math.floor(Math.random() * bank.length); 
            
     const randomChar = bank[randomNumber];

     password = password + randomChar;

        }

            // display the password in the box
        PasswordEl.textContent = password;

})
