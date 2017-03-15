//pg30 
//Chapter 2 - Fundementals Part II

var twelveBars = function(){
	for(var i=0;i<=12;i++){
		console.log(i);
		console.log("chick");
		console.log("boom");
	};
};

//Fibonacci sequence calculator
var fibonacci = function(val){
	if(val==0){
		return 0
	}
	if(val==1){
		return 1
	}
	var first = 0;
	var second = 1;
	for(var i=2;i<val;i++){
		var temp=second;
		second = first + second;
		first = temp;
	}
	return second+first;
}

//Make a function that accepts a value and then repeatedly adds up that numbers individual digits until there is only one digit left
var sumToOne = function(num){
	var testFunction = function(val){
		var arr = [];
		while((val/10)>1){
			arr.push(val%10);
			val = Math.floor(val/10)
		};
		arr.push(val);
		//now have a flipped array of each number
		var newVal = 0;
		for(var i=0;i<arr.length;i++){
			newVal += arr[i];
		};
		return newVal;
	};

	var repeat = testFunction(num)
	while(repeat/10>1){
		repeat = testFunction(repeat)
	};
	return repeat;
};

//make a function that accepts a number of number of seconds, up to 12 hours worth, and will the return the angles at which a clock would be at to display that give time.
var clockHand = function(given){
	var remainder = given%3600;
	var numerator = given-remainder;
	var hours = numerator/3600;

	var temp = remainder
	remainder = remainder%60
	numerator = temp-remainder;
	var minutes = numerator/60;

	var seconds = remainder;
	//now have individual hours, minutes, and seconds

	var sAngle = (360/60)*seconds
	var mAngle = (360/60)*minutes 
	mAngle += (seconds/60)*6;

	var hAngle = (360/12)*hours;
	hAngle +=(minutes/60)*30;
	console.log(hAngle, mAngle, sAngle);

}

//return whether a given integer is prime
var isPrime = function(num){
	if(num==0 || num==1 || num==2){
		return true;
	}
	if(num%2==0){
		return false;
	}
	for(var i=3;i<num;i+=2){
		if(num%i==0){
			return false;
		}
	}
	return true;
}

//Make a function that, given a number and a digit place number, returns the 0-9 value at that digit place number position
var extractNumber = function(num, digit){
	var newNum = num%(10*digit)
}

