//pg38
//chapter 3 - arrays

//array - push to front: given array and an additional value, insert this value at the beginning of the array. do this without using any built in array methods
var pushToFront = function(array, value){
	for(var i=array.length-1; i>=0; i--){
		array[i+1] = array[i];
	}
	array[0] = value;
	return array;
};


//array - pop front: given array, remove and return the value at the beginning of the array. do this without using any built in array methods except pop()
var popFront = function(array){
	var zeroth = array[0];
	for(var i=1; i<=array.length; i++){
		array[i-1] = array[i]
	}
	array.pop();
	return array;
}

//array - insert at: given an array, index, and additional value, insert the value into the array at given index. do this without using built in array methods.
var insertAt = function(array, value, loc){
	for(var i=array.length-1;i>=loc;i--){
		array[i+1] = array[i];
	}
	array[loc] = value;
	return array;
}

//array - remove at: given an array and an index location, remove the value at that index location and reduce the array back to size.
var removeAt = function(array, loc){
	var toReturn = array[loc];
	for(var i=loc+1;i<=array.length;i++){
		array[i-1] = array[i]
	}
	array.pop();
	return array
}

//array - swap pairs: swap positions of successive pairs of value of a given array. If length is odd, do not change the final element. for [1,2,3,4] return [2,1,4,3]. for ['brendan', true, 42], return [true, 'brendan', 42]
var swapPairs = function(array){
	var stopAt = array.length%2==0 ? array.length-1 : array.length - 2;
	
	for(var i = 0; i<=stopAt; i+=2){
		var temp = array[i+1];
		array[i+1] = array[i];
		array[i] = temp;
	}

	return array;
}

//array - remove dupes - remove duplicate values from a SORTED array. 
var removeDupes = function(array){
	for(var i=0; i<=array.length-1; i++){
		if(array[i]===array[i+1]){
			array[i] = 'delete'
		}
	}
	for(var i=array.length-1;i>=0;i--){
		if(array[i] == 'delete'){
			array = removeAt(array, i)
		}
	}
	return array;
}

//array - min to front: traverse an array to find it's smallest value, and then move it to the front, shifting everything until the min value is filled.
var minToFront = function(array){
	var min = array[0];
	var minLoc = 0;
	for(var i=0;i<=array.length;i++){
		if(array[i]<min){
			min = array[i];
			minLoc = i;
		};
	};
	for(var i=minLoc; i>=1; i--){
		array[i] = array[i-1];
	};
	array[0] = min;
	return array;
};

// console.log(minToFront([3,4,6,7,4,2,6,7]))


//start of page 40
//array - reverse: reverse an array in place. no second array
var reverseArray = function(array){
	var left = 0;
	var right = array.length-1;
	while(right>left){
		var temp = array[left];
		array[left] = array[right];
		array[right] = temp;
		left++;
		right--;
	}
	return array;
}

//array - rotate: 'wrap around' an array to the right a given number of spaces. done in place.
var rotateArray = function(array, shift){
	for(var i=1;i<=shift; i++){
		var store = array[0];
		for(var j=1;j<=array.length-1;j++){
			array[j-1] = array[j];
		}
		array[array.length-1] = store;
	};
	return array;
};


//array - filter array: get rid of numerical values that are higher or lower than the given amounts.
var filterArray = function(array, min, max){
	for(var i=0;i<=array.length-1;i++){
		if(array[i] < min || array[i] > max){
			array[i] = 'delete';
		};
	};

	for(var i=0; i<=array.length-1;i++){
		if(array[i] == 'delete'){
			array = removeAt(array, i);
		};
	};
	return array;
};


//array - concat: replicate the concat() function. given two arrays, append the second array to the first.
var arrayConcat = function(arr1, arr2){
	var appendLoc = arr1.length;
	for(var i = 0; i<=arr2.length-1;i++){
		arr1[appendLoc] = arr2[i];
		appendLoc++;
	}
	return arr1;
}

//array - second largest: return the second largest value in an array
var secondLargest = function(array){
	var largest = array[0];
	var second;
	for(var i=1; i<=array.length-1; i++){
		if(array[i]>largest){
			second = largest;
			largest = array[i];
		}
	}
	return second;
}

//console.log(secondLargest([2,3,5,6,7,8,3,4,5,7]))



//console.log(arrayConcat([1,2,3],[6,7,8]))
//console.log(filterArray([2,3,5,6,7,8,3,4,5,7], 3, 7))

//console.log(rotateArray(['a','b','c','d'], 2))




