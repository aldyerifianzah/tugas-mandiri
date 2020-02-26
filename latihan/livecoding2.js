/**
 * Seseorang akan mendaftar paket Indiehome terbaru. Buatlah program untuk menghitung harganya. Untuk mendaftar, dia perlu menyertakan nama, nomor ktp, alamat, serta jenis rumah.
 * Jika nama tidak diisi, program akan mengoutput 'NAMA HARUS DIISI!'.
 * - Jika panjang nomor KTP dibawah 4 angka atau nomor KTP tidak diisi, maka keluarkanlah output
 * 'NOMOR KTP TIDAK VALID'.
 * - Untuk soal ini, terdapat 4 lokasi alamat: 'Jakarta', 'Surabaya', 'Yogyakarta', dan 'Bandung'. Selain keempat alamat tersebut, maka program akan mengeluarkan
 * 'Alamat tidak diketahui'. Saat kalian membuat program, jangan lupa untuk menangani kasus-kasus input kota yang tidak ada dalam daftar.
 * Masing-masing lokasi memiliki harga dasar paket yang berbeda:
 *     - Jakarta   100000
 *     - Surabaya   50000
 *     - Yogyakarta 45000
 *     - Bandung    90000
 * -Jenis rumah ada 3 macam: 'normal', 'large', 'kosan'. Jika jenis rumah tidak ada di dalam ketiga rumah tersebut, program akan mengeluarkan output 'Jenis rumah salah'
 * Masing-masing jenis rumah akan mendapatkan biaya yang berbeda-beda. Namun, jika jenis rumah adalah 'kosan' maka tidak boleh mendaftar ke program ini.
 *     - Biaya 'normal': 30000
 *     - Biaya 'large' : 50000
 * Buatlah program yang akan menghitung biaya total dari paket Indiehome tersebut. Program tersebut akan mengoutput:
 * 'NAMA_PENDAFTAR NO_KTP TOTAL_BIAYA'
 * contoh: 'Rani 10049581293 500000'
 *
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN FUNCTION / METHODS
 * - HANYA diperbolehkan untuk mengambil properties .length dari String
 *
 */


var name = 'aldy'
var nomor_ktp = '1111'
var alamat = 'jakarta'
var jenis_rumah = 'large'

var harga = 0
var biaya = 0
if (name.length == 0) {
    console.log('nama harus di isi')
}
if (nomor_ktp.length < 3) {
    console.log('Nomor ktp tidak valid')
}

if (alamat == "jakarta" || alamat == 'surabaya' || alamat == 'yogyakarta' || alamat == 'bandung') {

    if (alamat == "jakarta") {
        harga = 100000
    } else if (alamat == 'surabaya') {
        harga = 50000
    } else if (alamat == 'yogyakarta') {
        harga = 45000
    } else if (alamat == 'bandung') {
        harga = 90000
    }

}

if (jenis_rumah == 'large' || jenis_rumah == 'normal' || jenis_rumah == 'kosan') {

    if (jenis_rumah == "large") {
        biaya = 50000
    } else if (jenis_rumah == 'normal') {
        biaya = 30000
    } else if (jenis_rumah == 'kosan') {
        console.log('tidak boleh mendaftar')
    }

}

var TOTAL_BIAYA = harga + biaya
var tampilan = `${name} ${nomor_ktp} ${TOTAL_BIAYA}`
console.log(tampilan)