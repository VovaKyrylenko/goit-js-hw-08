const { drop } = require('lodash');
var _ = require('lodash');

const KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const emailRef = document.getElementsByName('email')[0];
const messageRef = document.getElementsByName('message')[0];

let object = {};
object.email =
  JSON.parse(localStorage.getItem(KEY)) === null
    ? ''
    : JSON.parse(localStorage.getItem(KEY)).email;
object.message =
  JSON.parse(localStorage.getItem(KEY)) === null
    ? ''
    : JSON.parse(localStorage.getItem(KEY)).message;
emailRef.value = object.email;
messageRef.value = object.message;

formRef.addEventListener(
  'input',
  _.throttle(evt => {
    if (evt.target.name === 'email') {
      object.email = evt.target.value;
      localStorage.setItem(KEY, JSON.stringify(object));
    }
    if (evt.target.name === 'message') {
      object.message = evt.target.value;
      localStorage.setItem(KEY, JSON.stringify(object));
    }
  }, 500)
);

formRef.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(object);
  localStorage.clear();
  emailRef.value = '';
  messageRef.value = '';
  object = { email: '', message: '' };
});
