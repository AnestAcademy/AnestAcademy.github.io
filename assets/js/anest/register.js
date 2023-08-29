document.getElementById('time').value = new Date().toLocaleString();

var $formRegister = $('form#register-form');
var urlRegister = 'https://script.google.com/macros/s/AKfycbw-FFWNPgU8Z35l--_4EZ59PJZdkHUgdqGbCZQoB74XatNjZI6-/exec';

$('#submit-form-register').on('click', function(e) {
  e.preventDefault();

  if ($('#customSwitch').is(":checked")) {
    if ($('#full_name').val() === '' || $('#email').val() === '' || $('#mobile').val() === '') {
      $('#toastRegisterError').toast('show');
    } else {
      $.ajax({
        url: urlRegister,
        method: "GET",
        dataType: "json",
        data: $formRegister.serialize()
      }).success(
        $('#toastRegisterSuccess').toast('show')
      );

      $('#registerModal').modal('hide');
      $('#full_name').val('');
      $('#email').val('');
      $('#mobile').val('');
      $('#textarea1').val('');
    }
  } else {
    alert('Vui lòng xác nhận "Tôi đã đọc".');
  }
})