// Question 1. print all numbers between -10 and 19

var count = -10

while (count < 20) {
	console.log(count);
	count++;
}

//Question 2. print all even numbers between 10 and 40

var count = 10

while (count < 40) {
	console.log(count);
	count += 2;
}


//Question 3. print all odd numbers between 300 and 333

var count = 300 

while (count < 334) {
	if (count % 2 === 1) {
	console.log(count);
	}
count++;
}


//Question 4. print only numbers that are divisible by both 3 and 5


var count = 5

while (count < 50) {
	if (count % 3 === 0 && count % 5 === 0 ) {
	console.log(count);
	}
count++;
}

//Question 1 in for loop form

for (i = -10; i <20; i++){
	console.log(i);	
}

//Question 2 in for loop form

for (i = 10; i <40; i++){
	if (i % 2 === 0) {
	console.log(i);
	}	
}

//Question 3 in for loop form

for (i = 300; i <334; i++){
if (i % 2 === 1) {
	console.log(i);
	}
}

//Question 3 in for loop form

for (i = 5; i <50; i++){
if (i % 3 === 0 && i % 5 === 0 ) {
	console.log(i);
	}
}
