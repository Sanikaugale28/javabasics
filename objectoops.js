let person = {
    first_name:'sanika',
    last_name:'ugale',

     getFunctionType: function() {
        return `the name of the person is ${person.first_name} ${person.last_name}`;
    },
    phone_Number:{
        mobile: '123456',
        wpnumber: '45678'
    }
}
console.log(person.getFunctionType());
console.log(person.phone_Number.mobile);
console.log(person.phone_Number.wpnumber);


