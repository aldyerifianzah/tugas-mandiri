/**
 * ===========
 * Deret Prima
 * ===========
 * Diberikan sebuah function prime yang menerima satu parameter bertipe number.
 * Output dari function ini adalah mengembalikan sebuah nilai prima yang merupakan
 * deret dari input parameter
 * 
 * CASE 1
 * ======
 * 
 * input: 5
 * output: 3
 * proses:
 *   angka 1 bukan prima
 *   angka 2 adalah prima -> deret ke-1 bilangan prima
 *   angka 3 adalah prima -> deret ke-2 bilangan prima
 *   angka 4 bukan prima
 *   angka 5 adalah prima -> deret ke-3 bilangan prima
 * maka output adalah 3 karena angka 5 merupakan deret ke-3 bilangan prima
 * 
 * CASE 2
 * ======
 * 
 * input: 6
 * output: -1
 * proses:
 *   angka 1 bukan bilangan prima
 *   angka 2 adalah bilangan prima -> deret ke-1 bilangan prima
 *   angka 3 adalah bilangan prima -> deret ke-2 bilangan prima
 *   angka 4 bukan bilangan prima
 *   angka 5 adalah bilangan prima -> deret ke-3 bilangan prima
 *   angka 6 bukan bilangan prima
 * maka output adalah -1 karena angka 6 bukan merupakan bilangan prima
 */

function prime(num) {

    habis = []
    var check = true
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            check = true
            if (check == true) {
                habis.push(i)
            }
        } else {
            check = false
        }


    }

    return habis

}






console.log(prime(5)); //3
// console.log(prime(27)); //-1
// console.log(prime(7)); //4
// console.log(prime(41)); //13
// console.log(prime(601)); //110
// console.log(prime(99)); //-1
// console.log(prime(7)); //666
// console.log(isprime(7))