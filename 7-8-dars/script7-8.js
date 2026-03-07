// parctice (if tasks)

// let yosh = 20
// if (yosh <= 18) {
//     console.log("ovoz beraolmaysiz");
// }else{
//     console.log("Ovoz bera olasiz")
// }



// task 3 
// let fasl = "fasl"
// switch(fasl){
//     case "bahor":
//     fasl = "Gullar ochildi";
//     break;
//     case "yoz":
//     fasl = "Issiq kun"
//     break;
//     case "kuz":
//     fasl = "Barglar to'kildi";
//     break;
//     case "Qish":
//     fasl = "Qor yog'di";
//     break;
//     default:
//     fasl = "Nomalum fasl";
// }
// console.log(fasl)



// 4
// let son = 14;
// let natija = (son % 2 === 0) ? "Juft son" : "Toq son";
// console.log(natija);

// 5

// let narx = 5000
// let chegirmaChegara = 100000
// let natija = Boolean(narx > chegirmaChegara)
// ? "chegirma bor" : "chegirma yo'q"
// console.log(natija)





// FOR TSIKLLAR (LOOPS) nima va nega kerak
// Tsikl _ bu kod qayta qayta ishga tushirish uchun juda qulay vositadir.

// Tasavvur qiling, sizga ekranga 5 ta raqam chiqarih vazifasi berildi. 
// Buni oddiy usulda shunday yoziladi.

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// Tsikl yordamida esa oson !

//  for (let i = 1; i <= 5; i++) {
// console.log(i);
// }

// TSIKL orqali 1000 ta elementniha, bitta for tsikl bilan chiqarishingiz mumkin !

// 1. for tsikl sintaksisi 

// for (Boshlash; Shart; Qadam) {
//   bajarish kerak bo'lgan kod
// }

// 0 dan 4 gacha bosib chiqarish 
// for (let i = 0; i< 5; i++){
//     console.log("Raqam: " + i);
// }


// 1 Boshlash (Unit)
//  Tsikl boshlanishida bir marta bajariladi.
// Odatda o'zgaruvchi yaratiladi.

// let i = o 

// 2 Shart(Condition)

// Har iteratsiya oldidan tekshiriladi, Shart false bo'lsa tsikl to'xtaydi.

// i <= 5


//  3 Qadam (Step)

// Har iteratsiyadan keyin bajariladi. Odatda i 
// ni oshiradi yoki kamaytiradi. 

// i++

// --------------------------------------------------


// for tsikli - Amaliy misollar

// 1-misol: 1 dan 3 gacha sanash 

// for (let i = 1; i <= 3; i++) {
//     console.log("Soniyalar: " + i);
// }
// narija:
// Soniyalar: 1
// Soniyalar: 2
// Soniyalar: 3


// 2-misol: juft sonlarni chiqarish
// for (let i = 2; i <= 10; i += 2) {
// console.log("Juft: " +i);
// }

// natija:
// Juft: 2
// Juft: 4  ... Juft: 10


// 3-misol: Massiv elementlarini chiqarish

// let fruits = ["olma", "nok", "Banan"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }






// While tsikli 

// While tsikli inglizcha holda, bo'lguncha gacha degan manoni anglatadi, belgilanga shart to'g'ri (true )bo'lib turguncha kod bajariladi.

// for tsikli o'xshab ketadi, lekin bu yerda faqat shart beriladi- boshlash va qadam tsikl tanasida bo'lishi kerak 

//Extiyot bo'ling: AGAR SHART hech qachon false bo'lmasa, tsikl cheksiz davom etadi (infinitive loop)!


// 1-misol: Oldinga sanash

// let i = 1;
// while (i <= 3) {
//     console.log("Qadam: " +i);
//     i++;
// }


// Sintaksisi :
// While (shart){
//     // kod
// }

// 2 - misol qiymatni yig'ib borish

// let sum = 0, i = 1;
// while (i <= 5) {
//     sum += i;
//     i++;
// }
// console.log(sum);  // 15


// while tsikl - Amaliy misollar 
// 1-misol: Orqaga sanash (Countdown)

// let count = 5;
// while (count >= 0) {
//     console.log("Vaqt: " + count);
// count--;
// }

// natijasi (console):

// vaqt: 5
// vaqt: 4
// vaqt: 3
// vaqt: 2
// vaqt: 1
// vaqt: 0


// 2-misol: Qiymatni yig'ib borish

// let num = 2; 
// whhile (num <= 20) {
//     console.log(num);
//     num *= 2;
// }


// natija (console):

//  2
//  4
//  8
//  16 


// do ... while tsikl: Sintaksis 

// Ta'rifi 

// do ... while tsikli avval kod blokini bajaradi, so'ngra
// shartni tekshiradi. Bu shuni anglatadiki, kod bloki shart noto'g'ri bo'lsa ham kamida bir marta bajariladi.

// Ushbu tsikl ko'pincha foydalanuvchidan ma;lumot olish yoki natijani tekshirishdn oldin bir marta harakatni amalga oshirish kerak bo'lganda ishlatiladi.

// Sintaksisi 
// do {
    // Bajariladigon kod bloki
// } while (shart);

// Eslatma: While dan keyingi qavsdan yozilgan shart rost (true) bo'lsa, tsikl qaytadan bajariladi.


// DO ... while misollari

// 1-misol: Sanash

// 1 dan 5 gacha bo'lgan sonlarni konsolga chiqarish:

// let i = 1;
// do {
//     confirm.console.log(i);
// i++; 
// } while (i < 5;)


// 2-misol: Tekshiruv
// Foydlaanuvchi to'g'ri ma'lumot kiritmaguncha so'rash:

// let son;
// do {
//     son = promt("Musbat son kiriting:");
// } while (son < 0);

// Ushbu misolda foydalanuvchi manfiy son kiritsa, so'rov takrorlanaveradi.

// 3. Break operatori (To'xtatish)
// brak so'zi "sindirish" yoki "toxtatish" degan ma'noni aytadi.

// U tsikl mudatidan oldin, darxol toxtatish uchun ishlatiladi. Agar tsikl ichida breakga duch kelsa, dastur tsikl tanasidan chiqib ketadi va keyingi koddan davom eetadi.

// Qachon ishlatiladi? Biror element massivdan topilganda yoki muayyan shart bajarilganda tsiklni darxol to'xtatish. Qolgan PPP ni o'qimay to'g'ridan to'g'ri tsikl ortidan ishni davom ettiradi.

// STOP LOOP ! 

// for (let i 1; 1 <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }
// 1, 2, 3, 4 (5 va undan kegin chiqmaydi)


// Break operatori - Amaliy misollari 

// 1-misol: Noaniq yerda to'xtash

// for (let i = 1; i <= 5; i++) {
//     if (i == 3) {
//         break;
//     }
//     console.log("i: " +i);
// }
// natija : 

// i: 1 
// i: 2 
//  (3 da to'xtadi)


// 2-misl: Qidiruv va To'xtaish

// let fruits = ["olma", "nok", "nok", "bana", "gilos"];
// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "banan") {
//         console.log("Topildi!");
//         break;
//     }
// }
// natija : 
// Topildi!
// (banan topilgach to'xtadi)



// 4. continue operatori ( Tahslab o'tish)

// continue operatori hozirgi iteratsiyani (takrorlashni) bajarilmasdan keyingi qadamga o'tqzadi.

// Dastur o'sha iteratsiya uchun belgilangan kodni o'tkazib yuboradi va tsiklning keyingi iteratsiyasiga o'tadi

// Qachon ishlatiladi ? Muayyan elementlarni (masalan, juft sonlarni, nol qiymatlarini) o'tkazib yuborganda yoi filtrlash kerak bo'lganda, lekin tsiklni tsiklni to'xtatmasdan davom ettirish zarurati bo'lganda! 

// for (let i = 1; i <= 5
// ; i++) {
//     if (i === 3) {
//     continue;
// }
// console.log(i);
// }

// 1, 2, 4, 5  (3 o'tkazib yuborildi)



// Continue operatori - Amaliy misollar

// 1-misol: 3 raqamini sakrab o'tish

// for (let i = 1; <= 6; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log("Raqam: "+i);
// }

// Raqam: 1
// Raqam: 2
// Raqam: 3
// Raqam: 4
// Raqam: 5
// Raqam: 6


// 2-misol: Faqat toq sonlarni chiqarish

// for (let i = 1; i <= 8; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log("Tqo: "+i);
// }
// natija;
// Toq: 1
// Toq: 3
// Toq: 5
// Toq: 7

// Xulosa (Conclusion)

// For 
// necha marotaba ishlashini bilsangiz ishlatiladi
// for(let i = 0; i < 5; i++)


// break
// Tsiklni darhol to'xtatadi va tsikl tanasidan chiqib ketadi.

// While
// Shart to'g'ri bo'lgunicha ishlaydi, takrorlas, soni oldindan no'malum bo'lganda.

// Continue 
// Joriy qadamni (iteratsiya) tashkab o'tib, 
// keyingi iteratsiyadan davom etadi. 





