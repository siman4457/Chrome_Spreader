
console.log("test");

chrome.browserAction.onClicked.addListener(function (activeTab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(null, {file: "content.js"});
	chrome.tabs.insertCSS(null, {file:"/styles.css", runAt: "document_start"});
});