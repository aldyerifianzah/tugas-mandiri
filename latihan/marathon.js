/*
========
MARATHON
========
[INSTRUCTION]
Kamu mengikuti lomba marathon, dengan rute lintasan tertentu dan stamina tertentu;
[EXAMPLE]
input lintasan: 'XXXXXXOOO-XXOOXXXXXOO-XXXXO'
['XXXX', 'XX', 'OO', O-XXOOXXXXXOO-XXXXO']
[-1,   3]
'X' adalah jalan datar yang akan mengkonsumsi 1 stamina dengan maskimal repetisi 'X' 4 kali  ('XXXX')
'O' adalah jalan menanjak yang akan mengkonsumsi 1 stamina dengan maksimal repetisi 'O' 2 kali ('OO')
'-' adalah spot minum meningkatkan 2 stamina
partisi track:   XXXX XX OO O -  X   X O   O X   X  X  X XOO-XXXXO
stamina      : 5    4  3  2 1 3      2     1           0 (ENERGI HABIS, TIDAK BISA MELANJUTKAN)
jarak lari   :   1234 56 78 9 10 11,12 13,14 15,16,17,18
input stamina: 5
output: Selamat anda telah menempuh jarak 18
[RULES]
- Dilarang menggunakan .split, .join, .map, .sort, .filter, .indexOf, .includes
- WAJIB menggunakan pseudocode
*/

//jarak lari adalah length

function marathon(track, stamina) {
    console.log(track.length)

    var countX = 0
    var countO = 0
    var jarak = 0
    var life = stamina
    for (let i = 0; i < track.length; i++) {
        jarak++
        if (track[i] == 'X') {
            countX++//benar
        } else if (track[i] == 'O') {
            countO++//benar
        } else {
            life += 2//benar


        }
        if (track[i] != track[i + 1] && track[i] != '-') {
            life--
            countO = 0
            countX = 0
        }

        if (countX == 4 || countO == 2) {
            life--
            countX = 0
            countO = 0
        }
        if (life == 0) {
            break
        }

    }
    // console.log(life)
    // console.log(countO)
    // console.log(countX)

    console.log(jarak)
    if (jarak == track.length) {
        return ` selamat anda telah menempuh garis finish`
    } else {
        return `selamat anda telah menempuh jarak ${jarak} km`
    }




}

console.log(marathon("XXXXXXOOO-XXOOXXXXXOO-XXXXO", 5)); // Selamat anda telah menempuh jarak 18 km
console.log(marathon("XXXXXXOOOXXOOXXXXXOOXXXXO", 5)); // Selamat anda telah menempuh jarak 11 km
console.log(marathon("XXXXXXXX", 3)); // Selamat anda telah menempuh garis finish
