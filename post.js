	function postBlog() 
	{
		console.log('test');
		var input_title = document.getElementById('input_title').value;
		var input_first= document.getElementById('input_first').value;
		var input_middle=document.getElementById('input_middle').value;
		var input_last=document.getElementById('input_last').value;
		var input_content=document.getElementById('input_content').value;

		var date_today = new Date();
		document.getElementById('title').innerHTML = input_title;
		document.getElementById('fname').innerHTML = input_first;
		document.getElementById('mname').innerHTML = input_middle;
		document.getElementById('lname').innerHTML = input_last + 
		'<br>'+ date_today + ",";
		document.getElementById('content').innerHTML = input_content;	
	}
