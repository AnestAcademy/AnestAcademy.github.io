document.getElementById('time-contact').value = new Date().toLocaleString();

const urlContact = 'https://script.google.com/macros/s/AKfycbx0aX5F-SeTaeW13f1pzKQwFgHW0bdhMYBkyACids4FsESBUlkfnqrM2HZ1h6YCHxR6nA/exec';
const $formContact = $('form#contact-form');

const isFormContactValid = () => {
  return $('#name-contact').val() !== '' &&
    $('#email-contact').val() !== '' &&
    $('#phone-number-contact').val() !== '' &&
    $('#content-contact').val() !== '';
};

const resetContactForm = () => {
  $('#name-contact').val('');
  $('#email-contact').val('');
  $('#phone-number-contact').val('');
  $('#content-contact').val('');
};

const submitContactForm = () => {
  $('#loading-spinner').show();

  $.ajax({
    url: urlContact,
    method: "GET",
    dataType: "json",
    data: $formContact.serialize(),
    success: function(response) {
      $('#toastContactSuccess').toast('show');
    },
    error: function(xhr, status, error) {
      $('#toastAPIError').toast('show');
      console.error('Error:', status, error);
    },
    complete: function() {
      $('#loading-spinner').hide();
    }
  });

  resetContactForm();
};

$('#submit-form-contact').on('click', function(e) {
  e.preventDefault();

  if (!isFormContactValid()) {
    $('#toastFormInvalid').toast('show');
  } else {
    submitContactForm();
  }
});