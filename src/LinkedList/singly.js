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

	prepend(value) {
		const node = new Node(value);

		node.next =  this.head
		this.head = node
		this.length++;

		return this;
	}

	getTheIndex(index) {
		let counter = 0;
		let currentNode = this.head;

		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		} else if (index <= 0) {
			return this.prepend(value);
		}

		const newNode = new Node(value);
		const firstPointer = this.getTheIndex(index - 1);
		const holdingPointer = firstPointer.next;
		firstPointer.next = newNode;
		newNode.next = holdingPointer;

		this.length++;

		return this;
	}

	remove(index) {
		if (index > 0 && index < this.length) {
			const firstPointer = this.getTheIndex(index - 1);
			const removePointer = firstPointer.next.next;
			firstPointer.next = removePointer;

			this.length--;
			return this;
		}
		else if(index === 0) {
			const removePointer = this.head.next;
			this.head = removePointer;

			this.length--;
			return this;
		}
		console.log('porfavor ingrese un indice valido');
	}
}

let myLinkedList = new MySinglyLinkedList(1);