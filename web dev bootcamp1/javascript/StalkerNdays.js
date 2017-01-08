var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
var leap = parseInt(age/4) 
alert("Hello " + firstName + " " + lastName + "!")
alert("You are " + age + " years old!")
alert("You have been alive roughly " + (age*365 + leap) + "days")