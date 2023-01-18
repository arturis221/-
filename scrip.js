
// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные:
// Функции:
// Встроенные функции:
// Аргументы:
// Параметры:
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
/*let txt = 'JS';
console.log(txt.toLowerCase())

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
/*txt1 = 'я люблю JS!';
console.log(txt1.substr(2,8));
console.log(txt1.substring(2,10));
console.log(txt1.slice(2,10));*/

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.

/*let name ='я люблю JS!';
console.log(name.indexOf ('люблю'));*/

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

// let txt = "прошлое";
//  let  n = 4;
//  let result = 0;
// if(n<txt.length){
//  result = txt.substr(0,4)
//  console.log(result + '...')
//  }else {
//      result=txt;
//          console.log(result)
//  }

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.

// let txt = 'Я-люблю-JS!';
// console.log(txt.replace(/-/g, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

// let txt2 = 'я люблю JS';
// console.log(txt2.split(' '))

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.

// let txt21 = 'привет мир';
// console.log(txt21.split(''))

 
