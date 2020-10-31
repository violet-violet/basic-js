const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;

  } else {
    let result = arr.slice();

    for (let i = 0; i < result.length; i++) {
      const previous = result[i - 1];
      const current = result[i];
      const next = result[i + 1];

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

    for (let i = 0; i < result.length; i++) {
      const item = result[i];

      if ((item === `--discard-next`) || (item === `--discard-prev`) || (item === `--double-next`) || (item === `--double-prev`)) {
        result.splice(i, 1);
        i--;
      }        
    }

    return result;
  }
};
