//       Chapter no 5

// Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser?

// let numFirst =3
// let numSecond =5
// let sum = numFirst + numSecond 
// document.write(`Sum of ${numFirst} and ${numSecond} is ${sum} <br> `);

// Q2. Repeat task1 for subtraction, multiplication, division & modulus?

// // Subraction
// let sub = numFirst - numSecond
// document.write(`Subraction of ${numFirst} and ${numSecond} is ${sub} <br>`)
// // Multiplication
// let mult = numFirst * numSecond
// document.write(`Multiplication of ${numFirst} and ${numSecond} is ${mult} <br>`)
// // Division
// let divis = numFirst / numSecond
// document.write(`Division of ${numFirst} and ${numSecond} is ${divis} <br>`)
// // Modulus.
// let modu = numFirst % numSecond
// document.write(`Modulus of ${numFirst} and ${numSecond} is ${modu} <br> `)


// Q3. Do the following using JS Mathematic Expressions

// // a. Declare a variable.
// let number;
// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write(`“Value after variable declaration is: ${number}”<br>`)
// // c. Initialize the variable with some number.
// number = 5
// // d. Show the value of variable in your browser like “Initial value: 5”.
// document.write(`“Initial value is: ${number}"<br>`)
// // e. Increment the variable.
// number++;
// // f. Show the value of variable in your browser like “Value after increment is: 6”.
// document.write(`“Value after increment is: ${number}” <br>`)
// // g. Add 7 to the variable.
// number +=7
// // h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.write(`“Value after addition is: ${number}” <br>`)
// // i. Decrement the variable.
// number--;
// // j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write(` “Value after decrement is: ${number}” <br>`)
// // k. Show the remainder after dividing the variable’s value by 3.
// number = number % 3;
// // l. Output : “The remainder is : 0”.
// document.write(`“The remainder is : ${number}”.`)

// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output?

// let ticketPrice = 600
// let total = ticketPrice * 5;
// document.write(`Total cost to buy 5 tickets to a movie is ${total} PKR`)

// Q5. Write a script to display multiplication table of any number in your browser. E.g?

// let num  =  1;
// document.write(`<h1> TABLE OF 4 </h1> <br>`)
// document.write(`4 X ${num} = ${4*num}`)
// num++ 
// document.write("<br />")
// document.write(`4 X ${num} =  ${4*num}`)
// num++ 
// document.write("<br />")
// document.write(`4 X ${num} =  ${4*num}`)
// num++ 
// document.write("<br />")
// document.write(`4 X ${num} =  ${4*num}`)
// num++ 
// document.write("<br />")
// document.write(`4 X ${num} =  ${4*num}`)
// num++ 
// document.write("<br />")
// document.write(`4 X ${num} =  ${4*num}`)
// num++ 
// document.write("<br />")
// document.write(`4 X ${num} =  ${4*num}`)
// num++ 
// document.write("<br />")
// document.write(`4 X ${num} =  ${4*num}`)
// num++ 
// document.write("<br />")
// document.write(`4 X ${num} =  ${4*num}`)
// num++ 
// document.write("<br />")
// document.write(`4 X ${num} =  ${4*num}`)


// Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here?


// a. Store a Celsius temperature into a variable.
// let celsius = 25

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// let fahrenheit = (celsius * 9/ 5) + 32;

// c. Now store a Fahrenheit temperature into a variable.
// fahrenheit= 77

// d. Convert it to Celsius & output “NNoF is NNoC”.
// celsius = (fahrenheit - 32) * 5/ 9
// document.write(`${celsius} C is ${fahrenheit} F <br> `)
// fahrenheit= (celsius * 9 /5) + 32
// document.write(`${fahrenheit} F is ${celsius} C <br> `)

// Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// the following in variables?
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// let priceItem1 = 650
// let priceItem2 = 100
// let quantityItem2 = 3
// let orderedQuantity = 7
// let shippingCharges = 100
// // Compute the total cost & show the receipt in your browser.
// let total = (priceItem1 * quantityItem2) + (priceItem2 * orderedQuantity) + shippingCharges;

// document.write(` Price of item 1 is ${priceItem1} <br>`)
// document.write(`Quantity of item 1 is ${quantityItem2} <br>`)
// document.write(`Price of item 2 is ${priceItem2} <br>`)
// document.write(`Quantity of item 2 is ${orderedQuantity} <br>`)
// document.write(` Shipping Charges ${shippingCharges} <br>`)
// document.write(`Total cost of your order is ${total} <br>`);

// Q8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser?

// let totalMaks = 980
// let marksObtained = 804
// let percentage = (marksObtained/totalMaks) * 100
// document.write(`<h1>MARK SHEET </h1> <br>`)
// document.write(`Total Marks ${totalMaks} <br>`)
// document.write(`Marks Obtained ${marksObtained} <br>`)
// document.write(`Percentage ${percentage} <br>`);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// let pKR = (10 * 104.80) + (25 *28)
// document.write(`<h1> Currency in PKR </h1> <br>`)
// document.write(`Total Currency in PKR : ${pKR} <br>`)

// Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let num = 5;
// let calculate =((num * 10) / 2)
// document.write(`<h1> Arithmetic Operators in a Single line </h1> <br>`)
// document.write(`Output ${calculate} <br>`)


//  Q11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

// let currentYear = 2025
// let birthYear = 2005
// let age = currentYear - birthYear;

// // Output them to the screen like so: “They are either NN or NN years old”.
// document.write(`<h1> Age Calculator </h1> <br>`)
// document.write(`Current Year: ${currentYear} <br>`)
// document.write(`Birth Year: ${birthYear} <br>`)
// document.write(`Age ${age} <br>`)

// Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// let radius = 20 
// document.write(`<h1>The Geometrizer </h1> <br>`)
// document.write(`Radius of a Circle ${radius} <br>`)
// // b. Calculate the circumference based on the radius, and  output “The circumference is NN”.
// //  (Hint : Circumference of a circle = 2 π r , π = 3.142)
// let circumference = (2 * 3.142) * radius
// document.write(`“The circumference is ${circumference}”<br>`)
// // Calculate the area based on the radius, and output “The
// // area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// let area =  3.142 * radius * radius
// document.write (`The area is : ${area} <br>`) 


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// // a. Store your favorite snack into a variable
// let favSnack = "Choclate Chip"
// document.write(`<h1>The LifeTime Supply Calculator </h1> <br>`)
// document.write(`Favouite Snack: ${favSnack} <br>`)

// // b. Store your current age into a variable.
// let age = 15
// document.write(`Current Age: ${age} <br>`)
// // c. Store a maximum age into a variable.
// let maximumAge = 65
// document.write(`Estimated Maximum Age: ${maximumAge} <br>`)
// // d. Store an estimated amount per day (as a number).
// let day = 3
// document.write(`Amount of Snack Per Day: ${day} <br>`)
// // e. Calculate how many would you eat total for the rest of
// // your life.
// let total = (65 - 15) * 3
// // Output the result to the screen like so: “You will need
// // NNNN to last you until the ripe old age of NN”.
// document.write(`“You will need ${total} ${favSnack} to last you until the ripe old age of ${maximumAge}” <br>`);





// ---------------------CHAPTER NO 5 IS END-----------------------








































