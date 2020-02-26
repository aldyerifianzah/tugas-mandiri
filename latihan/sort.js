var arr = [100, 80, 32, 90, 100, 75, 90]

// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {

//             if (arr[i] < arr[j]) {
//                 var tempt = arr[j]
//                 arr[j] = arr[i]
//                 arr[i] = tempt
//             }

//         }

//     }
//     return arr
// }

console.log(sort(arr))

var arr1 = [
    {
        name: "debby",
        score: 100,
        class: "A"
    },
    {
        name: "amy",
        score: 80,
        class: "A"
    },
    {
        name: "david",
        score: 32,
        class: "A"
    },
    {
        name: "heraldo",
        score: 90,
        class: "B"
    },
    {
        name: "arnold",
        score: 100,
        class: "B"
    },
    {
        name: "aakansha",
        score: 75,
        class: "B"
    },
    {
        name: "aleksa",
        score: 90,
        class: "C"
    }
]


function sort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].score > arr[j + 1].score) {
                var tempt = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tempt
            }

        }

    }
    return arr
}

console.log(sort(arr1))