class person {
    constructor(name){
        this.name = name;

    }
    toString(){
return `name of person: ${this.name}`;    }
}
class student extends person{
    constructor(name,id){
        super(name);
        this.id = id;

    }
}
 let student1 = new student ('sanika',20);
 console.log(student1.toString());
 