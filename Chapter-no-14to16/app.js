// ---------------Chapter no 14 to 16 ----------

// 1. Declare an empty array using JS literal notation to store student names in future.
// let studentNames = []

// 2. Declare an empty array using JS object notation to store student names in future.
// let studentNames = new Array()

// // 3. Declare and initialize a strings array.
// let fruits= ["Apple","Mango","Grapes","Banana","Orange","Kiwi"]
// document.write(`<h1> Strings array</h1> ${fruits}<br>`)

// 4. Declare and initialize a numbers array.
// let marks = [101 ,202,304,407,510]
// document.write(`<h1> Numbers array </h1> ${marks} <br>`)

// // 5. Declare and initialize a boolean array.
// let boole = [true,false,true,false]
// document.write(`<h1>Boolean array </h1> ${boole} <br> `)

// // 6. Declare and initialize a mixed array.
// let mixedArr =["Farwa", "Zafar",true,66]
// document.write(`<h1>Mixed array </h1> ${mixedArr} <br>`)

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let educationQualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// document.write(`<h1>Qualifications</h1>`)
// document.write(`<ol>`)
// for(let i = 0 ;i <educationQualifications.length;i++){
//     document.write(`<li>${educationQualifications[i]} </li>`)
// }
// document.write(`</ol>`)

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let studentNames = ["Micheal","John","Tony"]
// let marks = [320,230,480]
// let total = [500]
// document.write(`<h1>Scores & percentages of students </h1>`)
// for(let i = 0;i < studentNames.length;i++){
//     let percentage =(marks[i]/ total)*100
//     document.write(`Score of ${studentNames[i]} is ${marks[i]}
//         .Percentage: ${percentage.toFixed(2)}% <br>`)
// }

// 9. Initialize an array with color names. Display the array elements in your browser.
// let colorsName = ["Red","Blue","Yellow","Green","Black","Pink"]
// document.write(`<h1> Initialize array</h1> ${colorsName} <br>`)

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// let addBegin = prompt("Which color do you want to add at the beginning?")
// colorsName.unshift(addBegin)
// document.write(`<b>After adding at beginning:</b> ${colorsName} <br>`);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
// updated array in your browser.
// let addEnd = prompt("Which color do you want to add at the end?")
// colorsName.push(addEnd)
// document.write(`After adding at end:</b> ${colorsName} <br>`);

// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// colorsName.unshift("White","Gray")
// document.write(`<b>After adding two more at beginning:</b> ${colorsName} <br>`)

// d. Delete the first color in the array. Display the updated array in your browser.
// colorsName.shift()
// document.write(`<b>After deleting first color:</b>  ${colorsName} <br>`)

// e. Delete the last color in the array. Display the updated array in your browser.
// colorsName.pop()
// document.write(`<b>After deleting last color:</b>  ${colorsName} <br>`)

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// let indexAdd = prompt("At which index do you want to add a color?");
// let colorAdd = prompt("Enter the color name to add?")
// colorsName.splice(indexAdd,0,colorAdd)
// document.write(`<b>After adding color at index ${indexAdd} :</b> ${colorsName} <br>`);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let indexDel = prompt("At which index do you want to delete colors?")
// let countDel = prompt("How many colors do you want to delete?")
//     colorsName.splice(indexDel, countDel);
//     document.write(`<h2>Updated Array:</h2> ${colorsName}`);

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// let studentScores = [320,230,480,120]
// document.write(`Scores of Students ${studentScores} <br>`)
// studentScores.sort()
// document.write(`Ordered Scores of Students ${studentScores} <br>`)


// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// let cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshwar"]
// document.write(`<h1>Cities list</h1> ${cityNames}`)
// let select = cityNames.slice(1,4)
// document.write(`<h4>Select cities</h4> ${select}`)

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// let arr = ["This","is","my","cat"]
// document.write(`<h1>Arrays</h1> ${arr} <br>`)
// let string= arr.join(``)
// document.write(`<h1>String </h1> ${string}`)

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let devices = ["Keyborad","Mouse","Printer","Monitor"]
// document.write(`<h1>Devices</h1> ${devices} <br>`)
// while(devices.length > 0){
//     document.write(`Out: ${devices.shift()} <br>`)
// }

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// while (0 < devices.length){
//     document.write(`Out: ${devices.pop()} <br>`)
// }

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// let  phoneManufacturers = ["Apple","Samsung", "Motorola", "Nokia", "Sony & Haier"]

// document.write(`<select>`)
// for(let i = 0;i < phoneManufacturers.length ; i++){
//     document.write(`<option> ${phoneManufacturers[i]} </option> <br>`)
// }
// document.write(`</select>`)



// ==================Chapter 14 to 16 End ===================