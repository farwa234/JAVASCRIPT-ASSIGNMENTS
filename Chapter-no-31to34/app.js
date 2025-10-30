// ----------Chapter no 31 to 34 ------------

//Q.1 Write a program that displays current date and time in your browser.?

// let currentDate = new Date();
// document.write(currentDate);

//Q.2 Write a program that alerts the current month in words. For example December.?

// let currentMonth = new Date()
// let month = currentMonth.getMonth()
// let arr =  [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// document.write(`Current Month is : ${arr[month]}`)

//Q.3 Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.?

// let currentDay = new Date()
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let today = days[currentDay.getDay()]
// document.write(`Current day is : ${today}`)

// // alerts the first 3 letters of the current day-----
// let letters = today.slice(0,3)
// alert(letters);

//Q.4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.?

// let todays = new Date()
// let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let currentDay = arr[todays.getDay()]
// if(currentDay === "Saturday"|| currentDay=== "Sunday"){
//     alert(`“It’s Fun day”`)
// }
// else{
//     alert(`“Today its not Fun day”`);
// }

//Q.5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.?

// let todays = new Date()
// let currentDate = todays.getDate()
// if(currentDate < 16){
//     alert(`“First fifteen days of the month”`)
// }
// else{
//     alert(`“Last days of the month”`)
// }

//Q.6 Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.?

// let today = new Date()
// milliSec1970= today.getTime()
// minutesSince1970 = today.getTime()/(1000*60)
// document.write(`Current Date : ${today} <br/>`)
// document.write(`"ELasped milliseconds since January 1,1970 :${milliSec1970}" <br/>`)
// document.write(`"Elapsed minutes since January 1, 1970:${minutesSince1970} <br>`)


//Q.7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. ?

// let currentDate = new Date()
// let hours = currentDate.getHours()
// if(hours < 12){
//     alert(`“Its AM” `)
// }
// else{
//     alert(`“Its PM”`)
// }

//Q.8  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.?

// let today = new Date()
// let laterDate = new Date(`31 Dec 2020`)
// document.write(`Later Date : ${laterDate}`)

//Q.9  Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 ?

// let currentDate = new Date()
// let todayMilli = currentDate.getTime()
// let RamadanDate = new Date(`18 June 2015`)
// let ramadanMilli = RamadanDate.getTime()
// let difference = todayMilli-ramadanMilli
// let days = Math.floor(difference/(1000*60*60*24))
// document.write(`${days} days have passed since 1st Ramadan,2015`);

//Q.10 Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.?

// let referenceDate = new Date()
// let todaySec = referenceDate.getTime()
// let beforeDate = new Date(`1 Jan 2015`)
// let milliSec = beforeDate.getTime()
// let differ = todaySec - milliSec
// let seconds = Math.floor(differ/(1000))
// document.write(`On Reference date : ${referenceDate} <br/> ${seconds}: Seconds had passed since beginning of 2015 <br/>`)


//Q.11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. ?

// let dateNow = new Date()
// let hours = dateNow.getHours()
// document.write(`Current Date ${dateNow} <br/>`)
// let  hoursAgo = hours - 1
//  dateNow.setHours(hoursAgo)
// document.write(`"1 hour ago, it was " ${dateNow}`);

//Q.12 Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// let today = new Date()
// let yearsAgo = today.getFullYear()
//  yearsAgo = yearsAgo -100
// document.write(`Current Date ${today}<br/>`)
// today.setFullYear(yearsAgo)
// document.write(`100 years back, it was : ${today} `)

//Q.13 Write a program to ask the user about his age. Calculate and show his birth year in your browser.?

// let age = Number(prompt("Enter you age ?"))
// let today = new Date()
// let yearNow= today.getFullYear()
// let birthYear= yearNow-age
// document.write(`Your age is ${age} <br/> Your birth year is ${birthYear} <br/>`);

// Q.14 Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a. Customer Name b.?

// let custromerName = "Farwa Zafar"
// let today = new Date();
// let month = today.getMonth();
// let arr = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// let units = 410
// let perUnits = 16
// let amount = units *perUnits
// let lateCharge = 350
// let dueDate = amount +lateCharge

// document.write(`<h1> K-Electric  Bill </h1> 
//     Custromer Name : ${custromerName} <br/>
//      Month : ${arr[month]} <br/>
//      Numbers of units : ${units} <br/>
//      Charges per unit :${perUnits} <br/>
//      <br/>
//      <br/>
//      Net Amount Payable (With Due Date): ${amount}<br/>
//       Late payment surcharge : ${lateCharge} <br/>
//       Gross Amount Payable (after Due Date) : ${dueDate}`);







// ================= Chapter no 31 to 34 End ===================