$(document).ready(function() {

  // append text to list
  var appendTextString = function(text) {
    $('#list').append('<li>' + text + '</li>');
  };

  var appendText = function(text) {
    var item = $('<li />').text(text);
    $('#list').append(item);
  };

  // append input box text to list on button click
  $('#add-item').click(function() {
    var inputText = $('#input').val();
    appendText(inputText);
  });

  // but the problem is, text doesn't go away! change appendText function
  var appendText = function(text) {
    $('#list').append($('<li>' + text + '</li>'));
    // +++++++ clear the input
    $('#input').val('');
  }

  // now, let's make the ENTER key work.
  // append input box text to list on enter key
  var ENTER_KEY = 13;
  $('#input').keypress(function(e) {
    if (e.which == ENTER_KEY) {
      var inputText = $('#input').val();
      appendText(inputText);
    }
  });

  // remove items from list when remove button clicked
  $('#remove-item').click(function() {
    $('#list').children().last().remove();
  });

  // sanitize empty inputs
  var appendText = function(text) {
    // check if input is empty
    if (text.trim() != '') {
      $('#list').append($('<li>' + text + '</li>'));
      $('#input').val('');
    }
  }

  // add highlighting on click
  var appendText = function(text) {
    if (text.trim() != '') {
      var item = $('<li>' + text + '</li>');
      // add on click handler
      item.click(function() {
        item.css('background-color', 'yellow');
      });
      $('#list').append(item);
      $('#input').val('');
    }
  }
});
