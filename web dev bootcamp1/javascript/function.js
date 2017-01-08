
function isEven (num) {
	if (num % 2 == 1){
	return "False"
	}
	else {
	return "True"
	}
}

function factorial (num){
	var answer = 1
	for (i=2; i <= num; i++){
		answer *= i
	}
	return answer;
}

function kebabToSnake(str){
	var newStr = str.replace(/-/g , "_");
	return newStr;
}