//pg50.js
//chapter 4 - strings

//strings - remove blanks: remove all of the spaces from a string
var removeBlanks = function(str){
	var pieces = str.split(" ");
	var built = pieces.join("");
	return built;
};

//console.log(removeBlanks("dkd ddkd d d d   ddkkd d "))

//strings - get digits: return a string of only the number characters from a random string
var getDigits = function(str){
	var pieces = str.split("");
	var newStr = '';
	for(var i=0;i<pieces.length; i++){
		if(pieces[i] >= '0' && pieces[i] <= '9'){
			newStr += pieces[i]
		};
	};
	return newStr;
};

//console.log(getDigits("jd49d0kddk33"));

//strings - count non-spaces: given a string, return how many non space characters are in the string
var countChars = function(str){
	var counter = 0;
	for(var i=0;i<str.length;i++){
		if(str[i] != " "){
			counter++;
		};
	};
	return counter;
};

console.log(countChars("hello this is a string          "));