// Ваша задача — реализовать функцию `transform(arr)`, которая принимает массив (тип `array`) и возвращает 
// **преобразованный** массив, основываясь на **управляющих последовательностях**, которые содержит `arr`.  

// **Управляющие последовательности** — это определенные строковые элементы вышеупомянутого массива:
// * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
// * `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
// * `--double-next` удваивает следующий за ней элемент исходного массива в преобразованном массиве.
// * `--double-next` удваивает предшествующий ей элемент исходного массива в преобразованном массиве.

// Например:
// `transform([1, 2, 3, '--double-next', 4, 5])` => `[1, 2, 3, 4, 4, 5]`
// `transform([1, 2, 3, '--discard-prev', 4, 5])` => `[1, 2, 4, 5]`

// Функция не должна изменять исходный массив. 
// Управляющие последовательности применяются **последовательно, слева направо**. 
// Управляющие последовательности **не попадают** в преобразованный массив. 
// Управляющие последовательности в исходном массиве не встречаются подряд (не следуют одна за другой). 
// Если около управляющей последовательности **нет элемента**, к которому она может быть применена, **она не делает ничего**. 
// Функция должна выбросить ошибку, если `arr` не является массивом. 


function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error;

  } else {
    let result = arr.slice();

        result = result.map((current, index, array) => {
          let previuos = array[index - 1];
          let next = array[index + 1];   
           
          switch (current) {
            case `--discard-next`:
              if ((typeof next) === 'number') {
                array.splice((index + 1), 1);
              }
              break;

            case `--discard-prev`:
              if ((typeof previuos) === 'number') {
                array.splice((index - 1), 1);
              }
              break;

            case `--double-next`:
              if ((typeof next) === 'number') {
                array.splice((index + 1), 0, next);
              }
              break;

            case `--double-prev`:
              if ((typeof previuos) === 'number') {
                array.splice((index - 1), 0, previuos);
              }    
              break; 
          }
      return current;
    });

    return result;  
  }
};

console.log(`Получили: ${transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])}, а нужно: [1, 2, 3, 4, 5]`);
console.log('------------------');
// console.log(`Получили: ${transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])}, а нужно: [1, 2, 3, 1337, 1337, 1337, 4, 5]`);
// console.log('------------------');
// console.log(`Получили: ${transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])}, а нужно: [1, 2, 3, 4, 5]`);
// console.log('------------------');
// console.log(`Получили: ${transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])}, а нужно: [1, 2, 3, 1337, 4, 5]`);
// console.log('------------------');
