//Destructuring ==> Şeklini bozma
//Spread ==> Dağılma, yayma
//Rest ==> Kalanın tamamı
{
const numbers = [3, 5, 7]
//numbers dizisinin elemanlarını isimlendirdim
const [number1, num2, a] = numbers

console.log(numbers[0]) //3
console.log(number1) //3

console.log(numbers[1]) //5
console.log(num2) //5

console.log(numbers[2]) //7
console.log(a) //7

//tekrar örnek
const onePiece = [
    ['Shanks', 'BennBeckman', 'Yasopp'],
    ['Luffy', 'Zoro', 'Sanji']
]
const [RedHaired, Mugiwara] = onePiece
console.log(RedHaired) //['Shanks', 'BennBeckman', 'Yasopp']
console.log(Mugiwara) //['Luffy', 'Zoro', 'Sanji']
console.log(RedHaired[0]) //Shanks
}
{
const names = ['Samet', 'Onur', 'Halit', 'Kübra', 'Merve',]
// 3 nokta kalanların hepsini kapsıyor (...mySisters)
const [myName, sensei, myFriend, ...mySisters] = names
console.log(myName) //Samet
console.log(sensei) //Onur
console.log(myFriend) //Halit
console.log(mySisters) //['Kübra', 'Merve']
}
const countries = [
    ['Turkey', 'Ankara'],
    ['finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
for (const country of countries) {
    console.log(`Ülke = ${country[0]}, Başkent = ${country[1]}`)     
}
// [] olduğu zaman istediğimiz isim ile çıkartabiliyoruz
// {} olduğu zaman ismini değiştirmeden çıkartabiliriz
//örnek 
const names16 = {
    name: 'Samet',
    surName: 'Altuntaş',
    age: 34
}
{
const {name} = names16
console.log(name) //Samet
const {myName3} = names16
console.log(myName3) //undefined (myName3 adını veremem. dizideki ismi ile (name) tanımlayabilirim/çıkartabilirim/atayabilirim)
//yine de farklı bir isimle çıkartmak istersek
//aynı isimle çağırıp, değiştirebiliriz
const {name : myName5} = names16
//name ismi ile çağırdım ve ismini myName5 olarak değiştirdim
console.log(myName5) // Samet
}
{
let numbers1 = [1, 3, 5, 7]
//numbers2'yi, numbers1'e eşitlediğim için, numbers2'ye yaptığım değişiklikler, numbers1'ide etkiliyor.
let numbers2 = numbers1
console.log(numbers1) //[1, 3, 5, 7]
console.log(numbers2) //[1, 3, 5, 7]
numbers2.push(16)
console.log(numbers1) //[1, 3, 5, 7, 16]
console.log(numbers2) //[1, 3, 5, 7, 16]
//bu sefer birbirini etkilemeden kopyalama yapalım.
let numbers3 = [2, 4, 6]
let numbers4 =[...numbers3]
console.log(numbers3) //[2, 4, 6]
console.log(numbers4) //[2, 4, 6]
numbers4.push(16)
console.log(numbers3) //[2, 4, 6]
//direk eşitlemediğim için numbers3'e 16 sayısı eklenmedi.
console.log(numbers4) //[2, 4, 6, 16]
}

const user1 = {
    name: 'Samet',
    surName: 'Altuntaş'
}
const user2 = user1
user2.name = 'Onur'
console.log(user1) //{name: 'Onur', surName: 'Altuntaş'}
console.log(user2) //{name: 'Onur', surName: 'Altuntaş'}
//direk eşitlediğim için ikisi de değişti.
//eşitlemeden kopyalayalım.
const user3 = {
    name: 'Halit',
    surName: 'Çakmak'
}
const user4 = {...user3}
console.log(user3) //{name: 'Halit', surName: 'Çakmak'}
console.log(user4) //{name: 'Halit', surName: 'Çakmak'}
user4.name = 'Melike'
//eşitlemeden kopyaladığım için sadece user4 değişti
console.log(user3) //{name: 'Halit', surName: 'Çakmak'}
console.log(user4) //{name: 'Melike', surName: 'Çakmak'}

//bir diziyi kopyalayıp, başına ve sonuna eleman ekleyelim
const numbers5 = [2, 4, 6]
const numbers6 = [0, ...numbers5, 8]
console.log(numbers5) //[2, 4, 6]
console.log(numbers6) //[0, 2, 4, 6, 8]