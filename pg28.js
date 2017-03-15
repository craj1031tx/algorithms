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

//Write a function that prints a given number of * characters that are left, right, or center justified, based on a user parameter (l,r, or c) and an assumed window size of 75 chars
var starArt = function(num, side){
	var outStr = ''
	if(side=='l'){
		while(num>0){
			outStr += '*';
			num--;
		}
		return outStr;
	}
	else if(side=='r'){
		var blank = 75-num;
		while(blank>0){
			outStr += ' ';
			blank--;
		}
		while(num>0){
			outStr+='*';
			num--;
		}
		return outStr;
	}
	else if(side=='c'){
		var blank = (75-num)/2;
		while(blank>0){
			outStr += ' ';
			blank--;
		}
		while(num>0){
			outStr+='*';
			num--;
		}
		return outStr;
	}
	else{
		return 'not valid'
	};
};

//add values from 100 to 4 million IF that value is divisible by 3 OR 5 but not both
var threesAndFives = function(){
	var sum = 0;
	for(var i=100;i<4000000;i++){
		if(i%3==0 && i%5==0){
			continue;
		}
		else if(i%3==0 || i%5==0){
			sum+=i;
		};
	};
	return sum;
};

//Generate a change amount (USD) for a passed input
var generateCoinChange = function(val){
	var output = [];
	var nextVal;
	if(val/25>=1){
		output.push(Math.floor(val/25));
		val -= (25*output[0]);
	}
	else{
		output.push(0);
	};
	if(val/10>=1){
		output.push(Math.floor(val/10));
		val -= (10*output[1]);
	}
	else{
		output.push(0);
	};
	if(val/5>=1){
		output.push(Math.floor(val/5));
		val -= (5*output[2]);
	}
	else{
		output.push(0);
	};
	output.push(val);
	return output;
};

//Read the book for what it's supposed to do...
var messyMath = function(num){
	sum = 0;
	for(var i=0;i<=num;i++){
		if(i==(num/3)){
			return -1;
		}
		if(i%3==0){
			continue;
		}
		else if(i%7==0){
			sum+=(i*2);
		}
		else{
			sum+=i
		};
	};
	return sum;
};




