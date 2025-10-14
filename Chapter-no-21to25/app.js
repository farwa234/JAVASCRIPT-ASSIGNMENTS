// -----------------Chapter no 21 to 25

// Q.1 Write a program that takes two user inputs for first and last name using propmt and merge them in a new variable 
// titled full name. Greet the user using his full name?

// let firstName = prompt("Enter the first name ?")
// let lastName = prompt("Enter the last name ?")
// let fullName = firstName + lastName
// alert(`Hello ${fullName}`)

// Q.2  Write a program to takes a user inputs about his favouite mobile phone model.Find and dispaly the length of user input 
// //  in your browzer?

// let userMobile = prompt("Enter your favpouite Mobile model ?")
// let lenghth = userMobile.length
// document.write(`My Favouite mobile model is ${userMobile} and length of string is ${lenghth}`)

// Q.3 Write a program to find the index of letter "n" in the word "Pakistani" and display the result in your browzer?

// let word = "Pakistani";
// let indexNo = word.indexOf("n")
// document.write(`String : ${word} <br/> index no of n = ${indexNo}`)


//Q.4  Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser?

// let word = "Hello World";
// let lastIndex = word.lastIndexOf("l");
// document.write(`String : ${word} <br/> last index no = ${lastIndex}`)

// Q.5 Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser?
  
// let word = "Pakistani"
// let chartword= word.charAt(3)
// document.write(`String : ${word} <br/> Character of index is = ${chartword}`)


// Q.6  Repeat Q1 using string concat() method?

// let firstName = prompt("Enter the first name ?")
// let lastName = prompt("Enter the last name ?")
// alert("Hello World" + firstName + lastName)

// Q.7  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser?

// let city = "“Hyderabad”"
// let replace = city.replace("Hyder" , "Islam")
// document.write(`Before City : ${city} <br/> After replcement ; ${replace}`)

//Q.8 Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;?

// let message = "“Ali and Sami are best friends. They play cricket and football together.”"
// let change = message.replace(/and/g, `&`)
// document.write(`Message : ${message} <br/> After;Replacement : ${change}<br/>`)

// //Q 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.?

// let string = "472"
// let num = 472
// document.write(`String : "472" <br/>
//     Value ${typeof string} <br/>
//     Number : 472 <br/>
//     Value ${typeof num } <br/>`)

//Q 10. Write a program that takes user input. Convert and show the input in capital letters.?

// let value = prompt("Enter the input?")
// let capital = value.toUpperCase()
// document.write(`User input :${value} <br/> Upper Case: ${capital}<br/>`)

//Q 11. Write a program that takes user input. Convert and show the input in title case?

// let word = prompt("Please enter the word?")
// let first = word.charAt().slice(0,1)
// let check = first.toUpperCase()
// let second= word.slice(1)
// let other = second.toLowerCase()
// let titleCase = check + other 
// document.write(`User Input : ${word} <br/> Title Case : ${titleCase}`)

//Q 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.?

// let num = 35.36
// let stri= num.toString()
// let value = stri.indexOf(`.`)
// let result = stri.slice(0,value)+stri.slice(value+1)
// document.write(`Number : ${num} <br/> Result : ${result}`)


// Q 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let userInput = prompt("Enter the name ?")
// let charCode;
// for(let i = 0;i<userInput.length ;i++){
//     charCode=userInput.charCodeAt(i)
//     if(charCode=== 33||charCode=== 44||charCode=== 46||charCode===64){
//         alert(`"Please Enter a Valid Username"`)
//     }

// }

//Q 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example: ?


// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userInput = prompt("Weclome to ABC Bakery . What do you want to order Sir / ma`am")
// let change = userInput.toLowerCase()
// let condition = false 
// for( let i = 0; i <bakeryItems.length ; i++){
//     if(userInput=== bakeryItems[i]){
//         document.write(`${bakeryItems[i]} is available of index ${i} is items`)
//         condition= true
//     }
// if(condition=== false){
//     document.write(`We are Sorry ${userInput} is not avalaible in our bakery`)
// }

// }

// Q 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.?


