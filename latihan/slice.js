/**
 * ===============
 * Slice and dice!
 * ===============
 * 
 * Diberikan sebuah function bernama slice dimana function tersebut menerima tiga paramter.
 *  - Parameter pertama bernama `data` bertipe array
 *  - Parameter kedua bernama `start` bertipe number (optional)
 *  - Parameter ketiga bernama `end` bertipe number (optional)
 * 
 * Function akan mengembalikan nilai array yang telah dipotong/slice sesuai dengan value dari paramter `start` dan `end`
 * Array yang di return merupakan potongan array `mulai dari start hingga sebelum end`
 * 
 * ASUMSI:
 *   - variabel `start` bisa tidak diisi (berarti end-nya juga kosong). Jika hal ini terjadi maka pemotongan data array dimulai dari index ke 0
 *   - jika value variabel `start` lebih besar dibandingkan jumlah data array, maka function akan mengembalikan array kosong
 * 
 * CONTOH CASE BISA DILIHAT PADA DRIVER CODE
 * 
 * RULES:
 *  1. `DILARANG MENGGUNAKAN` built in function selain .push
 */



//DRIVER CODE
//write your code here

function slice(data, start, end) {
    hasil = []
    if (start > 0 && end == undefined) {
        for (let i = start; i < data.length; i++) {
            hasil.push(data[i])
        }
    }
    else if (start == undefined) {
        for (let j = 0; j < data.length; j++) {
            hasil.push(data[j])
        }
    }
    else if (start > 0 && end > 0) {
        for (let i = start; i < data.length; i++) {

            hasil.push(data[i])
            if (i == end) {
                break
            }
        }
    }
    return hasil
}


console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]