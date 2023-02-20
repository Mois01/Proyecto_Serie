

export default function serie(n){
    let fserie;
    fserie = -3 * primo(n) - fibonacci(n) + 5 * triangular(n);
    return fserie;
}

function primo(n) {
    if(n <= 1){
        return 0;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return 0;
        }
    }
    return n;
}
//console.log(primo(3));

function fibonacci(n) {
    let f=0, n1=1, n2, suma=0;
    for(let i = 0; i <= n; i++){//1,2
        n2 = f; //0,1,1,2,3
        f = n1 + f; //1,1,2,3,5
        n1 = n2; //0,1,1,2,3
        suma += n1; 
    }
    return suma;
}

//console.log(fibonacci(3));
let T =0
function triangular(n) {
    n++;
    T= (n*(n+1))/2;
    return T;
}

//console.log(triangular(3+1));




