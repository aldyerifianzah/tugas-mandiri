
/*
=================================
Recursive Mastery : Data Reducer
=================================
Nama:________
[INSTRUKSI]
Diberikan sebuah function dataReducer yang menerima satu parameter berupa string.
Function akan memproses string dengan mengecek secara alphabet urutan yang dimulai dari karakter pertama.
Apabila ditemukan karakter yang bukan merupakan alphabet setelahnya, karakter tersebut di skip.
Function akan mereturn karakter apa saja yang di-skip, dalam bentuk string dibatasi dengan koma.
[CONTOH]
input: abcdxefgh5wi menjadi abcdefghi,
proses: kita meng-skip x karena setelah d harusnya e, dan 5 dan w karena setelah h harusnya i.
output: 'x,5,w'
input: opqrstu menjadi opqrstu,
proses: tidak ada yang terskip
output: ''
input: acdefghij => a
proses: kita meng-skip c,d,e,f,g,h,i,j karena setelah a seharusnya b
output: c,d,e,f,g,h,i,j
*/

function dataReducer(data) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var index = 0

    //untuk cari tahu dimana mulainya

    for (let i = 0; i < alpha.length; i++) {
        if (data[0] == alpha[i]) {
            index = i
            break;
        }

    }

    //untuk scanner dimana jika tidak berrurut di push ke array
    var arr = []

    for (let i = 0; i < data.length - 1; i++) {
        if (alpha[index] == data[i]) {
            index++
        } else {
            arr.push(data[i])
        }
    }
    var str = ''

    for (let i = 0; i < arr.length; i++) {

        str += `${arr[i]},`



    }
    return str
}

console.log(dataReducer('abcdxefgh5wi')) // 'x,5,w'
console.log(dataReducer('opqrstu')) // ''
console.log(dataReducer('acdefghij')) // 'c,d,e,f,g,h,i,j'
console.log(dataReducer('testu')) // 'e,s,t'