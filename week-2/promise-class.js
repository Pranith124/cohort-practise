// promisedfied version
// function setTimeoutPromisified(ms){
//     let p=new Promise(resolve =>setTimeout(resolve,ms));
//     return p;
// }

// function callback(){
//     console.log("2 seconds passed");
// }

// setTimeoutPromisified(2000).then(callback);

// function promisifiedcallback(resolve){
//     setTimeout(resolve,2000);
// }

// function callback2(){
//     console.log("2 seconds paased ");
// }
//  promisifiedcallback(callback2);

//call back hell
// function callback(){
//     console.log("function is executed");
// }

// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("hello");
//         setTimeout(function(){
//             console.log("hai hello");
//         },2000);
//     },3000);
// },1000);

// promisified version call back hell chaining
// function setTimeoutPromisified(duration){
//     return new Promise(function (resolve){
//         setTimeout(resolve,duration);
//     });
// }

// setTimeoutPromisified(1000).then(
//     function(){
//         console.log("Hi");
//         return setTimeoutPromisified(2000);
// }).then(
//     function(){
//         console.log("hai");
//         return setTimeoutPromisified(3000);
// }).then(
//     function(){
//         console.log("hello hai");
//     }
// )

// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     });
// }

// function callback(){
//     console.log("promise is executed after 1 sec");
// };

// function callback2(){
//     console.log("promise is executed after first function");
// }

// setTimeoutPromisified(2000).then(callback).then(callback2);

function setTimeoutPromisified(duration){
    return new Promise(function(resolve,){
        setTimeout(resolve,duration);
    })
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hii");
    await setTimeoutPromisified(2000);
    console.log("hai");
    await setTimeoutPromisified(3000);
    console.log("hello hai");
    
}

solve();