//pg24
//chapter 1 fundamentals continued

//given an array and number, return the same array with just the last num elements present in it. so ([1,2,3,4,5], 3) would return [3,4,5]
var lastFew = function(arr, num){
	for(var i = 0; i<num;i++){
		arr[i]=arr[i+num-1];
	}
	arr.length=num;
	return arr
}
