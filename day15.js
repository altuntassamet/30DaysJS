// Classes ==> sınıflar
 class users {
    constructor(ilkYazılan, ikinciYazılan, age, country, city) {
        this.name = ilkYazılan
        this.surName = ikinciYazılan
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        return this.name + ' ' + this.surName
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        return `Benim adım ${fullName} ve ${this.age} yaşındayım. ${this.city}/${this.country}'de yaşıyorum.`
    }
 }

 const user1 = new users('Samet', 'Altuntaş', 34, 'Türkiye', 'Kocaeli')
 const user2 = new users('Onur', 'Altuntaş', 26, 'Türkiye', 'Sakarya')
 const user3 = new users('Halit', 'Çakmak', 37, 'Türkiye', 'Sakarya')

 console.log(user1.getPersonInfo())
 console.log(user2.getPersonInfo())
 console.log(user3.getPersonInfo())
