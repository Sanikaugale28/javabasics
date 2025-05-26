const numbers =[1,2,3,4,5];
const sum= numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0)
console.log(sum);


const girlsname=["sanika","ishika","sejal","gauri","sakshii"];
const collegename=girlsname.reduce((accumulator,currentValue)=>{
    return accumulator*currentValue;
    
    
},0);
console.log(collegename);


const age=[12.10,23,24,56.0,21.56,60];
const weight= age.reduce((accumulator,currentAge)=>{
    return accumulator+currentAge;

},0);
console.log(weight);


