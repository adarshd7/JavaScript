async function getData(){
    let promise = new Promise(function(resolve){
    setTimeout(()=>resolve("skc@gmail.com"),4000);
 
    });
<<<<<<< Updated upstream
    let promise1 = new Promise(function(resolve){
        setTimeout(()=>resolve("end"),4000);
    });
=======
    
>>>>>>> Stashed changes
await promise;

promise.then(
   
    result=>{console.log("Email id of the user is "+result);
    console.log("end")}
    
);
<<<<<<< Updated upstream
promise1.then(
   
    result=>console.log(result),
    
);
=======

>>>>>>> Stashed changes

}
console.log("start");
getData();

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
