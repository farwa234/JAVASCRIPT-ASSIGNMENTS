// ----------------Chapter no 26 to 30

//Q 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number?

// let num = Number(prompt("Enter the number"))
// let round= Math.round(num)
// let floor = Math.floor(num)
// let ceil = Math.ceil(num)
// document.write(`Number: ${num} <br/> Round of Value : ${round} <br/> Floor Value : ${floor} <br/> Ceil Value : ${ceil}`)

//Q 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// // d. ceil value of the number?

// let num = Number(prompt("Enter the Number"))
// let round = Math.round(num)
// let floor = Math.floor(num)
// let ceil = Math.ceil(num)
// document.write(`Number: ${num} <br/> Round of Value : ${round} <br/> Floor Value: ${floor} <br/> Ceil Value: ${ceil}`)

//Q 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let num = Number(prompt("Enter the Number"))
// let abs = Math.abs(num)
// document.write(`The Absolute Value is ${num} is ${abs}`)

//Q 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your browser.:?

// let randomNo = Math.random()* 6
// let floor = Math.floor(randomNo)
// document.write(`Random die Value ${floor}`)

//Q 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser?

// let coinedValue = Math.random()*3
// let floor = Math.floor(coinedValue)
// console.log(floor)
// if(coinedValue < 2){
//     document.write(`${floor} <br/> Random coin value : Tails`)
// }
// else{
//     document.write(`${floor} <br/> Random coin value : Heads`)
// }


//Q 6. Write a program that shows a random number between 1 and 100 in your browser.?

// let num = Math.random()*100
// let ceil = Math.ceil(num)
// document.write(`Random number between 1 and 100 : ${ceil}`)

// Q 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let userInput = prompt("Enter your weight in kilograms")
// let parse = parseFloat(userInput)
// document.write(`The weight of user is ${parse.toFixed(1)} kilograms `)


//Q 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.?

// let randomNo = Math.ceil((Math.random()*10))
// document.write(randomNo)
// let userInput=Number(prompt("Enter a number in between 1 to 10"))
// if(userInput=== randomNo){
//     alert(`Congratulations your enter the same number`)
// }
// else{
// alert(`Try again`)
// }


// =====================Chapter no 26 to 30 End======================