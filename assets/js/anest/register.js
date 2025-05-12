// Register form submission
document.getElementById('time').value = new Date().toLocaleString();

const urlRegister = 'https://script.google.com/macros/s/AKfycbw-FFWNPgU8Z35l--_4EZ59PJZdkHUgdqGbCZQoB74XatNjZI6-/exec';
const $formRegister = $('form#register-form');

const isFormRegisterValid = () => {
  return $('#full_name').val() !== '' && $('#email').val() !== '' && $('#mobile').val() !== '';
};

const resetRegisterForm = () => {
  $('#full_name').val('');
  $('#email').val('');
  $('#mobile').val('');
  $('#textarea1').val('');
};

const submitRegisterForm = () => {
  $('#loading-spinner').show();

  $.ajax({
    url: urlRegister,
    method: "GET",
    dataType: "json",
    data: $formRegister.serialize(),
    success: function(response) {
      $('#toastRegisterSuccess').toast('show');
    },
    error: function(xhr, status, error) {
      $('#toastAPIError').toast('show');
      console.error('Error:', status, error);
    },
    complete: function() {
      $('#loading-spinner').hide();
    }
  });

  $('#registerModal').modal('hide');
  resetRegisterForm();
};

$('#submit-form-register').on('click', function(e) {
  e.preventDefault();

  if ($('#customSwitch').is(":checked")) {
    if (!isFormRegisterValid()) {
      $('#toastFormRegisterInvalid').toast('show');
    } else {
      submitRegisterForm();
    }
  } else {
    alert('Vui lòng xác nhận "Tôi đã đọc".');
  }
})