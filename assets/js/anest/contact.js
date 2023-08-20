document.getElementById('time').value = new Date().toLocaleString();

var $form = $('form#contact-form');
var url = 'https://script.google.com/macros/s/AKfycbx0aX5F-SeTaeW13f1pzKQwFgHW0bdhMYBkyACids4FsESBUlkfnqrM2HZ1h6YCHxR6nA/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();

  if ($('#name').val() === '' || $('#email').val() === '' || $('#phone-number').val() === '' || $('#content').val() === '') {
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

    $('#name').val('');
    $('#email').val('');
    $('#phone-number').val('');
    $('#content').val('');
  }
})