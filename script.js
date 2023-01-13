// TODO : DOM으로부터 필요한 엘리먼트
let elInputUsername = document.querySelector('#username');
let elFailureMessage = document.querySelector('.failure-message');

let elPasswordActivation1 = document.querySelector('.password')
let elPasswordActivation2 = document.querySelector('.password-retype')
let elInputPassword = document.querySelector('#password');
let elInputPasswordRetype = document.querySelector('#password-retype')
let elStrongPasswordMessage = document.querySelector('.strongpassword-message')
let elMismatchMessage = document.querySelector('.mismatch-message');

let elSignupButton = document.querySelector('.signup-btn')



// TODO : 아이디 유효성 검사
function isMoreThan4Length(value) {
  return value.length >= 4;
}

function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

elInputUsername.onkeyup = function () {
  if (elInputUsername.value === '') {
    elFailureMessage.classList.add('hide');
    elSignupButton.setAttribute('disabled', true);
  } else if (isMoreThan4Length(elInputUsername.value) && onlyNumberAndEnglish(elInputUsername.value)) {
    elFailureMessage.classList.add('hide');
    elPasswordActivation1.removeAttribute('disabled');
  } else {
    elFailureMessage.classList.remove('hide');
    elPasswordActivation1.setAttribute('disabled', true);
  }
}



// TODO : 비밀번호 일치 검사

function isMatch (password1, password2) {
  return password1 === password2;
} 

function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

elInputPassword.onkeyup = function() {
  if (elInputPassword.value === '') {
    elStrongPasswordMessage.classList.add('hide');
    elSignupButton.setAttribute('disabled', true);
  } else if (strongPassword(elInputPassword.value)) {
    elStrongPasswordMessage.classList.add('hide');
    elPasswordActivation2.removeAttribute('disabled');
  } else {
    elStrongPasswordMessage.classList.remove('hide');
    elPasswordActivation2.setAttribute('disabled', true);
  }
}

elInputPasswordRetype.onkeyup = function () {
  if (elInputPasswordRetype.value === '') {
    elMismatchMessage.classList.add('hide');
    elSignupButton.setAttribute('disabled', true);
  } else if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    elMismatchMessage.classList.add('hide');
    elSignupButton.removeAttribute('disabled')
  } else {
    elMismatchMessage.classList.remove('hide');
    elSignupButton.setAttribute('disabled', true);
  }
}