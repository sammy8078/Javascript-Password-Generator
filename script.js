
const generateButtonEl = document.getElementById('generate');

const PasswordEl = document.getElementById('password');

function isNumber(data){
  
    return !isNaN(Number(data));


}

function askPasswordLength(){
    
    const passwordLength = prompt('How many characters (8-128)?');

    

    if (!isNumber(passwordLength)) {
        return askPasswordLength();
}
const length = Number(passwordLength);

console.log(length);


if(length < 8 || length > 128){
    return askPasswordLength();
}


return length;
}

function askCriteria(){

    const upper = confirm ('Would you like uppercase characters?');
    const lower = confirm ('Would you like lowercase characters?');
    const number = confirm ('Would you like numbers?');
    const special = confirm ('Would you like special characters?');

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

const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specials = "!@#$%&'()*+,-./:;<=>"




generateButtonEl.addEventListener('click', function(e){ 


    const passwordLength = askPasswordLength();

    const criteria = askCriteria();

    console.log(criteria);

    let bank = "";

if(criteria.upper){
bank = bank + uppercases;
}

if (criteria.lower) {
    bank = bank + lowercases;
    }

if (criteria.number) {
        bank = bank + numbers;
}

if (criteria.special){
            bank = bank + specials;
}

        let password = "";

        for (let index = 0; index < passwordLength; index++) {
           
     const randomNumber = Math.floor(Math.random() * bank.length);
            
     const randomChar = bank[randomNumber];

     password = password + randomChar;

        }

            
        PasswordEl.textContent = password;

})
