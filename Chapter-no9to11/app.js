//     Chapter no 9 To 11

// Q/1. Write a program to take “city” name as input from user. If
//  user enters “Karachi”, welcome the user like this:
//  “Welcome to city of lights”?

// let city = prompt("Enter Your city name?")
// if(city === "Karachi"){
// alert("“Welcome to city of lights”");
// }

// Q2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am?

// let gender = prompt("Enter your Gender?")
// if(gender=="male"){
// alert(" Good Morning Sir.")
// }
// else if(gender=="female"){
// alert(" Good Morning Ma’am.")
// }

// Q 3. Write a program to take input color of road traffic signal from the user & show the message according to this table?
 
// let signalColor = prompt("Enter Color of Road Traffic Signal?")
// if(signalColor==="red"){
// alert("Must Stop")
// }
// else if (signalColor=="yellow"){
// alert("Ready to move")
// }
// else if (signalColor=="green"){
// alert("Move now")
// }

// Q 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 
// 0.25litres, show the message “Please refill the fuel in your car”?

// let carFuel = +prompt(" Enter your remaining fuel in car in litres?")
// if(carFuel<0.25){
// alert(" “Please refill the fuel in your car”")
// }

// Q5. Run this script, & check whether alert message would be displayed or not. Record the outputs?

// PART (A)
// let a = 4
//  if (++a === 5){ 
//     alert("given condition for variable a is true");
//     }

//     // PART (B)
// let b = 82
// if(b++ ===83 ){
// alert("given condition for variable b is true")
// }    

// PART (C)
// let  c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
//     }

//    if (c === 13){ 
//     alert("condition 2 is true"); 
//     }

// if (++c < 14){ 
//     alert("condition 3 is true"); 
//     } 

// if(c === 14){ 
//     alert("condition 4 is true"); 
//     }  

// PART (D)
// let materialCost = 20000; 
// let laborCost = 2000; 
// let totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
//     }

// PART (E)
// if (true){ 
//     alert("True"); 
//     } 

// if (false){ 
//     alert("False"); 
//     }

// PART (F)
//  if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     }

 //Q 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as per following table?

// let marksObtained = +prompt("Enter Obtained Marks in Three Subjects?")
// let totalMarks = +prompt("Enter Total Marks?")
// let percentage = (marksObtained/totalMarks)*100

// document.write(`<h1>Marks Sheet</h1><br>
//     Total marks ${totalMarks}<br>
//     Marks Obtained ${marksObtained}<br>
//     Percentage ${percentage}% <br>`)
    
//     let grade;
//     let remarks;
//     if(percentage>=80){
// grade= "A-ONE"
// remarks="Excellent"
//     }
// else if (percentage>=70){
// grade= "A"
// remarks="Good"
// }
// else if(percentage>=60){
// grade= "B"
// remarks="You need to improve"
// }
// else if(percentage<60){
// grade="Fail"
// remarks="Need your hard work"
// }
// else{
//     document.write(`Invaild Input <br>`)
// }
// document.write(`Grade ${grade}<br>
//     Remarks ${remarks}<br>`)


//Q 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.?
// let secretNumber=6
// let guess = +prompt("guess the secret number \n between 1-10")

// a. If user guesses the same number, show “Bingo! Correct answer”.
// if(guess===secretNumber){
// alert(`“Bingo! Correct answer”.`)
// }

// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// if(++secretNumber===guess){
// alert(` “Close enough to the correct answer”.`)
// }
// else{
//     alert(`Sorry Wrong Guess`)
// }

// Q8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// let number = +prompt("Enter number to check number is divisible by 3 or not")
// if(number% 3 ===0){
// alert(`${number} Is Divisible by 3`)
// }
// else{
//     alert(`${number} Is Not Divisible by 3`)
// }

// Q9. Write a program that checks whether the given input is an
// even number or an odd number.?

// let numb = +prompt("Enter the Number")
// if(numb% 2 ===0 ){
// alert(`${numb} Given input is an Even Number`)
// }
// else{
//     alert(`${numb} Given input is an Odd Number `)
// }

// 10. Write a program that takes temperature as input and
// // shows a message based on following criteria?
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = +prompt("Enter The Temperature")
// if(temperature >40){
//     alert(`“It is too hot outside.”`)
// }
// else if(temperature >30){
// alert(`“The Weather today is Normal.”`)
// }
// else if(temperature >20){
// alert(`“Today’s Weather is cool.”`)
// }
// else if(temperature >10){
// alert(` “OMG! Today’s weather is so Cool.”`)
// }
// else{
//     alert(`Please stay inside your homes because there is freezing outside`)
// }

// Q11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let firstNumber= +prompt("Enter the First Number")
// let secondNumber= +prompt("Enter the Second Number")
// let opertors= prompt("Choose the Operator \n (+ - * / % )")
 
// if(opertors === `+`){
// alert(firstNumber + secondNumber)
// }
// else if(opertors=== `-` ){
// alert(firstNumber - secondNumber)
// }
// else if(opertors=== `*`){
// alert(firstNumber * secondNumber)
// }
// else if(opertors===`/`){
// alert(firstNumber / secondNumber)
// }
// else if(opertors===`%`) {
//     alert(firstNumber % secondNumber)
// }

// ---------------------Chapter no 9 To 11 End ------------------------