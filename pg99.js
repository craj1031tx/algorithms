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

