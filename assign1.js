function msg(){           //question 1
    return "hello";
}

function greet(name,func){
    let x=func();
    return x+" "+name;
}
console.log(greet("Adarsh",msg))
console.log()

                    //question2

let firstName="Roger";
let lastName="Waters";
const print=(x,y)=>{
    return x[0]+y[0];
}
console.log(print(firstName,lastName))