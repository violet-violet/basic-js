const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options === undefined) {
    return str;
  } else {
    options.repeatTimes = (options.repeatTimes === undefined) ? options.repeatTimes = 1 : options.repeatTimes = options.repeatTimes;
    options.separator = (options.separator === undefined) ? options.separator = '+' : options.separator = options.separator;
    options.additionSeparator = (options.additionSeparator === undefined) ? options.additionSeparator = '|' : options.additionSeparator = options.additionSeparator;
    options.additionRepeatTimes = (options.additionRepeatTimes === undefined) ? options.additionRepeatTimes = 1 : options.additionRepeatTimes = options.additionRepeatTimes;
    options.addition = (options.addition === undefined) ? options.addition = '' : options.addition = options.addition;

    let repeatablePartOfAddition = (options.additionSeparator + options.addition).repeat(options.additionRepeatTimes - 1);
    let fullAddition = options.addition + repeatablePartOfAddition;  

    let fragmentBasic = options.separator + str + fullAddition;
    let fragmentFirst = str + fullAddition;
    const result = fragmentFirst + fragmentBasic.repeat(options.repeatTimes - 1);
    return result;
  }
};
  