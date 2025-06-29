// Diziler
let names = ['Samet', 'Altuntaş', 34, 1991]
console.log(names.length)

let names2 = ('Samet')
let names3 = names2.split('')
console.log(names3)

//names dizisinin 2. elemanını (Altuntaş) değiştir (ALTUNTAŞ)
names[1] = 'ALTUNTAŞ'
console.log(names)

//içerisinde x (5) tane y (16) olan array oluşturma
let numbers = Array(5).fill(16)
console.log(numbers)

// Array birleştirme (concat)
let number1 = [1, 2, 3, 4, 5],
    number2 = [6, 7, 8, 9, 10],
    number3 = [11, 12, 13, 14, 15]
let number4 = number1.concat(number2, number3, [16])
console.log(number4)

// indexOf ==> Array içerisinde eleman arama(var ise kaçıncı sırada olduğu, yok ise -1)
console.log(number1.indexOf(3)) // 2 (2. eleman)
console.log(number2.indexOf(3)) // -1 (3 yok)


let fruits = ['banana', 'strawberry', 'mango', 'cherry']
/*
let fruitSearc = prompt('Aradığınız meyve hangisi?')
let index = fruits.indexOf(fruitSearc)
if (index != -1) {
    console.log('Bu meyve dolapda var')
} else {
    console.log('Bu meyve dolapda yok')
}
*/

// includes ==> Array içinde arama (varsa true, yoksa false)
console.log(fruits.includes('banana')) //true
console.log(fruits.includes('kiwi')) // false

// Array.isArray ==> array olup olmadığını kontrol et (tru/false)
console.log(Array.isArray(fruits)) //true

// toString ==> array'i string'e çevirme
console.log(fruits.toString())

// slice ==> array içinden belli bir kısmı almak
// slice(2,4) ==> kapalı aralık,açık aralık gibi [2,4) =2. ve 3.yü alır
// slice(5,8) ==> [5,8) ==> 5,6,7
console.log(fruits.slice(2,4)) 

//splice(2,2) ==> 2. elemanı ve 3. elemanı al. 
// 1. sayı kaçıncı elemanı alacağız. 2. sayı kaç eleman alacağız
//console.log(fruits.splice(2,2))

//push ==> sona eleman ekleme
fruits.push('kiwi')
console.log(fruits)

//unShift ==> başa eleman ekleme
console.log(fruits.unshift('kiwi'))

// pop ==> son elemanı kesip alır ve depolar
let fruits2 = fruits.pop() //fruits dizisinin son elemanı olan kiwi'yi kesip aldı
console.log(fruits)
console.log(fruits2)

// shift ==> ilk elemanı kesip alır ve depolar
let fruits3 = fruits.shift()
console.log(fruits)
console.log(fruits3)

//split ile parçala, reverse ile ters çevir, join ile birleştir.
let name = 'Samet'
let name4 = name.split('').reverse().join('')
console.log(name4) //temaS

//sort ==> küçükden büyüğe sıralama
let numbers1 = [3, 7, 5, 2, 8, 6]
numbers1.sort()
console.log(numbers1) // [2, 3, 5, 6, 7, 8]

// Array içinde Array
let numbers2 = [1,2,3,4,5,6,[7,8,9]]
console.log(numbers2[6][1]) //6. elemanın 1. elemanı = 8
