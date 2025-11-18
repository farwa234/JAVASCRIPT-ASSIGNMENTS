// Chapter objects start



//Q 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;?



// const itemsArray = [
//     {name: "juice", price: "50", quantity: "3"},
//     {name: "cookie", price: "30", quantity: "9"},
//     {name: "shirt", price: "880", quantity: "1"},
//     {name: "pen", price: "100", quantity: "2"}
// ];

// let grandTotal = 0;

// itemsArray.forEach(function(item){
//     let itemTotal = item.price * item.quantity
//     console.log(`${item.name } total: ${itemTotal}`)

//     grandTotal += itemTotal;  
// });

// console.log(`Grand Total: ${grandTotal}`)


// Q2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.?


// const userInfo = {
//     name : "farwa",
//     email:"farwa@example.com",
//     password : 12345,
//     age : 20,
//     gender:"female",
//     city:"karachi",
//     country: "pakistan"
// }

// console.log("age" in userInfo)
// console.log("country" in userInfo)

// console.log("firstName" in userInfo);
// console.log("lastName" in userInfo);


//Q 3. Create a constructor function with some properties. Now create multiple records using the constructor.?


// function Students (name,age,city){
//        this.name = name
//        this.age= age
//        this.city = city
// }

// let student1= new Students("Zayera",20, "Karachi")
// let student2=new Students("Sara",21,"Lahore")
// let student3=new Students("Zara",22,"Islamabad")

// console.log(student1);
// console.log(student2);
// console.log(student3);



//Q 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.?




// function People(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }

// let person1 = new People("Ali", "Male", "Karachi", "Matric", "Student");
// let person2 = new People("Sara", "Female", "Lahore", "Graduate", "Teacher");
// let person3 = new People("Hamza", "Male", "Islamabad", "Masters", "Engineer");

// console.log(person1);
// console.log(person2);
// console.log(person3);





// =================== Chapter objects is End==================