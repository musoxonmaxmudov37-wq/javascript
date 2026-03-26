// Nega object kerak ? 
// Tasavvur qiling, bizda kompyuter ma'lumotlari bor. Agar obyekt ishlatmasak, hammanarsa tarqoq bo'lib ketadi 

// X yomon usul (Tarqoq)
// Har bir ma'lumot uchun alohida o'zgaruvchi ochamiz. Bu kodni o'qishni va boshqarishni qiyinlashtiradi.

// Har bittasiga alohida o'zgaruvchi ochilgan 

// let pcBrand = "Lenovo";
// let pcModel = "Legion";
// let pcRam = 16;
// let pcIsGaming = true;

// Yaxshi usul (Object)

// Barcha tegishli ma'lumotlarni yagona bitta qutiga (Obyektga) solib, guruhlab qo'yamiz.Barcha

// Hammasi bitta joyda jamlangan ya'ni bitta obyektga

// const computer = {
//     brand: "Lenovo",
//     model: "Legion",
//     ram: 16,
//     isGaming: true 
// };


// Object nima o'zi? (Javon misoli)

// Tartibli quti (Javon)

// Object - bu bir biriga bog'liq ma'lumotlarni (kalit-qiymat ko'rinishida) bitta joyda saqlash imkoniyatini beruvchi ma'lumot turi.

// Real hayotda uni ko'p tortmali javonga o'xshatish mumkin.
// Tortmaning ustiga yozilgan nom - Key (kalit), ichidagi buyum esa - Value (qiymat) deyiladi.


// Javon obyektiniyaratdik
// const javon = {
//     birinchiTortma: "Kitoblar",
//     ikkinchiTortma: "Hujjatlar",
//     uchinchiTortma: "Ruchkalar",
//     // Ichida o'zini funksiyasiham bo'lishi mumkin
//     javonniOchish: function() {
//         console.log(("G'iyq ... Javon ochildi!"));
//     }
// };


// Object qanday Yaratiladi?

// Object literal usuli 

// Object yaratishni eng keng tarqalgan va oson usuli bu Object Literal usulidir.

// Buning uchun oddiygina jingalak qavslardan {} foydalanamiz

// Ichidagi har bir property bir-birdan vergul (,) orqali
// ajratiladi. Oxirgi propertyda vergul qo'yish shart emas.

// const user = {
//     firstName: "Ali",
//     lastName: "Valiyev",
//     age:20,
//     isStudent: true 
// };

// Butun objectni ekranga chiqarish
// console.log(user);


// Ma'lumotlarga murojaat qilish (O'qish)

// 1. Dot Notation (Nuqta)

// Eng ko'p ishalatiladigon va sodda usul. Object nomidan keyin nuqta qo'yib kalit so'z yoziladi 

// Foydalanuvchi ismini olish 
// console.log(user.firstName);

// 2. Bracket Notation (qavslar)

// Tortburchak qavslar ichida kalit nomi string "" shaklida beriladi. Kalit nomi o'zgaruvchi bo'lganda shu usul kerak bo'ladi.

// Yoshi haqida ma'lumot olish 
// let kalitNom = "age";
// console.log(user[kalitNom]);


// Property Qiymatni O'zgartirish va Qo'shish

// O'zgarish (Update)

// Mavjud kalitni chaqirib, unga oddiy o'zgaruvchi kabi = belgisi bilan yangi qiymat biriktiramz.

// Yoshini 21 ga o'zgartiramiz
// User.age = 21;
// console.log(User.age);

// Yangi qo'shish (Add)
// Agar biz chaqirgan kalit object ichida yo'q bo'lsa va unga qiymat bersak, JS uni avtomatik qo'shadi

// Yangi xususiyat qo'shamiz

// user, job = "Developer";
// console.log(user.job);


// Propertyni o'chirish (Delete) 

// Delete operatori

// Dastur ishlashi davomida ba'zi ma'lumotlar bizga kerak bo'lmay qolishi mumkin.

// Object ichidagi xususiyatni butunlay o'chirib yuborish uchun delete kalit so'zidan foydalanamiz.

// Agar o'chirilgan propertyni chaqirmoqchi bo'lsak, JavaScript xato bermaydi, balki bizga undefined (topilmadi/yo'q) degan javobni qaytaradi.


// const car = { model: "Spark", color: "Oq"};

// 1. O'chirishdan oldin tekshiramiz
// console.log(car.color);

// 2. Rangi kerak emas, o'chiramiz!
// delete car.color;

// 3. O'chirilgandan keyin chaqirib ko'ramiz 
// console.log(Car.color);
// console.log(Car);


// Methodli Obyektlar (Funksiya ichida)

// Object faqat ma'lumotni yo'q!

// Objectlar nafaqat ma'lumotlarni saqlashi, balki qandaydir ishlarni bajara olishham mumkin. Object ichidagi funksiyalar Method deb ataladi.

// Method ichida obyektning o'zida boshqa ma'lumotlarga yetib borish uchun this (shu) kalitso'zidan foydalanamiz.

// const dog = {
//     name: "Olapar",
//     breed: "Ov iti",
//     // Bu  property method hisoblanadi 
//     bark: function() {
//         // this aynan shu 'dog' obyektiga ishora qiladi
//         console.log(this.name + " hurdi: Vov-vov!");
//             }
// };
// Methodni chaqirish {} bilan bajariladi
// dog.bark(); //Olapar hurdi; Vov-vov!


// Ichma-ich Objectlar (Nested Object)

// Object ichida Object 

// Katta dasturlarda ma'lumotlar murakkab bo'ladi.
// Shuning uchun bitta objectning ichida boshqa bir objectniham saqlashingiz mumkin.

// Masala, talabaning ma'lumotlari ichida uning yashash manzili (address) alohida ko'cha va shahar xususiyatlariga ega bo'lgan yana bir object bo'ladi.

// const student = {
//     name: "Hasan",
//     address: {  // Yana bitta obyekt ochildi
//         city: "Toshkent",
//         street: "Amir Temur ko'chasi"
//     }
// };

// // Ichidagi qiymatni o'qish uchun zanjir quramiz
// console.log(student.address.city);

// Object ichida aylanish (for in)

// Oson yo'li: for...in loop

// Tasavvur qiling, objectni ichida 50ta xususiyat bor va biz ularning hammasini ekranga chiqarmoqchimiz. bittalab nuqta qo'yib yozish noqulay.

// buning uchun maxsus for...in tsikladan foydalanamiz. U object ichidafi har bir kalitni avtomatik aylanib chiqadi.


// const laptp = {
//     brand: "Macbook",
//     chip: "M3 Pro"
// };
// for (let key in laptop) {
//     // Bu yerda bracket notation [] kerak bo'ladi
//     console.log(key + "-" + laptp[key]);
// }


// Real Hayot: E-commerce (Onlayn do'kon)

// Savatdagi mahsulot hisoblash

// Real loyihalarda biz ko'pincha Objectlar ro'yxati (Array of Objects) bilan ishlaymiz.

// Onlayn do'konda savatga solingan mahsulotlarning umumiy narxini hisoblash dasturlashning eng ko'p ishlatiladigon kadrlaridan biridir. O'ng tomondagi kodni tahlil qiling va console'da ishlatib ko'ring.


// Savat array ichida 3 ta obyekt

// const cart = [
//     {name: "Telefon", price: 800, qty: 1},
//     {name: "Quloqchin", price: 50, qty: 2},
//     {name: "G'ilof", price: 15, qty: 3},
// ];

// let total = 0;
// for (let item of cart) {
//     total = total + (item.price * item.qty);
// }
// console.log("Umumiy summa: $" + total);



// const myProfile = {
//     name: "Musoxon",
//     age: 19,
//     til: "Python"
// }
// console.log(myProfile);



// const mashina = {
//     avto: "Malibu",
//     horn: function() {
//     console.log("bip bip");
// }
// };

// mashina.horn


// const Mashina = {
//     brand: "Chevrolet ",
//     tur: "Malibu",
// };

// for (let key in Mashina) {
//     console.log(key + "-" + Mashina [key]);
// }



// const Student = {
//     name: "Musoxon",
//     age: 19,
//     University: "PDP",
// }
// console.log("Ismi: " + Student.name + " Yoshi: " + Student.age + " Universiteti: " + Student.University);


// const rectangle = {
//     width: 20,
//     height: 10,
//     getArea: function() {
//         console.log("Yuzasi: " + this.width * this.height);
        
//     }
// }
// rectangle.getArea() 


// const mevalar = {
//     banan: 20,
//     kiwi: 10,
//     olma: 15,
//     qovun: 3,
// }

//  for (let key in mevalar) {
//         console.log(key+ "," + mevalar[key])
//     }