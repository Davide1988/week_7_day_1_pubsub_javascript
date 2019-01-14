const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(){


}

ResultView.prototype.bindingEvents = function () {
  PubSub.subscribe('PrimeChecker:result', (event) => {
    const outcome = event.detail
    this.displayResult(outcome)
  })
};


ResultView.prototype.displayResult = function (result) {

  const resultView = document.querySelector('#result')
  resultView.textContent = result;
};

module.exports = ResultView;
