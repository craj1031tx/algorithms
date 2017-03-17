//pg99 Recursion 

//Recursive sigma
var rSigma = function(num){
	num = Math.floor(num);
	if(num<0){
		return false;
	}
	else if(num==0){
		return num;
	}
	else{
		return rSigma(num-1) + num;
	};
};


//Recursive factorial
var rFactorial = function(num){
	num = Math.floor(num);
	if(num == 0){
		return 1;
	}
	else if(num==1){
		return num;
	}
	else{
		return rFactorial(num-1) * num;
	};
};


//Recursive fibonacci
//0 1 1 2 3 5 8
//1 2 3 4 5 6 7
var rFib = function(num){
	if(num<2){
		return 1;
	}
	return rFib(num-1) + rFib(num-2)
}




