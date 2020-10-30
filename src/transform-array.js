const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
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
