const printName = name => "Hi" + name    //one liner
console.log(printName("adarsh"))
const printBill = (name, bill) => `Hi ` + `${name} `+ `, please pay: ` + `${bill}`
console.log("adarsh",1000)              // template literals


const person = {
    name: "Noam Chomsky",
    age: 92
};

let {name,age}=person;
console.log(name);
console.log(age);