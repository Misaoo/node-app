function pet(name, age, type) {
	this.name = name;
	this.age = age;
	this.type = type;
}

var pet1 = new pet ("Mysak", 11,"cat");
var pet2 = new pet ("Tethrys", 5, "cat");
var pet3 = new pet ("Ricci", 7, "dog");

var pets = [pet1, pet2, pet3]

module.exports = pets;

function getPetInfo(){
	var output = "";
	for(let i=0; i<pets.length; i++) {
		output += pets[i].name + " is a " + pets[i].type + ". " + pets[i].name + " is " + pets[i].age + " years old<br>";
	}
	
	document.getElementById("petInfo").innerHTML=output;
}