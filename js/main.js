function formContainer() {
  $('body').append('<form class="form__container"><h1>Lorem ipsum dolor sit amet</h1></form>');
}

function createFormName() {
  $('.form__container').append('<div class="form__name"></div>');

  $('.form__name').append('<label for="name">Name</label>' +
    '<input type="text" name="name" placeholder="Entry your name">');
}

function createFormPassword() {
  $('.form__container').append('<div class="form__password"></div>');

  $('.form__password').append('<label for="password">Password</label>' +
    '<input type="password" name="password" placeholder="Entry your password">');
}

function createFormEmail() {
  $('.form__container').append('<div class="form__email"></div>');

  $('.form__email').append('<label for="email">Email</label>' +
    '<input type="email" name="email" placeholder="Entry your email">');
}

function createFormBtn() {
  $('.form__container').append('<button type="submit" disabled>Save</button>')
    .append('<button type="reset">Reset</button>');
}

function createPrivacyPolicy() {
  $('.form__privacyPolicy').appendTo('.form__container');
}


function initialise() {
  formContainer();
  createFormName();
  createFormPassword();
  createFormEmail();
  createFormBtn();
  createPrivacyPolicy();
}

initialise();
