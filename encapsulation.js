class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_address(add){
        this.add = add;
    }
    getDetails() {
       console.log(`Name is ${this.name}, Address is: ${this.add}`);
        
    }
}
    let student1 = new person('sanika',21);
    student1.add_address('Mumbai');
    student1.getDetails();