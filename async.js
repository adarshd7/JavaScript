async function getData(){
    let promise = new Promise(function(resolve){
    setTimeout(()=>resolve("skc@gmail.com"),4000);
 
    });
    
await promise;

promise.then(
   
    result=>{console.log("Email id of the user is "+result);
    console.log("end")}
    
);

}
console.log("start");
getData();

