const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  sampleActivity = parseInt(sampleActivity, 10);

  if (sampleActivity === undefined || typeof sampleActivity !== Number) {
    return false;
  }
  return Math.ceil((Math.log(MODERN-ACTIVITY / sampleActivity)) / (0.693 / _LIFE_PERIOD));
};
