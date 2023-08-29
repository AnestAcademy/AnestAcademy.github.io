document.getElementById('time-contact').value = new Date().toLocaleString();

var $formContact = $('form#contact-form');
var urlContact = 'https://script.google.com/macros/s/AKfycbx0aX5F-SeTaeW13f1pzKQwFgHW0bdhMYBkyACids4FsESBUlkfnqrM2HZ1h6YCHxR6nA/exec';

$('#submit-form-contact').on('click', function(e) {
  e.preventDefault();

  if ($('#name-contact').val() === '' || $('#email-contact').val() === '' || $('#phone-number-contact').val() === '' || $('#content-contact').val() === '') {
    $('#toastContactError').toast('show');
  } else {
    $.ajax({
      url: urlContact,
      method: "GET",
      dataType: "json",
      data: $formContact.serialize()
    }).success(
      $('#toastContactSuccess').toast('show')
    );

    $('#name-contact').val('');
    $('#email-contact').val('');
    $('#phone-number-contact').val('');
    $('#content-contact').val('');
  }
})