//pg24
//chapter 1 fundamentals continued....these are easier than the previous algos for some reason ?_?

//given an array and number, return the same array with just the last num elements present in it. so ([1,2,3,4,5], 3) would return [3,4,5]. Do this without using list splicing!
var lastFew = function(arr, num){
	for(var i = 0; i<num;i++){
		arr[i]=arr[i+num-1];
	}
	arr.length=num;
	return arr
};

//Build a function that will help with the slope intercept equation. if m and B are given, find y and x
var mathHelp = function(m, b){
	var y = b;
	var x = (y-b)/m;
	return {y,x};
};

//figure out what the probabilty of an event happening is if an array of percent odds is passed in
var poorKenny = function(arr){
	var result = 1;
	for(var i=0;i<arr.length;i++){
		var temp = arr[i]/100;
		result *= temp;
	};
	return result;
};

//make a function that accepts an initial 'IQ', and increases it by 0.01*days elapsed until a 'day' limit is reached
var soaringIq = function(iq, days){
	for(var i=0;i<=days;i++){
		iq+=(0.01)*i;
	}
	return iq;
}

//Make a function that accepts a number grade(0-100) as an input. It should print out the number score and the letter grade for that given score.
var letterGrade = function(score){
	var letter = "";
	if(score>=90){letter="A"}
	else if(score>=80){letter="B"}
	else if(score>=70){letter="C"}
	else if(score>=60){letter="D"}
	else{letter="F"}
	console.log("Score:", score, "Grade:", letter);
}

//Assign a minus or a plus to the grades if they are 2 points below or above their respective 10s place. Does NOT work for F grades, and an A+ is NOT possible.
var accurateGrade = function(score){
	var letter = "";
	if(score>=90){letter="A"}
	else if(score>=80){letter="B"}
	else if(score>=70){letter="C"}
	else if(score>=60){letter="D"}
	else{letter="F"}

	var test = score%10;
	var sign = '';
	if(test<=2){sign="-"}
	else if(test>=8){sign="+"}

	if(score>=98||score<60){sign=''}
	console.log("Score:", score, "Grade:", letter+sign);
}

