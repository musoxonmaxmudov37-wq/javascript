

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
