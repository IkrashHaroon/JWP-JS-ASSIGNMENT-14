//  1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

user = prompt("Enter City Name");

if (user === "Karachi") {
  alert("Welcome to city of lights")
}
else {
    alert(`Welcome to ${user} City`)
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

 gender = prompt("Enter Your Gender");
 if(gender === "Male") {
    alert("Good Morning Sir")
 }
 else if(gender === "Female") {
    alert("Good Morning Ma’am")
 }
 else{
    alert("Good Morning, unique human!")
 }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

 signalColor = prompt("Enter Traffic Signal Color");
 if(signalColor === "Red"){
   alert("Must Stop")
 }
 else if(signalColor === "Yellow"){
    alert("Ready to move")
 }
 else if(signalColor === "Green"){
    alert("Move now")
 }
   else{
      alert("Invalid Color")
   }
// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
 remainingFuel = +prompt("Enter Remaining Fuel in Litres");
if (remainingFuel < 0.25) {
alert ("Please refill the fuel in your car")
} else {
alert ("You Have Enough Fuel")
}


 

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");     
}
if("car" < "cat"){
alert("car is smaller than cat");
}
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// results of all conditions 
  // three subjects marks
  var sub1 = +prompt("Enter marks of Subject 1");
  var sub2 = +prompt("Enter marks of Subject 2");
  var sub3 = +prompt("Enter marks of Subject 3");

  // total marks
  var totalMarks = 300;

  // marks obtained
  var obtained = sub1 + sub2 + sub3;

  // percentage
  var percentage = (obtained / totalMarks) * 100;

  // grade & remarks
  var grade = "";
  var remarks = "";

  if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
  } else {
    grade = "Fail";
    remarks = "Sorry";
  }

  // show result on page
  document.write("<h3>Marks Sheet</h3>");
  document.write("Total marks : " + totalMarks + "<br>");
  document.write("Marks obtained : " + obtained + "<br>");
  document.write("Percentage : " + percentage + "%<br>");
  document.write("Grade : " + grade + "<br>");
  document.write("Remarks : " + remarks + "<br>");



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
secretNumber = 3
guessNumber =+prompt("Guess the secret number");
if(secretNumber === guessNumber) {
alert("“Bingo! Correct answer”")
}else if(guessNumber + 1 === secretNumber){
alert("“Close enough to the correct answer”")
} else {
    alert("Wrong Guess, Try Again!")
}
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
var num = +prompt("Enter a number");

if (num % 3 === 0) {
  alert("Number is divisible by 3");
} else {
  alert("Number is NOT divisible by 3");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var num = +prompt("Enter a number");

if (num % 2 === 0) {
  alert("This is an EVEN number");
} else {
  alert("This is an ODD number");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var T = +prompt("Enter temperature");

if (T > 40) {
  alert("It is too hot outside.");
} 
else if (T > 30) {
  alert("The Weather today is Normal.");
} 
else if (T > 20) {
  alert("Today’s Weather is cool.");
} 
else if (T > 10) {
  alert("OMG! Today’s weather is so Cool.");
} 
else {
  alert("It is very cold!");
}

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var op = prompt("Enter operation (+, -, *, /, %)");

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

if (op === "+") {
  alert(num1 + num2);
} 
else if (op === "-") {
  alert(num1 - num2);
} 
else if (op === "*") {
  alert(num1 * num2);
} 
else if (op === "/") {
  alert(num1 / num2);
} 
else if (op === "%") {
  alert(num1 % num2);
} 
else {
  alert("Invalid operation");
}













