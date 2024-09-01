// no.1
function checkOddEven(num: number) {
  if (num % 2 === 0) {
    console.log("even number");
  }
  else {
    console.log("odd number");
  }
}

checkOddEven(25);
checkOddEven(4);

//no. 2
function checkPrimeNum(num: number) {
  if (num === 2) {
    console.log("is a prime number");
  }
  else if(num % 2 === 0 || num % 3 === 0 || num < 2) {
    console.log("not a prime number");
  }
  else {
    console.log("is a prime number");
  }
}

checkPrimeNum(7);
checkPrimeNum(6);

//no. 3
function sumNum (num: number) {
  let sum: number = 0;
  for (let i = 1; i<= num; i++) {
    sum += i;
  }
  console.log(sum);
};

sumNum(5);
sumNum(3);

// no.4
function factorialNum (num: number) {
  let factorial: number = 1;
  for (let i = 1; i<= num; i++) {
    factorial *= i;
  }
  console.log(factorial);
};

factorialNum(4);
factorialNum(6);


//no.5
function fibonacci (num: number) {
  let a: number = 0;
  let b: number = 1;
  let c: number = a + b;

  if (num === 1 || num ===2) {
    console.log(1);
  }
  for (let i = 2; i < num; i++) {
    a = b;
    b = c;
    c = a+ b;
  }
  console.log(c);
}

fibonacci(15);
