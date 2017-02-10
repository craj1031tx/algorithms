//pg22

//if an array's element is positive, replace it with the string 'big'
var makeItBig = function(arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i]>0){
			arr[i] = 'big';
		};
	};
	return arr;
};

//print the lowest value in the array while returning the highest one. 
var printLowReturnHigh = function(arr){
	var high = arr[0];
	var low = arr[0];
	for(var i=0; i<arr.length;i++){
		if(arr[i]>high){
			high = arr[i];
		};
		if(arr[i]<low){
			low = arr[i];
		};
	};
	console.log(low);
	return high;
};

//Return a new array in which each element is doubled.
var doubleVision = function(arr){
	var newArr = [];
	for(var i=0;i<arr.length; i++){
		newArr.push(arr[i]*2);
	};
	return newArr;
};

//Replace the last element in an array with the a value that represents the number of positive values in the array.
var countPositives = function(arr){
	var count = 0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]<0){
			count++;
		};
	};
	arr[arr.length-1] = count;
	return arr;
};

//Accept an array of numbers. If 3 elements in a row are odd, print "that's odd". If three are even in a row, print "even more so".
var evensAndOdds = function(arr){
	for(var i=0;i<arr.length;i++){
		if(i<arr.length-2){
			if(arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0){
				console.log("Even more so!");
			};
			if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
				console.log("Thats odd!");
			};
		}
	};
};


//add 1 to every odd element in an array
var incrementTheSeconds = function(arr){
	for(var i=0; i<arr.length; i++){
		if(i%2!=0){
			arr[i]+=1;
		};
	};
};


//You are given an array of strings. For a given position, replace it with the length of the array's previous position's string. The first string will stay unchanged.
var previousLengths = function(arr){
	var temp = '';
	//start at the back of the array
	for(var i=arr.length-1;i>0; i--){
		arr[i] = arr[i-1].length;
	};
	console.log(arr);
	return arr;
}


//return a new array where the first value of the original array is ignored but every other value of the original array has 7 added to it
var addSevenToMost = function(arr){
	var newArr = [];
	for(var i = 1; i<arr.length; i++){
		newArr.push(arr[i]+7);
	};
	return newArr;
};

//reverse an array in place
var reverseArray = function(arr){
	var start = 0;
	var end = arr.length-1;
	var temp = '';
	while(start<end){
		temp = arr[end];
		arr[end] = arr[start];
		arr[start] = temp;
		end--;
		start++;
	};
	return arr;
};

//return a new array where all of the values of the first array are negative. this CANNOT be accomplished just by multiplying the values by negative one. 
var outlookNegative = function(arr){
	var newArr = [];
	for(var i = 0; i<arr.length; i++){
		if(arr[i]<0){
			newArr.push(arr[i])
		}
		else{
			var temp = arr[i];
			newArr.push(0-temp);
		};
	};
	return newArr;
};

//if an element in an array is equal to 'food', print 'yummy'. if no element in the array is equal to 'food', after traversing it print out "I'm hungry"
var alwaysHungry = function(arr){
	var present = false;
	for(var i=0; i<arr.length; i++){
		if(arr[i] == 'food'){
			present = true;
			console.log('yummy');
		};
	};
	if(present){
		console.log("I'm hungry");
	};
};

//Swap an array around its center. ie first switches with last, 2nd switches with 2nd to last, etc... for even and odd arrays.
var swapToCenter = function(arr){
	for(var i=0;i<(arr.length/3);i++){
		if(i%2==0){	
			var backPos = arr.length-i-1
			var front = arr[i];
			var back = arr[backPos];
			arr[backPos] = front;
			arr[i] = back;
		};
	};
	console.log(arr);
	return arr;
};

//given an arr and number, multiply each position in the array by num
var scaleTheArray = function(arr, num){
	for(var i=0; i<arr.length; i++){
		arr[i] *= num;
	};
	return arr;
};

//