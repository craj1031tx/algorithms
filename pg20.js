//chapter 1 fundementals page 20

var countdown = function(num){
	var arr = [];
	for(var i=num; i>=0; i++){
		arr.push(i);
	};
};

var printAndReturn = function(arr){
	console.log(arr[0]);
	return arr[1];
};

var firstPlusLength = function(arr){
	if(typeof(arr[0]) == "number"){
		return arr[0]+arr.length;
	}
	return "NaN";
};

var valuesGreaterThanSecond = function(arr){
	var count = 0;
	for(var i = 0; i<arr.length; i++){
		if(arr[i]>arr[1]){
			console.log(arr[i]);
			count++;
		};
	};
	console.log("There were", count, "values that were larger than the array's second value");
};

//Above function handles 'Generalized'

var thisThat = function(val1, val2){
	if(val1 == val2){
		console.log("Jinx!");
	};
	for(var i=0; i<val1; i++){
		arr.push(val2);
	};
};

var fitTheFirst = function(arr){
	if(arr[0]>arr.length){
		console.log("Too big!");
	};
	else if(arr[0]<arr.length){
		console.log("Too small!");
	}
	else{
		console.log("Just right...");
	};
};

var fToC = function(val){
	return (val-32)*(5/9);
};

