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



// var eval = "("

// switch(eval){
// 	case "a":
// 		var hello = "a";
// 		console.log("in a");
// 		break;
// 	case "b":
// 		var hello = "b";
// 		console.log("in b");
// 		break;
// 	case "(":
// 		var hello = "(";
// 		console.log("in (");
// 		break;
// 	default:
// 		console.log("in default..");
// 		var hello = "default"
// 		break;
// }

// console.log(hello)

var strEncode = function(str){
	str += ' ';
	var newStr = "";
	for(var i=0;i<str.length;i++){
		if(!current){
			var current = str[i];
			var currentCount = 1;
		}
		if(str[i] != current){
			switch(currentCount){
				case 1:
					newStr += current;
					break;
				case 2:
					newStr += current + current;
					break;
				default:
					newStr += currentCount.toString();
					newStr += current;
					break;
			}
			current = str[i];
			currentCount = 1;
			continue;
		}
		currentCount++;
	}
	return newStr;
}

//console.log(strEncode("aaaabbbbcccccddeee"))

