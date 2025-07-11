// Error Handling ==> hata yönetimi
let age = prompt('Kaç yaşındasın?')
// hata yakalama ==> try
try {
    if (age > 30) throw new Error('yaşlanmışsın')
} catch (e) {
    alert(e.message)
}

// referance error ==> tanımlı olmayan bir şeye ulaşmaya çalışmak
// syntax error ==> yazım kurallarına uymadın
// type error ==> örneğin bir sayıyı toUpperCase ile büyükmeye çalışmak. bu harfler için geçerlidir
