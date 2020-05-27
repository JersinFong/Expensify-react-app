//destructure object to local variables
const person = {
  name: "Andrew",
  age: 27,
  location:{
    city:'Philadephia',
    temp: 92
  }
};

//destructure object with default value
const {name = 'Anonymous', age} = person;
console.log(`${name} is ${age}.`);


//with renaming
const {city, temp: temperature = 10} = person.location;
console.log(`It's ${temperature} in ${city}.`);

//array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, myCity, myState = 'Los Angeles'] = address;
console.log(`You are in ${myCity} ${myState}.`);

