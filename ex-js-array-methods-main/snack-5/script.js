const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

function is_even(num){
    if(num % 2 === 0){
        return num
    }
}

const array_even = nums.filter(is_even)
console.log(array_even);
