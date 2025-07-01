// Scope ==> kapsam
//let yada const kullanmadan bir değişken tanımladığımızda window scope
// süslü parantez içerisine blok denir {BLOK}

let num1 = 16
let name1 = 'Samet'
console.log(num1, name1) // 16 'Samet'
{
let num1 = 91
let name1 = 'Altuntaş'
console.log(num1, name1) // 91 'Altuntaş'
}

{
let num2 = 5
num3 = 6
}
//console.log(num2) // let ile tanımladığım için hata veriyor. göremiyor
console.log(num3) // window olarak tanımladığım için görebiliyor.

const user = {
    name: 'Samet',
    surname: 'Altuntaş',
    isMarried: false,
    skills: ['HTML', 'Javascript', ],
    sensei: [{
        name: 'Onur',
        surname: 'Altuntaş'
    }],
    numbers: {
        num4: 5,
        num5: 11,
        num6: 16,
        num7: 21
    },
    getFullName: function() {
        return `${this.name} ${this.surname}`
    },
    getSenseiFullName: () => `${user.sensei[0].name} ${user.sensei[0].surname}`
}
console.log(user)
console.log(user.name) // Samet
console.log(user.sensei[0].name) // Onur
console.log(user.isMarried ? 'Evli' : 'Bekar') // Bekar
console.log(user.numbers.num6) // 16
console.log(user.getFullName()) // Samet Altuntaş
console.log(user.getSenseiFullName()) // Onur Altuntaş

console.log(user.skills) //['HTML', 'Javascript']
user.skills.push('CSS')
console.log(user.skills) //['HTML', 'Javascript', 'CSS']
console.log(user.skills.at(-1)) // CSS ==> at(-1) sonuncuyu alır

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numbers4 = numbers3.splice(0, numbers3.length -1)
console.log(numbers4) // [1, 2, 3, 4, 5, 6, 7, 8]
let lastNumber = numbers3.at(-1)
console.log(lastNumber) // 9
let numbers5 = `${numbers4} and ${lastNumber}`
console.log(numbers5) //1,2,3,4,5,6,7,8 and 9