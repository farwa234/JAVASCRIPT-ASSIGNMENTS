// -----------Chapter no 12 to 13

//Q 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).?

// let code = prompt("Enter your character to check whether the given input is a number, uppercase letter or lower case letter.")
// let value = code.charCodeAt(0)
// let result = 
//               (value >= 48 && value <= 57)? "Numbers":
//               (value >= 65 && value <= 90)?  "UPPER CASE LETTER":
//               (value >= 97 && value <= 122)?  "lower case letter":
//               "Other Characters";
//               console.log(result);

//   Q 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal ? 

// let num1 = prompt("Enter your First Number")
// let num2 = prompt("Enter your Second Number")
// let check =
// (num1> num2) ? num1 + " is larger":
// (num2 > num1) ? num2 + " is larger":
// "Both are Equal"
// console.log(check);

// Q3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.?

// let input = prompt("Enter the number")
// let result = 
// (input > 0 )? "Postive":
// (input < 0)? "Negative":
// "Zero"
// // console.log(result);

// Q4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise?

// let vowels = prompt("Enter your one character")
// let check = (vowels.length===1) ?
// ("aeiouAEIOU".includes(vowels)) ? true : false :
// "Please enter your one Character"
// console.log(check)

// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.?

// let correctPassword = "abc1234"
// let userPassword = prompt("Enter your Password")

// let result = 
// (!userPassword) ? "Please Enter Your Password" :
// (userPassword === correctPassword) ? "Correct! The password matches." :
// "Incorrect Password"
// console.log(result);

// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// } ?

// let greeting;
// let hour = 13
// let checking = 
// (hour < 18) ? greeting + "Good day" : greeting + " Good evening"
// console.log(checking)

// Q7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements ?

// let time = +prompt("Enter your time in 24 hours clock format like: 1900 = 7pm.")
// let result= 
// (time>=000 && time<1200) ? "Good Morning":
// (time>=1200 && time<1700) ? "Good Afternoon":
// (time>=1700 && time<2100) ? "Good Evening":
// (time>=2100 && time<=2359) ? "Good Night":
// "INVALID INPUT"
// console.log(result)


// --------------------Chapter no 12 to 13 End -------------------------