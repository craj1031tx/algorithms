//pg28
//Chapter 2 - Fundementals Part II

//Sigma math function
var sigma = function(num){
	sum = 0;
	while(num>0){
		sum+=num;
		num--;
	};
	return sum;
};

//Factorial math function
var factorial = function(num){
	sum = 1;
	while(num>0){
		sum*=num;
		num--;
	};
	return sum;
};

