let a = 2
let b = 5
let c = 10
let n = 2
a+=b // a = a+b
b-=n // b = b-n
c*=n // c = c*n
n**=a // n = n üzeri a
console.log(a) //7
console.log(b) //3
console.log(c) //20
console.log(n) //128

console.log(16 == '16') //eşit mi = true
console.log(16 === '16') //denk mi = false çünkü veri türü farklı. eşit ama denk değil!
console.log(16!='16') // eşit değildir. false çünkü eşittir.
console.log(16!=='16') // denk değildir. true çünkü denk değil

console.log('Samet'.length == 'Onur'.length) // false çünkü 5 eşit değildir 4'e

let num1 = 5
let num2 = 6
let num3 = 7

// && ==> ve operatörü. tüm koşulların sağlanması lazım
console.log(num1<num2 && num2<num3 && num3<num2) //false
// || ==> yada operatörü sadece 1 koşul sağlansa bile yeter
console.log(num1<num2 || num2<num3 || num3<num2) //true

let num4 = 15
console.log(num4) //15
console.log(++num4) // 16 1 arttırdı
console.log(++num4) // 17 1 arttırdı
console.log(num4++) // 17 1 arttıracak
console.log(num4) // 18 önceki satırda 1 arttırdı
console.log(--num4) // 17 1 azalttı
console.log(num4) // 17
console.log(num4--) // 17 1 azaltacak sonraki satırda
console.log(num4) // 17

// KOŞUL ? TRUE : FALSE
let isRaining = false
isRaining
 ? console.log('Şemsiyeye ihtiyacın var')
 : console.log('Şemsiyeye ihtiyacın yok')

 let isRaining2 = true
isRaining2
 ? console.log('Şemsiyeye ihtiyacın var')
 : console.log('Şemsiyeye ihtiyacın yok')

 let num5 = 5
 let num6 = 10
 let num7 = 15
 let num8 = 20
 let num9 = 25
 //[10,20] kapalı aralığında ise ve çift sayı ise =true
 console.log((num5>=10 && num5<=20) && (num5%2==0)) //false
 console.log((num6>=10 && num6<=20) && (num6%2==0)) //true
 console.log((num7>=10 && num7<=20) && (num7%2==0)) //false
 console.log((num8>=10 && num8<=20) && (num8%2==0)) //true
 console.log((num9>=10 && num9<=20) && (num9%2==0)) //false

 // alert('Hoş geldiniz')
 // prompt('Mesajı buraya yazıyoruz', 'varsayılan olarak gözükecek yazı')
 // prompt ('Telefon numaranızı girin', '05** *** ** **)
/*  let message = confirm('silmek istediğine emin misin?')
  console.log(
  message
  ? 'Silme işlemi başarılı'
  : 'Silme işlemi iptal edildi'
) */

// bu bir metot. new anahtar kelimesi ile başlatılıyor.
const date = new Date()
/*
getFullyear() = yıl
getMonth() = ay 0-11
getDate() = gün 1-31
getDay() = gün 0-6
getHours() = saat 0-23
getMinutes() = dakika 0-59
getSeconds() = saniye 0-59
getMiliseconds() = milisaniye 0-999
*/

let year = date.getFullYear(),
month = date.getMonth(),
day = date.getDate(),
day2 = date.getDay(),
hour = date.getHours(),
minute = date.getMinutes(),
second = date.getSeconds()

let months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]
let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
    
]
let date1 = `${day} ${months[month]} ${year} - ${days[day2]} - ${hour}.${minute}.${second}`
console.log(date1)
