async function getData(){
    let promise = new Promise(function(resolve){
    setTimeout(()=>resolve("skc@gmail.com"),4000);
 
    });
    let promise1 = new Promise(function(resolve){
        setTimeout(()=>resolve("end"),4000);
    });
await promise;
await promise1;
promise.then(
   
    result=>console.log("Email id of the user is "+result),
    
);
promise1.then(
   
    result=>console.log(result),
    
);

}
console.log("start");
getData();


