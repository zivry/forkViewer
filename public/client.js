// client-side js
// run by the browser each time your view template is loaded

// protip: you can rename this to use .coffee if you prefer

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

// $("form").submit(function(){
//     // forks = request(https://fierce-bat.hyperdev.space/forks/angular/angular);
//   $('#myTable tr:last').after("<tr>username</tr>\
//     <tr>url</tr> \
//     <tr>watchers</tr>\
//     <tr>stars</tr>\
//     <tr>forks_count</tr>\
//     <tr>forks</tr>\
//     <tr>updatedAt</tr>"); 
//     // forks.data.forEach(function(fork)
//     // {
//     //   var row = '';
//     //   fork.forEach(function(col)
//     //   {
//     //     row += '<tr>' + col +'</tr>';                          
//     //   });
//     //   $('#myTable tr:last').after(row);
//     // });
// });
var getForks = function() 
{
   
};
$(function() {
  console.log('hello world :o');
 

  $('form').submit(function(event) {
    var rep = $('#reporistory').val();
    console.log(rep);
    var u = "https://fierce-bat.hyperdev.space//forks/" + rep;
     
     
    $.ajax({
        url: u
    }).then(function(obj) {
      console.log("called url: " + u);
     
      for (var i = 0; i < obj.data.length; i++) {
        // console.dir(obj.data[i]);   
        var fork = obj.data[i];
        $('#myTable tr:last').after("<tr> \
        <td><a href=" + fork.url + ">" + fork.login + "<a></td>\
        <td>" + fork.watchers + "</td>\
        <td>" + fork.stars + "</td>\
        <td>" + fork.forks_count + "</td>\
        <td>" + fork.forks + "</td>\
        <td>" + fork.updated_at + "</td><tr>"); 
        }
    });
   event.preventDefault();
   
   
  });

});
