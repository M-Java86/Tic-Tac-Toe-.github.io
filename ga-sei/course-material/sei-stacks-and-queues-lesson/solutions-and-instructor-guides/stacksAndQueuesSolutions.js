// STACK IMPLEMENTATION
class Stack {
    constructor() {
      this.items = []
    }
    push(item){
      this.items.push(item)
    }
    pop(){
      return this.items.pop()
    }
    peek(){
      return this.items[this.items.length - 1]
    }
    isEmpty(){
      return this.items.length === 0
    }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details
function bracketMatching(input){
  const bracketsSeen = new Stack();
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  const closeBrackets = ["}","]",")"];
  for(let i = 0; i < input.length; i++){
    const character = input[i];
    if(brackets[character] !== undefined){
      bracketsSeen.push(character);
    }else if(closeBrackets.includes(character)){
      if(bracketsSeen.isEmpty() || (brackets[bracketsSeen.peek()] !==  character)){
        return false;
      }else{
        bracketsSeen.pop();
      }
    }
  }
  return bracketsSeen.isEmpty()
}


class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue{
    constructor(){
        this.head = null;
    }
    enqueue(data, priority){
        const newNode = new Node(data, priority);
        if(!this.head || this.head.priority >= priority){
          const oldHead = this.head;
          this.head = newNode;
          this.head.next = oldHead;
          return this;
        }
        let walker = this.head;
        while(walker.next && walker.next.priority < priority){
          walker = walker.next;
        }
        const oldNext = walker.next;
        walker.next = newNode;
        newNode.next = oldNext;
    }
    peek(){
        return this.head;
    }
    dequeue(){
        const oldHead = this.head;
        const newHead = this.head.next;
        oldHead.next = null;
        this.head = newHead;
        return oldHead;
    }
}

module.exports = {
    bracketMatching,
    priorityQueue
}