/**
 * 
 * Diberikan sebuah arrray, array tersebut bisa memiliki panjang genap atau ganjil. 
 * Jika panjang array ganjil, maka hilangkan elemen yang berada di tengah2 array tersebut.
 * Jika panjang array genap, maka hilangkan elemen kedua dari kiri dan elemen kedua dari kanan.
 * Lihatlah test-case untuk lebih jelasnya.
 * 
 *
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push(), parseInt(), dan Math.round()
 * -TIDAK MENULISKAN PSEUDOCODE = 0!
 * 
 */

function makeEven(array) {
    ganjil = []
    if (array.length % 2 != 0){
        for (let i = 0; i < array.length; i++) {
            
            
        }
    }
}


console.log(makeEven([1, 2, 3, 4, 5])); //[ 1, 2, 4, 5 ]
console.log(makeEven([2, 3, 4, 5, 6, 7, 8])); //[2, 3, 4, 6, 7, 8]
console.log(makeEven([1, 2, 3, 4, 5, 6])); //[1, 3, 4, 6]
console.log(makeEven([1, 2])); //[]
console.log(makeEven([1, 2, 3, 4])) //[1,4]