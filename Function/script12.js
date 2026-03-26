
// 

function greet (ism) {
    return "Salom " + ism
}

console.log(greet("Musoxon"))


function greet (name) {
    console.log("salom " + "Musoxon ");
}

greet("Musoxon ")


const greet = (name) => "Salom " + name;
console.log(greet("Musoxon"));



const greet = name => "Salom " + name;
console.log(greet("Musoxon"));


const greet = name => 'Salom, Musoxon';
console.log(greet("Musoxon"));


// Task 2 

function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(7));
console.log(isPrime(8)); 



// Task 3 

function countDigits(n) {
    if (n === 0) return 1;

    let count = 0;

    while (n > 0) {
        n = n / 10;
        n = n - (n % 1);
        count++;
    }

    return count;
}

console.log(countDigits(123));


// Task 4 

function reverseNumber(n) {
    let result = 0;

    while (n > 0) {
        let last = n % 10;      
        result = result * 10 + last; 
        n = (n - last) / 10;    
    }

    return result;
}

console.log(reverseNumber(123));
console.log(reverseNumber(90));  


// Task 5 

function isPalindrome(n) {
    let original = n;
    let reversed = 0;

    while (n > 0) {
        let last = n % 10;
        reversed = reversed * 10 + last;
        n = (n - last) / 10;
    }

    return original === reversed;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false

