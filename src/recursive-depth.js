const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
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
