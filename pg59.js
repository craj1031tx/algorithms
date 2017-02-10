//pg 59 & 60

//importing SLL class
const{SLL} = require("./SLL.js");

SLL.prototype.addFront = function(val){
	var aNode = new Node(val);
	var first = this.head;
	this.head = aNode;
	aNode.next = first;
};

SLL.prototype.contains = function(val){
	var runner = this.head;
	while(runner){
		if(runner.val == val){
			return true;
		};
	};
	return false;
};

SLL.prototype.removeFront = function(){
	// tests for an actual node in the first position and a follow up node.
	if(this.head && this.head.next){
		this.head = this.head.next;
		return this;
	};
	//if there are no follow up nodes from the first one.
	return null;
};

SLL.prototype.front = function(){
	if(this.head){
		return this.head.val;
	}
	else{
		return null;
	};
};

SLL.prototype.length = function(){
	var runner = this.head;
	var counter = 0;
	while(runner){
		counter++;
		runner = runner.next;
	};
	return counter; 
};

SLL.prototype.display = function(){
	var runner = this.head;
	var counter = 0;
	while(runner){
		console.log("Node #", counter,"has the value:", runner.val);
		runner = runner.next;
		counter++;
	};
};

//following function combines Max, Min, and Avg...
SLL.prototype.math = function(){
	var runner = this.head,
		max = runner.val,
		min = runner.val,
		counter = 0,
		sum = 0;
	while(runner){
		counter++;
		sum += runner.val;
		if(runner.val>max){
			max = runner.val;
		};
		if(runner.val<min){
			min = runner.val;
		};
		runner = runner.next;
	};
	return [max, min, (sum/counter)];
}





