function angkaPrima(angka) {
    // you can only write your code here!
    let flag = true

    if (angka <= 3) {

        flag = true
    }


    for (let i = 2; i < angka; i++) {

        if (angka % i == 0) {

            flag = false
            // } else if (angka % i != 0) {

            //     flag = true
            // }

        }
    }
    return flag
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(100))