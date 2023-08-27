document.getElementById('time').value = new Date().toLocaleString();

var $form = $('form#contact-form');
var url = 'https://script.google.com/macros/s/AKfycbx0aX5F-SeTaeW13f1pzKQwFgHW0bdhMYBkyACids4FsESBUlkfnqrM2HZ1h6YCHxR6nA/exec';

$('#submit-form-contact').on('click', function(e) {
  e.preventDefault();

  if ($('#name-contact').val() === '' || $('#email-contact').val() === '' || $('#phone-number-contact').val() === '' || $('#content-contact').val() === '') {
    $('#toastError').toast('show');
  } else {
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serialize()
    }).success(
      $('#toastSuccess').toast('show')
    );

    $('#name-contact').val('');
    $('#email-contact').val('');
    $('#phone-number-contact').val('');
    $('#content-contact').val('');
  }
})