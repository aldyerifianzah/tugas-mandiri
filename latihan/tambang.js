/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf etc
 */

//PSEUDOCODE
/*BUILD FUNCTION
	DETECT mine
	DETECT steps
	CREAT temporaryArray
	FOR i = 0 TO panjang mine 
		FOR j=0 TO panjang mine pertama
			tambahkan mine[i][j] ke temporaryArray
		END FOR
	END FOR

	CREAT temporary barangTambang berisi semua jenis tambang dengan jumlah banyak tiap tambang diisi 0
			Jenis tambang coppper, silver, gold, dan diamond
	FOR k = 0 TO step 
		IF temporaryArray[k] = string c is TRUE
			barangTamabang berisi copper +1 
		ELSE IF temporaryArray[k] = string s is TRUE
			barangTamabang berisi copper +1
		ELSE IF temporaryArray[k] = string g is TRUE
			barangTamabang berisi copper +1
		ELSE IF temporaryArray[k] = string d is TRUE
			barangTamabang berisi diamond +1
		END IF
	END FOR

	CREAT temporary hasilTambang
	FOR i = 0 to panjang barangTambang
		IF barangTambang[i] jumlah hasil tambang tidak 0
			masukan barangTambang[i] ke hasilTambang
		END IF
	END FOR

	RETURN hasilTambang
END FUNCTION
*/

//FUNCTION
function mineTycoon(mine, steps) {
    var tempt = []

    for (let i = 0; i < mine.length; i++) {
        for (let j = 0; j < mine[i].length; j++) {
            tempt.push(mine[i][j])
        }
    }
    var barang = [[0, "copper"], [0, "silver"], [0, "gold"], [0, 'diamond']]
    for (let i = 0; i < steps; i++) {
        if (tempt[i] == 'c') {
            barang[0][0]++
        } else if (tempt[i] == "s") {
            barang[1][0]++
        } else if (tempt[i] == 'g') {
            barang[2][0]++
        } else if (tempt[i] == 'd') {
            barang[3][0]++
        }


    }
    var hasil1 = []
    var sampah = []
    for (let i = 0; i < barang.length; i++) {
        if (barang[i][0] == 0) {
            sampah.push(barang[i][0])
        } else {

            hasil1.push(barang[i])
        }
    }
    return hasil1
}

var mine1 = [
    ['#', 'h', 's', '#', '#', '#', 'g'],
    ['u', '#', 'c', '#', 'd', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#']
];
// console.log(mine1[0])
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
    ['#', '#', '#', '#', '#', 'w', '#'],
    ['r', '#', 'c', '#', 'd', '#', '#'],
    ['#', 't', '#', 'c', '#', '#', '#'],
    ['#', '#', 's', 'g', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// // [[2, copper], [1, diamond]]

var mine3 = [
    ['d', 'c', '#', 's', '#', 'w', '#'],
    ['r', 'b', 'c', '#', '#', '#', 'g'],
    ['#', 't', '#', 'c', '#', '#', '#'],
    ['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]

