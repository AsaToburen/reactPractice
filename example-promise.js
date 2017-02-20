

function getTempCallback(location, callback) {

	callback(undefined, 78);
	callback('City not found');
}

getTempCallback('Philadelphia', function(err, temp){
	if(err){
		console.log('err', err);
	} else {
		console.log('success', temp);
	}

});