/*
  ////////////
  richestGroup
  ////////////
  Function richestGroup akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
    - kelompok yang ada HANYA terdiri dari A dan B. tapi tidak harus selalu ada.
  Function ini akan mengembalikkan nilai string.

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B'],
      ['A', 'A']
    ]
  [PROCESS]
  Pada array ['A', 'B'] tidak ada yang unggul.
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1
  [OUTPUT]
    Group A win...
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['A', 'A'],
      ['B']
    ]
  [PROCESS]
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1.
  Pada array ['B'] B unggul, maka nilai group B ditambah 1.

  [NOTES]
  Apabila ada yang seri atau tidak ada yang unggul maka tampilkan Tidak ada pemenangnya...
  [OUTPUT]
    Tidak ada pemenangnya...
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/
function richestGroup(groups) {

    // var tampung = [['A', 0], ['B', 0]]

    var hasil = []
    for (let i = 0; i < groups.length; i++) {
        for (let j = 0; j < groups[i].length; j++) {
            if (groups[i][j] == groups[i][j + 1]) {
                hasil.push([groups[i][j]])
            } else if (groups[i].length < 2) {
                hasil.push(groups[i])
            }
        }
        // } hasil.push(tampung)
    }

    if (hasil.length > 1 || hasil == false) {
        return ` tidak ada yang menang asu`
    } else {
        return `ini yang menang ${hasil}`
    }

}


console.log(richestGroup([
    ['A', 'B'],
    ['A', 'A']
]))
// Group A win...

console.log(richestGroup([
    ['A', 'A'],
    ['B']
]))
// Tidak ada pemenangnya...

console.log(richestGroup([
    ['B']
]))
// Group B win...

console.log(richestGroup([]))
//Tidak ada pemenangnya...
