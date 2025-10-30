// -----------------Chapter no 35 to 38

//Q.1 Write a function that displays current date & time in your browser.?

// function tellDate(){
//     let today = new Date()
//     document.write(today)
// }
// tellDate()

// Q.2 Write a function that takes first & last name and then it greet the user using his full name ?

// function greetUser(){
//     let name1= prompt("Enter the first name?")
//     let name2= prompt("Enter the last name?") 
//     alert(`Hello ${name1} ${name2} `)
// }
// greetUser()

//Q.3 Write a function that adds two numbers (input by user) and returns the sum of two numbers.?

// function sum(){
// let firstNo = Number(prompt("Enter the first number?"))
// let secondNo= Number(prompt("Enter the second number?"))
// let result = firstNo+secondNo
// document.write(`The sum of is ${result}`)
// }
// sum()

//Q.4 Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser?

//===== Miss ne bola tha ab se Arrow function use krna ha =====


// const add = (a, b) => a + b
// const subtract = (a, b) => a - b
// const multiply = (a, b) => a * b
// const divide = (a, b) => a / b 

// let num1 = Number(prompt("Enter the First number?"))
// let operator = prompt("Enter operator (+, -, *, /)")
// let num2 = Number(prompt("Enter the Second number?"))
// let result;

// if (operator === "+") {
//   result = add(num1, num2)
// } else if (operator === "-") {
//   result = subtract(num1, num2)
// } else if (operator === "*") {
//   result = multiply(num1, num2)
// } else if (operator === "/") {
//   result = divide(num1, num2)
// } else {
//   result = "Invalid operator!"
// }

// alert(`Result: ${result}`)

// Q.5 Write a function that squares its argument. ?

// let squareNumber = Number(prompt("Enter number to be square?"))
// const square = (num) => num**2
// let result = square(squareNumber)
// alert(`The Square of number is ${squareNumber} and result is ${result} `)

//Q.6 Write a function that computes factorial of a number?

// const factorial =(num)=> {
//     let fact = 1
//     for(let i=num;i>=1;i--){
//     fact=fact*i
//     }
//     return fact
// }
// let number=Number(prompt("Enter a number?"))
// let result = factorial(number);
// document.write(`The factorial of ${number} is ${result}`)


//Q.7 Write a function that take start and end number as inputs & display counting in your browser.?

// const counting=(start , end) => {
//      for(let i= start ; i <= end ;i++){
//       document.write(`${i} <br/>`)
//      }  
    
// }
// let first = Number(prompt("Enter a starting Number?"))
// let second = Number(prompt("Enter a ending Number ?"))

// counting(first,second)

//Q.8 Write a nested function that computes hypotenuse of a right angle triangle. ?


// const computesHypotenuse =(base,perpendicular) => {
//            let base1;
//            let perpendicular2;
//     const calculateSquare= (num) =>{
//          num = num*num
//          return num
//     }
//     base1 = calculateSquare(base)
//     perpendicular2= calculateSquare(perpendicular)
//     let hypotenuse = Math.sqrt(base+perpendicular)
//     return hypotenuse
// }
// let base = Number(prompt("Enter base of right angle triangle"))
// let perpendicular = Number(prompt("Enter perpendicular of right angle triangle"))
// let result = computesHypotenuse(base,perpendicular)
// document.write(`The hypotenuse of right angle triangle is ${result.toFixed(2)} `)


//Q.9 Write a function that calculates the area of a rectangle.?
                // A = width * height
                // Pass Width and Height in following mannner
                // i.Argumments as value
                // ii.Argumments as variables

//  const calculateArea = (width , height)=> {
//          let area= width*height
//          return area;
//  }
// // i.Argumments as value

// let area1 = calculateArea (5,10)
// document.write(`Area (using values): ${area1} <br>`);

// //  ii.Argumments as variables
                
// let width1 =Number(prompt("Enter the Number ?"))
// let height1=Number(prompt("Enter the Number ?"))
// let area2= calculateArea(width1,height1)
// document.write(`Area (using variables): ${area2}`);

//Q.10 Write a JavaScript function that checks whether a passed string is palindrome or not?

// let palindrome = (string)=>{
//     let check = ""
//     for(let i = string.length -1 ; i>= 0 ;i--){
//         check += string[i]
//     }
//     if(string.toLowerCase() === check.toLowerCase()){
//         alert(`${string} is a plindrome word`)
//     }
//     else{
//         alert(`${string} is not a plindroma word`)
//     }
// }

// let str = prompt("Enter any word?")
// palindrome(str)

//Q.11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.?

// const UpperCase=(str)=>{
//      let arr= str.split(" ")
//      let newArray = []
//      for(let i =0; i < arr.length ;i++){
//     newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//   }
//     return newArray.join(" ")
// }
//     let str = "the quick brown fax"
//     let result = UpperCase(str)

//     document.write(`EXAMPLE STRING : ${str} <br/>`)
//     document.write(`EXPECTED STRING : ${result} <br/>`)

//Q.12 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. ?

// const longest= (str)=>{
//     let split =str.split(" ")
//     let first = split[0].length
//     for(let i=0;i<split.length;i++){
//         if(first<split[i].length)
//             first = split[i]
//     }
//     return first

// } 
// let str = "Web Development Tutorial"
// let result = longest(str)
// document.write(`EXAMPLE STRING :${str} <br/>`)
// document.write(`EXPECTED STRING :${result} <br/>`)

//Q.13 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' .?

// const count = (str,letter)=> {
//     let find = 0
//     for(let i = 0 ; i < str.length ;i++){
//         if(str[i]===letter)
//             find += 1;
//     }
//     return find 

// }
// let str = 'JSResourceS.com'
// let letter = 'o'
// let result = count(str,letter)
// document.write(`The occurence of o in this string is ${result}`)

//14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2?????

// const circumfrence = (value)=>{
//     let base = 2*3.141*value
//     return base
// }


// const calculate=(value)=>{
//     let area = 3.141*(value*value)
//     return area
// }

// let radius = Number(prompt("Enter the radius of circle ?"))
// let circumference= circumfrence(radius)
// let areaCircle = calculate(radius)
// document.write(`The Circumference of circle is ${circumference} <br/>`)
// document.write(`The Area of circle is ${areaCircle} <br/>`);





// ==================Chapter 35 to 38 is End =======================