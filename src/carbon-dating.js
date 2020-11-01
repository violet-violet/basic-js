const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof(sampleActivity) !== 'string') || !(parseFloat(sampleActivity) > 0) || (parseFloat(sampleActivity) < 8999)) {
    return false;
  } else {
    sampleActivity = parseFloat(sampleActivity);
    const rateConstantForTheReaction = Math.log(2) / HALF_LIFE_PERIOD;
    const date = Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstantForTheReaction;

    if (date > 0) {
        return Math.ceil(date);    
    } else {
        return false;
      }
  }
};
