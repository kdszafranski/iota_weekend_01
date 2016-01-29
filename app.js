$(document).ready(function() {
	var empArray = [];

	$('#employeeForm').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($('#employeeForm').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		$('#employeeForm').find('input[type=text]').val('');
		appendDom(values);
	});

	function appendDom(empInfo) {
		$('#container').append('<div></div>');
		var $el = $('#container').children().last();

		$el.append('<p>' + empInfo.empFirstName + '</p>');
		$el.append('<p>' + empInfo.empLastName + '</p>');
	}



});