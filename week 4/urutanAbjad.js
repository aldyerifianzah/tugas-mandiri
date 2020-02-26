function urutkanAbjad(str) {
  // you can only write your code here!


  var tempt = ''
  var urutan = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < urutan.length; i++) {

    for (let j = 0; j < str.length; j++) {

      if (urutan[i] == str[j]) {

        tempt += urutan[i]
      }

    }
  }
  return tempt
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'