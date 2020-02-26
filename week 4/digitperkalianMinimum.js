function digitPerkalianMinimum(angka) {
    // you can only write your code here!


    var tempt = []

    for (let i = 0; i <= angka; i++) {
        if (angka % i == 0) {
            tempt.push(i)
        }
    }

    // console.log(tempt)

    //dicari gabungannya
    var hasil = []

    for (let j = 0; j < tempt.length / 2; j++) {

        hasil.push(String(tempt[j]) + String(tempt[tempt.length - 1 - j]))
    }



    //karena hasil paling belakang adalah yang paling dikit, maka dicari index terakhirnya dan convert panjangnya

    var indexTerakhir = hasil[hasil.length - 1]


    return indexTerakhir.length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2