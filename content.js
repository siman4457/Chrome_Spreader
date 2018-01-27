
//Initial Testing Code
chrome.tabs.query({'active': true}, function() {
  var x = document.getElementsByTagName("p");
	
	for (var i = 0, l = images.length; i < l; i++) {
		x[i].innerHTML = "yeah";
	}

});