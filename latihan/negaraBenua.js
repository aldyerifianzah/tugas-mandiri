/**
 * =======================
 * Kumpulan Nama Negara
 * =======================
 * 
 * [Instruction]
 * Buatlah sebuah fungsi yang akan mengembalikan kumpulan-kumpulan nama negara.
 * Yang dikelompokkan sesuai dengan benua negara-negara tersebut berada.
 * 
 * [Descrition]
 * 1. Function menerima parameter berupa array multidimensional yang masing-masing
 *    elemennya berisi array dari nama negara dan benuanya.
 * 2. Function akan mengembalikan multidimensional Array yang dikelompokkan sesuai
 *    dengan benua dari masing-masing negara.
 * Contoh:
 * @result = [
 *    ['Amerika', 'Kanada', 'Mexico', ...],
 *    ['Asia', ...],
 *    ['Afrika', ...],
 *    ['Eropa', ...],
 * ]
 * Dimana ... merupakan nama-nama negara.
 * 
 * [Rules]
 * 1. tidak boleh menggunakan built in function kecuali .push() dan .unshift()
*/

function countryCollection(countries) {


    //cari benua yang nantinya akan jadi template

    var tempt = []

    for (let i = 0; i < countries.length; i++) {
        var check = true
        for (let j = 0; j < tempt.length; j++) {
            if (countries[i][1] == tempt[j]) {
                check = false
            }

        }
        if (check == true) {
            tempt.push([countries[i][1]])
        }

    }
    // return tempt

    // var hasil = []

    for (let i = 0; i < tempt.length; i++) {
        for (let j = 0; j < countries.length; j++) {
            if (tempt[i][0] == countries[j][1]) {
                tempt[i].push(countries[j][0])
            }
        }

    }
    // console.log(countries[0][1])
    return tempt
}
console.log(countryCollection([["Barbados", 'Amerika'], ["Oman", 'Asia'], ["Gibraltar", "Eropa"], ["Malaysia", "Asia"], ["Suriname", "Amerika"], ["Mayotte", "Afrika"], ["Turkmenistan", "Asia"], ["Austria", "Eropa"], ["Somalia", "Afrika"]]))
// [ 
//   [ 'Amerika', 'Barbados', 'Suriname' ],
//   [ 'Asia', 'Oman', 'Malaysia', 'Turkmenistan' ],
//   [ 'Eropa', 'Gibraltar', 'Austria' ],
//   [ 'Afrika', 'Mayotte', 'Somalia' ]
// ]

console.log(countryCollection([
    ["Bhutan", "Asia"],
    ["Comoros", "Afrika"],
    ["Botswana", "Afrika"],
    ["Iceland", "Eropa"],
    ["Lesotho", "Afrika"],
    ["Liechtenstein", "Eropa"],
    ["Malawi", "Afrika"],
    ["Algeria", "Afrika"],
    ["Azerbaijan", "Asia"],
    ["Indonesia", "Asia"],
    ["Andorra", "Asia"],
    ["Armenia", "Asia"]
]))
// [
//   ['Asia', 'Bhutan', 'Azerbaijan', 'Indonesia', 'Andorra', 'Armenia'],
//   ['Afrika', 'Comoros', 'Botswana', 'Lesotho', 'Malawi', 'Algeria'],
//   ['Eropa', 'Iceland', 'Liechtenstein']
// ]


