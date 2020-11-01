const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  } else {
    let result = members.reduce((acc, current) => {
      if ((typeof current) === 'string') {
        
        let i = 0;
        while (current[i] === ' ') {
          i++
        }

        acc.push(current[i].toUpperCase());
        return acc;        
      } else {
        return acc;
      }
    }, []);

    result = result.sort().join('');
    return result;
  }  
   
};
