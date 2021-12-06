$(document).ready(function(){
//loading content of the home page

$('main').load('content.php #home');

//checking id of the links

$('a').click(function(){

    $('main').html('<div class="load"><img src="img/loader.gif" alt="loading"> </div>');
//removing active class from all links
$('a').removeClass('active');
$(this).addClass('active');

var ClickedLink = $(this).attr('id');
$('main').load('content.php #' + ClickedLink);
});

});