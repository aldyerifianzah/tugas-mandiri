/**
Diberikan sebuah function subset() yang menerima 2 parameter berisi
array. Yaitu arr1 dan arr2 yang keduanya berisi angka.
Function subset akan mengecek apakah arr1 merupakan subset dari arr2.
Artinya, semua angka di arr1 harus berada di arr2.
Angka di arr1 adalah angka unik, sehingga tidak ada angka yang muncul
2 kali di arr1.
 
RULES:
WAJIB MENULISKAN PSEUDOCODE SEBELUM MEMBUAT CODE
Dilarang menggunakan built-in function selain .push()
 
*/

function subset(arr1, arr2) {

    //sortir

    var arr = []
    for (let i = 0; i < arr2.length; i++) {
        var check = true
        for (let j = 0; j < arr.length; j++) {
            if (arr2[i] == arr[j]) {
                check = false
            }
        }
        if (check == true) {
            arr.push(arr2[i])

        }
    }
    console.log(arr)
    var hasil = []
    for (let i = 0; i < arr.length; i++) {
        var flag = true
        for (let j = 0; j < arr1.length; j++) {
            if (arr[i] == arr1[j]) {
                hasil.push(arr1[j])
            }
        }
    } console.log(hasil)
    console.log(arr1)

    if (hasil.length == arr1.length) {
        return true
    } else {
        return false
    }

}


console.log(subset([3, 9, 5], [1, 3, 9, 5, 8, 44])); //true
console.log(subset([1, 3], [1, 3, 5, 7, 8])) //true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //true
console.log(subset([1, 3], [1, 33])) //false
console.log(subset([1, 3, 10], [10, 8, 8, 8])) //false