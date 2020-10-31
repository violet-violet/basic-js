// Если около управляющей последовательности **нет элемента**, к которому она может быть применена, **она не делает ничего**. 

// if (((typeof next) === 'number') || ((typeof next) === 'object')) {


function transform(arr) {
  // console.log(`изначальный arr = ${arr}`);

  if (!Array.isArray(arr)) {
    throw new Error;

  } else {
    let result = arr.slice();
    // console.log(`result = ${result}`);

    for (let i = 0; i < result.length; i++) {
      const previous = result[i - 1];
      const current = result[i];
      const next = result[i + 1];
      // console.log(`current = ${current}`);

      switch (current) {
        case `--discard-next`:
          if (next !== undefined) {
            result.splice((i + 1), 1);
          }
          break;

        case `--discard-prev`:
          if (previous !== undefined) {
            result.splice((i - 1), 1);
            i--;
          }
          break;

        case `--double-next`:
          if (next !== undefined) {
            result.splice((i + 1), 0, next);
          }
          break;

        case `--double-prev`:
          if (previous !== undefined) {
            result.splice((i - 1), 0, previous);
            i++;
          }    
          break; 
      }  
    }
    // console.log(`result после switch = ${result}`);

    for (let i = 0; i < result.length; i++) {
      const item = result[i];

      if ((item === `--discard-next`) || (item === `--discard-prev`) || (item === `--double-next`) || (item === `--double-prev`)) {
        result.splice(i, 1);
        i--;
      }        
    }

    // console.log(`result после удаления команд = ${result}`);

    return result;
  }
};

console.log(`Получили: ${transform(['--discard-prev', 1, 2, 3])}, а нужно: [1, 2, 3]`);
console.log('------------------');
console.log(`Получили: ${transform(['--double-prev', 1, 2, 3])}, а нужно: [1, 2, 3]`);
console.log('------------------');
console.log(`Получили: ${transform([1, 2, 3, '--double-next'])}, а нужно: [1, 2, 3]`);
console.log('------------------');
console.log(`Получили: ${transform([1, 2, 3, '--discard-next'])}, а нужно: [1, 2, 3]`);
console.log('------------------');

