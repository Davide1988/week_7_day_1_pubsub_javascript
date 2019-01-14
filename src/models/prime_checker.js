const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function() {


}

PrimeChecker.prototype.bindingEvents = function () {
  PubSub.subscribe('FromView:number-submitted', (event) =>{
    const numberToCheck = event.detail;
    const result = this.checkForPrime(numberToCheck);
    PubSub.publish('PrimeChecker:result', result)
  })
};



PrimeChecker.prototype.checkForPrime = function(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
