1: Write a program with single line and multiline comments

// This is a single line comment

/*
This is a multiline comment
that spans multiple lines
*/

console.log("Hello, World!"); // This is another single line comment


2: Create an array consisting of fruits names and when we click on a button sort it in descending order

<!DOCTYPE html>
<html>
<head>
  <title>Fruit Array</title>
</head>
<body>
  <h1>Fruit Array</h1>
  <button onclick="sortFruits()">Sort Fruits</button>
  <ul id="fruit-list"></ul>

  <script>
    let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    function sortFruits() {
      fruits.sort((a, b) => b.localeCompare(a));
      displayFruits();
    }

    function displayFruits() {
      let fruitList = document.getElementById("fruit-list");
      fruitList.innerHTML = "";
      fruits.forEach(fruit => {
        let listItem = document.createElement("li");
        listItem.textContent = fruit;
        fruitList.appendChild(listItem);
      });
    }

    displayFruits();
  </script>
</body>
</html>

          
        
3: Write a program with FOR/IN loop

let person = { firstName: "John", lastName: "Doe", age: 30 };

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}


4: Create an object "person" with properties firstname and lastname. Display these properties using 2 different ways of accessing

let person = { firstName: "John", lastName: "Doe" };

// Accessing properties using dot notation
console.log(person.firstName);
console.log(person.lastName); 

// Accessing properties using bracket notation
console.log(person["firstName"]); 
console.log(person["lastName"]); 


5: Write a program with variable hoisting (initialization first then declaration)

console.log(x); // Output: undefined
x = 10;
console.log(x); // Output: 10
var x;
In this program, the variable x is initialized before it is declared. This is an example of variable hoisting, where the JavaScript engine moves the variable declaration to the top of the scope.


6: Use strict mode in your program and understand why variable not declared causes error

"use strict";

console.log(x); // Error: x is not defined
x = 10; // Error: x is not defined