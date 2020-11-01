// Ваша задача — реализовать функцию `getSeason(date)`, которая принимает объект `Date` и возвращает соответствующую ему пору года. Пора года должна быть типа `string`.
// весна — spring, лето — summer, осень — autumn (fall), зима — winter.
// Если аргумент `date` не был передан, функция должна вернуть строку `'Unable to determine the time of year!'` 
// Если аргумент `date` **некорректный**, функция должна выбросить ошибку (`Error`).

// Тссс! Среди аргументов, которые попадают в эту функцию, затесался вражеский агент.
// Он руководствуется знаменитой поговоркой: "Если это выглядит как **утка**, плавает как **утка**, и крякает как **утка**, тогда это, скорее всего, **утка** 
// (и неважно, что это **на самом деле**)". Он **искусно маскируется** под настоящую дату (`date`), но умелый javascript-разработчик может поймать его и выбросить ошибку как раз вовремя!

// Например:
// `const springDate = new Date(2020, 02, 31)`
// `getSeason(springDate) => 'spring'`

function getSeason(date) {
  // console.log(typeof data);
  if (arguments.length === 0) {
    return   'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) {
    throw new Error();
  } else {
    const month = date.getMonth();

    if ((month < 2) || (month === 11)) {
      return 'winter';
    } else if (month < 5) {
      return 'spring';
    } else if (month < 8) {
      return 'summer';
    } else {
      return 'fall';
    }  
  }
};

console.log(`Получили: `, getSeason(new Date(676, 6, 29, 12, 31, 12, 934)), 'А должны были: summer');
console.log(`Получили: `, getSeason(new Date(1579, 5, 19, 20, 28, 48, 640)), 'А должны были: summer');
console.log(`Получили: `, getSeason(new Date(1841, 1, 31, 17, 7, 25, 884)), 'А должны были: spring');
console.log(`Получили: `, getSeason(new Date(1682, 0, 28, 4, 2, 55, 833)), 'А должны были: winter');
console.log(`Получили: `, getSeason(new Date(980, 3, 24, 13, 19, 31, 268)), 'А должны были: spring');
console.log(`Получили: `, getSeason(new Date(2265, 2, 2, 2, 54, 27, 502)), 'А должны были: spring');
console.log(`Получили: `, getSeason(new Date(1908, 2, 30, 14, 23, 26, 831)), 'А должны были: spring');
console.log(`Получили: `, getSeason(new Date(842, 4, 24, 14, 5, 45, 70)), 'А должны были: spring');
console.log(`Получили: `, getSeason(new Date(1072, 8, 29, 18, 59, 55, 281)), 'А должны были: autumn|fall');


