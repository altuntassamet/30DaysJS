// conditionals ==> koşullar
/*
if (KOŞUL) {KOD} else {KOD}
*/
let num1 = 5,
    num2 = 10

if (num1<7) {
    console.log(`${num1}, 7'den küçüktür.`) }
    else {
    console.log(`${num1}, 7'den küçük değildir.`)
    }

if (num2<7) {
    console.log(`${num2}, 7'den küçüktür.`) }
    else {
    console.log(`${num2}, 7'den küçük değildir.`)
    }

/*
switch ile başla hangi case'in çalışacağını belirlemek için 'case numarası' yazan bölümü kullan.
case yazıp boşluk bırak ve case numarasını gir (case 4) 
alt satıra inip 'break' yazmazsan tüm case'ler çalışır.
case sadece numaralar ile çalışmaz. örneğin case 'pazartesi'

switch(case numarası) {
case 1: KOD
break
case 2: KOD
break
default: hiç bir case numarası gelmez ise bunu çalıştır(else)
}
*/
switch(num1){
    case 5: console.log('case 5 çalıştı') 
    break

    case 8: console.log('case 8 çalıştı') 
    break

    case 10: console.log('case 10 çalıştı') 
    break
}
switch(num2){
    case 5: console.log('case 5 çalıştı') 
    break

    case 8: console.log('case 8 çalıştı') 
    break

    case 10: console.log('case 10 çalıştı') 
    break
}

let date = new Date()
let day = date.getDay()
let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'  
]
switch(days[day]) {
    case 'Pazartesi': console.log('Bugün pazartesi')
    break
    case 'Salı': console.log('Bugün Salı')
    break
    case 'Çarşamba': console.log('Bugün Çarşamba')
    break
    case 'Perşembe': console.log('Bugün Perşembe')
    break
    case 'Cuma': console.log('Bugün Cuma')
    break
    case 'Cumartesi': console.log('Bugün Cumartesi')
    break
    case 'Pazar': console.log('Bugün Pazar')
    break
}