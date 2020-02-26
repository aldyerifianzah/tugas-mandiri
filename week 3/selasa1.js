//input "hello world!"
// //output
// "!dlrow olleh"



function reverse(str) {


    var tampung = []
    for (let i = str.length - 1; i >= 0; i--) {

        tampung.push(str[i])

    }

    let akhir = ''

    for (let j = 0; j < tampung.length; j++) {


        akhir += tampung[j]

    }

    return akhir
}


console.log(reverse('Hello world'))

