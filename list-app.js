$(document).ready(function() {
  $('#button').click(function() {
    $('#list').append('<li>' + $('#input').val() + '</li>');
  });
});