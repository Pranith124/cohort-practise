const fs=require('fs');

let data=fs.readFileSync('sum_of_two.js','utf-8');
console.log("content in sum_of_two.js file is: \n\n"+data);

let data2=fs.readFileSync('C:\web2\week-1\demo.js','utf-8');
console.log("content in demo.js file is: \n\n"+data2);

