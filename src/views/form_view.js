const PubSub = require('../helpers/pub_sub.js');

const FormView = function() {

}

FormView.prototype.bindingEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const number = event.target.number.value;
    PubSub.publish('FromView:number-submitted', number)
  })
};

module.exports = FormView;
