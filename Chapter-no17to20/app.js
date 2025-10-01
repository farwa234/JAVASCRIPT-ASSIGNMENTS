// --------------Chapter no 17 to 20 ---------------

// Q.1 Declare and initailize an empty multidimensional array.(Array of arrays)?

// let arrayNumb =[[],[],[]];

// Q.2 Declare and initailize a multidimensional array representing the following matrix?

// const matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]];

// for(let i =0;i<matrix.length;i++){
// document.write(`${matrix[i]}`+"<br/>")
// }

// Q.3 Write a program to print numeric counting from 1 to 10?

// for(let i =1;i<=10;i++){
//     console.log(i)
// }

// Q.4 Write a program to print multiplication tabale of any number using for loop.Table number
// & length should be take as an input from user?

// let tableNumber = +prompt("Enter the table number")
// let tableLength = +prompt("Enter the table length")

// for(let i = 1;i <= tableLength;i++){
//     document.write(`${tableNumber} X ${i} = ${tableNumber * i}` + "<br>")
// }

// Q.5 Write a program to print items of the following array using for loop: 
// friuts = ["apple","banana","orange","manago","strawberry"]

// const fruits = ["apple","banana","orange","manago","strawberry"]
// for(let i = 0;i < fruits.length;i++){
//     document.write(`${fruits[i]}` + "<br/>")
// }
// for(let j = 0;j < fruits.length ;j++){
//     document.write(`Element at index ${j} is ${fruits [j]}` + "<br/>")
// }

// Q.6 Gernate the following series in your brower .See example output?
// a. Counting : 1,2,3,4,5,6,7,8,9.10,11,12,13,14,15

// document.write(`<h1> Counting </h1>`)
// for(let i = 1;i <= 15;i++){
//     document.write(`${i}`+ "<br/>")
// }

// b. Reverse counting :10,9,8,7,6,5,4,3,2,1

// document.write(`<h1> Reverse Counting` +"<br/>")
// for(let i = 10;i >= 1;i--){
//     document.write(`${i}` +"<br/>")
// }

// c.Even number: 0,2,4,6,8,10,12,14,16,18,20

// document.write(`<h1>Even number </h1>`)
// for(let i = 0;i <= 20;i++){
//     document.write(i++ + "<br/>")
// }

// d. Odd numbers: 1,3,5,7,9,11,13,15,17,19

// document.write(`<h1>Odd number</h1>`)
// for(let i = 1;i <= 19;i++){
//     document.write(i++ + "<br/>")
// }

// e. Series: 2k,4k,6k,10k,12k,14k,16k,18k,20k

// document.write(`<h1> Series </h1>`)
// for(let i = 2;i<= 20;i++){
//     document.write(i++ + "k <br/>")
// }

//  Q.7 You have an array
// A = ["cake","apple pie","cookie","chips","patties"]
// Write a program to search an enable "search by user input" in an array.
// After searching,prompt the user whether the given items is found in the list or not example?

// const A = ["cake","apple pie","cookie","chips","patties"]
// let  userInput = prompt("Enter the items names?")
//  userInput.toLowerCase()
//  let check = false
//  for(let i = 0;i <A.length;i++){
//     if(userInput=== A[i]){
//         document.write(`${userInput} is avaiable at index ${i} in our bakery <br/>`)
//         check = true
//     }
//  }
//  if(check===false){
//     document.write(`We are sorry ${userInput} is not avaiable in our bakery <br/>`)
//  }

// Q.8 Write a program to identify the largest number in the given array.
// A = [24,53,78,91,12]
 
// const arrayNumbers =  [24,53,78,91,12]
// let largestNumber = [0]
// for(let i = 0; i < arrayNumbers.length ;i++){
//     if(arrayNumbers[i] > largestNumber)
//         largestNumber = arrayNumbers[i]
// }
// document.write(`<strong> Array items : </strong> 24,53,78,91.12 <br/>`)
//   document.write(`The largest number is ${largestNumber} <br/>`)

// Q.9 Write a program to idenfity the smallest number is given array 
// A = [24,53,78,91,12]
// const arrNumber = [24,53,78,91,12]
// let smallNumber = [0]
// for(let i = 0; i < arrNumber.length;i++){
//     if(arrNumber[i] < smallNumber){
//         smallNumber = arrNumber[i]
//     }
// }
// document.write(`<strong> Array numbers : </strong> 24,53,78,91,12 <br/>`)
// document.write(`The smallest number is ${smallNumber} <br/>`)

// Q.10 Write a program to print multiples of 5 ranging 1 to 100.

// for(let i = 5; i <= 100 ; i = i+ 5){
//     document.write(i+ ",")
// }


// =======================Chapter no 17 to 20 is End ============================