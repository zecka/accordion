$(document).ready( function() {
	toggle();
});
function toggle(){
	$(".toggle-item.active").find('.toggle-content').slideDown();
	$('.toggle-item h2').on('click', function(){
		var parent=$(this).closest('.toggle-item');
		// CLOSE OTHER TOGGLE ITEMS CONTENT IF IS AN ACCORDEON
		if($(this).closest('.toggles').data('accordeon')!=undefined){
			$(".toggle-item.active").not(parent).find('.toggle-content').slideUp();
			$('.toggle-item.active').not(parent).removeClass('active');
		}
		// OPEN THIS TOGGLE ITEM CONTENT
		$(parent).find('.toggle-content').slideToggle(400);
		$(parent).toggleClass('active');
	
		
	});
}