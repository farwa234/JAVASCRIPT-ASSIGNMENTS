// Chapter no 6 to 9 Start


// Q1. Write a program to take a number in a variable, do therequired arithmetic to display the following result in your browser:

// let a = +prompt(`Input the Number`)
// document.write(`Result <br>`)
// document.write(`The value of a is ${a} <br>`)
// document.write(`...............................`)
// document.write(`<br>`)
// document.write(`<br>`)

// // PRE-INCREMENT
// document.write(`The value of ++a is : ${++a} <br> `)
// document.write(`Now the value of a is : ${a} <br>`)
// document.write(`<br>`)
// // POST-INCREMENT
// document.write(`The value of a++ is : ${a++} <br>`)
// document.write(`Now the value of a is : ${a} <br>`)
// document.write(`<br>`)
// // PRE-DECREMENT
// document.write(`The value of --a is : ${--a} <br>`)
// document.write(`Now the value of a is :${a} <br>`)
// document.write(`<br>`)
// // POST-DECREMENT
// document.write(`The value of a-- is : ${a--} <br>`)
// document.write(`Now the value is a-- : ${a} <br>`)
// document.write(`<br>`)

// Q2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// let a = 2
// let b = 1
// document.write(`<h1> Solving Complex Equation </h1>`);
// document.write(`The value of a is : ${a} <br>`)
// document.write(`The value of b is : ${b} <br>`)
// document.write(`The result value is : ??`)
// document.write(`<br>`)
// document.write(`<h3> Explaintory Solution </h3> <br>`)
// let result = --a - --b + ++b + b--;
// document.write(` 1 -0 + 1 + 1 <br>`)
// document.write(`1 + 1+ 1 : 3 <br>`)
// document.write(`The result value is : ${result} <br>`)

// // Q3. Write a program that takes input a name from user & greet the user.
// let userName = prompt("Enter your Name")
// alert(`WELCOME ! Hello ${userName}`)

// Q5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.

// document.write(`<h1>TABLE OF 5 </h1> <br>`)
// let table = +prompt('Enter a number')
// if (table==0){ 
//     for(let i=1;i<=10;i++){document.write(`${table} X i = ${table * i} <br>`)}
// }
// else{
//     for(let i=1;i<=10;i++){document.write(`${table} X i = ${table * i} <br>`)}
// }

// Q6. Take
// document.write(`<h1>MarkSheet</h1> <br> `)

// // a) Take three subjects name from user and store them in 3
// // different variables.
// let subjectFirst=prompt("Enter First Subject Name");
// let subjectSecond=prompt("Enter Second Subject Name");
// let subjectThird=prompt("Enter Third Subject Name");

// // b) Total marks for each subject is 100, store it in another
// // variable.
// let totalMarks = 300

// // c) Take obtained marks for first subject from user and
// // stored it in different variable.
// let obtainedSubject1 = +prompt("Enter your First Subject Marks")

// // d) Take obtained marks for remaining 2 subjects from user
// // // and store them in variables.
// let obtainedSubject2 = +prompt("Enter your Second Subject Marks")
// let obtainedSubject3 = +prompt("Enter your Third Subject Marks")

// // e) Now calculate total marks and percentage and show the
// // result in browser like this.(Hint: user table)
// let obtainedMarks = obtainedSubject1 + obtainedSubject2 + obtainedSubject3
// let percentage = obtainedMarks/totalMarks * 100
// let percentage1=(obtainedSubject1/100)*100;
// let percentage2=(obtainedSubject2/100)*100;
// let percentage3=(obtainedSubject3/100)*100;


// document.write(`<table border = "1">
// <tr>
// <th>Subject</th>
// <th>Total Marks</th>
// <th>Obtained Marks</th>
// <th>Percentage</th>
// </tr>


// <tr>
// <td> ${subjectFirst}  </td>
// <td> 100 </td>
// <td> ${obtainedSubject1} </td>
// <td>${percentage1} % </td>
// </tr>


// <tr>
// <td> ${subjectSecond}  </td>
// <td> 100 </td>
// <td> ${obtainedSubject2} </td>
// <td>${percentage2} % </td>
// </tr>


// <tr>
// <td> ${subjectThird} </td>
// <td> 100 </td>
// <td> ${obtainedSubject3} </td>
// <td>${percentage3} % </td>
// </tr>


// <tr>
// <th>Total Percentages</th>
// <th> ${totalMarks}</th>
// <th> ${obtainedMarks}</th>
// <th> ${percentage} % </th>
// </tr>
// </table>`)




// --------------------Chapter no 6 to 9 End----------------------