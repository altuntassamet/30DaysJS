// set ==> new anahtar kelimesi ile başlatılır.
//set içerisine aynı eleman push yada add edilemez
{
const names = new Set(['Samet', 'Onur', 'Halit'])
for (let name of names) {
    console.log('isim =', name)
}
}

{
let names = ['luffy', 'Zoro', 'Sanji', 'Usopp']
let namesSet = new Set();

for ( let name of names) [
    namesSet.add(name)
]
console.log(namesSet)
//has ==> set içinde eleman arama (var ise tru yok ise false)
console.log(namesSet.has('Usopp'))
namesSet.delete('Usopp')
console.log(namesSet)
console.log(namesSet.has('Usopp'))
//clear ilse set temizleme
namesSet.clear()
console.log(namesSet)
}

{
let names = ['Samet', 'Altuntaş', 'Onur', 'Samet', 'Halit', 'Samet', 'Onur', 'Samet']
console.log(names)
let namesSet = new Set()
for(let i=0; i<names.length; i++) {
    namesSet.add(names[i])
}
console.log(namesSet)
}

let a = [1, 2, 3, 4, 5, 6]
let b = [3, 4, 5, 6, 7, 8]
let c = [...a, ...b]
console.log(c)
console.log(new Set(c))
let A = new Set(a)
let B = new Set(b)

// b'de oldup a'da olmayan
console.log(b.filter(num => !A.has(num)))

//hem b'de hemde a'da olanlar
console.log(b.filter(num => A.has(num)))
