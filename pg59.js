//pg 59 & 60

//importing SLL class
const{SLL} = require("./SLL.js");
const{Node} = require("./SLL.js")

SLL.prototype.logNodes = function(){
	var runner = this.head;
	while(runner){
		console.log(runner.val);
		runner = runner.next;
	};
	console.log("done");
	return;
}

SLL.prototype.addNode = function(val){
	if(!this.head){
		this.head = new Node(val);
		return this;
	}
	var runner = this.head;
	while(runner.next){
		runner = runner.next;
	}
	runner.next = new Node(val);
	return this;
}

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


//min to front: find the small value and move it to the front of the list
SLL.prototype.minToFront = function(){
	var runner = this.head;
	var min = runner.val;
	while(runner.next){
		if(runner.next.val < min){
			min = runner.next.val;
			var minNode = runner.next;
			var before = runner;
			var after = runner.next.next
		}
		runner = runner.next;
	}

	var originalHead = this.head;
	before.next = after;
	this.head = minNode;
	minNode.next = originalHead
	return this;
};

//prepend a node to an slist node of a given value
SLL.prototype.prependVal = function(val, toMatch){
	var runner = this.head;
	while(runner){
		if(runner.next.val==toMatch){
			var temp = runner.next;
			runner.next = new Node(val);
			runner.next.next = temp;
			return;
		}
		runner = runner.next;
	};
}

//split on val: upon matching a value, split the list into a new list going forward from that new value
SLL.prototype.splitOnValue = function(match){
	var runner = this.head;
	while(runner.next){
		if(runner.next.val == match){
			var secondList = new SLL;
			secondList.head = runner.next;
			runner.next = null;
			return secondList;
		}
		runner = runner.next;
	}
}


var newList = new SLL;

newList.addNode(4)
newList.addNode(3)
newList.addNode(2)
newList.addNode(5)
newList.addNode(4)

newList.logNodes();



newList.logNodes();
