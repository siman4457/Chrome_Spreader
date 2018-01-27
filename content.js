
//Initial Testing Code
chrome.tabs.query({'active': true}, function() {
  var x = document.getElementsByTagName("p");
	
	x[0].innerHTML = "Test";

});