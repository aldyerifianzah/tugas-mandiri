/*
******
Cari Student
******


Function studentFinder menerima input berupa string berisi nama-nama student sebuah batch, dipisahkan oleh " " atau ",".
Function ini mengeluarkan output berupa nama student dengan jumlah huruf terpendek.
Apabila ada 2 nama student yang terpendek, maka function akan mengeluarkan nama yang berada di posisi sebelah kiri terlebih dahulu!


[RULES]
  - Dilarang menggunakan built-in function .split

*/

function studentFinder(students) {

    // var siswa = []
    var arr = []
    var str = ''

    //di jadikan array terlebih dahulu
    for (let i = 0; i < students.length; i++) {
        if (students[i] == ' ' || students[i] == ',') {
            arr.push(str)
            // siswa.push(arr)
            str = ''
            //  arr = []
        } else {
            str += students[i]
        }
    }
    arr.push(str)
    // siswa.push(arr)
    // console.log(arr[0].length)//bisa
    //sortir
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].length > arr[j].length) {
                var tempt = arr[i]
                arr[i] = arr[j]
                arr[j] = tempt
            }
        }
    }
    return arr[arr.length - 1]

}


console.log(studentFinder("Hanif Ranev Tio Tirta Igor Yusril Tia Titania")); // Tio
console.log(studentFinder("Yogi Hengky Trina An Hamzah")); // An
console.log(studentFinder("Huday,Kay,Trisna,Kinan,Hazman")); // Kay
