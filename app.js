let password = ''
let symbols = '!@#$%^&*.()'
let count = 97

// A - B 65 - 90
// a - b 97 - 122
// 33 - 126
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const char = n => {
  return String.fromCharCode(n)
}

for (let i = 1; i <= 6; i++) {
  password += char(randomNum(65, 90)) // upp
  password += char(randomNum(97, 122))// lower
  password += symbols[randomNum(0, symbols.length - 1)]// symb
}

console.log(password)