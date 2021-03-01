// SEARCHING OF DELETED ELEMENT IN MASSIVE

// Creating a massive, does not matter, just for example...
    let array = [];
    let del = Math.round(Math.random() * 100);
    for (let i = 1; i <= 100; i++){
        array.push(i);
    }
    array.pop();
    console.log(array);
// Function to find the deleted element
    function findMissed (arr) {
        let currentSum = arr.reduce(function (sum, cur) {
            return sum + cur});
        let expSum = (arr.length + 1) * (arr.length + 2) / 2;
        return expSum - currentSum;
    }
    console.log(findMissed(array));

// SEARCHING OF PRIME NUMBERS

function primeNumb(n, k){
    let arr = [];
    nextNumb:
    for(let i = n; i <= k; i++) {
        for(let j = 2; j < i; j++){
            if(i % j == 0) continue nextNumb;
        }
        arr.push(i);
    }
    return arr;
}
console.log(primeNumb(4,100))
