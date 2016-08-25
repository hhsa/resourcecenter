$(document).ready(function(){	
	// Disable and hide hidden divs on page load
	hiddenDisable();	
	
	// Check dropdowns for values to display hidden divs. Uses "select" to drab all inputs with that method
	$('select').change(function(){
		if ($('option:selected', this).val() === 'Other'){
			$(this).parent().next('#hidden-by-dropdown').fadeIn().find(':input').prop('disabled', false);			
		}
		else {
			$(this).parent().next('#hidden-by-dropdown').fadeOut().find(':input').prop('disabled', true);
		}
	});

	// Check radio buttons/checkboxes for values to display hidden divs. Uses "input" to grab all checkable items, uses id yes/no-show to check which value to show on
	$('input').click(function(){
		if ($(this).val() === 'no' && $(this).attr('id') === "no-show"){
			$(this).parent().nextAll('#hidden-by-click').fadeIn().find(':input').prop('disabled', false);
		}
		else {
			$(this).parent().nextAll('#hidden-by-click').fadeOut().find(':input').prop('disabled', true);
		}

	});

	$('input').click(function(){
		if ($(this).val() === 'yes' && $(this).attr('id') === "yes-show"){
			$(this).parent().nextAll('#hidden-by-click').fadeIn().find(':input').prop('disabled', false);
		}
		else {
			$(this).parent().nextAll('#hidden-by-click').fadeOut().find(':input').prop('disabled', true);
		}

	});


	// Beat it into submission
	$('#content-form').submit(function(s) {
		s.preventDefault();
		submitButton();
	});

	resetButton();
});

// On submit click
function submitButton() {
		$('#content-hidden').addClass('visible').removeClass('hidden');
		showValues();
		
		// Goto top of template
		$('html,body').animate({scrollTop: $('#content-hidden').offset().top - 30}, 'slow');
}

// On reset button click
function resetButton() {
$('#button-reset').click(function(){
        $('#content-form')[0].reset();	
		hiddenDisable();
		
		// Return to top of form
		$('html,body').animate({scrollTop: $('#content-form').offset().top - 200}, 'slow');
	});
}


// Get and display form values
function showValues() {
	// Disable unfilled fields so they don't show up.
	$('#content-form').find(':input').filter(function(){return !this.value;}).prop('disabled', true);
    var fields = $(':input').serializeArray();
    $('#template').empty();
    jQuery.each(fields, function(i, field) {
		$('#template').append(field.value + '<br>');								
    });
	// Enable fields so things reset nicely
	$('#content-form').find(':input').prop('disabled', false);
}

// Disable and reset form
function hiddenDisable() {
	// Hide content-hidden template 
	$('#content-hidden').removeClass('visible').addClass('hidden');
	
	// Disable all inputs in hidden divs from the start	
	$('.form-hidden').fadeOut().find(':input').prop('disabled', true);
/*
	$('#hidden_1').find(':input').prop('disabled', true);
	$('#hidden_1').fadeOut();
	
	$('#hidden_2').find(':input').prop('disabled', true);
	$('#hidden_2').fadeOut();
	
	$('#hidden_3').find(':input').prop('disabled', true);
	$('#hidden_3').fadeOut(); 
	*/
}

/*
function formSubmit(){
	$.ajax({
        type: 'POST',
        url: 'form1_post.php',
        data: data,
        success: success,
        dataType: dataType
    });
}
*/
