
var $tab;
var $link;
var $panel;

$('.tabs-list').each(function() { //enter to tabs list
$tab= $(this).find('li.activea'); //search li active
$link=$tab.find('a'); //search a within active
$panel=$($link.attr('href')); //grab active a/href value

$(this).on('click','a.tab-control',function(e){ 
	e.preventDefault();
	var myId= $(this).attr('href'); // this value= existent element with the same name

	if ($(myId).is('.activea')) return;

	if (!$(myId).is('.activea')) {
		$panel.removeClass('activea');
		$tab.removeClass('activea');

		$panel = $(myId).addClass('activea');
		$tab=$(this).parent().addClass('activea'); //add .active to parent (li)
	}
});
});
jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
    function fullscreen(){
        jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }
  
    fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});

$('ul.nav').find('a').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var $anchor = $(target).offset();
    $('body').stop().animate({
        scrollTop: $anchor.top
    }, 'slow');
});