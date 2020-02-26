/*
=================
TUG OF WAR WINNER
=================
Name : Andreas Sosilo
[INSTRUCTIONS]
Tug of War adalah sebuah function yang menerima string sebagai tarik tambang antara 2 belah pihak
Kamu harus bisa menentukan pemenang dari permainan tarik tambang ini dengan cara mengukur kekuatan setiap pemain
Kekuatan pemain ada 3 Level
  - A = 1
  - B = 2
  - C = 3
Sisi dengan kekuatan terbanyak akan menang dan jika kekuatannya sama maka hasilnya akan draw
[CONSTRAINTS]
Tidak ada batasan untuk soal ini.
[EXAMPLE]
tugOfWar('ABCA--V--ABCC')
Skor team kiri: 7
Skor team kanan: 9
output: Team KANAN Menang!
[Tulis PSEUDOCODE di bawah ini]
// Nilai tidak valid (0) jika logic dan PSEUDOCODE berbeda!
// Tidak harus formal pseudocode, tapi paling tidak jelaskan step by step logikanya
*/

function tugOfWar(sentence) {
    // Write your code here


    var kiri = []
    var kanan = []

    for (let i = 0; i < sentence.length; i++) {

        kiri.push(sentence[i])
        if (sentence[i] == '-') {
            break
        }
    }
    // console.log(kiri)
    //kanan
    for (let i = sentence.length - 1; i >= 0; i--) {
        kanan.push(sentence[i])
        if (sentence[i] == '-') {
            break
        }

        //convert dimana total
        var totalKiri = 0
        for (let i = 0; i < kiri.length; i++) {
            if (kiri[i] == "A") {
                totalKiri += 1
            } else if (kiri[i] == 'B') {
                totalKiri += 2
            } else if (kiri[i] == 'C') {
                totalKiri += 3
            }

        }

        var totalKanan = 0
        for (let i = 0; i < kanan.length; i++) {
            if (kanan[i] == "A") {
                totalKanan += 1
            } else if (kanan[i] == 'B') {
                totalKanan += 2
            } else if (kanan[i] == "C") {
                totalKanan += 3
            }
        }
    }
    // console.log(kanan)
    // console.log(totalKiri)
    // console.log(totalKanan)

    //banding
    if (totalKanan == undefined) {
        return 'NO Players'
    }

    if (totalKanan > totalKiri) {
        return `Team kanan menang!`
    } else if (totalKanan < totalKiri) {
        return `team kiri menang !`
    } else if (totalKiri == totalKanan) {
        return `DRAW`
    }
}



// TEST CASES
console.log(tugOfWar('ABCA--V--ABCC')) // "Team KANAN Menang!"
console.log(tugOfWar('CC--V--AAAA')) // "Team Kiri Menang!"
console.log(tugOfWar('BBBB--V--CCC')) // "Team KANAN Menang!"
console.log(tugOfWar('AAAA--V--CA')) // 'DRAW'
console.log(tugOfWar('--V--')) // 'NO PLAYERS'