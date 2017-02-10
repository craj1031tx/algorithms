var setting = function(){
	var myNumber = 42;
	var myName = "Chetan";
	var temp = myName;
	myName = myNumber;
	myNumber = temp;
};

var print52 = function(){
	for(var i = -52; i<=1066; i++){
		console.log(i);
	};
};

var beCheerful = function(){
	for(var i = 0; i<98; i++){
		console.log("Be Happy");
	};
};

var multOfThree = function(){
	var counter = -300;
	while(counter<0){
		if(counter%3==0){
			if(counter == -3 || counter == -6){
				continue;
			};
			console.log(counter);
		};
		counter++;
	};
};

var printWhile = function(){
	var count = 2000;
	while(count < 5281){
		console.log(count);
		count++;
	};
};

var birthday = function(day, month){
	if((day == 31 && month == 10) || (day == 10 && month == 31)){
		console.log("How did you know!");
	}
	else{
		console.log("Just another day...");
	};
};

var leapYear = function(year){
	if(year%400 == 0){
		return true;
	}
	else if(year%100 == 0){
		return false;
	}
	else if(year%4 == 0){
		return true;
	}
	else{
		return false;
	};
};

var printAndCount = function(){
	var counter = 0;
	for(var i = 512; i<=4096; i++){
		if(i%5==0){
			console.log(i);
			counter++;
		};
	};
	console.log(i);
};

var multOfSix = function(){
	//consider incrementing by 6 every time instead of by 1 and then checking value. (bonus question..)
	for(var i = 0; i<=60000; i++){
		if(i%6==0){
			console.log(i);
		};
	};
};

var dojoCount = function(){
	for(var i = 1; i <=100; i++){
		if(i%10==0){
			console.log("Coding Dojo");
		}
		else if(i%5==0){
			console.log("Coding");
		}
		else{
			console.log(i);
		};
	};
};

var whatDoYouKnow = function(value){
	console.log(value);
};

var hugeNumber = function(){
	//shortcut is that the answer is 0...
	var count = -300000;
	var sum = 0;
	while(count<=300000){
		sum += count;
		count++;
	}
	console.log(sum);
};

var countdownByFour = function(){
	var start = 2016;
	while(start>0){
		if(start%4==0){
			console.log(start);
		};
		start--;
	};
};

var flexibleMult = function(low, high, mult){
	var runner = high;
	while(runner>low){
		if(runner%mult==0){
			console.log(runner);
		};
	};
};

var theFinalCountdown = function(param1, param2, param3, param4){
	for(var i = param2; i<=param3; i++){
		if(i%param1==0){
			if(i==param4){
				continue;
			};
			console.log(i);
		};
	};
};


