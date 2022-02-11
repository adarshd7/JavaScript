function msg(){
    return "hello";
}

function greet(name,func){
    let x=func();
    return x+" "+name;
}
console.log(greet("Adarsh",msg))
