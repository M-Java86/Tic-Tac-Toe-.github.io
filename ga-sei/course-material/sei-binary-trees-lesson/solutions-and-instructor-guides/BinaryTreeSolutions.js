class BinaryNode {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor(){
       this.root = null;
    }
    insert(data){
        const newNode = new BinaryNode(data);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let walker = this.root;
        while(walker){
            if(data < walker.data){
                if(!walker.left){
                    walker.left = newNode;
                    return this;
                }else{
                    walker = walker.left
                }
            }else if(data > walker.data){
                if(!walker.right){
                    walker.right = newNode;
                    return this;
                }else{
                    walker = walker.right;
                }
            }
        }
    }
    search(val){
        if(!this.root){
            return false;
        }
        let walker = this.root;
        while(walker){
            if(val < walker.data){
                walker = walker.left;
            }else if(val > walker.data){
                walker = walker.right
            }else{
                return true;
            }
        }
        return false;
    }
    size(node){
        let count = 0;
        function rSize(node){
            if(node){
                count++;
                rSize(node.left);
                rSize(node.right);
            }
        }
        rSize(node)
        return count;
    }
    getMax(){
        if(!this.root){
            return null;
        }
        let walker = this.root;
        while(walker.right){
            walker = walker.right;
        }
        return walker.data;
    }
    height(node=this.root){
        let maxHeight = 0;
        function rHeight(node, height=1){
            if(node){
                if(height > maxHeight){
                    maxHeight = height;
                }
                rHeight(node.left, height+1);
                rHeight(node.right, height+1);
            }
        }
        rHeight(node);
        return maxHeight;
    }
    isBalanced(node){
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.
    }
}

module.exports = {
    BinaryNode,
    BinaryTree
}