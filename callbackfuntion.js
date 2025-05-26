function print(result){
    console.log("Result is:" + result);

}
function calculate(a, b, callback){
    let sum=  a + b;
    callback(sum);
}
calculate(6,10,print);

