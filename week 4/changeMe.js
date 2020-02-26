function changeMe(arr) {
    // you can only write your code here!

    var tampung = []
    for (let i = 0; i < arr.length; i++) {
        // console.log([i + 1] + '.' + arr[i][1] + arr[i][2])

        var obj = {
            firstName: arr[i][0],
            lastname: arr[i][1],
            gender: arr[i][2]

        }
        if (arr[i][3] >= 0) {
            obj.age = 2020 - arr[i][3]
        } else {
            obj.age = 'Invalid birth year'
        }
        //ini yang jaadi masalah
        tampung.push(obj)
    }
    console.log(tampung)
    return tampung.push(obj)
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""