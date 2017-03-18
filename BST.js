class BST{
	constructor(){
		this.root = null;
	};
};

class leaf{
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	};
};

module.exports = {BST, leaf}