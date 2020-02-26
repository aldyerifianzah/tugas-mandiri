var barang = {
    shampoo: [20000, 100],
    sabun: [10000, 90],
    kompor: [1000000, 65],
    bantal: [25000, 20],
    'daging sapi': [300000, 15]
}
// CARI HARGA
var list = []
for (let key in barang) {
    list.push(key)
}
console.log(list)
