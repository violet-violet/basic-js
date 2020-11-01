// Ваша задача — реализовать класс `DepthCalculator` с методом `calculateDepth`, который принимает массив и возвращает его **глубину**.
// Метод `calculateDepth` должен проходить полученный массив **рекурсивно**. 
// Глубина **плоского** массива — 1. 
// Метод должен корректно работать с массивами, не содержащими элементов или содержащими пустые массивы.

// Например:
// `const depthCalc = new DepthCalculator();`
// `const { calculateDepth } = depthCalc;`

// `calculateDepth([1, 2, 3, 4, 5])` => `1`

// `calculateDepth([1, 2, 3, [4, 5]])` => `2`

// `calculateDepth([[[]]])` => `3`

class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
            depth = Math.max(depth, this.calculateDepth(arr[i]));
      }
      
      depth++;
    }
    
    return depth;
  }
};

// const depthCalc = new DepthCalculator();
// const { calculateDepth } = depthCalc;

// console.log(calculateDepth([1, 2, 3, 4, 5]), '1');

// // console.log(calculateDepth([1, 2, 3, [4, 5]]), '2');

// console.log(calculateDepth([[[]]]), '3');
