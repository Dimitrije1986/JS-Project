class Osoba{
	constructor (first_name, last_name, phone) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone = phone;
	}

	getFirstnameAndPhone() {
		console.log(`${this.first_name} ${this.last_name} - ${this.phone}`);
	}
}

let osoba1 = new Osoba ('Petar', 'Petrovic', '156118135464');
let osoba2 = new Osoba ('Miki', 'Manojlovic', '1516111515');

osoba1.getFirstnameAndPhone();
osoba2.getFirstnameAndPhone();

console.log(osoba2.last_name);
console.log(osoba1.phone);