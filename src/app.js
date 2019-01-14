const FormView = require('./views/form_view.js')
const ResultView = require('./views/result_view.js')
const PrimeChecker = require('./models/prime_checker.js')

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded')

  const formView = new FormView();
  formView.bindingEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindingEvents();

  const resultView = new ResultView();
  resultView.bindingEvents();





});
