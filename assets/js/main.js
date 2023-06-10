function createMain() {
  $('body').append('<main></main>');
}

function formContainer() {
  $('main').append('<form class="form__container"><h1>Page element example - form</h1></form>');
}

function createFormName() {
  $('.form__container').append('<div class="form form__name"></div>');

  $('.form__name').append('<label for="name">Name</label>' +
    '<input type="text" name="name" placeholder="Entry your name">');
}

function createFormPassword() {
  $('.form__container').append('<div class="form form__password"></div>');

  $('.form__password').append('<label for="password">Password</label>' +
    '<input type="password" name="password" placeholder="Entry your password">');
}

function createFormEmail() {
  $('.form__container').append('<div class="form form__email"></div>');

  $('.form__email').append('<label for="email">Email</label>' +
    '<input type="email" name="email" placeholder="Entry your email">');
}

function createFormBtn() {
  $('.form__container').append('<div class="form__btn-container"></div>');

  $('.form__btn-container').append('<p class="form__btn-alert">You need to agree with policy privacy, to save form</p>' +
    '<button class="form__btn" id="submit" type="submit" disabled>Save</button>')
    .append('<button class="form__btn" type="reset">Reset</button>');
}

function appendPrivacyPolicy() {
  $('.form__privacy').appendTo('.form__container');
}

function navigation() {
  $('#first-nav').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#first').offset().top,
    }, 300);
  });

  $('#second-nav').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#second').offset().top,
    }, 300);
  });

  $('#third-nav').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#third').offset().top,
    }, 300);
  });

  $('#fourth-nav').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#fourth').offset().top,
    }, 300);
  });

  $('.btn').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 300);
  });
}

function checked() {
  $('#read').on('click', function () {
    if ($('#read').prop('checked') === true) return $('#submit').prop('disabled', false);
    return $('#submit').prop('disabled', true);
  });
}

function slideToggle() {
  $('.form__privacy-main').on('click', function () {
    $(this).next().slideToggle(400);
  });
}

function initialise() {
  createMain();
  formContainer();
  createFormName();
  createFormPassword();
  createFormEmail();
  createFormBtn();
  appendPrivacyPolicy();
  navigation();
  checked();
  slideToggle();
}

initialise();