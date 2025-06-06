function person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}

function person2(first_name='sanika', last_name='sejal', mob = 1234567){
    this.first_name = first_name;
    this.mob = mob;
    this.last_name = last_name;
}

let person1 = new person('ishika','pradeep');
let person3 = new person('aryan','kedare');
console.log(person1.first_name);

// To access mob, create an object using person2
let person4 = new person2();
console.log(person4.mob);

console.log(person1.last_name);
console.log(`${person3.first_name} ${person3.last_name}`);
console.log(`${person4.first_name} ${person4.last_name}`);




