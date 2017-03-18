//pg124.js
//chapter 12 - sorts


//array - bubble sort
var aBubbleSort = function(arr){

	for(var i=0; i<=arr.length-1; i++){
		var endAt = arr.length-i-1;
		for(var j=0; j<=endAt; j++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

//console.log(aBubbleSort([7,3,7,5,4,2,9]))

//array - selection sort
var aSelectionSort = function(arr){
	for(var i=0;i<arr.length;i++){
		var smallest = arr[i];
		var sLoc = i;
		for(var j=i; j<arr.length; j++){
			if(smallest>arr[j]){
				smallest = arr[j];
				sLoc = j;
			}
		}
		var temp = arr[i];
		arr[i] = smallest;
		arr[sLoc] = temp;
	};
	return arr;
}

//console.log(aSelectionSort([7,3,7,5,4,2,9]))

//merge sort part 1 - merges 2 ALREADY SORTED arrays

var merge = function(left, right){
	var lLoc = rLoc = 0;
	var result = [];
	while(lLoc < left.length || rLoc < right.length){
		if(left[lLoc] < right[rLoc]){
			result.push(left[lLoc])
			// if(lLoc<left.length){
			// 	lLoc++;
			// }
			lLoc++
		}
		else{
			result.push(right[rLoc])
			// if(rLoc<right.length){
			// 	rLoc++;
			// }
			rLoc++
		}
	}
	var returnThis = result.concat(left.slice(lLoc).concat(right.slice(rLoc)));
	console.log('return this', returnThis)
	return result;
}

//merge sort 2 - recursively breaks down arrays into single elements
var mergeSort = function(arr){
	if(arr.length<2){
		return arr;
	}

	var middle = Math.floor((arr.length)/2);
	var right = arr.slice(middle,arr.length);
	var left = arr.slice(0, middle);

	console.log('left', left, 'right', right)
	return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3,6,4,2,4,5]))