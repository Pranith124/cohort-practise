// promisedfied version
// function setTimeoutPromisified(ms){
//     let p=new Promise(resolve =>setTimeout(resolve,ms));
//     return p;
// }

// function callback(){
//     console.log("2 seconds passed");
// }

// setTimeoutPromisified(2000).then(callback);

function promisifiedcallback(resolve){
    setTimeout(resolve,2000);
}

function callback2(){
    console.log("2 seconds paased ");
}
 promisifiedcallback(callback2);