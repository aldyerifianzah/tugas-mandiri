/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikan nilai string yang merupakan jumlah terbanyak dan terdikit.
[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah ali
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"
[RULES] 
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/



function eMoneySplit(str) {
    //pisahin jadi array
    var arr = []
    var tempt = []
    var string = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ':') {
            tempt.push(string)
            string = ''
        } else if (str[i] == ',') {
            tempt.push(Number(string))
            arr.push(tempt)
            tempt = []
            string = ''
        } else {
            string += str[i]
        }
    }
    tempt.push(Number(string))
    arr.push(tempt)
    // console.log(arr)

    //sort

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][1] > arr[j][1]) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    if (arr == 0) {
        return ` tidak ada catatan emoney`
    } else {
        return `terbayak adalah ${arr[0][0]} dan yang terdikit adalah ${arr[arr.length - 1][0]}`
    }



}


console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
  // tidak ada catatan eMoney
