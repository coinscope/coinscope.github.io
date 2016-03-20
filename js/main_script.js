jQuery(document).ready(function(){
	$("#offers ul li:nth-child(odd)").addClass("left");	
	$('.form form input[type="text"]').focus(function(){
		value_f=$(this).val();
		$(this).removeAttr('value');
	}).blur(function(){
		if($(this).val()==''){
		$(this).val(value_f)}
	});
	
});
