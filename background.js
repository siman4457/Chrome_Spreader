
console.log("test");



chrome.browserAction.onClicked.addListener(function (activeTab) {

	// for the current tab, inject the "inject.js" file & execute it
if(sessionStorage["isRunning"]!=1) {
		chrome.tabs.executeScript(null, {file: "content.js"});
		chrome.tabs.insertCSS(null, {file:"/styles.css", runAt: "document_start"});
		sessionStorage["isRunning"] = 1;
}
else {
	var reloadScript = 'window.location.reload(true);';
	chrome.tabs.executeScript(null, {code: reloadScript});
	sessionStorage["isRunning"] = 0;
}



});
