var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]



function dataHandling(input) {
    var tampung1 = {}

    for (let i = 0; i < input.length; i++) {

        //     tampung += (['Nomor id :' + input[i][0]])
        //     tampung += (['Nama: ' + input[i][1]])
        //     tampung += (['kota : ' + input[i][2]])
        //     tampung += (['TTL : ' + input[i][3]])
        //     tampung += (['hobi : ' + input[i][4]])

        arr = []
        tampung = {}
        tampung["Nomor id"] = input[i][0]
        arr.push(tampung)
        // tampung['nama'] = input[i][1]
        // tampung['kota'] = input[i][2]
        // console.log(tampung)
        tampung1[arr]
    }

    return tampung1
}






console.log(dataHandling(input))