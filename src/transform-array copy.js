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
      const previuos = result[i - 1];
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
          if (next !== undefined) {
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
          if (next !== undefined) {
            result.splice((i - 1), 0, previuos);
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

// console.log(`Получили: ${transform([   {    "John": "Smith"  }, {   "John": "Smith" } ])}, а нужно: ????`);
// console.log('------------------');
console.log(`Получили: ${transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])}, а нужно: [1, 2, 3, 1337, 1337, 1337, 4, 5]`);
// console.log('------------------');
// console.log(`Получили: ${transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])}, а нужно: [1, 2, 3, 4, 5]`);
// console.log('------------------');
// console.log(`Получили: ${transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])}, а нужно: [1, 2, 3, 1337, 4, 5]`);
// console.log('------------------');


// Infinity,Infinity,somebody,told,me,[object Object],somebody,told,me,Infinity,1,[object Object],
// somebody,told,me,somebody,told,me,Infinity,22,[object Object],1.233,ABC,[object Object],333,false,0,3.14,
// [object Object],somebody,told,me,22,false,3.14,somebody,told,me,0,333,somebody,told,me,GHI,[object Object],
// 3.14,GHI,DEF,1,GHI,false,false,3.14,NaN,NaN,NaN,Infinity,0,0,[object Object],GHI,0,NaN,1.233

// 2) control sequences work properly

// 1) Transform array
//        functional requirements
//          doesn't affect simple arrays:

//       AssertionError: expected [ Array(26) ] to deeply equal [ Array(50) ]
//       + expected - actual

//        [
//          Infinity
//          Infinity
//       +  [
//       +    "somebody"
//       +    "told"
//       +    "me"
//       +  ]
//       +  {
//       +    "John": "Smith"
//       +  }
//       +  [
//       +    "somebody"
//       +    "told"
//       +    "me"
//       +  ]
//          Infinity
//          1
//       +  {
//       +    "John": "Smith"
//       +  }
//       +  [
//       +    "somebody"
//       +    "told"
//       +    "me"
//       +  ]
//       +  [
//       +    "somebody"
//       +    "told"
//       +    "me"
//       +  ]
//          Infinity
//          22
//       +  {
//       +    "John": "Smith"
//       +  }
//          1.233
//       +  "ABC"
//       +  {
//       +    "0": "first"
//       +    "1": "second"
//       +    "length": 2
//       +  }
//          333
//       +  false
//          0
//          3.14
//       +  {
//       +    "0": "first"
//       +    "1": "second"
//       +    "length": 2
//       +  }
//       +  [
//       +    "somebody"
//       +    "told"
//       +    "me"
//       +  ]
//          22
//       +  false
//          3.14
//       +  [
//       +    "somebody"
//       +    "told"
//       +    "me"
//       +  ]
//          0
//          333
//       +  [
//       +    "somebody"
//       +    "told"
//       +    "me"
//       +  ]
//       +  "GHI"
//       +  {
//       +    "0": "first"
//       +    "1": "second"
//       +    "length": 2
//       +  }
//          3.14
//       +  "GHI"
//       +  "DEF"
//          1
//       +  "GHI"
//       +  false
//       +  false
//          3.14
//          NaN
//          NaN
//          NaN
//          Infinity
//          0
//          0
//       +  {
//       +    "0": "first"
//       +    "1": "second"
//       +    "length": 2
//       +  }
//       +  "GHI"
//          0
//          NaN
//          1.233
//        ]

//       at Context.<anonymous> (test\transform-array.test.js:48:24)
//       at Context.test (extensions\it-optional.js:18:14)
//       at processImmediate (internal/timers.js:456:21)

