class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let temp = this.head;
        let prev = this.head;

        // Move prev to current temp, and temp to the next node.
        
        // By the end of the loop:
        // temp :- last node
        // prev :- second-to-last node
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return temp;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let node = this.head;

        while (counter !== index) {
            node = node.next;
            counter++;
        }

        return node;
    }

    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value); //unshift() adds a node to the beginning and updates head/tail properly.
        if (index === this.length) return this.push(value);

        const newNode = new Node(value);
        const prev = this.get(index - 1);
        //Finds the node just before the desired index using the get() method. For example, to insert at index 2, we need the node at index 1 to update its .next
        newNode.next = prev.next;
        //Points the new node’s .next to the node that comes after prev This ensures the chain is maintained — you're inserting between two nodes.
        prev.next = newNode;
        //Updates prev's .next to point to the new node. This completes the insertion by "linking in" the new node.
        this.length++;
        return true;
    }

    size() {
        return this.length;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

// Example usage:
const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.unshift(0);
myLinkedList.insert(2, 99);
console.log(myLinkedList.toArray()); // [0, 1, 99, 2, 3]
console.log("Size:", myLinkedList.size()); // 5
console.log("Popped:", myLinkedList.pop().value); // 3
console.log("After pop:", myLinkedList.toArray()); // [0, 1, 99, 2]
