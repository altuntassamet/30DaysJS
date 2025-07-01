/*Functions ==> fonksiyonlar
function anahtar kelimesi ile başlatılır. ardından fonksiyon ismi yazılır.
function fonksiyonIsmi() {
Kod Bloğu
}
fonksiyonIsmi() şeklinde fonksiyon çağırılır. */
function myFunction() {
    console.log('Hello')
    return 
}
myFunction() //Fonksiyonu çağırdım. ==> Hello

//fonksiyonun 2 değeri var(fonksiyonu çağırırken bu değerleri biz veriyoruz) ve bu iki değeri topluyor.
function total(num1, num2) {
    return num1 + num2
}
let x = total(7, 9) // 7 = num1, 9 = num2
console.log(x) // 16

{ //newFunction adında bir fonksiyon oluşturdum. bu fonksiyonun alacağı değerler bir diziden alacağımı belirttim.
  //dizi de 6 eleman var ve adı da dizi. fonksiyon, kendi içerisinde array'in her elemanını sırayla seçmesi için array.length
  //total değişkeni=0 ==> total ile array'in i. elemanını topla ve totale eşitle. total= 1 (dizinin ilk elemanı)
  //daha sonra total + array 2. eleman toplanır yani 1+3 = 4 total 2. durumda 4 olur. 
  // her satırda toplanmaya devam eder ve dizi içerisindeki tüm sayılar toplanmış olur.
    function newFunction(array) {
        let total = 0
        for (let i = 0; i<array.length; i++) {
            total += array[i]
        }
        return total
    }
    let dizi = [1, 3, 5, 6, 7, 8]
    console.log(newFunction(dizi))
}

    let fonksiyonAtama = (function(xyz){
        console.log(`'abc, ${xyz}`)
    }
)('dfg')

function selamla() {
    let msj = ('Merhaba Hoşgeldin')
    alert(msj)
}
//selamla()
/*
function yasKontrol(yas) {
    if (yas >= 18) {
        return true;
    } else {
        return confirm ('Ebeveyn izni var mı?');
    }
}
let yas = prompt('Kaç yaşındasın?'); 
if (yasKontrol(yas)) {
    alert('izin verildi');
}else {
        alert('reddedildi')
    }
{
    function samet(x, y, z) {
let total = (x+y)*z
console.log(`(${x}+${y})*${z}=${total}`)
}
samet(1, 3, 4)
} //(1+3)*4=16
*/
//Arrow function

{
const total1 = xy => {
    return xy+xy+5
}
console.log(total1(3))
}

{
const kareAlma = x => {
    return x**2
}
console.log(kareAlma(16))
}