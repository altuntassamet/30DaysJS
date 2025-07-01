//higher order function 
{
const usAlma = joinNumber => joinNumber ** 2

function newFunction(functionName, joinNumber2) {
    return functionName(joinNumber2) * 5
}

console.log(newFunction(usAlma, 3)) // 45

console.log(usAlma(4)) // 16
}
{
const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1+s2+s3
        } 
        return c
    } 
    return b
}
console.log(a(11)(12)(13)) //36
}
{
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total = 0
numbers.forEach(Number => total += Number)
console.log(total) // 55
}
{
// Zaman ayarlı kod

// setTimeout ==> belli bir süre sonra başlat
// clearTimeout ==> iptal et

// setInterval ==> belli aralıklarla çalıştır 
// clearIntervar ==> iptal et

function selamla() {
    console.log('Selam')
}
setTimeout(selamla, 500) // yarım saniye sonra selamla fonksiyonunu çalıştır.
const selamlayıcı = setInterval(selamla, 500) // yarım saniyede bir selamla fonksiyonunu çalıştırır.

setTimeout(() => {
    clearInterval(selamlayıcı)
    console.log('selamlayıcı durduruldu')
}, 5000)
}
{
//filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
console.log(numbers.filter(number => number>4 && number<8))

let user = [
    {
        id: 1,
        name: 'Samet',
        age: 34,
        gender: 1
    },
    {
        id: 2,
        name: 'Onur',
        age: 26,
        gender: 1
    },
    {
        id: 3,
        name: 'Aybuke',
        age: 1,
        gender: 2
    },
    {
        id: 4,
        name: 'Melike',
        age: 6,
        gender: 2
    }
]

const men = user.filter(user => user.gender==1)
const babys = user.filter(user => user.gender ==2)
console.log(men)
console.log(babys)
//every ==> tamamı
console.log(user.every(user => user.gender ==1 || user.gender==2))
}
//Sıralama
let names =['Samet', 'Onur', 'Halit', 'Burak']
names.sort()
console.log(names)
let numbers = [3, 8, 2, 11, 4, 56, 32, 41, 17, 26]
numbers.sort((a, b) => a-b)
console.log(numbers)