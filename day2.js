/*  Data Types/Veri Türleri

Primitive Data Types
1 Numbers
2 Strings
3 Booleans
4 Null
5 Undefined

Non-primitive
1 Objects-objeler
2 Functions-fonksiyonlar
3 Arrays-diziler        */

let numOne = 16
let numTwo = 16
//2 tane eşittir işaretinin anlamı "eşit mi?" demek
console.log (numOne==numTwo) //true

let js ='JavaScript'
let py ='python'
console.log(js==py) //false

let doorOpen = false
let lightOn = false
console.log(doorOpen==lightOn) //true

let primitive = "16"
primitive[0]="91" //16 sayısını 91 sayısı ile değiştir
console.log(primitive) //primitive olduğu için değişmedi

let nonPrimitive = [16]
nonPrimitive[0]="91" //16 sayısını 91 sayısı ile değiştir
console.log(nonPrimitive) //non-primitive olduğu için dğeişti

//round küsüratı silip sayıyı taba yada tavana yuvarlar(hangisine yakınsa)
console.log(Math.round(16.1)) //16
console.log(Math.round(16.6)) //17
console.log(Math.round(16.3)) //16
console.log(Math.round(16.8)) //17
console.log(Math.round(0.3)) //0
console.log(Math.round(0.6)) //1

//flor ==> tabana yuvarlar
console.log(Math.floor(0.3)) //0
console.log(Math.floor(15.7)) //15
console.log(Math.floor(16.3)) //16

//ceil ==> tavana yuvarlar
console.log(Math.ceil(0.3)) //1
console.log(Math.ceil(15.7)) //16
console.log(Math.ceil(16.3)) //17

//min ==> en küçüğü seç
console.log(Math.min(16, 0.3, 5, -4)) // -4

//max ==> en büyüğü seç
console.log(Math.max(16, 0.3, 5, -4)) // 16

//random ==> 0 ile 0.999999 arasında rastgele bir sayı verir
console.log(Math.random())//rastgele

//[0,10] kapalı aralığında random sayı seç
//random sayı seç ve 11 ile çarp
//min 0.000011 max 10.999989
//floor tabana yuvarlar ve min 0 max 10 elde edilir
const randomNumber1 = Math.floor(Math.random()*11)
console.log(randomNumber1)

//[0,10] kapalı aralığında random sayı seç
//random sayı seç ve 11 ile çarp
//min 0.000011 max 10.999989
//floor tabana yuvarlar ve min 0 max 10 elde edilir
//+10 eklenerek [10-20] arası sayı elde edilir.
const randomNumber2 = Math.floor(Math.random()*11+10)
console.log(randomNumber2)

//abs ==> mutlak değer (absolute)
console.log(Math.abs(-16)) //16
console.log(Math.abs(-91)) //91

//sqrt ==> karekök (square)
console.log(Math.sqrt(16)) //4
console.log(Math.sqrt(81)) //9

//pow ==> üs 
console.log(Math.pow(4, 2)) //16 (4 üzeri 2) (4**2 olarak da yazabilirsin)
console.log(Math.pow(2, 4)) //16 (2 üzeri 4) (2**4 olarak da yazabilirsin)

let name = 'Samet'
let surName = 'ALTUNTAŞ'
let space = ' '
let fullName1 = name + space + surName
let fullName2 = name + ' ' + surName
let fullname3 = `${name} ${surName}`
console.log(fullName1) //Samet ALTUNTAŞ
console.log(fullName2) //Samet ALTUNTAŞ
console.log(fullname3) //Samet ALTUNTAŞ

// \n alt satıra geç
let paragraph = 'Benim adım \n Samet Altuntaş'
console.log(paragraph)
// \ kaçış operatörü. örnekleri incele.
let part1 = 'Bu yaz Bursa\'ya gideceğim'
console.log(part1)
let part2 = "Bunun üzerine \"ben yaparım\" dedi"
console.log(part2)

let a = 16
let b = 256
let c = 3
let d = 243
let t = (d/c)-(b/a)
console.log(`(${d}/${c})-(${b}/${a})=${t}`) //(243/3)-(256/16)=65

// length ==> kaç karakter olduğunu sayar.
let leng1 = 'bu yazı kaç karakter?'
console.log(leng1.length) //21 (boşluklar ve soru işareti dahil)

//büyük harf yapma
let upperLeng1 = leng1.toUpperCase()
console.log(upperLeng1) //BU YAZI KAÇ KARAKTER?

//substr ==> string belli bir kısmını alma
//ilk yazılan sayı, kaçıncı dan itibaren almaya başlasın
//ikinci yazılan sayı, kaç tane karakter alsın
//ikinci sayı yazılmaz ise tamamını alır
let substr ='AdımSametAltuntaş'
console.log(substr.substr(4, 5)) //4 den başla 5 karakter al = Samet
console.log(substr.substr(4, 13)) //SametAltuntaş
console.log(substr.substr(4)) //SametAltuntaş (4 den başla ve sonrasını al)
console.log(substr.substr(9, 8)) //Altuntaş

//split ==> parçalayıp dizi haline getirir
let part7 = 'Benim Adım Samet Altuntaş'
let part8 = part7.split(' ') //boşluk olan yerlerden parçala
console.log(part8) //['Benim', 'Adım', 'Samet', 'Altuntaş']

//includes ==> string içerisinde kelime arama
console.log(part7.includes('Samet')) //true
console.log(part7.includes('samet')) //false (s küçük)

//replace ==> değiştirme
let part11 = 'bu adam bu yolu bu hızla bu kadar düzgün nasıl yaptı?'
let part12 = part11.replace('bu', 'şu')
console.log(part12) // sadece ilk 'bu' değişti replaceAll ile hepsi değişir.

//starsWith ==> başladığı kelimeyi kontrol etme
//endsWith ==> son kelimeyi kontrol etme
console.log(part11.startsWith('bu')) //true
console.log(part11.startsWith('adam')) //false
console.log(part11.startsWith('bu a')) //true

