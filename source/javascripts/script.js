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