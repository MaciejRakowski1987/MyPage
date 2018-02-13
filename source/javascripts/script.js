$().ready(function() {
  $('#navBar').on('click', function(event) {
    event.preventDefault();
    $('#sidebar').toggleClass('sidebar--visible');
  })
})

$().ready(function() {
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
})


$().ready(function() {
  $('#fullpage').fullpage({
  	menu: '#menu',
	navigation: true,
    onLeave: function(index, nextIndex, direction) {
    }
  });
});

$(document).ready(function() {
    $('.main').addClass('fadeIn');
});