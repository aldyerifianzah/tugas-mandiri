/*
  /////////////////
  americanGotTalent
  /////////////////
  Function americanGotTalent akan menentukan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];
  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.
  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];
  [PROCESS]
    tidak terdapat yang terbanyak.
  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function americanGotTalent(votes) {


    var tempt = [['Lee Min Ho', 0], ['Arby', 0], ['Darren McFlurry', 0]]
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] == 'Lee Min Ho') {
            tempt[0][1]++
        } else if (votes[i] == 'Arby') {
            tempt[1][1]++
        } else if (votes[i] == 'Darren McFlurry') {
            tempt[2][1]++
        }

    }//cari yang terbesar dengan mensortir

    for (let i = 0; i < tempt.length; i++) {
        // console.log(tempt[i][1])
        for (let j = 0; j < tempt.length; j++) {
            if (tempt[i][1] > tempt[j][1]) {
                var tempt1 = tempt[i]
                tempt[i] = tempt[j]
                tempt[j] = tempt1
            }
        }
    }
    // console.log(tempt)
    if (tempt[0][1] == tempt[1][1]) {
        return `Mohon maaf juara tidak bisa di tentukan dalam minggu ini`
    } else {
        return `selamat juaranya adalah ${tempt[0][0]}, dengan total votes yang di terima ${tempt[0][1]} `
    }
    // return tempt
}



console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']))
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']))
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']))
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2
