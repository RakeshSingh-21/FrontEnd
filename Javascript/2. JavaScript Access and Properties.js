1: Write a program using this keyword when we click on a button, it should disappear

<!DOCTYPE html>
<html>
<head>
  <title>Disappearing Button</title>
</head>
<body>
  <button id="myButton">Click me!</button>

  <script>
    let button = document.getElementById("myButton");
    button.addEventListener("click", function() {
      this.style.display = "none";
    });
  </script>
</body>
</html>

2: Invoke a function using call() and apply(). Also spot the difference between them

function add(x, y) {
  console.log(this); // logs the context object
  return x + y;
}

let context = { foo: "bar" };

// Using call()
console.log(add.call(context, 2, 3));
console.log(add.call(context, 4, 5)); 

// Using apply()
console.log(add.apply(context, [2, 3])); 
console.log(add.apply(context, [4, 5])); 


3: Write a program for COUNTER. Whenever we click on a "Count" button, value should increment

<!DOCTYPE html>
<html>
<head>
  <title>Counter</title>
</head>
<body>
  <button id="countButton">Count</button>
  <p id="counter">0</p>

  <script>
    let count = 0;
    let counterElement = document.getElementById("counter");
    let countButton = document.getElementById("countButton");

    countButton.addEventListener("click", function() {
      count++;
      counterElement.textContent = count;
    });
  </script>
</body>
</html>

4: Create a Counter with the help of getter and setter accessors

let counter = {
  _count: 0,

  get count() {
    return this._count;
  },

  set count(value) {
    this._count = value;
  },

  increment() {
    this.count++;
  }
};

console.log(counter.count); 
counter.increment();
console.log(counter.count); 
counter.increment();
console.log(counter.count); 

5: Add some more properties to an existing function using object prototypes

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.getAgeInYears = function() {
  return this.age;
};

let person = new Person("John", 30);
person.sayHello(); // Output: Hello, my name is John and I am 30 years old.
console.log(person.getAgeInYears()); 