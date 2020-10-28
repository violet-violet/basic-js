const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

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
