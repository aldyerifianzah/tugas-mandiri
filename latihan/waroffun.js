/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikan nilai string yang merupakan pemenang perlombaan.
[EXAMPLE]
INPUT: [
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psycho', 'strong']
]
PROCESS:
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.
OUTPUT: pemenangnya adalah toni
[NOTES]
  1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
  2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya
[RULES]
  1. Dilarang menggunakan built in function .sort()
*/

function warOfFun(informations) {

    var player = informations[0]
    var fun = []

    for (let i = 0; i < informations.length; i++) {
        for (let j = 0; j < informations[i].length; j++) {
            if (informations[i][j] == 'fun') {
                fun.push(player[j])
            }
        }
    }


    // console.log(fun)
    var tempt = [['andre', 0], ["toni", 0], ['toti', 0], ["tito", 0]]

    for (let i = 0; i < fun.length; i++) {
        if (fun[i] == 'andre') {
            tempt[0][1]++
        } else if (fun[i] == "toni") {
            tempt[1][1]++
        } else if (fun[i] == 'toti') {
            tempt[2][1]++
        } else if (fun[i] == 'tito') {
            tempt[3][1]++
        }

    }

    //sort
    for (let i = 0; i < tempt.length; i++) {
        for (let j = 0; j < tempt.length; j++) {
            if (tempt[i][1] > tempt[j][1]) {
                let tem = tempt[i]
                tempt[i] = tempt[j]
                tempt[j] = tem
            }
        }

    }

    if (tempt[0][1] > 0) {
        return `pemenangnya adalah ${tempt[0][0]}`
    } else {
        return ` tidak ada pemenangnya`
    }
}


console.log(warOfFun([
    ['andre', 'toni', 'toti'],
    ['risk', 'fun', 'go'],
    ['humble', 'psyhco', 'strong']
]))
// pemenangnya adalah toni

console.log(warOfFun([
    ['andre', 'toni', 'toti', 'tito'],
    ['fun', 'fun', 'fun'],
    ['fun', 'fun'],
    ['nonfun', 'fun', 'fun', 'fun']
]))
// pemenangnya adalah toni

console.log(warOfFun([
    ['andre', 'toni'],
    ['risk', 'go'],
    ['humble', 'strong']
]))
// mohon maaf tidak ada pemenangnya

console.log(warOfFun([]))
  // mohon maaf tidak ada pemenangnya
