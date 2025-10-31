// syncjronus code executes in line by line .it executes in the order in which it is writtens

function sum_of_n(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(sum_of_n(5));

