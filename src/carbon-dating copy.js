// Углеродное датирование
// Для определения возраста археологических находок широко применяется радиоизотопный анализ. Один из его видов — радиоуглеродный анализ.
// Примерный возраст образца рассчитывается при помощи измерения соотношения между современной активностью изотопа С14 и активностью этого же изотопа в образце.

// О расчетах
// Вы можете использовать формулу из статьи по ссылке выше. 0.693 — это приблизительное значение натурального логарифма двойки.
// Ваша задача — реализовать функцию dateSample(sampleActivity), которая рассчитывает примерный возраст образца (в годах). Пожалуйста, используйте 
// данные MODERN_ACTIVITY и HALF_LIFE_PERIOD.
// Параметр функции sampleActivity имеет тип string. Рассчитаный возраст образца должен иметь тип number. Возраст должен быть целочисленным. 
// Возраст должен округлен вверх (при получении целого числа). В случае неправильного типа входного параметра или несоответствующем значении активности, 
// или отсутствии аргумента функция должна вернуть false.

// Например:
// dateSample('1') => 22387 (либо 22392, в зависимости от используемой формулы)
// dateSample('WOOT!') => false

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

function dateSample(sampleActivity) {
    if ((typeof(sampleActivity) !== 'string') || !(parseFloat(sampleActivity) > 0) || (parseFloat(sampleActivity) < 8999)) {
        return false;
    } else {
        sampleActivity = parseFloat(sampleActivity);
        console.log('sampleActivity = ', sampleActivity);
        const rateConstantForTheReaction = Math.log(2) / HALF_LIFE_PERIOD;
        console.log('rateConstantForTheReaction = ', rateConstantForTheReaction);
        const date = Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstantForTheReaction;

        if (date > 0) {
            console.log('date = ', date);
            console.log('Math.floor(date) = ', Math.ceil(date));
            return Math.ceil(date);    
        } else {
            return false;
          }
      }
};

console.log(dateSample('9000'), 'false');
console.log(dateSample('0'), 'false');
console.log(dateSample('-5'), 'false');
console.log(dateSample('15.1'), 'false');
console.log(dateSample('-55.8'), 'false');


