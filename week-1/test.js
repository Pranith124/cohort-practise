// const crypto=require('crypto');


// function nonce(start){
//     let input="100xdevs";
//     while(true){
//         let inputstr=input+start.toString();
//         let hash=crypto.createHash('sha256').update(inputstr).digest('hex');
//         if (hash.startsWith('00000')){
//             return {nonce: start,hash:hash};
//         }
//         start++;
//     }
// }

// console.log(nonce(596139));

let byte=new Uint8Array()

let bytes=new TextEncoder().encode('h');
console.log(bytes)