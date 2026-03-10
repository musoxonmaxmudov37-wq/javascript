// if (ifoda) {
    // shart to'g'ri bo'lganda bajariladigon kod 
    // bajaralidagon kod
// }

//  salomlashish misoli 
// let soat = 15;
// let salomlashish;

// if (soat < 18) {
//     salomlashish = "Xayrli kun";
// }

// console.log(salomlashish);


// let yosh = 18;
// let matn = "Haydashingiz mumkin emas";

// if (yosh >= 18) {
//     matn = "Haydashingiz mumkin";
// }

// console.log(matn);



//  ichma ich if misoli 
// let yosh = 16;
// let mamlakat = "Uzb"
// let matn = "Haydashingiz mumkin emas! "

// if (mamlakat == "Uzb") {
//     if (yosh >= 18) {
//         matn = "Haydashingiz mumkin!";
//     }
// }
// console.log(matn);


//  && (VA) operatori bilan
// let yosh = 16;
// let mamalakat  = "Uzb";
// let matn = "Haydashingiz mumkin emas!";

// if (mamalakat == "Uzb" && yosh >= 18);{
//     matn = "Haydashingiz mumkin!";
// }

// console.log(matn);


// else shart noto'g'ri bo'lganda 

// let soat = new Date().getHours();  // hozirgi soatni oladi 

// let salomlashish;
// if (soat > 18) {
//     salomlashish = "Hayrli kun";
// } else {
//     salomlashish = "Hayrli kech";
// }

// console.log(salomlashish);



// else if  - yangi shart qo'shish uchun:

// if (vaqt < 10) {
//     salomlashish = "Hayrli tong";
// } else if   (vaqt  < 20) {
//     salomlashish = "Hayrli kun";
// } else {
//     salomlashish = "Hayrli kech";
// }


// Ternary operator - kod misollari

// 1 - yosh tekshirish: 

// let yosh = 20;

// //  if else usuli:
// if (yosh >= 18) {
//     matn = "Kattalar"
// } else {
//     matn = "Yoshlar";
// }

// //  Ternary usuli:
// let matn = (yosh >= 18)
//  ? "Kattalar" : "Yoshlar";
// console.log("Kattalar")

//  juft/toq son:

// let son = 7;
// let tur = (son % 2 === 0)
// ? "Juft" : "Toq";
// console.log(son)


// Chegirma hisoblash 

// let summa = 15000
// let chegirma = (summa > 100000)
// ? summa * 0.1 
// : 0;
// console.log(chegirma)

// Zanjirli ternary

// let ball = 75;
// let baho = (ball >= 90) ? "A"  
// : (ball >= 75) ? "B" 
// : (ball >= 60) ? "c" 
// : (D)
// console.log(baho)



//  KO'P ZANJIR O'QISHNI QIYINLASHTIRADI


// break- O'tib ketishning oldini oladi 

// let x = 1;
// switch(x)  {
//     case 1: 
//     console.log("Bir");

//     //  Break yo'q keyingiga o'tadi 
//     case 2:
//     console.log("Ikki");
//     break;
// }

// Default zahira holat:
// let matn; //    e'lon qilish kerak! 

// switch (new Date().getDay()) {
//     case 6:
//     matn = "bugun shanba"
//     break;
//     case 0:
//         matn = "Bugun yakshaba"
//         break;
//         default:
//             matn = "Dam olish kuni kutilmoqda";
// }
// console.log(matn);


    // Boolean () Funksiyalari va taqqoslari

    // Boolean()Funksiyasi;
    // console.log(Boolean(10 > 9));
    // console.log(Boolean(0));
    // console.log(Boolean(""));
    // console.log(Boolean("Salom"));
    // console.log(Boolean(null));


