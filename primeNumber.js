function primeNumber(n) {
    let i,flag = 0;
    if(n == 0 || n == 1){
        flag = 1;
    }
    for(i = 2; i <= n / 2; i++){
        if(n % i == 0){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        console.log("Is prime number")
    }else{
        console.log('is not prime number')
    }
}

primeNumber(4)