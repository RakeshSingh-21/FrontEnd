1: Add an event listener to a button to display current date and time

<button id="date-time-btn">Get Current Date and Time</button>

<script>
  const btn = document.getElementById('date-time-btn');
  btn.addEventListener('click', () => {
    const currentDate = new Date();
    const dateTime = currentDate.toLocaleString();
    alert(dateTime);
  });
</script>

2: JavaScript validation to check if a text box is not empty

<form>
  <input type="text" id="username" />
  <button id="submit-btn">Submit</button>
</form>

<script>
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('username');
    if (usernameInput.value.trim() === '') {
      alert('Username cannot be empty!');
    } else {
      alert('Username is valid!');
    }
  });
</script>

3: Using console.log() for debugging

function addNumbers(a, b) {
  console.log('Entering addNumbers function');
  console.log(`a = ${a}, b = ${b}`);
  const result = a + b;
  console.log(`Result = ${result}`);
  return result;
}

const result = addNumbers(2, 3);
console.log(`Final result = ${result}`);
In this example, we use console.log() to log messages to the console at different points in the code. This can help us understand the flow of the code and identify any errors that may occur.


4: Functions to set, get, and check a cookie

function setCookie(name, value, days) {
  const expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
  document.cookie = `${name}=${value}${expires}; path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function checkCookie(name) {
  const cookie = getCookie(name);
  if (cookie!== undefined && cookie!== '') {
    return true;
  }
  return false;
}

// Example usage:
setCookie('username', 'johnDoe', 30);
console.log(getCookie('username')); // Output: johnDoe
console.log(checkCookie('username')); // Output: true

5: Create a JSON object and access it using dot notation

const person = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

console.log(person.name); 
console.log(person.address.street); 