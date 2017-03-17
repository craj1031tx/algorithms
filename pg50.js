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

//console.log(countChars("hello this is a string          "));

//string - reverse: reverse a string
var reverseString = function(str){
	var newStr = '';
	for(var i=str.length-1;i>=0;i--){
		newStr += str[i];
	};
	return newStr;
};

//console.log(reverseString("creature"));

//strings - remove even lengths: build a function that accepts a string and then returns a string of only odd length words
var removeEvens = function(str){
	var strArr = str.split(" ");
	var newArr = [];
	for(var i=0; i<strArr.length; i++){
		if(strArr[i].length%2 != 0){
			newArr.push(strArr[i]);
		};
	};
	return newArr.join(" ");
};

//console.log(removeEvens("hello here is my string!"));

//string - paranthesis valid: given a string, determine if it has a proper number of paranthesis with valid syntax
var parIsValid = function(str){
	var open = 0;
	var close = 0;
	for(var i=0; i<=str.length-1; i++){
		switch(str[i]){
			case "(": open++; break;
			case ")": close++; break
		}
		if(close>open){return false}
	};
	if(open == close){
		return true;
	}
	return false;
}

//console.log(parIsValid(")(()"))


//strings - is palindrome: determine if a given string is a palindrome
var isPalindrome = function(str){
	var start = 0;
	var end = str.length-1;
	while(start<end){
		if(str[start] != str[end]){
			return false;
		}
		start++;
		end--;
	}
	return true;
};

//console.log(isPalindrome("racecar"));

//strings - is word alphabetical: are the letters in the word in alphabetical order? 
var isAlpha = function(str){
	for(var i=0;i<str.length-1;i++){
		if(str[i]>str[i+1]){return false}
	}
	return true;
}

//console.log(isAlpha("abca"))

//strings - d gets jiggy: given a name, return that name in such a format: given Chetan, return 'Hetan to the C'
var getJiggy = function(str){
	var newStr = str.slice(1,str.length);
	newStr += " to the ";
	newStr += str[0];
	return newStr;
};

