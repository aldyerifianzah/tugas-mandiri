var arr = [70, 75, 100, 90, 80, 100, 120]

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[i] < arr[j]) {
            var tempt = arr[i]
            arr[i] = arr[j]
            arr[j] = tempt
        }

    }
}

console.log(arr)