//your JS code here. If required.
// script.js

// Find the target element
const element = document.getElementById("level");

let level = 0;
let current = element;

// Traverse up the DOM until there are no more parents
while (current) {
  level++;
  current = current.parentElement;
}

// Show result
alert("The level of the element is: " + level);
