//Remove duplicate charaters (case sensitive) including punctuation. Keep only the LAST instance of each character. 
var givenDedupe = "Snaps! crackles! pops!"	//return: Snrackle ops!

var dedupe = function(str){
	var charDict = {}
	for(var i=0; i<str.length; i++){
		if(charDict.hasOwnProperty(str[i])){
			charDict[str[i]].push(i);
		}
		else{
			charDict[str[i]] = [i];
		}
	}	
	for(var key in charDict){
		charDict[key] = charDict[key].splice(charDict[key].length-1);
	};

	var newArr = []
	for(var key in charDict){
		newArr[charDict[key]] = key;
	};
	return newArr.join('');
}

// console.log(dedupe(givenDedupe));

//Return the index of the first unique (case-sensitive) character in a given string.
var givenUnique = "empathetic monarch meets primo stinker" //return: 35 (k)

var unique = function(str){
	var charDict = {}
	for(var i=0; i<str.length; i++){
		if(charDict.hasOwnProperty(str[i])){
			charDict[str[i]].push(i);
		}
		else{
			charDict[str[i]] = [i];
		};
	};
	uniquePos = [];
	for(var key in charDict){
		if(charDict[key].length>1){
			delete charDict[key];
			continue;
		};
		uniquePos.push(charDict[key][0]);
	};
	uniquePos = uniquePos.sort();
	return uniquePos[0];
};

console.log(unique(givenUnique))