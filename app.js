let password = ''
let symbols = '!@#$%^&*.()'

// A - B 65 - 90
// a - b 97 - 122
// 33 - 126
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const char = n => {
  return String.fromCharCode(n)
}

for (let i = 1; i <= 5; i++) {
	if(i < 5){
  password += char(randomNum(65, 90)) // upp
  password += char(randomNum(97, 122))// lower
	password += randomNum(0, 9) // num
  password += symbols[randomNum(0, symbols.length - 1)]// symb
}else {
	password += char(randomNum(65, 90)) // upp
	password += symbols[randomNum(0, symbols.length - 1)] // symb
}
}

// password += 'ñ'

console.log(password)
console.log(password.length)
