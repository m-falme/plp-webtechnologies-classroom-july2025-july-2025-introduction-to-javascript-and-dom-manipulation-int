// Part 1: Variables, Data Types, Conditionals
let studentName = "John";
let studentAge = 17; 

// Simple conditional
if (studentAge >= 18) {
  console.log(studentName + " is an adult");
} else {
  console.log(studentName + " is not an adult");
}

// Function connected to DOM button
function checkAge() {
  let output = document.getElementById("output");
  if (studentAge >= 18) {
    output.innerText = studentName + " is an adult";
  } else {
    output.innerText = studentName + " is not an adult";
  }
}

// Part 2: Functions (Reusability)
// Function to calculate student grade average
function calculateAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return total / grades.length;
}

// Function to display student greetings
function greetStudent(name) {
  return "Welcome, " + name + "!";
}

console.log(greetStudent(studentName));
console.log("Average grade:", calculateAverage([80, 90, 70, 85]));

// Part 3: Loops
// For loop: print first 5 student roll numbers
for (let i = 1; i <= 5; i++) {
  console.log("Student Roll Number:", i);
}

// While loop: countdown for assignment submissions
let submissionsLeft = 3;
while (submissionsLeft > 0) {
  console.log("Submissions left:", submissionsLeft);
  submissionsLeft--;
}

// Part 4: DOM Manipulation
// Example 1: Toggle message text
function toggleMessage() {
  let output = document.getElementById("output");
  if (output.innerText.includes("Welcome")) {
    output.innerText = "Message has been updated for the student.";
  } else {
    output.innerText = "Welcome! Click the buttons below to test features.";
  }
}

// Example 2: Add new student to a list
function addItem() {
  let list = document.getElementById("itemList");
  let newItem = document.createElement("li");
  newItem.innerText = "Student " + (list.children.length + 1);
  list.appendChild(newItem);
}

// Example 3: Change background color with JS
document.body.style.backgroundColor = "#f8f9fa";
