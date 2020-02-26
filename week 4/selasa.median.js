function cariMedian(arr) {
    // you can only write your code here!
    // console.log(arr[arr.length - 1])
    for (let i = 0; i < arr.length; i++) {

        //untuk panjang ganjil tinggal ambil nilai tengah
        if (arr.length % 2 != 0) {

            let hasil = arr[(arr.length - 1) / 2]

            // console.log(hasil)
            return hasil
        }
        else if (arr.length % 2 == 0) {

            let hasil1 = arr[(arr.length) / 2]
            let hasil2 = arr[((arr.length) / 2) - 1]


            let akhir = (hasil1 + hasil2) / 2
            // console.log(akhir)

            return akhir

        }

    }

}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5