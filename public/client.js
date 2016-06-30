// client-side js
// run by the browser each time your view template is loaded

// protip: you can rename this to use .coffee if you prefer

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  $.get('/forks/:owner/:repo'), function(forks)
  {
    forks.data.forEach(function(fork)
    {
      var row = '';
      fork.forEach(function(col)
      {
        row += '<tr>' + col +'</tr>';                          
      });
      $('#myTable tr:last').after(row);
    });
  }
  $.get('/dreams', function(dreams) {
    
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
   
   
  });

});
