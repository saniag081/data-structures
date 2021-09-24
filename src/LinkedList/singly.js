1 -- > 2 -- > 3 -- > 4 -- > 5 -- > null

let singlyLinkedList = {
	head: {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: null
				}
			}
		}
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class MySinglyLinkedList {
	constructor(value){
		this.head = {
			value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const node = new Node(value);

		this.tail.next = node;
		this.tail = node;
		this.length++;

		return this
	}
}

let myLinkedList = new MySinglyLinkedList(1);