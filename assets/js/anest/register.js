document.getElementById('time').value = new Date().toLocaleString();

var $form = $('form#register-form');
var url = 'https://script.google.com/macros/s/AKfycbw-FFWNPgU8Z35l--_4EZ59PJZdkHUgdqGbCZQoB74XatNjZI6-/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();

  if ($('#customSwitch').is(":checked")) {
    if ($('#full_name').val() === '' || $('#email').val() === '' || $('#mobile').val() === '' || $('#k').val() === 'none') {
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

      $('#registerModal').modal('hide');
      $('#full_name').val('');
      $('#email').val('');
      $('#mobile').val('');
      $('#k').prop('selectedIndex', 0);
      $('#textarea1').val('');
      $('#textarea2').val('');
    }
  } else {
    alert('Vui lòng xác nhận "Tôi đã đọc".');
  }
})