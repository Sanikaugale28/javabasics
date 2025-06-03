class vehicals{
    constructor(name,maker,model){
        this.name = name ;
        this.maker = maker;
        this.model = model;

    }
    getDetails(){
        return `this name of the bike is ${this.name}.`
    }
     
}
 let bike1 = new vehicals('KTM','Bike','2023');
 let bike2 = new vehicals('Yamaha','Bike','2022');
 let bike3 = new vehicals('Honda','Bike','2021');

 console.log(bike1.name);
 console.log(bike2.maker);
 console.log(bike3.model);
 
 console.log(bike1.getDetails());
 
 
 