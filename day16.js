// JSON ==> depolama ve iletme (ortak dil)
// key ve value tırnak içerisinde yazılmalı
let categories = [
    {
    name: 'Roronoa Zoro',
    bounty: 1057000
    },
    {
    name: 'Roronoa Sanji',
    bounty: 1001000
    }
]
//JSON formatına dönüştürme (JSON'dan object geçerken parse, object=>JSON = stringify)
let categoriesJson = JSON.stringify(categories)
console.log(categories)
console.log(categoriesJson)
