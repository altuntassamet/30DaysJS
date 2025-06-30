// Loops ==> döngüler
let names = ['Samet', 'Onur', 'Halit', 'Burak', 'Sinan', 'Alper']
for(let i=0; i<=5; i++) {
    console.log(names[i])
} //Samet, Onur, Halit, Burak, Sinan, Alper

for(let m=5; m>=0; m--) {
    console.log(m)
} // 5 4 3 2 1 0

let numbers = [1,2,3,4,5]
let sum = 0
for(let x = 0; x < numbers.length; x++) {
    sum += numbers[x]
}
console.log(sum)

let names2 = []
for (let c = 0; c < names.length; c++) {
    names2.push(names[c])
}
console.log(names2)

// while loop
let s = 0
while (s <= 5) {
    console.log(s)
    s++
}

// do while ==> koşul sağlanmasa bile kodu bir kez çalıştırır
let n = 0
do {
    console.log(n)
    n++
} while (n <=16)

// break ==> döngüne aranan sayı yada kelime bulunduğunda döngüyü durdurur.
// continue ==> döngüde belli bir kelime yada sayı dikkkate alınmas es geçilir
