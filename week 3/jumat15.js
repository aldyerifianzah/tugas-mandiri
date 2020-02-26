function groupAnimals(animals) {
    // you can only write your code here!


    //sort
    for (let i = 1; i < animals.length; i++) {
        for (let j = 0; j < i; j++) {
            if (animals[i][0] < animals[j][0]) {
                var temp = animals[i];
                animals[i] = animals[j];
                animals[j] = temp;
            }
        }
    }


}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]