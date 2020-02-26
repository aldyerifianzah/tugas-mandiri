/**
 
Kalian harus mencari berapa jumlah masing-masing karakter ALFABET yang ada di dalam suatu `string`. Alfabet yang merupakan lowercase dan uppercase dibedakan. 
Untuk mencari tahu hal ini, implementasikan function `parseString`, yang akan mengambil:
String yang bisa berisi karakter-karakter alfabet huruf kecil dan/atau besar. Untuk karakter yang bukan merupakan alfabet, tidak perlu dihitung!

Contoh:

Input: abcdefMlpo123
Output: {a:1,b:1,c:1,d:1,e:1,f:1,M:1,l:1,p:1,o:1}

Input: ''
Output: {}

RULES:
-Dilarang menggunakan built in function kecuali Number() dan .push()

*/

function parseString(string) {

    var huruf = ''
    var angka = ''

    for (let i = 0; i < string.length; i++) {
        if (Number(string[i]) >= 0) {
            angka += string[i]
        } else {
            huruf += string[i]
        }

    } console.log(huruf)
    console.log(angka)

    string = huruf
    var obj = {}
    for (let j = 0; j < string.length; j++) {

        if (obj[string[j]] == undefined) {
            obj[string[j]] = 1
        } else {
            obj[string[j]]++
        }
    }
    return obj
}







console.log(parseString("h3lloW0r1d")) // { h: 1, l: 2, o: 1, W: 1, r: 1, d: 1 }
console.log(parseString("abcdefMlpo123")); //{ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, M: 1, l: 1, p: 1, o: 1 }
console.log(parseString("nmjlw12hrjeh54ah")); //{ n: 1, m: 1, j: 2, l: 1, w: 1, h: 3, r: 1, e: 1, a: 1 }
console.log(parseString("")); //{}
