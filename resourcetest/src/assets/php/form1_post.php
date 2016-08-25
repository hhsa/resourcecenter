<!--class:css id:javascript name:PHP action:PHP method:PHP value
	Do not include ID/name/action/method/value if not used. 
	As of 10/27/2015 they are only used on form pages and ID on intro for animation.js
	Class is for DIVS ONLY. p,a,nav,fieldset and any other specialty divs don't need defining. -->

<!DOCTYPE html>
<html>
<body>

<?php
	
	//$label = $_POST['label'];
	//$question = $_POST['question'];

	//foreach( $label as $key => $l ) {
		//$results= print_r($l, true);
	//}
	//file_put_contents('filename.txt', print_r($b, true), FILE_APPEND | LOCK_EX);
	
	$message = "wrong answer";
	echo "<script type='text/javascript'>alert('$message');</script>";

?>
</body>
</html>