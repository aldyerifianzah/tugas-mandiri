/* 

Setiap kali naik ojek online setelah sampai di tujuan, pada aplikasi kamu akan diminta untuk memberikan feedback.
Salah satu feedback yang diberi adalah dalam bentuk memberikan bintang.

Tugas kamu adalah membuat function countStar yang akan menghitung jumlah setiap bintang yang diterima oleh si abang ojol.

[INPUT]
[
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]


[PROCESS]
bintang yang diterima
- bintang 5 ada 2
- bintang 4 ada 3
- bintang 3 ada 4
- bintang 2 ada 3
- bintang 1 tidak ada

[OUTPUT]
{
  '*****': 2,
  '****': 3,
  '***': 4,
  '**': 3,
  '*': 0,
}

*/

function countStar(stars) {
    var display = {

        '*****': 0,
        "****": 0,
        "***": 0,
        "**": 0,
        "*": 0
    }


    for (let i = 0; i < stars.length; i++) {
        var total = 0
        for (let j = 0; j < stars.length; j++) {
            if (stars[i][j] == '*') {
                total++
            }

        }
        if (total == 5) {
            display['*****']++
        } else if (total == 4) {
            display["****"]++
        } else if (total == 3) {
            display['***']++
        } else if (total == 2) {
            display["**"]++
        } else if (total == 1) {
            display['*']++
        }

    }
    return display
}


console.log(
    countStar([
        ["*", "*", "*", " ", " "],
        ["*", "*", "*", "*", " "],
        ["*", "*", "*", " ", " "],
        ["*", "*", "*", "*", "*"],
        ["*", "*", " ", " ", " "],
        ["*", "*", "*", " ", " "],
        ["*", "*", "*", "*", " "],
        ["*", "*", " ", " ", " "],
        ["*", "*", "*", " ", " "],
        ["*", "*", " ", " ", " "],
        ["*", "*", "*", "*", "*"],
        ["*", "*", "*", "*", " "]
    ])
);

/*
{
  '*****': 2,
  '****': 3,
  '***': 4,
  '**': 3,
  '*': 0,
}
 */
