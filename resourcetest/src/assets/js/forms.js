/*class:css id:javascript name:PHP action:PHP method:PHP value
	Do not include ID/name/action/method/value if not used. 
	As of 10/27/2015 they are only used on form pages and ID on intro for animation.js
	Class is for DIVS ONLY. p,a,nav,fieldset and any other specialty divs don't need defining. */

$(document).ready(function(){	

	hiddenDisable();	
	
	$('#hide_1_yes').click(function(){
        $('#hidden_1').fadeIn();
		$('#hidden_1').find(':input').prop('disabled', false);	
    });
	$('#hide_1_no').click(function(){
        $('#hidden_1').fadeOut();
		$('#hidden_1').find(':input').prop('disabled', true);	
    });
	
	$('#hide_2_yes').click(function(){
        $('#hidden_2').fadeIn();
		$('#hidden_2').find(':input').prop('disabled', false);			
    });
	$('#hide_2_no').click(function(){
        $('#hidden_2').fadeOut();
		$('#hidden_2').find(':input').prop('disabled', true);		
    });
	
	$('#hide_3_yes').click(function(){
        $('#hidden_3').fadeIn();
		$('#hidden_3').find(':input').prop('disabled', false);		
    });
	$('#hide_3_no').click(function(){
        $('#hidden_3').fadeOut();
		$('#hidden_3').find(':input').prop('disabled', true);		
    });

	$('#content-form').submit(function(s) {
		//Cancel form submission
		s.preventDefault();
		
		$('#content-hidden').addClass('visible').removeClass('hidden');
		showValues();
		
		//Goto top of template
		$('html,body').animate({scrollTop: $('#content-hidden').offset().top - 30}, 'slow');
		
		formSubmit();		
	});
	
	$('#button-reset').click(function(){
        $('#content-form')[0].reset();	
		hiddenDisable();
		
		//Return to top of form
		$('html,body').animate({scrollTop: $('#content-form').offset().top - 200}, 'slow');
	});

});


function showValues() {
	//Disable unfilled fields so they don't show up.
	$('#content-form').find(':input').filter(function(){return !this.value;}).prop('disabled', true);
    var fields = $(':input').serializeArray();
    $('#template').empty();
    jQuery.each(fields, function(i, field) {
		$('#template').append(field.value + '<br>');								
    });
	//enable fields so things reset nicely
	$('#content-form').find(':input').prop('disabled', false);
}

function hiddenDisable() {
	//Hide content-hidden template 
	$('#content-hidden').removeClass('visible').addClass('hidden');
	
	//Disable all inputs in hidden_X divs from the start	
	$('#hidden_1').find(':input').prop('disabled', true);
	$('#hidden_1').fadeOut();
	
	$('#hidden_2').find(':input').prop('disabled', true);
	$('#hidden_2').fadeOut();
	
	$('#hidden_3').find(':input').prop('disabled', true);
	$('#hidden_3').fadeOut();
}

function formSubmit(){
	$.ajax({
        type: 'POST',
        url: 'form1_post.php',
        data: data,
        success: success,
        dataType: dataType
    });
}

