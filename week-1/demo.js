// function sum(a,b){
//     return a+b;
// }

// let result=sum(3,5);
// console.log(result);

// function sumofn(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sumofn(x));


//try to create promisedfied version of, setTimeout, fetch,fs.readFile

// const fs=require('fs');

// let data1=fs.readFile('index.css','utf-8',function(err,data){
//     console.log(data);
// });

// let data2=fs.readFileSync('index.html','utf-8');
// console.log(data2);

class rectangle{
    constructor(length,height){
        this.length=length;
        this.height=height;
    }
    area(){
        return this.length*this.height;
    }
    perimeter(){
        return 2*(this.length+this.height);
    }
}

let ret1=new rectangle(4,5);
console.log(ret1.area());
console.log(ret1.perimeter());
