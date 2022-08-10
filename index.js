// console.log(1+80);
// console.log(60-40);
// console.log(2*3.4);
// console.log(5.0/2.5);

// let number=5;

// function add(){

// }

// function substract(){

// }

// function multiply(){

// }

// function divide(){

// }
// number++;
// console.log(number);
// number--;
// console.log(number);
// --number;
// console.log(number);
// ++number;
// console.log(number);
// number+=3;
// console.log(number);
// number-=2;
// console.log(number);
// number*=10;
// console.log(number);
// number/=5;
// console.log(number);

// number=10;
// function add5(){
//     return (number += 5);
// }



// function divideby3(){
//     return(number /= 3);
// }

// console.log(divideby3());
// console.log (add5());
// console.log(parseInt("27",10));
// console.log(parseInt("2.2222",10));
// console.log(parseInt("nonsense!",10));
// console.log(parseFloat("80.123999"));

var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function increment(n){
    return n+1;
}
function decrement(n){
    return n-1;
}

function makeInt(n){
    return(parseInt("n", 10));
}
function preserveDecimal(n){
    return (parseFloat("n"));
}