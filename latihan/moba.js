/*
Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case
  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

/*
================================================================
PSEUDOCODE:
-----------

================================================================
*/
function heroPick(composition) {

    //displit disek lur


    var arr = []
    var split = []
    var tmp = ''



    for (let i = 0; i < composition.length; i++) {
        if (composition[i] == ',') {
            split.push(tmp)
            tmp = ''
        } else {
            tmp += composition[i]
        }
    } split.push(tmp)
    console.log(split[split.length - 1])
    if (split.length < 5) {
        return `not suffcuent players`
    }
    // console.log(split.length)
    var tempt = [["ranger", 0], ["mage", 0], ['tank', 0], ['warrior', 0]]
    // console.log(tempt[0][1])

    for (let i = 0; i < split.length; i++) {
        if (split[i] == 'ranger') {
            tempt[0][1]++
        } else if (split[i] == 'mage') {
            tempt[1][1]++
        } else if (split[i] == 'tank') {
            tempt[2][1]++
        } else if (split[i] == 'warrior') {
            tempt[3][1]++
        } else if (split[i] == 'god') {
            return `god is not on the pick list`
        }
    }
    // console.log(tempt)
    // console.log(tempt[1])

    for (let i = 0; i < tempt.length; i++) {
        // console.log(tempt[i][1])

        if (tempt[i][1] > 2) {
            return `bad pick too many ${tempt[i][0]}`

        } else if (tempt[i][1] == 2) {
            return ` good pick`
        }

    }

    // return tempt
}




// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')) // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')) // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')) // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')) // god is not on the pick list