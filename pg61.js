//pg61 & pg62

//importing sll class from SLL.js
const{SLL} = require("./SLL.js");
const{node} = require("./SLL.js");

SLL.prototype.back = function(){
	var runner = this.head;
	//only returns if the list has at least one value;
	if(runner){
		while(runner.next){
			runner = runner.next;
		};
		return runner.val;
	};	
	return null; //if list is empty, return null
};

SLL.prototype.removeBack = function(){
	//assumes that there is at least two nodes in the list
	var runner = this.head;
	while(runner.next.next){
		runner = runner.next;
	};
	runner.next = null;
	return this;
};

SLL.prototype.addBack = function(val){
	var newNode = new Node(val);
	runner = this.head;
	//if list is empty, set head to newNode and return this (list)
	if(!runner){
		this.head = newNode;
		return this;
	};
	while(runner.next){
		runner = runner.next;
	};
	runner.next = newNode;
	return this;
}

SLL.prototype.minToFront = function(){
	//need to first check the entire list to find min, and then go back and pluck it.
	var runner = this.head
	//edge case of empty list...
	if(!runner){
		return this;
	};
	var min = runner.val;
	while(runner){
		if(runner.val < min){
			min = runner.val;
		};
		runner = runner.next;
	};
	//min value found and stored.
	runner = this.head;
	while(runner.next.val!=min){
		runner = runner.next;
	};
	//storing the node with the min value;
	var minNode = runner.next;
	//skipping the node with the min value;
	runner.next = runner.next.next;
	//storing first node
	var first = this.head;
	//setting list head to minNode;
	this.head = minNode;
	//pointing new minNode had to original first
	minNode.next = first;
	return this;
};

SLL.prototype.maxToBack = function(){
	var runner = this.head;
	if(!runner){
		return this;
	};
	var max = runner.val;
	var lastNode = null;
	while(runner){
		if(runner.val>max){
			max = runner.val;
		};
		//lastNode is the last node once the while loop completes.
		lastNode = runner;
		runner = runner.next;
	};
	runner = this.head;
	//if the first node is the max value, and there are other nodes, place it in the back
	if(runner.val == max && runner.next){
		this.head = runner.next;
		lastNode.next = runner;
		return this;
	};
	while(runner.next.val!=max){
		runner = runner.next;
	};
	//runner is now node immediately before node with max value
	var maxNode = runner.next;
	runner.next = runner.next.next;
	lastNode.next = maxNode;
};


SLL.prototype.prependVal = function(list, val, before){
	var runner = list.head;
	var newNode = new Node(val);
	//checking to see if first node contains the match
	if(runner.val == before){
		list.head = newNode;
		newNode.next = runner;
		return list;
	}
	while(runner.next){
		if(runner.next.val == val){
			newNode.next = runner.next;
			runner.next = newNode;
			return list
		};
		runner = runner.next;
	};
	return list; 
};

//example of an in place function, so 'this' would be the list that this function is 'ran' on. 
SLL.prototype.appendVal = function(val, after){
	var runner = this.head; //'this' refers to the list that this function is being called (chained) onto
	//checking to see is list is empty.
	if(!runner){
		return false;
	}
	var newNode = new Node(val);
	while(runner){
		if(runner.val == after){
			newNode.next = runner.next;
			runner.next = newNode;
			return val;
		};
		runner = runner.next;
	};
};

SLL.prototype.createSList = function(){
	var arr = [];
	var userInput = '';
	while(userInput){
		userInput = prompt();
		if(userInput){
			arr.push(userInput);
		};
	};
	var newList = new SLL();
	for(var i = 0; i<arr.length; i++){
		if(i==0){
			var firstNode = new Node(arr[i]);
			newList.head = firstNode;
			var lastNode = firstNode;
		}
		else{
			var newNode = new Node(arr[i]); 
			lastNode.next = newNode;
			lastNode = newNode;
		};
	};
	return newList;
};

SLL.prototype.removeVal = function(listNode, val){
	var runner = listNode.head;
	while(runner.next){
		if(runner.next.val == val){
			temp = runner.next.val; 
			runner.next = runner.next.next;
			return temp; //convention is to return the value that you asked to be removed.
		};
		runner = runner.next;
	};
	return false; //if not matching value is found, return false.
};

//example of an in place function, so 'this' would be the list that this function is 'ran' on. 
SLL.prototype.concat = function(list2){
	runner1 = this.head;
	runner2 = list2.head;
	while(runner1.next){
		runner1 = runner1.next;
	};
	runner1.next = runner2;
	return this; //so you can chain. not fully necessary.
};

