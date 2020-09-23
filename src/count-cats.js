const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;
  backyard.forEach(function(item) {
    item.forEach(function (el) {
      if (el === '^^') {
        cats++;
      }
    })
  });  
  return cats;
};