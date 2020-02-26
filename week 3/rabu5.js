function palindrome(kata) {
    // you can only write your code here!


    var str = ''

    for (let i = kata.length - 1; i >= 0; i--) {

        str += kata[i]

    }
    if (kata == str) {

        return true;
    } else {

        return false
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false