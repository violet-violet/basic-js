const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return   'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
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
