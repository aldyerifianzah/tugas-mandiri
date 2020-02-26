/*
=================
AGE VERIFICATION
=================

[INSTRUCTION]
Terdapat function ageVerification , function akan mengembalikan list
orang yang memiliki umur diatas 19 tahun. Setiap nama juga akan diberikan imbuhan :
- jika gender male diberikan imbuhan Mr.
- jika gender female dan umur diatas 30 akan diberikan imbuhan Mrs.
- jika gender female dan umur dibawah 30 akan diberikan imbuhan Ms.

[EXAMPLE]
input : ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']
output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']

[RULES]
- dilarang menggunakan REGEX
- dilarang menggunakan substring, substr, slice, splice
*/
function ageVerification(list) {

    var name = []
    var arr = []

    for (let i = 0; i < list.length; i++) {
        var tempt = ''
        for (let j = 0; j < list[i].length; j++) {
            if (list[i][j] == ',') {
                arr.push(tempt)
                tempt = ''
            } else {
                tempt += list[i][j]
            }
        }
        arr.push(tempt)
        name.push(arr)
        arr = []
    }
    console.log(name[1][2])

    var display = []

    for (let i = 0; i < name.length; i++) {
        if (name[i][2] >= 19) {
            if (name[i][1] == 'male') {
                display.push(`Mr ${name[i][0]}`)
            } else if (name[i][1] == 'female' && name[i][2] > 30) {
                display.push(`Mrs ${name[i][0]}`)
            } else if (name[i][1] == 'female' && name[i][2] < 30) {
                display.push(`Mr ${name[i][0]}`)
            }
        }

    }

    return display
}


/*1. logikanya kita pecahkan menjadi array di dalam array,
kenapa? kalo hanya array kita tidak bisa mengakses index[0][1] yang dimana kalo 
hanya array biasa maka akan menampilkan 'i', bukan 'male'. untuk agar bisa seperti itu
diperlukan array of demension.
 
2.logicnya di dalam array demension
    menggunakana looping dimana kalo pria lebih dari sama dengan 19 tahun di panggil
    oleh Mr
 
    
 
*/

var people = [
    "Miftah,male,21",
    "Dhimas,male,25",
    "Budi,male,13",
    "Toni,male,22",
    "Nita,female,77",
    "Nana,female,21",
    "Nani,female,19"
];

// console.log(people[0][1])

console.log(ageVerification(people));
// ['Mr. Miftah', 'Mr. Dhimas', 'Mr.Toni', 'Mrs. Nita', 'Ms.Nana']

// var people2 = [
// "Arya,female,22",
//     "Greyjoy,male,100",
//     "littlefinger,male,45",
//     "Bran,male,15"
// ];
// console.log(ageVerification(people2));
  // // ['Ms. Arya', 'Mr. Greyjoy', 'Mr. littlefinger']
