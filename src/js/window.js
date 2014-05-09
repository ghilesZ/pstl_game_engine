//Provides: clearAllIntervals
function clearAllIntervals(){
	var interval_id = window.setInterval("", 9999); // Get a reference to the last
	for (var i = 1; i < interval_id; i++){
		window.clearInterval(i);
	}
}
