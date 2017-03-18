//chapter 11 - binary search trees

const{BST} = require('./BST.js')
const{leaf} = require('./BST.js')



BST.prototype.add = function(val){
	
	var newLeaf = new leaf(val)

	if(!this.root){
		this.root = newLeaf;
		return this;
	}

	var runner = this.root;
	while(runner){
		if(val>runner.val){
			if(!runner.right){
				runner.right = newLeaf;
				return;
			}
			runner = runner.right;
			break;
		}
		else if(val<runner.val){
			if(!runner.left){
				runner.left = newLeaf;
				return;
			}
			runner = runner.left
		}
		else{
			break;
		};
	};
};

BST.prototype.contains = function(compare){
	if(!this.root){
		return false;
	}

	var runner = this.root;
	while(runner){
		if(runner.val == compare){
			return true;
		}
		else if(compare > runner.val){
			if(runner.right){
				runner = runner.right;
				continue;
			};
			return false;
		}
		else{
			if(runner.left){
				runner = runner.left;
				continue;
			};
			return false;
		}
	};	
};

BST.prototype.findMin = function(){
	if(!this.root){
		return false;
	}

	var rFindMin = function(currentLeaf){
		if(currentLeaf.left){
			return rFindMin(currentLeaf.left)
		}
		return currentLeaf.val
	}

	return rFindMin(this.root);
};

BST.prototype.findMax = function(){
	//not checking for root existance...
	var rFindMax = function(currentLeaf){
		if(currentLeaf.right){
			return rFindMax(currentLeaf.right)
		}
		return currentLeaf.val
	}

	return rFindMax(this.root)
}

BST.prototype.traverse = function(){
	var rTraverse = function(node){
		if(node){
			if(node.left != null){
				rTraverse(node.left);
			}
			if(node.right != null){
				rTraverse(node.right)
			}
			console.log("this node is...", node.val)
		}
	}

	rTraverse(this.root);
}


BST.prototype.size = function(){
	var counter = 1
	var addLeaf = function(currentLeaf){

		if(currentLeaf.right){
			counter++;
			addLeaf(currentLeaf.right)
		}
		if(currentLeaf.left){
			counter++
			addLeaf(currentLeaf.left)
		}
	}

	addLeaf(this.root);
	return counter;
}

BST.prototype.rGetHeight = function(node){
	if(!node){
		return 0;
	}
	var left = this.rGetHeight(node.left);
	var right = this.rGetHeight(node.right);

	return Math.max(left, right) + 1;
}

BST.prototype.getHeight = function(){
	return this.rGetHeight(this.root);
}


var newBST = new BST();

newBST.add(10);
console.log(newBST)
newBST.add(15);
newBST.add(5);
console.log(newBST)

console.log(newBST.getHeight())
