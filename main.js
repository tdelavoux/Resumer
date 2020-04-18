$(function(){

	$('#sidebarCollapse').on('click', function () {
       $('#sidebar').toggleClass('active');
    });

    $('.tabulation').click(function(e){
		e.preventDefault();
		$('.tab-pane').hide();
		$('#' + $(this).attr('href')).fadeIn(600);
	});

});