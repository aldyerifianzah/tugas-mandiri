function tukarBesarKecil(kalimat) {
    // you can only write your code here!

    //menggunakan built in function

    // var tempt = ''
    // for (let i = 0; i < kalimat.length; i++) {

    //     if (kalimat[i] == kalimat[i].toLowerCase()) {

    //         tempt += kalimat[i].toUpperCase()
    //     }
    //     else {

    //         tempt += kalimat[i].toLowerCase()
    //     }


    // }

    // return tempt

    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var simbolAngka = '1234567890-'

    let tampung = ''

    for (let i = 0; i < kalimat.length; i++) {

        if (kalimat[i] == ' ') {

            tampung += ' '
        }

        for (let j = 0; j < kamus.length; j++) {

            //untuk kecil ke besar
            if (kalimat[i] == kamus[j]) {

                tampung += kamusBesar[j]

            }
            else if (kalimat[i] == kamusBesar[j]) {

                tampung += kamus[j]
            }

            else if (kalimat[i] == simbolAngka[j]) {

                tampung += simbolAngka[j]
            }
        }

    }

    return tampung
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"