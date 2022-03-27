document.getElementById('time').value = new Date().toLocaleString();

var $form = $('form#contact-form');
var url = 'https://script.google.com/macros/s/AKfycbxB7kD-wLwWCbpwDEUcHjC3Oj5Vek-9Qa7Se0SvDWvYpov1DaTx/exec';

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