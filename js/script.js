let startIndex = 0, index = 1;
const dataContainer = $("#dataContainer");

$(document).ready(function(){

	// on load call the data
	getdata();

	// on button click we will load the data
	$("#loadButton").on('click',function(e){
		getdata();
	});


	// purpose of function is to get the data from API
	function getdata(){
		$.ajax({
		    type: "GET",
		    url: "./fetch_data.php?startIndex="+startIndex,
		    success: function(response){
		    	dataContainer.empty();

		    	$('.note').html("Currently "+response.data.length+" people showing");
		    	const fragment = document.createDocumentFragment();

		    	response.data.forEach((item) => {

		    		// here we are creating a div UI to show the data
		      		const data_section = $('<div>').addClass('data-section');
		          	const number_container = $('<div>').addClass('number-container color-white').text(index);
		          	data_section.append(number_container);

		          	const data_container = $('<div>').addClass('data-container');
		          	const name_data = $('<div>').addClass('name-data').text('Name: ' + item.name);
		          	const location_data = $('<div>').addClass('location-data').text('Location: ' + item.location);

		          	data_container.append(name_data, location_data);
		          	data_section.append(data_container);
		          	fragment.appendChild(data_section[0]);

		      		index++;
		    	});
		    	dataContainer.append(fragment);
	           	startIndex += 3;
		    },
		    error: function(response){
		    	response = JSON.parse(response.responseText)
		    	alert(response.data);
		    }
	    })
	}
});