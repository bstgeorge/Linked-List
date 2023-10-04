let arr = Array.from({
  length: 100
  },
  (value, index) => {
    return Math.floor(100*Math.random())
  }
);

console.log(arr);

class Node {
  constructor(value) {
    this.value = value;
    this.next = {};
  }
}

class LinkedList {
  constructor (value) {
    this.head = new Node (value)
    this.tail = this.head;
    this.length = 1;
  }

  prepend = (value) => {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  append = (value) => {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  shift = () => {
    let result = this.head.value;
    this.head = this.head.next;
    this.length--;
    return result;
  }

  get = (index) => {
    let currentNode = this.head;
    let n = 0;
    while (n < index) {
      currentNode = currentNode.next
      n++;
    }
    return currentNode.value;
  }

  replace = (index, value) => {
    currentNode = this.head;
    let n = 0;
    while (n < index) {
      currentNode = currentNode.next
      n++
    }
    currentNode.next.value = value
  }


}

let list = new LinkedList(arr[0])
for (let i = 1; i < arr.length; i++) {
    list.append(arr[i]);
}

console.log('list length: ', list.length);
console.log('arr length:', arr.length);

console.log('list last: ', list.get(list.length - 1))
