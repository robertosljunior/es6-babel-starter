import Animal from './animal';

export default class Cat extends Animal {
	
	constructor(name) {
		super(name);
	};

	do () {
		const SAY = "Meow...!";
		return `${this.getName} say ${SAY}`;
	};
}
