var colors = ['red', 'blue', 'black', 'purple'];

var getRandomColor = function() {
  return colors[Math.floor(4 * Math.random())];
};

var addItem = function() {
    // 1. read the box
    var inputText = $('#input').val();
    // 2. make the <li>
    var item = $('<li />').text(inputText).css('color', getRandomColor());

    item.click(function() {
      item.toggleClass('highlighted');
    });

    $('#list').append(item);

    $('#input').val('');

    $('#input').focus();
};

$(document).ready(function() {
  $('#add-item').click(function() {
    addItem();
  });

  var ENTER_KEY = 13;
  $('#input').keypress(function(event) {
    if (event.which === ENTER_KEY) {
      addItem();
    }
  });

  $('#remove-item').click(function() {
    $('#list').children().last().remove();
  });
});
