var oddsAndEvens = function(arr){
	var oCount = 0;
	var eCount = 0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2==0){
			eCount++;
			oCount=0;
		}
		else{
			oCount++;
			eCount=0;
		};
		if(eCount>=3){
			console.log("EVEN!")
		};
		if(oCount>=3){
			console.log("ODD!")
		};
	}
}


var evensAndOdds = function(arr){
	for(var i=0;i<arr.length;i++){
		if(i<arr.length-2){
			if(arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0){
				console.log("Even more so!");
			};
			if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
				console.log("Thats odd!");
			};
		};
	};
};



var arr = [0,1,2,2,2,4,3,5,7,2,3,4,5,5,5]

evensAndOdds(arr);