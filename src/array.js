class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data
	}

	pop() {
		let newArray = {};
		for (let i = 0; i < this.length; i++){
			if (i < this.length - 1) {
				let valueCurrent = this.data[i];
				console.log(valueCurrent)
				newArray = { ...newArray, [i]: valueCurrent};
			}
		}
		this.data = newArray
		return this.data
	}
}

	const myarray = new MyArray();