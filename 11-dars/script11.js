
// Task 
// Funksiyalar konspekt kodlarni yozib kelish

// // Funksiyani e'lon qilish
// function salomBer(){
//     let xabar = "Assalomu alekum!";
//     return xabar; // Natijani qaytarish
// }



// // Chaqirish va konsolga chiqarish
// console.log(salomBer())
// // Natija: "Assalomu alekum!"

// const { use } = require("react");



// // a va b sonlarini ayirib beruvchi funksiya
// function ayirish(a, b) {
//     let javob = a - b;
//     return javob;
// }



// // 10 dan 3 ni ayirish
// console.log(ayirish(10, 3));
// // Natija: 7


// // Sonning kavadratinin topuvchi kod
// function kvadratniTop(son) {
//     return son * son;
// }
// let natija1 = kvadratniTop(5);
// let natija2 = kvadratniTop(10);
// console.log(natija1); // Natija: 25
// console.log(natija2); // Natoja: 100



// function ishla() {
//     return "Jarayon bajarildi!";
// }
// // 1. Qavs bilan - funksiya ishga tushadi
// let natija = ishla();
// console.log(natija); // "Jarayon bajarildi"



// // 2. Qavssiz - funksiya mantig'i ko'chiriladi
// let nusxa = ishla;
// console.log(nusxa); // [Function: ishla]


// function mashinaKorsat() {
//     // Bu o'zgaruvchi faqat shu yerda yashaydi
//     let carName = "Chevrolet Tracker";
//     return carName;
// }
// console.log(mashinaKorsat());
// // Natija: "Chevrolet Tracker"
// // Tashqaridan ucha murojat qilish xato:
// // console.log(carName); ReferenceError

// function birinchiMashina() {
//     let nomi = "Malibu";
//     return nomi;
// }

// function ikkinchiMashina() {
//     // Yuqoridagi 'nomi' xalaqit bermaydi
//     let nomi = "Cobalt";
//     return nomi;
// }
// console.log(birinchiMashina()); // "Malibu" 
// console.log(ikkinchiMashina()); // "Cobalt"

// // Oldingi usul: const ayirish = function(a,b)....
// // Yangi usul (Arrow =>):
// const ayirish = (a, b) => {
//     return a - b;
// };
// console.log(ayirish(50, 15));
// // Natija: 35

// // O'ta qisqa ko'rinishi (Implict):
// // Agar funksiya ichida faqat 1 amal bo'lsa:
// // () ham, "return" so'zi ham avtomat tushuniladi.

// const bolish = (a, b) => a / b;
// console.log(bolish(100, 4));
// // Natoja: 25

// // Yana ham qisqartirilgan ko'rinishi:

// // Qavs bilan: const kvadrat = (x) => x * x;

// // Qavssiz (chunki parametr faqat 'x'):
// const kvadrat = x => x * x;
// console.log(kvadrat(9));
// // Natija: 81


// // Umuman parametr yo'q bo'lsa
// // Bo'sh qavslar qo'yilishi shart, aks holda dastur tushunmaydi.

// // Hech qanday ma'lumot qabul qilinmayapti
// // Bo'sh qavslar () qo'yish shart!

// const ogohlantirish = () => "Xatolik yuz berdi!";
// // Natija: "Xatolik yuz berdi!"


// // Bitta parametr (ism)
// // Tashqaridan foydalanuvchi ismini qabul qilib olamiz.

// // (ism) - bu PARAMETR
// function xushKelibsiz(ism) {
//     return "Saytimizga xush kelibsiz, " + ism;
// }

// // "Azizbek" - bu ARGUMENT
// let xabar = xushKelibsiz("Azizbek");
// console.log(xabar)
// // Natija: "Saytimizga xush kelibsiz, Azizbek"

// // Bir nechta parametrlar
// // Vergul yordamida istalgancha parametr qabul qilish mumkin.




// // ism va yosh - bnir nechta parametrlar
// function malumotKorsat (ism, yosh) {
//     return "Mijoz: " + ism + ", Yoshi: " + yosh;
// }
// // Ma'lumotlar ham vergul bilan ajratiladi
// let user = malumotKorsat("Zuhra", 20);
// console.log(user);
// // Natija: "Mijoz: Zuhra, Yoshi: 20"

// Task 
// Funksiyalar konspekt kodlarni yozib kelish

// // Funksiyani e'lon qilish
// function salomBer(){
//     let xabar = "Assalomu alekum!";
//     return xabar; // Natijani qaytarish
// }



// // Chaqirish va konsolga chiqarish
// console.log(salomBer())
// // Natija: "Assalomu alekum!"

// const { use } = require("react");



// // a va b sonlarini ayirib beruvchi funksiya
// function ayirish(a, b) {
//     let javob = a - b;
//     return javob;
// }



// // 10 dan 3 ni ayirish
// console.log(ayirish(10, 3));
// // Natija: 7


// // Sonning kavadratinin topuvchi kod
// function kvadratniTop(son) {
//     return son * son;
// }
// let natija1 = kvadratniTop(5);
// let natija2 = kvadratniTop(10);
// console.log(natija1); // Natija: 25
// console.log(natija2); // Natoja: 100



// function ishla() {
//     return "Jarayon bajarildi!";
// }
// // 1. Qavs bilan - funksiya ishga tushadi
// let natija = ishla();
// console.log(natija); // "Jarayon bajarildi"



// // 2. Qavssiz - funksiya mantig'i ko'chiriladi
// let nusxa = ishla;
// console.log(nusxa); // [Function: ishla]


// function mashinaKorsat() {
//     // Bu o'zgaruvchi faqat shu yerda yashaydi
//     let carName = "Chevrolet Tracker";
//     return carName;
// }
// console.log(mashinaKorsat());
// // Natija: "Chevrolet Tracker"
// // Tashqaridan ucha murojat qilish xato:
// // console.log(carName); ReferenceError

// function birinchiMashina() {
//     let nomi = "Malibu";
//     return nomi;
// }

// function ikkinchiMashina() {
//     // Yuqoridagi 'nomi' xalaqit bermaydi
//     let nomi = "Cobalt";
//     return nomi;
// }
// console.log(birinchiMashina()); // "Malibu" 
// console.log(ikkinchiMashina()); // "Cobalt"

// // Oldingi usul: const ayirish = function(a,b)....
// // Yangi usul (Arrow =>):
// const ayirish = (a, b) => {
//     return a - b;
// };
// console.log(ayirish(50, 15));
// // Natija: 35

// // O'ta qisqa ko'rinishi (Implict):
// // Agar funksiya ichida faqat 1 amal bo'lsa:
// // () ham, "return" so'zi ham avtomat tushuniladi.

// const bolish = (a, b) => a / b;
// console.log(bolish(100, 4));
// // Natoja: 25

// // Yana ham qisqartirilgan ko'rinishi:

// // Qavs bilan: const kvadrat = (x) => x * x;

// // Qavssiz (chunki parametr faqat 'x'):
// const kvadrat = x => x * x;
// console.log(kvadrat(9));
// // Natija: 81


// // Umuman parametr yo'q bo'lsa
// // Bo'sh qavslar qo'yilishi shart, aks holda dastur tushunmaydi.

// // Hech qanday ma'lumot qabul qilinmayapti
// // Bo'sh qavslar () qo'yish shart!

// const ogohlantirish = () => "Xatolik yuz berdi!";
// // Natija: "Xatolik yuz berdi!"


// // Bitta parametr (ism)
// // Tashqaridan foydalanuvchi ismini qabul qilib olamiz.

// // (ism) - bu PARAMETR
// function xushKelibsiz(ism) {
//     return "Saytimizga xush kelibsiz, " + ism;
// }

// // "Azizbek" - bu ARGUMENT
// let xabar = xushKelibsiz("Azizbek");
// console.log(xabar)
// // Natija: "Saytimizga xush kelibsiz, Azizbek"

// // Bir nechta parametrlar
// // Vergul yordamida istalgancha parametr qabul qilish mumkin.




// // ism va yosh - bnir nechta parametrlar
// function malumotKorsat (ism, yosh) {
//     return "Mijoz: " + ism + ", Yoshi: " + yosh;
// }
// // Ma'lumotlar ham vergul bilan ajratiladi
// let user = malumotKorsat("Zuhra", 20);
// console.log(user);
// // Natija: "Mijoz: Zuhra, Yoshi: 20"

