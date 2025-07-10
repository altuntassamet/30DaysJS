/* RegExp ==> düzenli ifadeler

aranacak kelime için bir değişken tanımlayalım. pattern=model
let pattern = 'love'

kapsama alanını belirten semboller (g, i m, gibi) bir değişken daha tanımlayalım.
let flag = 'gi' ==> global ve insensitive

regex new anahtar kelimesi ile başlatılır.
let regEx = new RegExp(pattern, flag)

bunları let ile tanımlamak yerine şu şekilde de yapabiliriz.
let regEx = new RegExp('love', 'gi')

yada en mantıklı olanı
let regex = /love/gi

g ==> global, tüm ifadeyi kapsar
i ==> insensitive, büyük küçük harf duyarsızlaşır
m ==> multiline, çoklu satır
? ==> opsiyonel, olsada olur olmasada abc ve ac  b? dersek ikisinide seçer
. ==> boşluk dahil tüm karakterleri teker teker seçer
\d ==> sadece rakamlar
\D ==> rakamlar haricindeki herşey(özel karakterler ve boşluk dahil)
+ ==> belirtilen şartlara uygun karakterler bitişikse, bitişik olarak alır
örneği d ile rakamları seçtiğimiz zaman 35'i '3' ve '5' olarak ayrı ayrı alır.
ama d+ yaparsak 35 olarak alır.
[a-c] ==> a, b, c olabilir
[a-z] ==> a'dan z'ye tüm harfler
[0-3]
\s ==> boşlukları seçer
*/

//aramak istediğim kelime için bir desen oluşturuyorum
let name = /samet/
//rast gele bir cümle oluşturuyorum.
let text = 'Merhaba, benim adım Samet'
//text içerisinde 'samet' var mı diye kontrol edelim.
console.log(name.test(text)) // sonuç false. çünkü şu anda büyük küçük harf duyarlı 
// aynı deseni oluşturup insensitive yapalım.
let name2 = /samet/i
console.log(name2.test(text)) //sonuç true

//replace ==> bul ve değiştir
//bir text oluşturalım ve içindeki bir kelimeyi regex ile bulup değiştirelim.
let text2 = 'Merhaba samet, benim adım Samet. 1991 yılında doğrum, şuan 34 yaşındayım.'
let regex2 = text2.replace(/samet/ig, 'Samettin')
console.log(regex2)

let deneme = '123 abc 23 +%&'
console.log(deneme.match(/\d+/g))

let text3 = 'bence, Bence, sence, Sence'
console.log(text3.match(/.ence/g)) //['bence', 'Bence', 'sence', 'Sence']
console.log(text3.match(/[bs]ence/g)) //['bence', 'sence']
console.log(text3.match(/[BS]ence/g)) //['Bence', 'Sence']
console.log(text3.match(/\s/g))