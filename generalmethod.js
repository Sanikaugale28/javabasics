const person1={
    firstname:"sanika",
    lastname:"ugale",
    age:22,
    eyecolor:"blue"

};
const person2 = {firstName: "Anne",lastName: "Smith"};

Object.assign(person1,person2);
let text = Object.entries(person1);
let text1 = Object.entries(person2);
console.log(text);
console.log(text1);