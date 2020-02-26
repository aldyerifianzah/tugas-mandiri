function fpb(angka1, angka2) {
    // you can only write your code here!

    var tempt1 = []
    for (let i = 0; i < angka1; i++) {

        if (angka1 % i == 0) {

            tempt1.push(i)


        }

    }
    // console.log(tempt1)

    //menampung angka yang habis dibagi 
    var tempt2 = []
    for (let j = 0; j < angka2; j++) {

        if (angka2 % j == 0) {

            tempt2.push(j)
        }

    }
    // console.log(tempt2)

    //menbandingkan tempt 1 dan tempt 2, yang dimana akan menampilkan yang terakhir

    var hasil = []
    for (let i = 0; i < tempt1.length; i++) {

        for (let j = 0; j < tempt2.length; j++) {

            if (tempt1[i] == tempt2[j]) {

                hasil.push(tempt1[i])
            }


        }

    }

    return hasil[hasil.length - 1]

}



// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1